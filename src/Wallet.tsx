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

    // 프라이빗 키로 지갑 가져오기
    const importWallet = () => {
        try {
            const formattedPrivateKey = privateKey.startsWith('0x') ? privateKey : `0x${privateKey}`;
            const importedWallet = web3.eth.accounts.privateKeyToAccount(formattedPrivateKey);
            setWallet(importedWallet);
            getBalance(importedWallet.address);
        } catch (error) {
            console.error('Invalid Private Key:', error);
            alert('잘못된 프라이빗 키입니다.');
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

            {wallet && (
                <div className="wallet-info">
                    <p className="address-private-section">
                        <strong>주소:</strong> {wallet.address}
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
