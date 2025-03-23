// explorer_solana.tsx
import { useState, useEffect } from 'react';
import { Connection } from '@solana/web3.js';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

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
                const tx = await connection.getTransaction(inputValue, { maxSupportedTransactionVersion: 0 });
                if (tx) {
                    setTransaction(tx);
                } else {
                    setError('트랜잭션을 찾을 수 없습니다.');
                }
            } else if (!isNaN(Number(inputValue)) && Number(inputValue) >= 0) {
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
            {/* (생략된 코드 계속 이어짐) */}
        </div>
    );
}

export default SolanaExplorer;
