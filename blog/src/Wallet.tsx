import { useState } from 'react';
import Web3 from 'web3';
import { Web3Account } from 'web3-eth-accounts';
import './Wallet.css';

// Infura Sepolia 노드
const web3 = new Web3('https://sepolia.infura.io/v3/7a2f1e9b214448069fe349701c066903');

function Wallet() {
    const [privateKey, setPrivateKey] = useState('');
    const [wallet, setWallet] = useState<Web3Account | null>(null);
    const [balance, setBalance] = useState<string | null>(null);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [txHash, setTxHash] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false); // 트랜잭션 로딩 상태 추가
    const [copiedField, setCopiedField] = useState<string | null>(null); // 복사된 항목 저장
    const [generatedWallet, setGeneratedWallet] = useState<{ address: string; privateKey: string } | null>(null); // 지갑 추가 상태 추가
    const [isSending, setIsSending] = useState(false); // 전송 중 상태
    const [isPrivateKeyVisible, setIsPrivateKeyVisible] = useState(false);

    // 프라이빗 키로 지갑 가져오기
    const importWallet = () => {
        try {
            // "0x"가 중복되지 않도록 처리
            const formattedPrivateKey = privateKey.trim().replace(/^0x/, '');
            const importedWallet = web3.eth.accounts.privateKeyToAccount(`0x${formattedPrivateKey}`);

            setWallet(importedWallet);
            getBalance(importedWallet.address);
        } catch (error) {
            console.error('Invalid Private Key:', error);
            alert('잘못된 프라이빗 키입니다.');
        }
    };


    // 새로운 지갑 생성 (Bob)
    const createWallet = () => {
        const newWallet = web3.eth.accounts.create();
        setGeneratedWallet({ address: newWallet.address, privateKey: newWallet.privateKey });
    };

    // Faucet 버튼: Alice → Bob에게 0.01 ETH 송금
    const sendFaucet = async () => {
        if (!generatedWallet) {
            alert("먼저 새 지갑을 생성해주세요!");
            return;
        }

        setIsSending(true); // 로딩 상태 활성화

        try {
            const value = web3.utils.toWei("0.01", "ether"); // 0.01 ETH
            const gasPrice = await web3.eth.getGasPrice(); // 최신 가스 가격 조회

            const tx = {
                from: process.env.REACT_APP_TestEther_Address,
                to: generatedWallet.address,
                value: value,
                gas: 21000, // 기본 가스 한도
                gasPrice,
            };

            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.REACT_APP_TestEther_PrivateKey as string);
            const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction!);

            setTxHash(sentTx.transactionHash.toString()); // 트랜잭션 해시 저장

            // 트랜잭션이 성공하면 잔액 갱신
            getBalance(generatedWallet.address); // 새로 갱신된 잔액을 가져와서 상태에 업데이트

        } catch (error) {
            console.error("Faucet Transaction Failed:", error);
            alert("트랜잭션 실패! Alice 계정의 잔액을 확인하세요.");
        } finally {
            setIsSending(false); // 로딩 상태 해제
        }
    };

    // 잔액 조회
    const getBalance = async (address: string) => {
        const balanceWei = await web3.eth.getBalance(address);
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        setBalance(balanceEth);
    };

    // 트랜잭션 전송
    const sendTransaction = async () => {
        if (!wallet || !recipient || !amount) return;

        setIsLoading(true); // 로딩 상태 활성화

        try {
            const value = web3.utils.toWei(amount, 'ether');
            const gasPrice = await web3.eth.getGasPrice();

            const tx = {
                from: wallet.address,
                to: recipient,
                value,
                gas: 21000,
                gasPrice,
            };

            const signedTx = await web3.eth.accounts.signTransaction(tx, wallet.privateKey);
            const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

            setTxHash(sentTx.transactionHash.toString());
            getBalance(wallet.address);
        } catch (error) {
            console.error('Transaction Failed:', error);
        } finally {
            setIsLoading(false); // 트랜잭션 완료 후 로딩 상태 비활성화
        }
    };

    // 복사 함수 (주소 또는 개인 키)
    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);

        // 2초 후 "복사됨" 상태 초기화
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <div className="App">
            {/* Sepolia TestNetwork 표시 */}
            <div className="network-label">Ethereum Sepolia</div>

            <h2>💰 블록체인 지갑</h2>

            {/* 프라이빗 키 입력 필드 */}
            <input
                type="text"
                placeholder="프라이빗 키 입력"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
            />
            <button onClick={importWallet}>지갑 불러오기</button>

            {/* 새로운 지갑 생성 */}
            <button onClick={createWallet}>새 지갑 생성</button>


            {generatedWallet && (
                <div className="wallet-info">
                    <p>
                        <strong>새 지갑 주소: </strong>
                        <span
                            className="copy-address"
                            onClick={() => copyToClipboard(generatedWallet.address, 'address')}
                        >
                            {generatedWallet.address}
                        </span>
                        {copiedField === 'address' && <span className="copied">✔ 복사됨!</span>}
                    </p>
                    <p>
                        <strong>개인 키: </strong>
                        <input
                            type={isPrivateKeyVisible ? 'text' : 'password'}
                            value={generatedWallet.privateKey}
                            readOnly
                            style={{
                                border: '1px solid gray',
                                background: 'white',
                                width: '220px',
                                padding: '5px',
                            }}
                        />
                    </p>
                    <button onClick={() => setIsPrivateKeyVisible(!isPrivateKeyVisible)}>
                        {isPrivateKeyVisible ? '🙈 감추기' : '👀 보기'}
                    </button>
                    <button onClick={() => copyToClipboard(generatedWallet.privateKey, 'privateKey')}>
                        📋 복사하기
                    </button>
                    {copiedField === 'privateKey' && <span className="copied_privatekey">✔ 복사됨!</span>}
                </div>
            )}


            {/* Faucet 버튼 */}
            <button onClick={sendFaucet} disabled={isSending}>
                {isSending ? "전송 중..." : "🚰 Faucet (0.01 ETH)"}
            </button>

            {wallet && (
                <div className="wallet-info">
                    <p>
                        <strong>주소:</strong>{' '}
                        <span
                            className="copy-address"
                            onClick={() => copyToClipboard(wallet.address, 'wallet_address')}
                            style={{ cursor: 'pointer', color: copiedField === 'wallet_address' ? 'green' : 'blue', textDecoration: 'underline' }}
                        >
                            {wallet.address}
                        </span>
                        {copiedField === 'wallet_address' && <span style={{ marginLeft: '10px', color: 'green' }}>✔ 복사됨!</span>}
                    </p>
                    <p>
                        <strong>잔액:</strong> {Math.round(Number(balance) * 1000) / 1000} ETH
                    </p>

                    <h3>💸 송금</h3>
                    <input
                        type="text"
                        placeholder="받는 주소"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="보낼 금액 (ETH)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button onClick={sendTransaction} disabled={isLoading}>
                        {isLoading ? '거래 처리 중...' : '송금'}
                    </button>

                    {txHash && (
                        <p>
                            🖋️ <strong>트랜잭션 해시:</strong>{' '}
                            <div className='underline'>
                                <a
                                    href={`https://sepolia.etherscan.io/tx/${txHash}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {txHash}
                                </a>
                            </div>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Wallet;
