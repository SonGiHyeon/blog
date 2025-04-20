import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Connection } from '@solana/web3.js';
import './Wallet.css';

const ethereum_web3 = new Web3('https://mainnet.infura.io/v3/7a2f1e9b214448069fe349701c066903');
const sepolia_web3 = new Web3('https://sepolia.infura.io/v3/7a2f1e9b214448069fe349701c066903');

Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Ethereum Network Dashboard
function EthereumExplorer() {
    const [latestMainnetBlock, setLatestMainnetBlock] = useState<number | null>(null);
    const [mainnetChart, setMainnetChart] = useState<number[]>([]);

    const [mainnetSearchInput, setMainnetSearchInput] = useState<string>('');
    const [mainnetSearchResult, setMainnetSearchResult] = useState<any>(null);
    const [mainnetIsLoading, setMainnetIsLoading] = useState(false);
    const [mainnetError, setMainnetError] = useState<string | null>(null);

    useEffect(() => {
        fetchLatestBlocks();
    }, []);

    const fetchLatestBlocks = async () => {
        try {
            const mainnetBlockNum = Number(await ethereum_web3.eth.getBlockNumber());
            setLatestMainnetBlock(mainnetBlockNum);

            const mainnetBlocks = [];

            for (let i = 0; i < 10; i++) {
                const mainnetBlockData = await ethereum_web3.eth.getBlock(mainnetBlockNum - (9 - i));
                mainnetBlocks.push(mainnetBlockData ? mainnetBlockData.transactions.length : 0);
            }

            setMainnetChart(mainnetBlocks);
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
        </div>
    );
}

// Sepolia Testnet Dashboard
function SepoliaExplorer() {
    const [latestSepoliaBlock, setLatestSepoliaBlock] = useState<number | null>(null);
    const [sepoliaChart, setSepoliaChart] = useState<number[]>([]);

    const [sepoliaSearchInput, setSepoliaSearchInput] = useState<string>('');
    const [sepoliaSearchResult, setSepoliaSearchResult] = useState<any>(null);
    const [sepoliaIsLoading, setSepoliaIsLoading] = useState(false);
    const [sepoliaError, setSepoliaError] = useState<string | null>(null);

    useEffect(() => {
        fetchLatestBlocks();
    }, []);

    const fetchLatestBlocks = async () => {
        try {
            const sepoliaBlockNum = Number(await sepolia_web3.eth.getBlockNumber());
            setLatestSepoliaBlock(sepoliaBlockNum);

            const sepoliaBlocks = [];

            for (let i = 0; i < 10; i++) {
                const sepoliaBlockData = await sepolia_web3.eth.getBlock(sepoliaBlockNum - (9 - i));
                sepoliaBlocks.push(sepoliaBlockData ? sepoliaBlockData.transactions.length : 0);
            }
            setSepoliaChart(sepoliaBlocks);
        } catch (err) {
            console.error('블록 데이터를 불러오는 중 오류 발생:', err);
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
        <div className="search-box">
            <br />
            <div className="App">
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
    )
}

// Solana Network 대시보드
const connection = new Connection('https://broken-dimensional-choice.solana-mainnet.quiknode.pro/5ae79302c5a0faca5e1872cad9a0adf6c12f31ff/');

Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function SolanaExplorer() {
    const [inputValue, setInputValue] = useState('');
    const [transaction, setTransaction] = useState<null | any>(null);
    const [block, setBlock] = useState<null | any>(null);
    const [error, setError] = useState<string | null>(null);
    const [blockData, setBlockData] = useState<any[]>([]);
    const [latestSlot, setLatestSlot] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchLatestSlot();
    }, []);

    const fetchLatestSlot = async () => {
        try {
            const latestSlot = await connection.getSlot();
            setLatestSlot(latestSlot);
            fetchBlockData(latestSlot);
        } catch (err) {
            setError('슬롯 정보를 불러오는 중 오류가 발생했습니다.');
            console.error(err);
        }
    };

    const fetchBlockData = async (slot: number) => {
        try {
            const blockCounts: number[] = [];
            for (let i = 0; i < 10; i++) {
                const currentSlot = slot - i;
                const block = await connection.getBlock(currentSlot, { maxSupportedTransactionVersion: 0 });
                const transactionsCount = block ? block.transactions.length : 0;
                blockCounts.push(transactionsCount);
            }

            setBlockData(blockCounts);
        } catch (err) {
            setError('블록 정보를 가져오는 중 오류가 발생했습니다.');
            console.error(err);
        }
    };

    const fetchData = async () => {
        try {
            setTransaction(null);
            setBlock(null);
            setError(null);
            setIsLoading(true);

            if (inputValue.length === 44) {
                // 트랜잭션 해시 검색
                const tx = await connection.getTransaction(inputValue, { maxSupportedTransactionVersion: 0 });
                if (tx) {
                    setTransaction(tx);
                } else {
                    setError('트랜잭션을 찾을 수 없습니다.');
                }
            } else if (!isNaN(Number(inputValue)) && Number(inputValue) >= 0) {
                // 슬롯 검색
                const blockData = await connection.getBlock(Number(inputValue), { maxSupportedTransactionVersion: 0 });
                if (blockData) {
                    setBlock(blockData);
                } else {
                    setError('슬롯을 찾을 수 없습니다.');
                }
            } else {
                setError('올바른 트랜잭션 해시 또는 슬롯 번호를 입력하세요.');
            }
        } catch (err) {
            setError('데이터를 불러오는 중 오류가 발생했습니다.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="App">
            <h2>🔎 Solana 대시보드</h2>

            <div className="search-box">
                <h3>🔍 트랜잭션 또는 슬롯 조회</h3>
                <input
                    type="text"
                    placeholder="슬롯 번호 또는 트랜잭션 해시 입력"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={fetchData}>검색</button>
                {isLoading && <p>⏳ 검색 중...</p>}

                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* 트랜잭션 정보 */}
                {transaction && (
                    <div>
                        <h3>🔷 트랜잭션 정보</h3>
                        <ul>
                            <li><strong>슬롯:</strong> {transaction.slot}</li>
                            <li><strong>블록타임:</strong> {transaction.blockTime ? new Date(transaction.blockTime * 1000).toLocaleString() : 'N/A'}</li>
                            <li><strong>서명:</strong> {transaction.transaction.signatures[0]}</li>
                            <li><strong>수수료:</strong> {transaction.meta?.fee ? transaction.meta.fee.toLocaleString() + ' lamports' : 'N/A'}</li>
                            <li><strong>성공 여부:</strong> {transaction.meta?.err ? '실패' : '성공'}</li>

                            {/* From, To, Balance 정보 추가 */}
                            {transaction.transaction.message.accountKeys.length >= 2 && (
                                <>
                                    <li><strong>From:</strong> {transaction.transaction.message.accountKeys[0].toString()}</li>
                                    <li><strong>To:</strong> {transaction.transaction.message.accountKeys[1].toString()}</li>
                                </>
                            )}
                            {transaction.meta?.postBalances && transaction.meta?.preBalances && (
                                <li>
                                    <strong>잔액 변화:</strong> {((transaction.meta.postBalances[0] - transaction.meta.preBalances[0]) / 1e9).toFixed(9)} SOL
                                </li>
                            )}
                        </ul>
                    </div>
                )}

                {/* 슬롯 정보 */}
                {block && (
                    <div>
                        <h3>📦 슬롯 정보</h3>
                        <ul>
                            <p><strong>슬롯 번호:</strong> {block.parentSlot + 1}</p>
                            <p><strong>트랜잭션 개수:</strong> {block.transactions.length}</p>
                            <p><strong>리더:</strong> {block.blockhash}</p>
                        </ul>
                    </div>
                )}
            </div>

            <div className="block-info">
                <h3>📦 최신 슬롯 정보</h3>
                <p><strong>최신 슬롯:</strong> {latestSlot}</p>
            </div>

            <div className="charts">
                <h3>📊 Solana 최신 10개 슬롯 트랜잭션 개수</h3>
                <Bar
                    data={{
                        labels: latestSlot !== null
                            ? Array.from({ length: 10 }, (_, index) => `Slot ${latestSlot - (9 - index)}`)
                            : [],
                        datasets: [
                            {
                                label: '트랜잭션 개수',
                                data: blockData.reverse(),
                                backgroundColor: '#36A2EB',
                                borderColor: '#36A2EB',
                                borderWidth: 1,
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            x: {
                                reverse: false,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

// Main App Component
function App() {
    const [selectedDashboard, setSelectedDashboard] = useState<string>('ethereum');

    const renderDashboard = () => {
        switch (selectedDashboard) {
            case 'ethereum':
                return <EthereumExplorer />;
            case 'sepolia':
                return <SepoliaExplorer />;
            case 'solana':
                return <SolanaExplorer />;
            default:
                return null;
        }
    };

    return (
        <div className="layout">
            {/* 상단 네비게이션 바 */}

            {/* 메인 콘텐츠 (사이드바 + 대시보드) */}
            <div className="main-content">
                <Sidebar onSelect={setSelectedDashboard} />
                <div className="content">
                    {renderDashboard()}
                </div>
            </div>
        </div>
    );
}


// Sidebar Component
function Sidebar({ onSelect }: { onSelect: (dashboard: string) => void }) {
    return (
        <div className="sidebar">
            <button onClick={() => onSelect('ethereum')}>Ethereum Mainnet</button>
            <button onClick={() => onSelect('sepolia')}>Sepolia Testnet</button>
            <button onClick={() => onSelect('solana')}>Solana Network</button>
        </div>
    );
}

export default App;
