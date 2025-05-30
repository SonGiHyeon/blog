const arrow = "=>";

const BlockChainSecutiry = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case '블록체인 기본 원리':
                return (
                    <div className="container">
                        <h2>Bitcoin: A Peer-to-Peer Electronic Cash System</h2>
                        <div className="section">

                            <link href="https://bitcoin.org/bitcoin.pdf"></link>

                            <h3>Abstract</h3>
                            <ul>
                                <li>
                                    <strong>Original:</strong> A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.<br />
                                    <strong>{arrow} Translation:</strong> 개인과 개인 간의 온라인 상에서의 거래가 전자 현금의 형태로 금융 기관 없이 이루어질 수 있음
                                </li>
                                <br></br>
                                <li>
                                    <strong>Original:</strong> Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.<br />
                                    <strong>{arrow} Translation:</strong> 이중 지불을 방지하기 위해 제3자가 필요하다면 디지털 서명의 이점이 사라짐
                                </li>
                            </ul>

                            <h4>* 개념 설명</h4>
                            <ul>
                                <li><strong>이중 지불(double-spending):</strong> 디지털 화폐는 복사하거나 다시 사용할 수 있는 데이터이므로 같은 돈을 두 번 이상 쓰는 것이 가능해짐</li>
                                <li><strong>디지털 서명:</strong> 공개키 암호화를 이용하여 메시지 또는 거래의 진위 여부를 증명하는 기술</li>
                            </ul>

                            <ul>
                                <li>
                                    <strong>Original:</strong> We propose a solution to the double-spending problem using a peer-to-peer network.<br />
                                    <strong>{arrow} Translation:</strong> 개인과 개인 간의 네트워크를 통해 이중 지불 문제를 해결하고자 함
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.<br />
                                    <strong>{arrow} Translation:</strong> 네트워크는 거래를 작업증명 기반의 연속된 해시 체인에 포함시켜 타임스탬프를 부여하며, 이를 다시 수행하지 않고는 변경할 수 없는 기록을 생성함
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power.<br />
                                    <strong>{arrow} Translation:</strong> 가장 긴 체인은 사건의 순서를 나타낼 뿐 아니라, 가장 많은 CPU 연산력에서 생성되었음을 증명함
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers.<br />
                                    <strong>{arrow} Translation:</strong> 정직한 노드들이 전체 CPU 연산력의 과반수를 차지한다면, 공격자보다 더 빠르게 블록을 생성하여 앞서나감
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.<br />
                                    <strong>{arrow} Translation:</strong> 네트워크는 최소한의 구조만 필요하며, 메시지는 최대한의 노력으로 전파됨. 노드들은 자유롭게 떠났다가 다시 참여할 수 있고, 가장 긴 체인을 기준으로 부재 중의 거래를 확인함
                                </li>
                            </ul>

                            <h3>Transactions</h3>

                            <img src={process.env.PUBLIC_URL + '/Transactions.png'} width={1280} height={640} />

                            <h3>Timestamp Server</h3>

                            <img src={process.env.PUBLIC_URL + '/Timestamp Server.png'} width={1280} height={640} />

                            <h3>Proof-of-Work</h3>

                            <img src={process.env.PUBLIC_URL + '/Proof-of-Work.png'} width={1280} height={640} />

                            <h3>Reclaiming Disk Space</h3>

                            <img src={process.env.PUBLIC_URL + '/Reclaiming Disk Space.png'} width={1280} height={640} />

                            <h3>Simplified Payment Verification</h3>

                            <img src={process.env.PUBLIC_URL + '/Simplified Payment Verification.png'} width={1280} height={640} />

                            <h3>Combining and Splitting Value</h3>

                            <img src={process.env.PUBLIC_URL + '/Combining and Splitting Value.png'} width={960} height={640} />

                            <h3>Privacy</h3>

                            <img src={process.env.PUBLIC_URL + '/Privacy.png'} width={1280} height={640} />


                            <h3>Couclusion</h3>

                            <ul>
                                <li>
                                    <strong>Original:</strong> We have proposed a system for electronic transactions without relying on trust.<br />
                                    <strong>{arrow} Translation:</strong> 우리는 신뢰에 의존하지 않는 전자 거래 시스템을 제안함
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> We started with the usual framework of coins made from digital signatures, which provides strong control of ownership, but is incomplete without a way to prevent double-spending.<br />
                                    <strong>{arrow} Translation:</strong> 디지털 서명 기반의 코인을 출발점으로 하였으나, 이중 지불을 방지할 방법 없이는 불완전함
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> To solve this, we proposed a peer-to-peer network using proof-of-work to record a public history of transactions that quickly becomes computationally impractical for an attacker to change if honest nodes control a majority of CPU power.<br />
                                    <strong>{arrow} Translation:</strong> 이를 해결하기 위해, 작업증명 기반의 P2P 네트워크를 제안했으며, 정직한 노드가 과반의 연산력을 통제하면 공격자는 거래 이력을 변경할 수 없음
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> The network is robust in its unstructured simplicity.<br />
                                    <strong>{arrow} Translation:</strong> 네트워크는 단순한 구조로 인해 강력함
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> Nodes work all at once with little coordination.<br />
                                    <strong>{arrow} Translation:</strong> 노드들은 별다른 조정 없이 동시에 작동함
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> They do not need to be identified, since messages are not routed to any particular place and only need to be delivered on a best effort basis.<br />
                                    <strong>{arrow} Translation:</strong> 메시지는 특정 경로 없이 전파되므로, 노드는 식별될 필요 없음
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> Nodes can leave and rejoin the network at will, accepting the proof-of-work chain as proof of what happened while they were gone.<br />
                                    <strong>{arrow} Translation:</strong> 노드는 자유롭게 네트워크를 나갔다가 돌아올 수 있으며, 부재 중 거래는 작업증명 체인으로 검증함
                                </li>
                                <br></br>

                                <li>
                                    <strong>Original:</strong> They vote with their CPU power, expressing their acceptance of valid blocks by working on extending them and rejecting invalid blocks by refusing to work on them.<br />
                                    <strong>{arrow} Translation:</strong> 유효한 블록은 작업을 통해 수용, 무효한 블록은 작업하지 않음으로써 거부함
                                </li>
                            </ul>

                            <h4>* 합의 메커니즘</h4>
                            <ul>
                                <li>유효한 블록: 연산력을 사용해 연장 → 수용</li>
                                <li>무효한 블록: 연산력 투입 안 함 → 거부</li>
                                <li>필요한 규칙과 보상은 이 합의 구조 안에서 시행 가능</li>
                            </ul>

                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="blockchain-secutiry">
            {renderContent()}
        </div>
    );

}

export default BlockChainSecutiry;
