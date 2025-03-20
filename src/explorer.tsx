// Ethereum & Sepolia Testnet 대시보드

import { useState, useEffect } from 'react'; // React에서 상태와 사이드 이펙트를 관리하기 위해 필요한 hook import
import Web3 from 'web3'; // Web3.js 라이브러리 import (이더리움과 상호작용하기 위한 라이브러리)
import { Bar } from 'react-chartjs-2'; // Bar chart를 만들기 위한 react-chartjs-2 컴포넌트 import
import { Chart } from 'chart.js'; // chart.js 라이브러리 import
import { ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'; // chart.js에서 필요한 요소들 import
import './Wallet.css'; // 스타일시트 import
import { Connection } from '@solana/web3.js'; // Solana web3.js

// Web3 인스턴스 생성: Ethereum mainnet과 Sepolia testnet에 연결
const ethereum_web3 = new Web3('https://mainnet.infura.io/v3/7a2f1e9b214448069fe349701c066903');
const sepolia_web3 = new Web3('https://sepolia.infura.io/v3/7a2f1e9b214448069fe349701c066903');

// Chart.js 컴포넌트 등록 (차트를 그릴 때 필요한 요소들)
Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function EthereumExplorer() {
    // 상태 정의: 메인넷과 세폴리아의 최신 블록 및 트랜잭션 데이터 저장
    const [latestMainnetBlock, setLatestMainnetBlock] = useState<number | null>(null);
    const [latestSepoliaBlock, setLatestSepoliaBlock] = useState<number | null>(null);
    const [mainnetChart, setMainnetChart] = useState<number[]>([]);
    const [sepoliaChart, setSepoliaChart] = useState<number[]>([]);

    // 검색 관련 상태: 메인넷 및 세폴리아 검색창의 입력값, 로딩 상태, 에러 메시지, 검색 결과 등
    const [mainnetSearchInput, setMainnetSearchInput] = useState<string>('');
    const [mainnetSearchResult, setMainnetSearchResult] = useState<any>(null);
    const [mainnetIsLoading, setMainnetIsLoading] = useState(false);
    const [mainnetError, setMainnetError] = useState<string | null>(null);

    const [sepoliaSearchInput, setSepoliaSearchInput] = useState<string>('');
    const [sepoliaSearchResult, setSepoliaSearchResult] = useState<any>(null);
    const [sepoliaIsLoading, setSepoliaIsLoading] = useState(false);
    const [sepoliaError, setSepoliaError] = useState<string | null>(null);

    // 컴포넌트가 처음 렌더링될 때 최신 블록 정보를 가져오기 위해 useEffect 사용
    useEffect(() => {
        fetchLatestBlocks(); // 최신 블록 정보를 가져오는 함수 호출
    }, []); // 빈 배열을 넣어 처음 한 번만 실행되게 설정

    // 최신 블록 정보와 트랜잭션 수를 가져오는 함수
    const fetchLatestBlocks = async () => {
        try {
            // 메인넷과 세폴리아의 최신 블록 번호 가져오기
            const mainnetBlockNum = Number(await ethereum_web3.eth.getBlockNumber());
            const sepoliaBlockNum = Number(await sepolia_web3.eth.getBlockNumber());
            setLatestMainnetBlock(mainnetBlockNum);
            setLatestSepoliaBlock(sepoliaBlockNum);

            // 차트 데이터용 블록 정보 배열 초기화
            const mainnetBlocks = [];
            const sepoliaBlocks = [];

            // 최신 10개의 블록 데이터를 가져와 트랜잭션 수를 차트 데이터로 저장
            for (let i = 0; i < 10; i++) {
                const mainnetBlockData = await ethereum_web3.eth.getBlock(mainnetBlockNum - (9 - i));
                if (mainnetBlockData) {
                    mainnetBlocks.push(mainnetBlockData.transactions.length); // 트랜잭션 수 저장
                } else {
                    console.error(`Mainnet block not found at index ${i}`);
                    mainnetBlocks.push(0); // 트랜잭션이 없을 경우 0으로 설정
                }

                const sepoliaBlockData = await sepolia_web3.eth.getBlock(sepoliaBlockNum - (9 - i));
                if (sepoliaBlockData) {
                    sepoliaBlocks.push(sepoliaBlockData.transactions.length); // 트랜잭션 수 저장
                } else {
                    console.error(`Sepolia block not found at index ${i}`);
                    sepoliaBlocks.push(0); // 트랜잭션이 없을 경우 0으로 설정
                }
            }

            // 차트에 사용할 데이터 설정
            setMainnetChart(mainnetBlocks);
            setSepoliaChart(sepoliaBlocks);
        } catch (err) {
            console.error('블록 데이터를 불러오는 중 오류 발생:', err);
        }
    };

    // 메인넷 검색 함수: 블록 번호 또는 트랜잭션 해시를 입력받아 검색
    const handleMainnetSearch = async () => {
        if (!mainnetSearchInput.trim()) return; // 빈 입력값일 경우 검색하지 않음
        setMainnetIsLoading(true); // 로딩 상태 설정
        setMainnetError(null); // 에러 메시지 초기화
        setMainnetSearchResult(null); // 검색 결과 초기화

        try {
            if (/^\d+$/.test(mainnetSearchInput)) {
                // 📦 블록 번호 검색 (숫자일 경우)
                const mainnetBlock = await ethereum_web3.eth.getBlock(Number(mainnetSearchInput));

                if (!mainnetBlock) {
                    setMainnetError('❌ 해당 블록을 찾을 수 없습니다.');
                    return;
                }

                setMainnetSearchResult({
                    type: 'block',
                    mainnetData: mainnetBlock
                });
            } else if (/^0x[a-fA-F0-9]{64}$/.test(mainnetSearchInput)) {
                // 🔗 트랜잭션 해시 검색
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
            setMainnetIsLoading(false); // 로딩 종료
        }
    };

    // Sepolia 검색 함수: 메인넷 검색과 동일한 방식으로 작동
    const handleSepoliaSearch = async () => {
        if (!sepoliaSearchInput.trim()) return; // 빈 입력값일 경우 검색하지 않음
        setSepoliaIsLoading(true); // 로딩 상태 설정
        setSepoliaError(null); // 에러 메시지 초기화
        setSepoliaSearchResult(null); // 검색 결과 초기화

        try {
            if (/^\d+$/.test(sepoliaSearchInput)) {
                // 📦 블록 번호 검색 (숫자일 경우)
                const sepoliaBlock = await sepolia_web3.eth.getBlock(Number(sepoliaSearchInput));

                if (!sepoliaBlock) {
                    setSepoliaError('❌ 해당 블록을 찾을 수 없습니다.');
                    return;
                }

                setSepoliaSearchResult({
                    type: 'block',
                    sepoliaData: sepoliaBlock
                });
            } else if (/^0x[a-fA-F0-9]{64}$/.test(sepoliaSearchInput)) {
                // 🔗 트랜잭션 해시 검색
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
            setSepoliaIsLoading(false); // 로딩 종료
        }
    };

    return (
        <div className="App">
            <h2>🔎 Ethereum Mainnet 대시보드</h2>

            {/* 메인넷 검색창 */}
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
                {mainnetSearchResult && (
                    <div>
                        <h3>🔷 블록 정보</h3>
                        <p><strong>블록 번호:</strong> {mainnetSearchResult.mainnetData.number}</p>
                        <p><strong>채굴자:</strong> {mainnetSearchResult.mainnetData.miner}</p>
                        <p><strong>트랜잭션 개수:</strong> {mainnetSearchResult.mainnetData.transactions.length}</p>
                    </div>
                )}
                <div className="block-info">
                    <div>
                        <h3>📦 최신 블록 정보</h3>
                        <p><strong>최신 블록:</strong> {latestMainnetBlock}</p>
                    </div>
                </div>
                <div className="charts">
                    <div>
                        <h3>📊 Mainnet 최신 10개 블록 트랜잭션 개수</h3>
                        <Bar data={{
                            labels: latestMainnetBlock ? Array.from({ length: 10 }, (_, index) => `Block ${latestMainnetBlock - (9 - index)}`) : [],
                            datasets: [{ label: 'Mainnet 트랜잭션 개수', data: mainnetChart, backgroundColor: '#36A2EB' }]
                        }} />
                    </div>
                </div>
            </div>

            {/* Sepolia 검색창 */}
            <div className="search-box">
                <br></br>
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
                {sepoliaSearchResult && (
                    <div>
                        <h3>🔷 블록 정보</h3>
                        <p><strong>블록 번호:</strong> {sepoliaSearchResult.sepoliaData.number}</p>
                        <p><strong>채굴자:</strong> {sepoliaSearchResult.sepoliaData.miner}</p>
                        <p><strong>트랜잭션 개수:</strong> {sepoliaSearchResult.sepoliaData.transactions.length}</p>
                    </div>
                )}
                <div className="block-info">
                    <div>
                        <h3>📦 최신 블록 정보</h3>
                        <p><strong>최신 블록:</strong> {latestSepoliaBlock}</p>
                    </div>
                </div>
                <div className="charts">
                    <div>
                        <h3>📊 Sepolia 최신 10개 블록 트랜잭션 개수</h3>
                        <Bar data={{
                            labels: latestSepoliaBlock ? Array.from({ length: 10 }, (_, index) => `Block ${latestSepoliaBlock - (9 - index)}`) : [],
                            datasets: [{ label: 'Sepolia 트랜잭션 개수', data: sepoliaChart, backgroundColor: '#FF5733' }]
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
}



// Solana 대시보드

const connection = new Connection('https://broken-dimensional-choice.solana-mainnet.quiknode.pro/5ae79302c5a0faca5e1872cad9a0adf6c12f31ff/');

Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function Explorer() {
    const [inputValue, setInputValue] = useState('');
    const [transaction, setTransaction] = useState<null | any>(null);
    const [block, setBlock] = useState<null | any>(null);
    const [error, setError] = useState<string | null>(null);
    const [blockData, setBlockData] = useState<any[]>([]);
    const [latestSlot, setLatestSlot] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

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
            setIsLoading(true); // 검색 시작 시 로딩 상태 활성화

            if (inputValue.length === 44) {
                // 트랜잭션 검색
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
            setIsLoading(false); // 검색 완료 후 로딩 상태 비활성화
        }
    };

    return (
        <div className="App">
            <h2>🔎 Solana 대시보드</h2>

            <div className="search-box">
                <h3>🔍 슬롯 조회</h3>
                <input
                    type="text"
                    placeholder="슬롯 번호 또는 트랜잭션 해시 입력"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={fetchData}>검색</button>
                {isLoading && <p>⏳ 검색 중...</p>} {/* 로딩 상태에 따라 메시지 표시 */}

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
                        // 슬롯 번호를 내림차순으로 표시 (큰 값이 오른쪽으로 가도록 설정)
                        labels: latestSlot !== null
                            ? Array.from({ length: 10 }, (_, index) => `Slot ${latestSlot - (9 - index)}`)
                            : [],
                        datasets: [
                            {
                                label: '트랜잭션 개수',
                                // blockData 배열을 내림차순으로 정렬
                                data: blockData.reverse(), // 트랜잭션 개수 배열을 내림차순으로 설정
                                backgroundColor: '#36A2EB',
                                borderColor: '#36A2EB',
                                borderWidth: 1,
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            x: {
                                reverse: false, // x축을 내림차순으로 설정 (큰 값이 오른쪽으로 가도록)
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}


function App() {
    return (
        <div className="App">
            <div className="dashboard-container">
                {/* Ethereum 대시보드 렌더링 */}
                <div className="ethereum-dashboard">
                    <EthereumExplorer />
                </div>

                {/* Solana 대시보드 렌더링 */}
                <div className="solana-dashboard">
                    <Explorer />
                </div>
            </div>
        </div>
    );
}

export default App;

