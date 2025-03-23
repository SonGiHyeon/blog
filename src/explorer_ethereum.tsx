import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './Wallet.css';

const ethereum_web3 = new Web3('https://mainnet.infura.io/v3/7a2f1e9b214448069fe349701c066903');
const sepolia_web3 = new Web3('https://sepolia.infura.io/v3/7a2f1e9b214448069fe349701c066903');

Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function EthereumExplorer() {
    const [latestMainnetBlock, setLatestMainnetBlock] = useState<number | null>(null);
    const [latestSepoliaBlock, setLatestSepoliaBlock] = useState<number | null>(null);
    const [mainnetChart, setMainnetChart] = useState<number[]>([]);
    const [sepoliaChart, setSepoliaChart] = useState<number[]>([]);

    const [mainnetSearchInput, setMainnetSearchInput] = useState<string>('');
    const [mainnetSearchResult, setMainnetSearchResult] = useState<any>(null);
    const [mainnetIsLoading, setMainnetIsLoading] = useState(false);
    const [mainnetError, setMainnetError] = useState<string | null>(null);

    const [sepoliaSearchInput, setSepoliaSearchInput] = useState<string>('');
    const [sepoliaSearchResult, setSepoliaSearchResult] = useState<any>(null);
    const [sepoliaIsLoading, setSepoliaIsLoading] = useState(false);
    const [sepoliaError, setSepoliaError] = useState<string | null>(null);

    useEffect(() => {
        fetchLatestBlocks();
    }, []);

    const fetchLatestBlocks = async () => {
        try {
            const mainnetBlockNum = Number(await ethereum_web3.eth.getBlockNumber());
            const sepoliaBlockNum = Number(await sepolia_web3.eth.getBlockNumber());
            setLatestMainnetBlock(mainnetBlockNum);
            setLatestSepoliaBlock(sepoliaBlockNum);

            const mainnetBlocks = [];
            const sepoliaBlocks = [];

            for (let i = 0; i < 10; i++) {
                const mainnetBlockData = await ethereum_web3.eth.getBlock(mainnetBlockNum - (9 - i));
                mainnetBlocks.push(mainnetBlockData ? mainnetBlockData.transactions.length : 0);

                const sepoliaBlockData = await sepolia_web3.eth.getBlock(sepoliaBlockNum - (9 - i));
                sepoliaBlocks.push(sepoliaBlockData ? sepoliaBlockData.transactions.length : 0);
            }

            setMainnetChart(mainnetBlocks);
            setSepoliaChart(sepoliaBlocks);
        } catch (err) {
            console.error('블록 데이터를 불러오는 중 오류 발생:', err);
        }
    };

    const handleMainnetSearch = async () => {
        if (!mainnetSearchInput.trim()) return;
        setMainnetIsLoading(true);
        setMainnetError(null);
        setMainnetSearchResult(null);

        try {
            if (/^\d+$/.test(mainnetSearchInput)) {
                const mainnetBlock = await ethereum_web3.eth.getBlock(Number(mainnetSearchInput));
                if (!mainnetBlock) {
                    setMainnetError('❌ 해당 블록을 찾을 수 없습니다.');
                    return;
                }
                setMainnetSearchResult({ type: 'block', mainnetData: mainnetBlock });
            } else if (/^0x[a-fA-F0-9]{64}$/.test(mainnetSearchInput)) {
                const mainnetTx = await ethereum_web3.eth.getTransaction(mainnetSearchInput);
                const mainnetReceipt = await ethereum_web3.eth.getTransactionReceipt(mainnetSearchInput);

                if (!mainnetTx) {
                    setMainnetError('❌ 트랜잭션 정보를 찾을 수 없습니다.');
                    return;
                }

                setMainnetSearchResult({
                    type: 'transaction',
                    mainnetData: { tx: mainnetTx, receipt: mainnetReceipt }
                });
            } else {
                setMainnetError('잘못된 입력입니다. 블록 번호 또는 트랜잭션 해시를 입력하세요.');
            }
        } catch (err) {
            setMainnetError('검색 중 오류가 발생했습니다. 올바른 정보를 입력했는지 확인하세요.');
            console.error(err);
        } finally {
            setMainnetIsLoading(false);
        }
    };

    const handleSepoliaSearch = async () => {
        if (!sepoliaSearchInput.trim()) return;
        setSepoliaIsLoading(true);
        setSepoliaError(null);
        setSepoliaSearchResult(null);

        try {
            if (/^\d+$/.test(sepoliaSearchInput)) {
                const sepoliaBlock = await sepolia_web3.eth.getBlock(Number(sepoliaSearchInput));
                if (!sepoliaBlock) {
                    setSepoliaError('❌ 해당 블록을 찾을 수 없습니다.');
                    return;
                }
                setSepoliaSearchResult({ type: 'block', sepoliaData: sepoliaBlock });
            } else if (/^0x[a-fA-F0-9]{64}$/.test(sepoliaSearchInput)) {
                const sepoliaTx = await sepolia_web3.eth.getTransaction(sepoliaSearchInput);
                const sepoliaReceipt = await sepolia_web3.eth.getTransactionReceipt(sepoliaSearchInput);

                if (!sepoliaTx) {
                    setSepoliaError('❌ 트랜잭션 정보를 찾을 수 없습니다.');
                    return;
                }

                setSepoliaSearchResult({
                    type: 'transaction',
                    sepoliaData: { tx: sepoliaTx, receipt: sepoliaReceipt }
                });
            } else {
                setSepoliaError('잘못된 입력입니다. 블록 번호 또는 트랜잭션 해시를 입력하세요.');
            }
        } catch (err) {
            setSepoliaError('검색 중 오류가 발생했습니다. 올바른 정보를 입력했는지 확인하세요.');
            console.error(err);
        } finally {
            setSepoliaIsLoading(false);
        }
    };

    return (
        <div className="App">
            <h2>🔎 Ethereum Mainnet 대시보드</h2>

            <div className="search-box">
                <h3>🔍 검색</h3>
                <input
                    type="text"
                    placeholder="블록 번호 또는 트랜잭션 해시 입력"
                    value={mainnetSearchInput}
                    onChange={(e) => setMainnetSearchInput(e.target.value)}
                />
                <button onClick={handleMainnetSearch}>검색</button>
                {mainnetIsLoading && <p>⏳ 검색 중...</p>}
                {mainnetError && <p style={{ color: 'red' }}>{mainnetError}</p>}
                {mainnetSearchResult && mainnetSearchResult.type === 'transaction' && (
                    <div>
                        <h3>🔷 트랜잭션 정보</h3>
                        <p><strong>트랜잭션 해시:</strong> {mainnetSearchResult.mainnetData.tx.hash}</p>
                        <p><strong>보낸 주소:</strong> {mainnetSearchResult.mainnetData.tx.from}</p>
                        <p><strong>받는 주소:</strong> {mainnetSearchResult.mainnetData.tx.to}</p>
                        <p><strong>금액:</strong> {Web3.utils.fromWei(mainnetSearchResult.mainnetData.tx.value, 'ether')} ETH</p>
                    </div>
                )}
                {mainnetSearchResult && mainnetSearchResult.type === 'block' && (
                    <div>
                        <h3>🔷 블록 정보</h3>
                        <p><strong>블록 번호:</strong> {mainnetSearchResult.mainnetData.number}</p>
                        <p><strong>채굴자:</strong> {mainnetSearchResult.mainnetData.miner}</p>
                        <p><strong>트랜잭션 개수:</strong> {mainnetSearchResult.mainnetData.transactions.length}</p>
                    </div>
                )}
                <div className="block-info">
                    <h3>📦 최신 블록 정보</h3>
                    <p><strong>최신 블록:</strong> {latestMainnetBlock}</p>
                </div>
                <div className="charts">
                    <h3>📊 Mainnet 최신 10개 블록 트랜잭션 개수</h3>
                    <Bar data={{
                        labels: latestMainnetBlock ? Array.from({ length: 10 }, (_, index) => `Block ${latestMainnetBlock - (9 - index)}`) : [],
                        datasets: [{ label: 'Mainnet 트랜잭션 개수', data: mainnetChart, backgroundColor: '#36A2EB' }]
                    }} />
                </div>
            </div>

            <div className="search-box">
                <br />
                <h2>🔎 Sepolia Testnet 대시보드</h2>
                <h3>🔍 검색</h3>
                <input
                    type="text"
                    placeholder="블록 번호 또는 트랜잭션 해시 입력"
                    value={sepoliaSearchInput}
                    onChange={(e) => setSepoliaSearchInput(e.target.value)}
                />
                <button onClick={handleSepoliaSearch}>검색</button>
                {sepoliaIsLoading && <p>⏳ 검색 중...</p>}
                {sepoliaError && <p style={{ color: 'red' }}>{sepoliaError}</p>}
                {sepoliaSearchResult && sepoliaSearchResult.type === 'transaction' && (
                    <div>
                        <h3>🔷 트랜잭션 정보</h3>
                        <p><strong>트랜잭션 해시:</strong> {sepoliaSearchResult.sepoliaData.tx.hash}</p>
                        <p><strong>보낸 주소:</strong> {sepoliaSearchResult.sepoliaData.tx.from}</p>
                        <p><strong>받는 주소:</strong> {sepoliaSearchResult.sepoliaData.tx.to}</p>
                        <p><strong>금액:</strong> {Web3.utils.fromWei(sepoliaSearchResult.sepoliaData.tx.value, 'ether')} ETH</p>
                    </div>
                )}
                {sepoliaSearchResult && sepoliaSearchResult.type === 'block' && (
                    <div>
                        <h3>🔷 블록 정보</h3>
                        <p><strong>블록 번호:</strong> {sepoliaSearchResult.sepoliaData.number}</p>
                        <p><strong>채굴자:</strong> {sepoliaSearchResult.sepoliaData.miner}</p>
                        <p><strong>트랜잭션 개수:</strong> {sepoliaSearchResult.sepoliaData.transactions.length}</p>
                    </div>
                )}
                <div className="block-info">
                    <h3>📦 최신 블록 정보</h3>
                    <p><strong>최신 블록:</strong> {latestSepoliaBlock}</p>
                </div>
                <div className="charts">
                    <h3>📊 Sepolia 최신 10개 블록 트랜잭션 개수</h3>
                    <Bar data={{
                        labels: latestSepoliaBlock ? Array.from({ length: 10 }, (_, index) => `Block ${latestSepoliaBlock - (9 - index)}`) : [],
                        datasets: [{ label: 'Sepolia 트랜잭션 개수', data: sepoliaChart, backgroundColor: '#FF5733' }]
                    }} />
                </div>
            </div>
        </div>
    );
}

export default EthereumExplorer;