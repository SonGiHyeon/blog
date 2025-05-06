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
            case 'EIP 2771(Meta Transactions)':
                return (
                    <div className="container">
                        <h2>msg.sender</h2>
                        <div className="section">

                            <h3>msg.sender란?</h3>
                            <ul>
                                <li>msg.sender는 이더리움 스마트 컨트랙트에서 현재 실행 중인 함수의 호출자를 나타내는 특별한 전역 함수이다.</li>
                                <li>모든 트랜잭션 또는 함수 호출은 특정한 주소에 의해 발생하며, msg.sender는 그 주소를 반환한다.</li>
                            </ul>

                            <h3>msg.sender의 기본 동작</h3>
                            <ul>
                                <li>트랜잭션이 발생하면 트랜잭션을 발생시킨 주소(EOA 또는 컨트랙트 주소)가 msg.sender가 된다.</li>
                                <li>만약 A 컨트랙트가 B 컨트랙트를 호출하면, msg.sender는 A 컨트랙트의 주소가 된다.</li>
                            </ul>

                            <h3>msg.sender가 ERC-20에서 동작하는 방식</h3>

                            <h4>transfer: 토큰 전송 (msg.sender = 토큰을 보내는 사람)</h4>
                            <ul>
                                <li>기능: msg.sender가 자신의 토큰을 다른 주소로 전송할 때 사용된다.</li>
                                <li>msg.sender의 역할
                                    <ul>
                                        <li>송금자(토큰 보유자)의 주소를 나타냄</li>
                                        <li>_balances[msg.sender]를 확인하여 잔액이 충분한지 검증</li>
                                        <li>토큰을 msg.sender → recipient로 전송</li>
                                    </ul>
                                </li>
                            </ul>

                            <h4>approve: 토큰 사용 권한 위임 (msg.sender = 토큰 소유자)</h4>
                            <ul>
                                <li>기능: msg.sender가 특정 spender 주소에게 자신의 토큰을 사용할 수 있도록 허락</li>
                                <li>msg.sender의 역할
                                    <ul>
                                        <li>msg.sender(토큰 소유자)가 spender(제3자, 보통 스마트 컨트랙트)에게 일정량의 토큰 사용을 허가</li>
                                        <li>_allowance[msg.sender][spender]에 허용된 금액 저장</li>
                                    </ul>
                                </li>
                            </ul>

                            <h4>transferFrom: 위임된 토큰 전송 (msg.sender = 승인받은 사용자)</h4>
                            <ul>
                                <li>기능: msg.sender가 approve를 통해 허가받은 토큰을 대신 전송</li>
                                <li>msg.sender의 역할
                                    <ul>
                                        <li>msg.sender는 spender 역할(토큰 소유자로부터 위임받은 계정)</li>
                                        <li>_allowances[sender][msg.sender]를 확인하여 권한 내에서 실행하는지 검증</li>
                                        <li>msg.sender는 sender의 토큰을 대신 recipient에게 전송 가능</li>
                                    </ul>
                                </li>
                            </ul>

                            <h4>_mint: 새로운 토큰 발행 (msg.sender = 발행자)</h4>
                            <ul>
                                <li>기능: 컨트랙트 배포자가 새로운 토큰을 생성</li>
                                <li>msg.sender의 역할
                                    <ul>
                                        <li>_mint는 보통 onlyOwner 제한이 있으며, 토큰 발행 권한이 있는 관리자만 호출 가능</li>
                                        <li>msg.sender가 새로운 토큰을 생성하고 특정 주소에 할당</li>
                                    </ul>
                                </li>
                            </ul>

                            <h4>_burn: 토큰 소각 (msg.sender = 토큰 소유자)</h4>
                            <ul>
                                <li>기능: msg.sender가 자신의 토큰을 소각</li>
                                <li>msg.sender의 역할
                                    <ul>
                                        <li>msg.sender가 자신의 토큰을 소각할 때 호출</li>
                                        <li>_balances[msg.sender]에서 소각할 수량만큼 차감</li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                        <h2>ERC-2771: Secure Protocol for Native Meta Transactions</h2>
                        <div className="section">

                            <h3>ERC-2771이란?</h3>
                            <ul>
                                <li>ERC-2771은 메타 트랜잭션을 쉽게 구현할 수 있도록 도와주는 표준이다.</li>
                                <li>이 표준을 따르면, 사용자는 직접 가스비를 지불하지 않고도 트랜잭션을 실행할 수 있다.</li>
                            </ul>

                            <h3>Meta Transaction</h3>
                            <ul>
                                <li>ETH가 없는 사용자도 트랜잭션을 실행할 수 있도록 하기 위해 메타 트랜잭션이 등장했다.</li>
                                <li>메타 트랜잭션은 사용자가 가스비를 직접 지불하지 않고 스마트 컨트랙트와 상호작용할 수 있도록 하는 트랜잭션 방식이다.</li>
                                <li>사용자는 트랜잭션에 서명만 하고, 제3자(Relayer)가 해당 트랜잭션을 블록체인에 제출하여 가스비를 대신 지불한다.</li>
                                <li>이를 통해 ETH가 없는 사용자도 이더리움 네트워크에서 트랜잭션을 실행할 수 있으며, 사용자 경험(UX)을 개선할 수 있다.</li>
                            </ul>

                            <h3>메타 트랜잭션 실행 과정</h3>
                            <ul>
                                <li>사용자가 직접 트랜잭션을 실행하는 것이 아니라, 제3자(Relayer)가 가스비를 대신 지불하는 방식이다.</li>
                                <li>사용자는 서명만 하면 되고, Relayer가 블록체인에 제출하여 트랜잭션을 실행한다.</li>
                                <li>이 과정에서 Forwarder(포워더) 컨트랙트가 서명을 검증하고, 올바른 트랜잭션인지 확인한다.</li>
                                <li>이 후 Recipient(최종 컨트랙트)는 사용자가 실행하고자 했던 기능을 실행한다.
                                    <ul>
                                        <li>msg.sender를 실제 사용자로 인식하여 트랜잭션 실행</li>
                                    </ul>
                                </li>
                            </ul>

                            <h4>역할</h4>
                            <ul>
                                <li>사용자(Transaction Signer): 트랜잭션을 서명하는 주체</li>
                                <li>Relayer(가스 대납자): 사용자의 서명된 트랜잭션을 블록체인에 제출하는 주체</li>
                                <li>Forwarder(포워더): 트랜잭션을 중계하고 검증하는 컨트랙트</li>
                                <li>Recipient(최종 컨트랙트): 트랜잭션을 실행하는 컨트랙트</li>
                            </ul>

                            <h3>사용자의 실제 주소 추출하기</h3>
                            <ul>
                                <li>메타 트랜잭션이 담긴 트랜잭션에서는 msg.sender가 Forwarder 주소로 설정되기 때문에, 실제 사용자의 주소를 별도로 추출해야 한다.</li>
                                <li>Forwarder를 신뢰할 수 있는지 확인(isTrustedForwarder 함수 호출)</li>
                                <li>msg.data의 마지막 20바이트에서 실제 사용자 주소를 호출</li>
                                <li>만약 Forwarder가 아닐 경우 기존 msg.sender 그대로 반환</li>
                            </ul>

                            <h3>EIP-2771 주요 함수</h3>

                            <h4>1. isTrustedForwarder(address forwarder) {arrow} bool</h4>
                            <ul>
                                <li>특정 Forwarder(중계자)가 신뢰할 수 있는지 확인하는 함수</li>
                                <li>Recipient(최종 실행 컨트랙트)는 Forwarder가 신뢰할 수 있는지를 검증해야 한다.</li>
                                <li>메타 트랜잭션을 처리할 때 필수적인 보안 기능을 제공한다.</li>
                            </ul>

                            <h4>2. _msgSender() {arrow} address</h4>
                            <ul>
                                <li>일반 트랜잭션에서는 msg.sender가 그대로 반환되지만,</li>
                                <li>Forwarder를 통한 메타 트랜잭션일 경우 실제 사용자를 반환한다.</li>
                            </ul>

                            <h4>3. _msgData() {arrow} bytes calldata</h4>
                            <ul>
                                <li>일반적인 트랜잭션에서는 msg.data를 그대로 반환하지만,</li>
                                <li>메타 트랜잭션에서는 추가된 데이터를 포함한다.</li>
                            </ul>

                            <h4>4. execute(ForwardRequest request) {arrow} bool</h4>
                            <ul>
                                <li>Relayer가 메타 트랜잭션을 실제로 실행하는 함수이다.</li>
                                <li>사용자의 서명을 검증한 후, Forwarder가 Recipient 컨트랙트에 트랜잭션을 전달한다.</li>
                            </ul>

                            <h4>5. verify(ForwardRequest request) {arrow} bool</h4>
                            <ul>
                                <li>사용자의 서명이 올바른지 검증하는 함수</li>
                                <li>잘못된 서명이 제출될 경우, 메타 트랜잭션이 실행되지 않도록 방지한다.</li>
                            </ul>

                            <h4>6. nonces(address signer) {arrow} uint256</h4>
                            <ul>
                                <li>각 사용자의 Nonce(트랜잭션 실행 순서)를 관리한다.</li>
                                <li>메타 트랜잭션이 중복 실행되지 않도록 방지하는 역할을 한다.</li>
                            </ul>

                        </div>

                    </div>
                )

            case 'Upgradable':
                return (
                    <div className="container">
                        <h2>Upgradable Contract</h2>
                        <div className="section">

                            <h3>Proxy Contract & Implementation Contract</h3>
                            <ul>
                                <li>프록시 패턴에서는 사용자가 프록시 컨트랙트에 함수를 호출하면, 프록시 컨트랙트는 내부에 저장된 로직 컨트랙트의 주소를 참조해 실제 기능을 대신 실행해준다.</li>
                            </ul>

                            <h3>Proxy Contract(프록시 컨트랙트)</h3>
                            <h4>역할: 중계자</h4>
                            <ul>
                                <li>사용자가 직접 사용하는 외부 인터페이스</li>
                                <li>사용자의 함수 호출을 받아서, 실제 로직이 구현된 Implementation Contract로 위임(delegate) 합니다.</li>
                                <li>자신의 상태 변수(Storage)는 유지한 채, 로직만 외부 컨트랙트에 위임한다.</li>
                            </ul>

                            <h4>핵심 기능</h4>
                            <ul>
                                <li>delegatecall을 통해 로직을 실행</li>
                                <li>implementation 주소를 저장하고 있음</li>
                                <li>업그레이드 시, 이 주소만 바꿔주면 다른 로직을 실행할 수 있음</li>
                            </ul>

                            <h3>Implementation Contract(로직 컨트랙트)</h3>
                            <h4>역할: 실제 비지니스 로직 수행</h4>
                            <ul>
                                <li>함수 로직이 실제로 구현되어 있는 컨트랙트</li>
                                <li>직접 사용되지 않고, 항상 Proxy를 통해서만 호출된다.</li>
                                <li>상태변수는 가지지만, 실제로 저장은 Proxy의 storage에 저장된다(delegatecall 때문)</li>
                            </ul>

                            <h4>특징</h4>
                            <ul>
                                <li>단독으로는 호출되지 않음</li>
                                <li>필요한 경우, 새로운 로직 버전을 만들어 Proxy에 연결시켜 업그레이드 가능</li>
                            </ul>

                        </div>
                        <h2>Storage - 스마트 컨트랙트에서 데이터가 저장되는 방식(storage)</h2>
                        <div className="section">

                            <h4>storage는 블록체인 상의 ‘디스크 저장소’ 같은 것</h4>
                            <ul>
                                <li>컨트랙트 주소와 연결된 고유한 저장공간</li>
                                <li>값은 트랜잭션 이후에도 계속 유지됨</li>
                                <li>가스 비용이 높음(쓰기 비용이 큼)</li>
                            </ul>

                            <h4>저장 방식 - slot 단위로 저장됨</h4>
                            <ul>
                                <li>storage는 기본적으로 32바이트 단위(slot)로 구성되어 있다.</li>
                            </ul>

                            <h3>Storage: Proxy 패턴 & Upgradable</h3>
                            <h4>EIP-1967 슬롯 고정 방식</h4>
                            <ul>
                                <li>이 슬롯은 implementation address를 저장하기 위해 정해둔 고유 슬롯</li>
                                <li>다른 상태 변수와 절대 슬롯 충돌이 안 나게 하기 위해 고정된 위치 사용</li>
                            </ul>

                        </div>
                        <h2>핵심 기능 - fallback & delegatecall</h2>
                        <div className="section">

                            <h3>1. fallback 함수 - 사용자 진입점</h3>
                            <ul>
                                <li>사용자가 Proxy 컨트랙트에 정의되지 않은 함수를 호출하면,</li>
                                <li>이 fallback() 함수가 실행되고,</li>
                                <li>내부에서 delegatecall()을 통해 실제 로직 컨트랙트로 요청을 넘긴다.</li>
                            </ul>

                            <h3>2. delegatecall - 핵심 위임 로직</h3>
                            <ul>
                                <li>Proxy 컨트랙트에서 다른 컨트랙트(= Implementation)의 코드를 실행시킴</li>
                                <li>단, Proxy의 상태(storage)를 그대로 사용함</li>
                                <li>즉 로직은 Implementation이 제공, 저장은 Proxy가 담당</li>
                            </ul>

                            <h3>전체 흐름</h3>
                            <ul>
                                <li>1. 유저가 프록시에 호출</li>
                                <li>2. Fallback 작동</li>
                                <li>3. delegatecall 실행</li>
                                <li>4. 로직 컨트랙트의 코드 실행</li>
                                <li>5. 결과는 프록시의 storage에 저장</li>
                            </ul>

                        </div>
                        <h2>Proxy Pattern</h2>
                        <div className="section">

                            <ul>
                                <li>프록시 패턴은 스마트 컨트랙트에서 업그레이드 가능한 시스템을 만들기 위한 핵심 설계 패턴이다.</li>
                                <li>스마트 컨트랙트에서는 프록시 패턴을 사용해, 사용자는 하나의 주소(Proxy)에만 요청을 보내고, 실제 로직은 Implementation(로직 컨트랙트)이 수행되도록 구성한다.</li>
                            </ul>

                            <h3>구성요소 3가지</h3>
                            <ul>
                                <li>Proxy Pattern을 위한 핵심 구성요소는 다음과 같다.</li>
                                <li>Proxy Contract: 유저가 호출하는 진입점, 실제 로직은 없고 delegatecall로 위임</li>
                                <li>Implementation Contract(Logic): 실제 기능이 정의된 컨트랙트</li>
                                <li>Storage(Proxy 내부): 데이터는 Proxy에 저장됨(delegatecall이기 때문)</li>
                            </ul>

                        </div>
                        <h2>다양한 Upgrade Pattern</h2>
                        <div className="section">

                            <h3>1. Transparent Proxy Pattern(투명 프록시 패턴)</h3>
                            <ul>
                                <li>OpenZeppelin에서 기본으로 제공하는 패턴이며, OpenZeppelin 자체적으로 개발한 패턴이다.</li>
                            </ul>

                            <h4>핵심 개념</h4>
                            <ul>
                                <li>Proxy와 Implementation 분리</li>
                                <li>Admin 주소만 업그레이드를 수행할 수 있고, 일반 사용자는 오직 로직만 호출 가능</li>
                                <li>일반 사용자가 Proxy에 Implementation의 함수를 호출하면 {arrow} delegatecall 발생</li>
                                <li>Admin이 Implementation 함수를 호출하려 하면 {arrow} 실행이 막힘</li>
                            </ul>

                            <h3>2. UUPS(Universal Upgradeable Proxy Standard)</h3>
                            <ul>
                                <li>더 최근의 업그레이드 패턴이며, OpenZeppelin도 권장하는 방식이다.</li>
                            </ul>

                            <h4>핵심 개념</h4>
                            <ul>
                                <li>업그레이드 로직이 로직 컨트랙트(Implementation)에 포함됨</li>
                                <li>Proxy는 오직 delegatecall만 수행하고, upgrade 기능은 로직에 위임</li>
                                <li>upgradeTo(address) 같은 업그레이드 함수가 Implementation에 존재</li>
                            </ul>
                        </div>

                    </div>
                )


            case 'Defi - Uniswap':
                return (
                    <div className="container">
                        <h2>DeFi와 DEX의 이해</h2>

                        <div className="section">

                            <h3>CeFi와 DeFi의 개념</h3>

                            <h4>CeFi (Centralized Finance)</h4>
                            <ul>
                                <li>중앙화된 금융 시스템</li>
                                <li>은행이나 중앙 기관을 통해 거래</li>
                                <li>거래 내역을 중앙 기관이 보유 및 통제</li>
                            </ul>

                            <h4>DeFi (Decentralized Finance)</h4>
                            <ul>
                                <li>탈중앙화된 금융 생태계</li>
                                <li>블록체인 네트워크 상에서 스마트 컨트랙트 기반으로 운영</li>
                                <li>중개 기관 없이 개인 간 직접 금융 거래</li>
                            </ul>

                        </div>

                        <h2>유니스왑이란?</h2>

                        <div className="section">

                            <ul>
                                <li>유니스왑은 대표적인 탈중앙화 거래소이다.</li>
                                <li>중앙 서버나 관리자가 없이도 블록체인상에서 암호화폐를 직접 거래할 수 있게 해주는 플랫폼이다.</li>
                            </ul>

                            <h3>CEX(중앙화 거래소)와 DEX(탈중앙화 거래소)</h3>

                            <h4>CEX의 동작 방식</h4>
                            <ul>
                                <li>사용자의 암호화폐는 거래소가 보관한다.</li>
                                <li>사용자는 거래소가 제공하는 인터페이스(UI)를 통해 사고팔 수 있다.</li>
                                <li>거래는 거래소의 내부 장부에서 처리된다.</li>
                            </ul>

                            <h4>초기 DEX의 등장: EtherDelta</h4>
                            <ul>
                                <li>CEX처럼 오더북 기반의 시스템을 블록체인 위에 구현하려 했다.</li>
                            </ul>

                            <h4>한계점</h4>
                            <ul>
                                <li>높은 가스비</li>
                                <li>확장성 문제</li>
                                <li>유동성 부족</li>
                            </ul>

                            <h3>유니스왑의 핵심 특징</h3>
                            <ul>
                                <li>오더북 없음</li>
                                <li>AMM(Automated Market Maker) 도입</li>
                            </ul>

                            <h3>AMM의 혁신</h3>
                            <ul>
                                <li>AMM 방식에서는 누구나 유동성을 제공할 수 있다.</li>
                                <li>제공된 유동성을 기반으로 알고리즘이 가격을 결정하고 거래를 자동으로 체결한다.</li>
                            </ul>
                        </div>

                        <h2>유동성</h2>

                        <div className="section">
                            <ul>
                                <li>중앙화 거래소에서는 거래소 자체가 보유한 현금을 기반으로 토큰을 사고팔 수 있다.</li>
                                <li>탈중앙화 거래소는 중앙화된 자산을 취급하지 않고, 오직 탈중앙화 자산끼리만 거래 가능하다.</li>
                                <li>이때 등장한 것이 유동성 공급자(LP)이며, 유니스왑은 AMM 방식으로 이를 자동 운용한다.</li>
                            </ul>

                            <h4>유동성이란?</h4>
                            <ul>
                                <li>‘자산을 원하는 때에 원하는 방식으로 바꿀 수 있는 능력’</li>
                            </ul>

                            <h3>유동성 풀(Liquidity Pool)이란?</h3>
                            <ul>
                                <li>스마트 컨트랙트에 예치된 자산의 저장소</li>
                            </ul>

                            <h4>유동성 풀의 구조와 원리</h4>
                            <ul>
                                <li>사용자가 풀에 자산을 예치하면, 풀 안에 있는 비율을 기준으로 교환 비율이 결정된다.</li>
                            </ul>

                            <h4>유동성 공급자의 역할</h4>
                            <ul>
                                <li>누구나 LP가 될 수 있으며, 두 토큰을 비율에 맞춰 쌍으로 예치해야 한다.</li>
                                <li>예치의 대가로 LP Token을 받고, 풀에서 발생한 거래 수수료를 나눠 갖는다.</li>
                            </ul>

                            <h3>AMM, 유동성 풀을 움직이는 핵심 기술</h3>
                            <ul>
                                <li>AMM은 사람이 아닌 알고리즘이 거래 가격을 결정한다.</li>
                                <li>중앙화 거래소는 오더북 기반, DEX는 Peer-to-Contract 구조를 따른다.</li>
                            </ul>

                            <h4>AMM의 핵심 역할</h4>
                            <ul>
                                <li>유동성 풀 안의 자산 비율을 기반으로 가격 결정</li>
                                <li>수요와 공급에 따라 가격 자동 조정</li>
                            </ul>

                            <ul>
                                <li>유니스왑은 CPMM(Constant Product Market Maker) 모델을 사용한다.</li>
                                <li>이는 ‘X * Y = K’라는 공식을 기반으로 가격을 조정한다.</li>
                            </ul>

                            <h3>비영구적 손실</h3>
                            <ul>
                                <li>유동성 풀에 유동성을 공급하면 수수료를 받는다.</li>
                                <li>그러나 자산 가격의 변동으로 인해 보유만 했을 때보다 손해를 보는 상황 발생</li>
                            </ul>

                            <h4>비영구적 손실은 왜 발생하는가?</h4>
                            <ul>
                                <li>두 자산이 페어로 공급되며 한쪽 자산의 가격만 변해도 자동 조정이 발생</li>
                                <li>출금 시, 예치 당시보다 손해가 날 수 있다.</li>
                            </ul>
                        </div>

                        <h2>Uniswap V1, V2</h2>

                        <div className="section">
                            <h4>Uniswap V1 특징</h4>
                            <ul>
                                <li>AMM과 CPMM 구조로 유동성 공급</li>
                                <li>시장 균형을 위해 가격 차이가 발생하며 차익거래(Arbitrage)를 유도</li>
                                <li>Slippage 발생 가능</li>
                                <li>P2C(Peer-to-Contract) 방식 사용</li>
                            </ul>

                            <h4>Uniswap V2 특징</h4>
                            <ul>
                                <li>ERC20-ERC20 페어 지원</li>
                                <li>TWAP(Time-Weighted Average Price) 기반 가격 오라클</li>
                                <li>플래시 스왑 기능 지원</li>
                                <li>Core / Periphery 아키텍처 분리</li>
                            </ul>

                            <ul>
                                <li><strong>Core Contract:</strong> 스왑, 유동성 공급 등 핵심 로직 담당</li>
                                <li><strong>Periphery Contract:</strong> UI, 라우팅 등 부가 기능 담당</li>
                                <li>이러한 구조는 보안성 및 유지보수 용이성을 높여줌</li>
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