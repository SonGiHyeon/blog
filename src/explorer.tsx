// Sepolia Ethereum 대시보드

import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Bar } from 'react-chartjs-2'; // Bar 차트를 위한 import
import { Chart } from 'chart.js';
import { ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './Wallet.css';

// Web3 인스턴스 생성
const web3 = new Web3('https://sepolia.infura.io/v3/7a2f1e9b214448069fe349701c066903');

// Chart.js 컴포넌트 등록
Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function Explorer() {
    const [inputValue, setInputValue] = useState('');
    const [transaction, setTransaction] = useState<null | any>(null);
    const [block, setBlock] = useState<null | any>(null);
    const [error, setError] = useState<string | null>(null);
    const [blockData, setBlockData] = useState<any[]>([]);
    const [latestBlockNumber, setLatestBlockNumber] = useState<number | null>(null);

    // 최신 블록 조회 및 트랜잭션 개수 가져오기
    useEffect(() => {
        fetchLatestBlocks();
    }, []);

    // 최신 블록 10개에 대한 트랜잭션 개수를 가져오는 함수
    const fetchLatestBlocks = async () => {
        try {
            setError(null);
            const latestBlockNum = await web3.eth.getBlockNumber(); // 최신 블록 번호 가져오기
            setLatestBlockNumber(Number(latestBlockNum)); // 최신 블록 번호 저장
            const blocks = [];

            // 최신 블록 10개의 트랜잭션 개수 가져오기 (가장 오래된 블록부터 최신 블록까지)
            for (let i = 0; i < 10; i++) {
                // i가 0일 때는 latestBlockNum - 9, i가 9일 때는 latestBlockNum (최신 블록)
                const block = await web3.eth.getBlock(Number(latestBlockNum) - (9 - i));
                const transactionCount = block.transactions.length; // 트랜잭션 개수
                blocks.push(transactionCount); // 트랜잭션 개수만 배열에 추가
            }

            setBlockData(blocks); // blockData에 트랜잭션 개수 저장
        } catch (err) {
            setError('블록 데이터를 불러오는 중 오류가 발생했습니다.');
            console.error(err);
        }
    };


    // 트랜잭션 또는 블록 조회 처리
    const fetchData = async () => {
        try {
            setTransaction(null);
            setBlock(null);
            setError(null);

            if (inputValue.startsWith('0x') && inputValue.length === 66) {
                // 트랜잭션 조회
                const tx = await web3.eth.getTransaction(inputValue);
                if (tx) {
                    setTransaction(tx);
                } else {
                    setError('트랜잭션을 찾을 수 없습니다.');
                }
            } else if (!isNaN(Number(inputValue))) {
                // 블록 조회
                const blockData = await web3.eth.getBlock(Number(inputValue));
                if (blockData) {
                    setBlock(blockData);
                } else {
                    setError('블록을 찾을 수 없습니다.');
                }
            } else {
                setError('올바른 트랜잭션 해시 또는 블록 번호를 입력하세요.');
            }
        } catch (err) {
            setError('데이터를 불러오는 중 오류가 발생했습니다.');
        }
    };

    // Bar 차트 데이터 설정
    const chartData = {
        labels: latestBlockNumber !== null
            ? Array.from({ length: 10 }, (_, index) => `Block ${latestBlockNumber - (9 - index)}`)
            : [], // 최신 블록 번호에서 -1씩 한 값으로 레이블 생성
        datasets: [
            {
                label: '트랜잭션 개수',
                data: blockData, // blockData에서 트랜잭션 개수 값 사용
                backgroundColor: '#36A2EB', // 차트 색상 설정
                borderColor: '#36A2EB', // 테두리 색상
                borderWidth: 1, // 테두리 두께
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const, // 'top'을 'top' as const로 수정
            },
        },
        scales: {
            y: {
                beginAtZero: true, // y축이 0부터 시작하도록 설정
            },
        },
    };

    return (
        <div className="App">
            <h2>🔎 Sepolia Testnet 대시보드</h2>

            {error && <p className="error">{error}</p>}

            {/* 트랜잭션 해시 또는 블록 번호 입력 */}
            <div>
                <input
                    type="text"
                    placeholder="트랜잭션 해시 또는 블록 번호 입력"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={fetchData}>조회</button>
            </div>

            {/* 트랜잭션 정보 출력 */}
            {transaction && (
                <div className="result">
                    <h3>📝 트랜잭션 정보</h3>
                    <p><strong>해시:</strong> {transaction.hash}</p>
                    <p><strong>보낸 주소:</strong> {transaction.from}</p>
                    <p><strong>받는 주소:</strong> {transaction.to}</p>
                    <p><strong>값:</strong> {web3.utils.fromWei(transaction.value, 'ether')} ETH</p>
                    <p><strong>가스 사용:</strong> {transaction.gas}</p>
                    <p><strong>블록 번호:</strong> {transaction.blockNumber}</p>
                </div>
            )}

            {/* 블록 정보 출력 */}
            {block && (
                <div className="result">
                    <h3>📦 블록 정보</h3>
                    <p><strong>블록 번호:</strong> {block.number}</p>
                    <p><strong>해시:</strong> {block.hash}</p>
                    <p><strong>이전 블록 해시:</strong> {block.parentHash}</p>
                    <p><strong>마이너:</strong> {block.miner}</p>
                    <p><strong>트랜잭션 수:</strong> {block.transactions.length}</p>
                </div>
            )}

            {/* Bar 차트 렌더링 */}
            <div>
                <h3>📊 최신 10개의 블록 트랜잭션 개수</h3>
                <Bar data={chartData} options={options} />
            </div>

            {/* 최신 블록 정보 */}
            {latestBlockNumber !== null && (
                <div>
                    <h3>🗝️ 최신 블록 정보</h3>
                    <p><strong>최신 블록 번호:</strong> {latestBlockNumber}</p>
                </div>
            )}
        </div>
    );
}

export default Explorer;

// Solana 대시보드

// import { useState, useEffect } from 'react';
// import { Connection, PublicKey } from '@solana/web3.js';
// import { Bar } from 'react-chartjs-2'; // Bar 차트를 위한 import
// import { Chart } from 'chart.js';
// import { ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
// import './Wallet.css';

// // Solana 연결 설정
// const connection = new Connection('https://api.mainnet-beta.solana.com');

// // Chart.js 컴포넌트 등록
// Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// function Explorer() {
//     const [inputValue, setInputValue] = useState('');
//     const [transaction, setTransaction] = useState<null | any>(null);
//     const [block, setBlock] = useState<null | any>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [blockData, setBlockData] = useState<any[]>([]);
//     const [latestSlot, setLatestSlot] = useState<number | null>(null);

//     // 최신 슬롯 조회 및 트랜잭션 개수 가져오기
//     useEffect(() => {
//         fetchLatestBlocks();
//     }, []);

//     const fetchLatestBlocks = async () => {
//         try {
//             setError(null);
//             const latestSlot = await connection.getSlot(); // 최신 슬롯 번호 가져오기
//             setLatestSlot(latestSlot); // 최신 슬롯 번호 저장

//             const blocks = [];

//             // 최신 슬롯을 기준으로 10개의 트랜잭션 개수 가져오기
//             for (let i = 0; i < 10; i++) {
//                 const block = await connection.getBlock(latestSlot - i); // 최근 슬롯에서 -1씩 하여 블록 가져오기
//                 blocks.push(block?.transactions.length || 0); // 트랜잭션 개수만 저장
//             }

//             setBlockData(blocks); // blockData 상태에 트랜잭션 개수 저장
//         } catch (err) {
//             setError('블록 데이터를 불러오는 중 오류가 발생했습니다.');
//             console.error(err);
//         }
//     };

//     // 트랜잭션 또는 슬롯 조회 처리
//     const fetchData = async () => {
//         try {
//             setTransaction(null);
//             setBlock(null);
//             setError(null);

//             // 트랜잭션 해시가 44자일 경우
//             if (inputValue.length === 44) {
//                 // 트랜잭션 조회
//                 const tx = await connection.getTransaction(inputValue);
//                 if (tx) {
//                     setTransaction(tx);
//                 } else {
//                     setError('트랜잭션을 찾을 수 없습니다.');
//                 }
//             }
//             // 슬롯 번호가 숫자인 경우
//             else if (!isNaN(Number(inputValue)) && Number(inputValue) >= 0) {
//                 const blockData = await connection.getBlock(Number(inputValue));
//                 if (blockData) {
//                     setBlock(blockData);
//                 } else {
//                     setError('슬롯을 찾을 수 없습니다.');
//                 }
//             }
//             else {
//                 setError('올바른 트랜잭션 해시 또는 슬롯 번호를 입력하세요.');
//             }
//         } catch (err) {
//             setError('데이터를 불러오는 중 오류가 발생했습니다.');
//             console.error(err);
//         }
//     };



//     // Bar 차트 데이터 설정
//     const chartData = {
//         labels: latestSlot !== null
//             ? Array.from({ length: 10 }, (_, index) => `Slot ${latestSlot - (9 - index)}`)
//             : [], // 최신 슬롯 번호에서 -1씩 한 값으로 레이블 생성
//         datasets: [
//             {
//                 label: '트랜잭션 개수',
//                 data: blockData, // 각 블록의 트랜잭션 개수
//                 backgroundColor: '#36A2EB', // 차트 색상 설정
//                 borderColor: '#36A2EB', // 테두리 색상
//                 borderWidth: 1, // 테두리 두께
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top' as const, // 'top'을 'top' as const로 수정
//             },
//         },
//         scales: {
//             y: {
//                 beginAtZero: true, // y축이 0부터 시작하도록 설정
//             },
//         },
//     };

//     return (
//         <div className="App">
//             <h2>🔎 Solana 대시보드</h2>

//             {error && <p className="error">{error}</p>}

//             {/* 트랜잭션 해시 또는 슬롯 번호 입력 */}
//             <div>
//                 <input
//                     type="text"
//                     placeholder="트랜잭션 해시 또는 슬롯 번호 입력"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                 />
//                 <button onClick={fetchData}>조회</button>
//             </div>

//             {/* 트랜잭션 정보 출력 */}
//             {transaction && (
//                 <div className="result">
//                     <h3>📝 트랜잭션 정보</h3>
//                     <p><strong>트랜잭션 해시:</strong> {transaction.signature}</p>
//                     <p><strong>보낸 주소:</strong> {transaction.transaction.message.accountKeys[0]}</p>
//                     <p><strong>받는 주소:</strong> {transaction.transaction.message.accountKeys[1]}</p>
//                     <p><strong>트랜잭션 값:</strong> {transaction.meta?.fee} SOL</p>
//                     <p><strong>블록 번호 (슬롯):</strong> {transaction.slot}</p>
//                 </div>
//             )}

//             {/* 슬롯 정보 출력 */}
//             {block && (
//                 <div className="result">
//                     <h3>📦 슬롯 정보</h3>
//                     <p><strong>슬롯 번호:</strong> {block.slot}</p>
//                     <p><strong>블록 해시:</strong> {block.blockhash}</p>
//                     <p><strong>트랜잭션 수:</strong> {block.transactions.length}</p>
//                 </div>
//             )}

//             {/* Bar 차트 렌더링 */}
//             <div>
//                 <h3>📊 최신 10개의 슬롯 트랜잭션 개수</h3>
//                 <Bar data={chartData} options={options} />
//             </div>

//             {/* 최신 슬롯 정보 */}
//             {latestSlot !== null && (
//                 <div>
//                     <h3>🗝️ 최신 슬롯 정보</h3>
//                     <p><strong>최신 슬롯 번호:</strong> {latestSlot}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Explorer;
