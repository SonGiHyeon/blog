const arrow = "->";

const SolidityAdvanced = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'Test-Driven Contract Development':
                return (
                    <div className="container">
                        <h2>TDD(Test-Driven Development)</h2>
                        <div className="section">

                            <h3>TDD(Test-Driven Development, 테스트 주도 개발)는 테스트를 먼저 작성한 후, 코드 구현을 진행하는 소프트웨어 개발 방법론이다.</h3>

                            <ul>
                                <li>스마트 컨트랙트는 한 번 배포되면 수정이 어렵고,</li>
                                <li>잘못된 코드가 치명적인 경제적 손실을 초래할 수 있기 때문에 메인넷 배포 전에 철저한 테스트가 필수적이다.</li>
                            </ul>

                        </div>
                        <h2>Testing Smart Contracts</h2>
                        <div className="section">

                            <h3>TDD는 ‘테스트 먼저’ 개발이지만, 현실에서는 코드 작성 후 테스트 하는 경우가 많다.</h3>
                            <ul>
                                <li>스마트 컨트랙트는 초기 설계가 중요하기 때문에, 기능을 먼저 정의한 후 테스트가 뒤따르는 경우가 많음</li>
                                <li>컨트랙트는 한 번 배포되면 변경이 어렵기 때문에, 명확한 기능 정의 후 테스트를 거쳐야 한다.</li>
                            </ul>

                            <h3>일반적인 스마트 컨트랙트 개발 흐름</h3>
                            <ul>
                                <li>기능 설계 {arrow} 코드 작성 {arrow} 테스트 코드 작성 {arrow} 테스트 실행 {arrow} 수정/최적화 {arrow} 배포</li>
                            </ul>

                            <h3>스마트 컨트랙트에서 테스트</h3>
                            <ul>
                                <li>스마트 컨트랙트는 완전한 TDD 방식이 아니더라도, 테스트 기반 개발(Test-Driven Contract Development) 방식을 적용해야 한다.</li>
                                <li>즉, 컨트랙트 개발에서 테스트는 필수적이다.</li>
                            </ul>

                            <h4>EX: 컨트랙트 개발 프로세스</h4>
                            <div>
                                <ul>
                                    <li><strong>1. 핵심 기능 정의:</strong> 스마트 컨트랙트에서 구현할 주요 기능을 정의한다.</li>
                                    <li><strong>2. 테스트 케이스 설계:</strong> 각 기능별로 예상되는 입력값과 반환값을 미리 정의한다.</li>
                                    <li><strong>3. 기능 구현 & 테스트 코드 동시 작성:</strong> 기능을 구현하면서 바로 테스트 코드를 작성한다 (Hardhat, Foundry, Chai 등을 활용).</li>
                                    <li><strong>4. 테스트 실행 & 디버깅</strong></li>
                                    <li><strong>5. 테스트 자동화 & 시뮬레이션</strong></li>
                                </ul>
                            </div>

                        </div>
                        <h2>Chai</h2>
                        <div className="section">

                            <h3>JavaScript에서 테스트를 쉽게 작성할 수 있도록 도와주는 라이브러리</h3>
                            <ul>
                                <li>Mocha, Hardhat 같은 테스트 프레임워크와 함께 사용되며, 스마트 컨트랙트 테스트에도 널리 활용된다.</li>
                            </ul>

                            <h4>Chai의 주요 기능</h4>
                            <ul>
                                <li>Chai는 3가지 Assertion(검증 방식 or Test)를 지원한다.</li>
                                <li><strong>Expect 스타일:</strong> 자연어 문장처럼 테스트 가능</li>
                                <li><strong>Should 스타일:</strong> 객체 기반 테스트</li>
                                <li><strong>Assert 스타일:</strong> 전통적인 TDD 스타일</li>
                            </ul>

                        </div>
                    </div>

                )
            case 'Gas less - EIP-2612(Permit)':
                return (
                    <div className="container">

                        <h2>Gas를 소모하는 트랜잭션</h2>
                        <div className="section">

                            <h3>Gas란?</h3>
                            <ul>
                                <li>Gas는 네트워크 리소스를 사용한 대가로 지불하는 비용이다.</li>
                                <li>모든 스마트 컨트랙트 실행 및 상태 변경할 때 Gas를 소모한다.</li>
                            </ul>

                            <h3>기본 트랜잭션(ETH 전송)</h3>
                            <ul>
                                <li>가장 기본적으로 가스를 소모하는 트랜잭션은 ETH(or Coin)를 전송하는 것이다.</li>
                            </ul>

                            <h3>스마트 컨트랙트 실행 트랜잭션</h3>
                            <ul>
                                <li>스마트 컨트랙트와 상호작용하는 모든 트랜잭션은 Gas를 소모한다.</li>
                            </ul>
                        </div>

                        <h2>되짚어보는 ERC20</h2>
                        <div className="section">

                            <h3>ERC-20의 기본 전송 메커니즘</h3>
                            <ul>
                                <li><strong>transfer</strong>: 직접 송신자가 수신자에게 토큰을 전송한다.</li>
                                <li><strong>approve + transferFrom</strong>: 제3자가 송신자를 대신해 토큰을 전송한다.</li>
                            </ul>

                            <h4>approve: 토큰 사용 권한 부여</h4>
                            <ul>
                                <li>approve 함수는 지정된 spender가 특정 amount만큼의 토큰을 사용하도록 허가한다.</li>
                            </ul>

                            <h4>transferFrom: 위임받은 토큰 전송</h4>
                            <ul>
                                <li>미리 approve 받은 토큰을 spender가 송신자를 대신해 전송할 때 사용된다.</li>
                            </ul>

                            <h4>transferFrom의 주요 조건</h4>
                            <ul>
                                <li>소유자가 먼저 approve를 실행해야 한다 (가스 소모).</li>
                                <li>approve한 금액 내에서만 transferFrom 가능.</li>
                                <li>실행 시 Approval 이벤트가 발생하며, 허용된 금액이 업데이트됨.</li>
                            </ul>

                            <h4>approve와 transferFrom을 활용하는 이유</h4>
                            <ul>
                                <li>스마트 컨트랙트를 통한 자동 결제 시스템 구축 가능.</li>
                            </ul>
                        </div>

                        <h2>EIP-712: Typed Structured Data Signing</h2>
                        <div className="section">

                            <h3>Ethereum 서명 방식</h3>
                            <ul>
                                <li>메시지를 Keccak256으로 해싱</li>
                                <li>해시 값을 프라이빗 키로 서명</li>
                                <li>ECDSA를 통해 서명 검증</li>
                            </ul>

                            <h4>서명 검증 방법</h4>
                            <ul>
                                <li>signature와 원본 메시지를 사용해 주소 복원</li>
                                <li>복원된 주소와 서명자 주소가 일치하면 유효</li>
                            </ul>

                            <h4>기존 서명 방식의 문제점</h4>
                            <ul>
                                <li>사용자가 서명한 메시지의 의미를 알기 어려움</li>
                                <li>signMessage()는 단순 해시된 데이터 서명</li>
                                <li>Hex 값만 보이므로 직관적이지 않음</li>
                            </ul>

                            <h4>보안 문제 (Phishing 공격)</h4>
                            <ul>
                                <li>단순 메시지 서명으로 replay attack 발생 가능</li>
                            </ul>

                            <h4>EIP-712의 해결책</h4>
                            <ul>
                                <li>구조화된 데이터로 서명</li>
                                <li>사람이 읽을 수 있는 형태 제공</li>
                                <li>Replay Attack 방지</li>
                            </ul>

                            <h3>EIP-712의 핵심 구성 요소</h3>
                            <ul>
                                <li><strong>도메인</strong>: 서명이 발생하는 컨트랙트와 체인 지정</li>
                                <li><strong>데이터 타입</strong>: 서명할 구조체 타입 정의</li>
                                <li><strong>메시지</strong>: 실제 서명할 데이터</li>
                            </ul>

                            <h4>도메인 설명</h4>
                            <ul>
                                <li>chainId, verifyingContract 포함</li>
                                <li>서명이 특정 컨트랙트/네트워크에만 유효하도록 설정</li>
                            </ul>

                            <h4>데이터 타입 설명</h4>
                            <ul>
                                <li>Permit 타입 정의 (name, type 필드 포함)</li>
                            </ul>

                            <h4>메시지 설명</h4>
                            <ul>
                                <li>실제 서명할 데이터로서 사용자에게 명확하게 표현됨</li>
                            </ul>
                        </div>

                        <h2>EIP-2612: Permit - Gasless Transactions</h2>
                        <div className="section">

                            <h3>EIP-2612 Permit 동작 방식</h3>
                            <ul>
                                <li>사용자는 permit을 호출하지 않고 서명만 생성</li>
                                <li>제출된 서명으로 스마트 컨트랙트가 approve 수행</li>
                                <li>spender는 transferFrom으로 토큰 사용</li>
                                <li>msg.sender가 직접 가스를 지불하지 않아도 됨</li>
                            </ul>

                            <h4>Permit 흐름 (Gasless Approve)</h4>
                            <ul>
                                <li>사용자가 EIP-712 기반 서명 생성</li>
                                <li>가스 지불자가 permit 함수 호출</li>
                                <li>spender가 transferFrom 실행</li>
                            </ul>

                            <h4>nonces</h4>
                            <ul>
                                <li>각 owner별 서명 사용 횟수 추적</li>
                                <li>permit 호출 시 nonces 증가하여 재사용 방지</li>
                            </ul>

                            <h4>DOMAIN_SEPARATOR</h4>
                            <ul>
                                <li>도메인 환경을 구분하는 고유 값</li>
                                <li>서명이 특정 네트워크/컨트랙트에서만 유효하게 함</li>
                                <li>리플레이 공격 방지</li>
                            </ul>
                        </div>

                    </div>
                )

        }

    }


    return (
        <div className="solidity-advanced">
            {renderContent()}
        </div>
    );

}

export default SolidityAdvanced;