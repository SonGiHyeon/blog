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
            case '스마트 컨트랙트 보안':
                return (
                    <div className="container">
                        <h2>스마트 컨트랙트의 위험성과 수정 불가능성</h2>
                        <div className="section">

                            <h3>수정이 불가능하다는 것은?</h3>
                            <ul>
                                <li><strong>버그 또는 실수</strong>: 코드 오류로 인해 자금이 잘못 전송되거나 영구적으로 잠길 수 있음</li>
                                <li><strong>보안 취약점</strong>: 해커가 스마트 컨트랙트를 악용하여 자산을 탈취할 수 있음</li>
                                <li><strong>수정 불가</strong>: 한 번 배포되면 업데이트가 불가능하여, 새로운 버전을 만들어야 함</li>
                                <li><strong>자금 손실 리스크</strong>: 이더리움, 토큰 등의 자산이 스마트 컨트랙트에 잠기거나 도난당할 수 있음</li>
                            </ul>

                            <h3>대비책</h3>
                            <ul>
                                <li>컨트랙트 감사</li>
                                <li>테스트 네트워크에서 실험</li>
                                <li>업그레이드 가능한 구조</li>
                                <li>타임</li>
                            </ul>

                        </div>
                        <h2>재진입 공격(Reentrancy)</h2>
                        <div className="section">

                            <h3>정의</h3>
                            <ul>
                                <li>외부에서 호출된 계약(또는 주소)이 스마트 컨트랙트로 다시 돌아와 원래 함수가 끝나기 전에 반복해서 실행되도록 조작하는 공격</li>
                            </ul>

                            <h3>재진입 공격 막는 방법</h3>
                            <ul>
                                <li>해결 방법 1: 상태 먼저 바꾸기 – 잔고를 먼저 0으로 만들고 나서 돈을 보낸다</li>
                                <li>해결 방법 2: 재진입 방지 락 사용 – 함수에 잠금(lock)를 걸어 중복 실행을 방지한다</li>
                            </ul>

                        </div>
                        <h2>오버플로우/언더플로우</h2>
                        <div className="section">

                            <h3>정의</h3>
                            <ul>
                                <li>스마트컨트랙트에서는 숫자의 범위가 제한되어 있으며 이를 초과하거나 0 아래로 내려가면 문제가 발생한다</li>
                            </ul>

                            <h3>유형</h3>
                            <ul>
                                <li><strong>오버플로우</strong>: 숫자가 너무 커져서 범위를 넘는 경우</li>
                                <li><strong>언더플로우</strong>: 숫자가 너무 작아져서 0 밑으로 내려가는 경우</li>
                            </ul>

                            <h3>예방 방법</h3>
                            <ul>
                                <li>최신 컴파일러 사용 (Solidity 0.8.0 이상)</li>
                                <li>SafeMath 사용 (0.8.0 미만 버전에서)</li>
                            </ul>

                        </div>
                        <h2>프론트러닝(Frontrunning)</h2>
                        <div className="section">

                            <h3>정의</h3>
                            <ul>
                                <li>다른 사람의 거래를 먼저 보고, 같은 거래를 더 높은 가스비로 앞질러 제출해 이익을 챙기는 행위</li>
                            </ul>

                            <h3>예시</h3>
                            <ul>
                                <li>대기열(메모리풀)에 올라온 거래를 보고 프론트러너가 수수료를 더 높게 설정해 먼저 채택되게 함</li>
                            </ul>

                            <h3>방어 방법</h3>
                            <ul>
                                <li>거래 숨기기: 해시를 먼저 올리고 나중에 내용을 공개(commit-reveal)</li>
                                <li>최대 허용 슬리피지 설정: 가격이 급변하면 자동으로 거래 취소</li>
                                <li>MEV 방지 툴 사용: MEV-Blocker, Flashbots 등</li>
                                <li>프라이버시 블록체인 이용: Aztec, Secret Network</li>
                            </ul>

                        </div>
                        <h2>DelegateCall 취약성</h2>
                        <div className="section">

                            <h3>정의</h3>
                            <ul>
                                <li><code>delegatecall</code>: 외부 컨트랙트의 코드를 내 컨트랙트의 상태를 유지한 채 실행</li>
                                <li>A.delegatecall(B) ⇒ A의 상태값을 사용하면서 B의 코드를 실행</li>
                            </ul>

                            <h3>사용 이유</h3>
                            <ul>
                                <li>코드 재사용</li>
                                <li>실행 효율성 향상</li>
                            </ul>

                            <h3>문제점</h3>
                            <ul>
                                <li>상태 공유: 외부 코드가 내 상태 변수에 접근해 조작 가능</li>
                                <li>제어권 상실: 공격자가 소유자 권한 탈취 가능</li>
                                <li>위임된 코드가 악의적일 수 있음</li>
                            </ul>

                            <h3>예방 방법</h3>
                            <ul>
                                <li>신뢰할 수 있는 코드만 호출</li>
                                <li>슬롯 정렬 확인</li>
                                <li>OpenZeppelin 라이브러리 사용</li>
                                <li>UUPS 패턴 등 안전한 업그레이드 방식 활용</li>
                            </ul>

                        </div>
                        <h2>Timestamp 의존성</h2>
                        <div className="section">

                            <h3>정의</h3>
                            <ul>
                                <li>스마트 컨트랙트에서 블록의 timestamp 값을 기반으로 중요한 조건 판단 시 발생할 수 있는 문제</li>
                            </ul>

                            <h3>문제점</h3>
                            <ul>
                                <li>채굴자 조작 가능성</li>
                                <li>게임/복권 등에서 예측 가능성</li>
                            </ul>

                            <h3>권장 대안</h3>
                            <ul>
                                <li>Chainlink VRF 사용 (랜덤값 오라클)</li>
                                <li>block.number 사용 (상대 시간 기반)</li>
                                <li>중요한 조건 판단에 사용하지 말 것 – 단순 기록용 사용 권장</li>
                            </ul>

                        </div>
                        <h2>Access Control 설정 미비</h2>
                        <div className="section">

                            <h3>정의</h3>
                            <ul>
                                <li>접근 제어는 스마트 컨트랙트의 특정 기능을 누가 호출할 수 있는지를 제한하는 기능</li>
                            </ul>

                            <h3>위험 시나리오</h3>
                            <ul>
                                <li>무단 토큰 발행</li>
                                <li>소유권 이전</li>
                                <li>긴급 중단 기능 악용</li>
                                <li>민감한 설정 변경</li>
                            </ul>

                            <h3>방지 방법</h3>
                            <ul>
                                <li>onlyOwner</li>
                                <li>AccessControl</li>
                                <li>사용자 정의 제어</li>
                            </ul>

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
