const arrow = "=>";

const BlockChainNetwork = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'On-Chain Data':
                return (
                    <div className="container">

                        {/* 3/12 */}

                        <h2>On-Chain Data</h2>
                        <div className="section">
                            <ul>
                                <li>블록체인 네트워크에 기록된 모든 데이터</li>
                                <li>탈중앙화된 네트워크에서 검증된 데이터로, 누구나 접근할 수 있으며 변경이 불가능하다.</li>
                                <li>온체인 데이터를 활용하면 블록체인의 투명성과 신뢰성을 극대화할 수 있다.</li>
                            </ul>

                            <h3>1. 온체인 데이터의 주요 구성 요소</h3>
                            <ul>
                                <li>트랜잭션 데이터, 블록 데이터, 상태 데이터</li>
                            </ul>

                            <h4>트랜잭션 데이터 (Transaction Data)</h4>
                            <ul>
                                <li>트랜잭션 ID: 트랜잭션을 식별하는 고유한 해시 값</li>
                                <li>보낸 주소: 트랜잭션을 보낸 계정 주소</li>
                                <li>받는 주소: 트랜잭션을 받는 계정 주소 또는 스마트 컨트랙트 주소</li>
                                <li>전송된 금액: 트랜잭션에서 이동한 암호화폐 또는 토큰의 양</li>
                                <li>가스 사용량: 트랜잭션을 처리하는 데 사용된 가스의 양</li>
                            </ul>

                            <h4>블록 데이터 (Block Data)</h4>
                            <ul>
                                <li>블록 해시: 특정 블록을 식별하는 고유 해시 값</li>
                                <li>블록 번호: 해당 블록의 높이(높은 숫자일수록 최신 블록)</li>
                                <li>블록 생성 시간: 블록이 생성된 시간</li>
                                <li>채굴자 주소: 블록을 생성한 채굴자의 주소</li>
                                <li>트랜잭션 목록: 블록에 포함된 모든 트랜잭션</li>
                            </ul>

                            <h4>상태 데이터 (State Data)</h4>
                            <ul>
                                <li>계정 잔액: 특정 계정의 보유 암호화폐 양</li>
                                <li>스마트 컨트랙트 저장소: 스마트 컨트랙트가 저장하는 데이터</li>
                                <li>토큰 보유량: ERC-20 같은 토큰을 보유한 계정의 잔액 정보</li>
                            </ul>

                            <h3>2. 온체인 데이터의 활용 사례</h3>
                            <ul>
                                <li>트랜잭션 모니터링</li>
                                <li>디파이 분석</li>
                                <li>NFT 조회</li>
                                <li>스마트 컨트랙트 상태 확인</li>
                            </ul>

                            <h3>3. 온체인 데이터를 가져오는 방법</h3>
                            <ul>
                                <li>온체인 데이터는 ‘블록체인 노드’와 상호작용하는 방법을 통해 조회할 수 있다.</li>
                                <li>Web3.js, Ethers.js 같은 SDK나 RPC(Node API 서비스)를 사용할 수 있다.</li>
                            </ul>

                            <h4>온체인 데이터를 조회하는 방법</h4>
                            <ul>
                                <li>직접 노드 운영(Geth, Erigon, Besu)</li>
                                <li>RPC 인프라 제공업체 이용(Infura, Alchemy, QuickNode)</li>
                                <li>Web3 SDK 활용(Web3.js, Ethers.js 등을 사용해 온체인 데이터 조회)</li>
                            </ul>
                        </div>


                        <h2>노드와 통신</h2>
                        <div className="section">
                            <ul>
                                <li>블록체인은 블록과 트랜잭션 데이터를 확인할 수 있는 소프트웨어(노드)를 실행하는 컴퓨터의 분산 네트워크</li>
                                <li>노드를 실행하려면 컴퓨터에 ‘클라이언트’라고 하는 응용 프로그램이 필요하다.</li>
                            </ul>

                            <h3>노드와 클라이언트 간 통신 - JSON-RPC</h3>
                            <h4>RPC(Remote Procedure Call)</h4>
                            <ul>
                                <li>RPC란, 별도의 원격 제어를 위한 코딩 없이 다른 주소 공간에서 리모트의 함수나 프로시저를 실행할 수 있게 해주는 프로세스 간 통신이다.</li>
                                <li>RPC 모델은 분산 컴퓨팅 환경에서 많이 사용되었으며, 현재에는 MSA(Micro Software Architecture)에서 마이크로 서비스 간에도 많이 사용되는 방식이다.</li>
                            </ul>

                            <h4>JSON-RPC API</h4>
                            <ul>
                                <li>JSON-RPC는 무상태성(stateless)의 경량 RPC(원격 프로시저 호출) 프로토콜이다.</li>
                                <li>Spec(사양)에는 여러 데이터 구조와 처리 규칙을 정의하고 있다.</li>
                                <li>JSON-RPC API를 통해 이더리움 노드와 직접 상호작용할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>이더리움의 화폐 단위</h2>
                        <div className="section">
                            <ul>
                                <li>이더리움은 기본 화폐 단위인 ETH(Ether) 외에도, Wei, Gwei 등 다양한 단위를 사용한다.</li>
                                <li>이 단위들은 이더리움 네트워크에서 트랜잭션 수수료(Gas Fee) 계산 및 정밀한 금액을 표현하는 데 필수적이다.</li>
                            </ul>

                            <h3>가장 많이 사용되는 단위</h3>
                            <ul>
                                <li>Wei: 이더리움의 가장 작은 단위(10^-18)</li>
                                <li>Gwei: 이더리움 트랜잭션 수수료(Gas Fee) 계산에서 주로 사용됨(10^-9)</li>
                                <li>Ether: 이더리움 네트워크의 기본 화폐 단위</li>
                            </ul>
                        </div>

                        <h2>Ganache</h2>
                        <div className="section">
                            <ul>
                                <li>가상 혹은 프라이빗 네트워크 상에서 스마트 컨트랙트를 구동해보는 것</li>
                            </ul>

                            <h3>개발 및 배포 과정</h3>
                            <ul>
                                <li>TestRPC - TestNet - MainNet</li>
                                <li>TestRPC: 가나슈를 사용해 로컬 환경에서 개발 진행</li>
                                <li>TestNet: 개발 완료 후 MainNet과 동일한 환경에서 테스트</li>
                                <li>MainNet: 실제 서비스에 사용할 수 있도록 배포</li>
                            </ul>
                        </div>

                        <h2>블록체인 인프라 서비스 - Infura</h2>
                        <div className="section">
                            <ul>
                                <li>원격 이더리움 노드를 통해 이더리움 네트워크에 접근할 수 있게 해주는 서비스</li>
                                <li>RPC URL과 API Key를 제공하여, 직접 이더리움 네트워크에 접근하여 블록을 동기화하지 않아도 네트워크에 접근할 수 있다.</li>
                            </ul>
                        </div>
                    </div>
                );

                {/* 3/13 */ }

            case 'DApp':
                return (
                    <div className="container">
                        <h2>DApp</h2>
                        <div className="section">
                            <h3>DApp(Decentralized Application)</h3>
                            <ul>
                                <li>탈중앙화 애플리케이션으로, 스마트 컨트랙트를 지원하는 블록체인 플랫폼 위에서 작동한다.</li>
                                <li>블록체인 기술의 특징을 활용하여 중앙 서버가 필요 없는 구조를 가지며, ‘스마트 컨트랙트’를 통해 특정 조건이 충족되면 자동으로 실행된다.</li>
                                <li>DApp의 암호화폐는 보통 ‘토큰(Token)’이라고 부르며, 블록체인 네트워크의 기본 암호화폐와 구분된다.</li>
                            </ul>

                            <h3>DApp의 특징</h3>
                            <ul>
                                <li>탈중앙화</li>
                                <li>위변조 불가</li>
                                <li>가동성</li>
                                <li>토큰 이코노미</li>
                            </ul>

                            <h3>DApp과 전통적인 앱의 차이</h3>
                            <ul>
                                <li>일반적인 앱은 회원가입 시 개인 정보를 입력해 계정을 만들고, 로그인 후 즉시 서비스를 이용할 수 있다.</li>
                                <li>DApp은 블록체인 네트워크와 상호작용해야 하므로 이더리움 등의 ‘블록체인 지갑’이 필요하다.</li>
                            </ul>

                            <h3>DApp 개발의 특징</h3>
                            <ul>
                                <li>스마트 계약이 메인넷에서 배포된 후에는 변경이 불가능하므로 더 엄격한 품질 보증과 정밀한 테스트가 필요하다.</li>
                            </ul>
                        </div>

                        <h2>DApp의 사례</h2>
                        <div className="section">
                            <h3>금융: DeFi(탈중앙화 금융)</h3>
                            <ul>
                                <li>Aave: 탈중앙화 대출 플랫폼으로, 사용자가 암호화폐를 담보로 대출하거나 이자를 받을 수 있다.</li>
                                <li>Uniswap: 이더리움 기반의 탈중앙화 거래소(DEX)로, 사용자가 스마트 계약을 통해 암호화폐를 교환할 수 있다.</li>
                                <li>Compound: 탈중앙화 대출 및 대출 프로토콜로, 사용자는 암호화폐를 예치하여 이자를 받을 수 있다.</li>
                            </ul>

                            <h3>게임: Gaming</h3>
                            <ul>
                                <li>Axie Infinity: P2E 게임</li>
                                <li>Decentraland: 블록체인 기반 가상현실 플랫폼</li>
                                <li>Gods Unchained: 블록체인 기반의 트레이딩 카드 게임, 게임 내 모든 카드는 NFT로 소유 가능하다.</li>
                            </ul>

                            <h3>소셜 미디어(Social Media)</h3>
                            <ul>
                                <li>Steemit: 콘텐츠 게시와 보상을 결합한 블록체인 기반 소셜 미디어 플랫폼</li>
                                <li>Minds: 자유로운 표현을 위한 블록체인 기반 소셜 네트워크</li>
                                <li>Lens Protocol: 사용자 소유의 소셜 그래프를 생성하는 탈중앙화 프로토콜</li>
                            </ul>

                            <h3>NFT 마켓플레이스</h3>
                            <ul>
                                <li>OpenSea: 세계 최대의 NFT 거래소로, 사용자는 디지털 예술품, 음악, 도메인 이름 등 다양한 자산을 사고팔 수 있다.</li>
                                <li>Rarible: NFT를 생성하고 거래할 수 있는 탈중앙화 플랫폼</li>
                                <li>Foundation: 디지털 예술가와 수집가를 연결하는 NFT 마켓플레이스</li>
                            </ul>
                        </div>

                        <h2>코인 VS 토큰</h2>
                        <div className="section">
                            <h3>토큰 발행 방법: 스마트 컨트랙트</h3>
                            <ul>
                                <li>이더리움은 비트코인과 다르게, 단순히 코인을 주고받는 것 이외에도 다양한 행위를 할 수 있다.</li>
                                <li>토큰의 발행</li>
                                <li>특정 조건을 만족했을 때, 토큰 전송</li>
                            </ul>

                            <h3>코인과 토큰의 차이</h3>
                            <ul>
                                <li>코인: 블록체인 네트워크에서 발행하는 것(채굴에 대한 보상)</li>
                                <li>토큰: 코인 네트워크 위에서 발행하는 것(서비스 플랫폼 생태계 활성화)</li>
                            </ul>
                        </div>

                        <h2>토큰 이코노미</h2>
                        <div className="section">
                            <h3>심리학에서의 토큰 이코노미</h3>
                            <ul>
                                <li>특정한 목표 행동을 끌어내기 위해, 목표 행동을 수행했을 때마다 ‘토큰’을 보상으로 제공</li>
                                <li>토큰을 유/무형의 가치와 교환함으로써 목표 행동을 강화하는 방법</li>
                            </ul>

                            <h3>토큰 이코노미 & 크립토 이코노미 차이점</h3>
                            <ul>
                                <li>토큰 이코노미: 행동심리학에서 특정 행동을 강화하기 위한 보상 시스템</li>
                                <li>크립토 이코노미: 블록체인과 암호화폐를 활용한 경제 시스템</li>
                            </ul>

                            <h3>토큰 이코노미의 3요소</h3>
                            <ul>
                                <li>토큰</li>
                                <li>강화제</li>
                                <li>특정 목표 행동</li>
                            </ul>

                            <h3>블록체인 토큰 이코노미 설계 시 고려할 사항</h3>
                            <ul>
                                <li>보상(토큰)은 어떤 기준으로 어떤 참여자에게 줄 것인가?</li>
                                <li>어떻게 토큰이 가치를 갖게 할 것인가?</li>
                                <li>사람들이 토큰을 보유해야 할 유인은 무엇인가?</li>
                                <li>토큰의 발행량은 얼마로 하고 어떻게 분배할 것인가?</li>
                                <li>네트워크의 성장과 토큰의 가치 상승을 어떻게 연동할 것인가?</li>
                                <li>토큰의 가격 변동성은 어떻게 해결할 것인가?</li>
                            </ul>
                        </div>
                    </div>
                )

                {/* 3/14 */ }

            case 'Wallet':
                return (
                    <div className="container">
                        <h2>지갑(Wallet)</h2>

                        <div className="section">
                            <h3>개념 정리</h3>
                            <ul>
                                <li>블록체인 지갑은 암호화폐를 저장하는 물리적인 지갑이 아니라, ‘개인 키(Private Key)’와 ‘공개 키(Public Key)’를 관리하는 소프트웨어 또는 하드웨어이다.</li>
                                <li>지갑을 사용하면 블록체인 네트워크에서 ‘암호화폐 전송’, ‘수신’, ‘서명 및 보관’이 가능하다.</li>
                            </ul>
                        </div>

                        <h2>기본 개념</h2>

                        <div className="section">
                            <h3>기본 개념</h3>
                            <ul>
                                <li>공개 키(Public Key): 블록체인 네트워크에서 지갑 주소를 생성하는데 사용된다.</li>
                                <li>개인 키(Private Key): 암호화폐에 대한 소유권을 증명하는 비밀 키</li>
                                <li>지갑 주소: 공개 키를 기반으로 생성된 사용자 계정 주소</li>
                            </ul>
                        </div>

                        <h2>지갑의 종류</h2>

                        <div className="section">
                            <h3>핫 월렛(Hot Wallet)</h3>
                            <ul>
                                <li>인터넷 주소가 연결되어 있어 온라인 상태에서 실시간으로 거래 정보를 주고받을 수 있다는 장점이 있다.</li>
                                <li>개인 키가 온라인에 노출되기에 해킹 등 보안 문제에 취약하다는 단점이 있다.</li>
                            </ul>

                            <h4>핫 월렛의 종류</h4>
                            <ul>
                                <li>웹 월렛: 웹 기반으로 호스팅되는 지갑</li>
                                <li>데스크톱(PC) 월렛: OS에 다운로드하여 작동할 수 있는 애플리케이션</li>
                                <li>모바일 월렛: 데스크톱 & 웹 지갑의 모바일 형태</li>
                            </ul>

                            <h3>콜드 월렛(Cold Wallet)</h3>
                            <ul>
                                <li>지갑의 개인 키를 오프라인으로 보관하는 지갑</li>
                                <li>인터넷이 차단되어 있기에 ‘실시간 거래가 불가능’해 불편하다는 단점이 있다.</li>
                            </ul>

                            <h4>콜드 월렛의 종류</h4>
                            <ul>
                                <li>페이퍼 월렛: 지갑 주소를 만들고 주소를 종이에 써서 보관하는 형식</li>
                                <li>하드웨어 월렛: 개인 키를 USB나 카드에 보관하는 방식</li>
                            </ul>
                        </div>

                        <h2>비결정적 월렛</h2>

                        <div className="section">
                            <h3>비결정적 월렛</h3>
                            <ul>
                                <li>각 키가 독립적으로 생성되며, 시드 없이 비밀키를 무작위로 생성하는 방식</li>
                                <li>동일한 개인키를 다시 생성할 수 없기 때문에 주소를 재사용하지 않는 것이 일반적이며, 개별 키를 모두 백업해야 하는 불편함이 있다.</li>
                            </ul>
                        </div>

                        <h2>결정적(시드) 월렛</h2>

                        <div className="section">
                            <h3>결정적(시드) 월렛</h3>
                            <ul>
                                <li>하나의 시드에서 모든 비밀키를 파생하며, 각 비밀키는 시드와 특정 인덱스의 조합으로 결정된다.</li>
                                <li>시드만 알고 있다면 같은 키를 다시 생성할 수 있으므로 백업과 복구가 용이하다.</li>
                            </ul>
                        </div>

                        <h2>HD 월렛</h2>

                        <div className="section">
                            <h3>HD 월렛의 특징</h3>
                            <ul>
                                <li>결정적 특성
                                    <ul>
                                        <li>하나의 시드만 관리하면 모든 비밀키를 유도할 수 있어 백업 및 복구가 용이하다.</li>
                                        <li>비밀키를 개별적으로 관리할 필요가 없다.</li>
                                    </ul>
                                </li>
                                <li>계층적 구조
                                    <ul>
                                        <li>HD 월렛의 주소는 트리 구조를 통해 생성된다.</li>
                                        <li>상위 키(부모 키)에서 하위 키(자식 키)를 유도하는 방식으로 확장된다.</li>
                                        <li>각 노드의 인덱스와 시드를 결합하여 비밀키를 생성하므로, 체계적인 키 관리가 가능하다.</li>
                                    </ul>
                                </li>
                                <li>유도 가능한 키 체계
                                    <ul>
                                        <li>부모 키에서 자식 키를 유도할 수 있으며, BIP-44에서는 표준화된 경로를 정의하여 특정 코인과 계정에 맞는 키를 생성할 수 있다.</li>
                                        <li>이러한 구조 덕분에 여러 개의 주소를 생성하더라도, 하나의 시드만으로 전체 지갑을 복구할 수 있다.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>HD Wallet 계정 생성 주요 개념</h2>

                        <div className="section">
                            <h3>시드</h3>
                            <ul>
                                <li>암호학적으로 안전한 무작위 숫자에서 니모닉 연상 단어를 생성한 후, 이를 바탕으로 HD 지갑의 시드를 생성한다.</li>
                                <li>시드는 지갑의 ‘루트 키’ 역할을 하며, 이를 통해 모든 하위 키가 결정적으로 파생된다.</li>
                                <li>니모닉 연상 단어만 알고 있다면, 언제 어디서나 지갑을 복구할 수 있다.</li>
                            </ul>

                            <h3>경로</h3>
                            <ul>
                                <li>키 경로는 계층적 구조를 따르며, 트리 구조에서 각 키의 위치를 나타내는 규칙이다.</li>
                                <li>각 트리 레벨은 슬래시(/)로 구분되며, 경로를 따라 체계적으로 키를 관리할 수 있다.</li>
                            </ul>

                            <h3>구조</h3>
                            <ul>
                                <li>m/0: 마스터 비밀키의 첫 번째 자식 비밀키</li>
                                <li>M/0: 첫 번째 자식 공개키</li>
                                <li>m/0/2: 마스터 비밀키의 첫 번째 자식의 두 번째 자식 비밀키(순차적 구조)</li>
                            </ul>
                        </div>

                        <h2>니모닉(Mnemonic)</h2>

                        <div className="section">
                            <ul>
                                <li>BIP-39 표준에서 제안된 방식, 난수를 12개 또는 24개의 영어 단어로 변환한 시드 복구 방법</li>
                                <li>시드 키를 생성하는 데 사용하는 니모닉 연상 단어를 사용해 지갑을 관리한다.</li>
                                <li>인간에게 익숙한 영단어로 지갑을 관리하기 때문에 비밀키를 더 쉽게 관리할 수 있게 해준다.</li>
                            </ul>
                        </div>

                    </div >

                );
            case 'BlockChain Trilemma':
                return (
                    <div className="container">
                        <h2>트릴레마란?</h2>

                        <div className="section">
                            <h3>사전적 정의: 트릴레마(trilemma)는 세 가지 옵션 중 어느 것도 받아들이기 어려운 상황을 뜻합니다. 세 가지 문제가 서로 얽혀 있어 해결할 수 없는 상황을 가리키기도 합니다. </h3>

                            <ul>- 트릴레마의 예시
                                <li>거시경제학에서 물가, 실업, 국제수지의 3가지 간에 존재하는 상충관계 </li>
                                <li>블록체인 기술에서 확장성, 탈중앙화, 보안성의 3가지 근본 가치를 동시에 달성하기 어려운 상황 </li>
                                <li>에너지 시스템에서 에너지안보, 에너지 형평성, 환경적 지속가능성의 3가지 핵심적 요소를 동시에 달성하기 어려운 상황 </li>
                            </ul>
                        </div>

                        <h2>블록체인의 트릴레마</h2>

                        <div className="section">
                            <img src={process.env.PUBLIC_URL + '/blockChainTrilemma.png'} width={800} height={400} />

                            <h1>암호화폐에서의 트릴레마</h1>
                            <p>
                                암호화폐의 트릴레마는 <strong>'확장성'</strong> (거래 처리 속도), <strong>'보안성'</strong> (네트워크의 안정성),
                                <strong>'탈중앙화'</strong> (독점적이지 않은 상태) 세 가지 요소 간의 균형 문제를 의미합니다.
                            </p>

                            <img src={process.env.PUBLIC_URL + "/blockChainTrilemmaEx.png"} width={800} height={400} />

                            <h2>비트코인의 트릴레마</h2>
                            <p>
                                암호화폐의 대표적인 예시인 <strong>비트코인</strong>은 탈중앙화와 보안성을 확보했지만,
                                블록 생성 시간이 10분으로 고정되어 있어 확장성을 확보하지 못한 상태입니다.
                            </p>
                        </div>

                        <h2>비트코인의 트릴레마를 극복하기 위한 노력</h2>

                        <div className="section">
                            <h3>- Layer 2</h3>

                            <h3><li>라이트닝 네트워크(오프체인 결제 솔루션)</li></h3>


                            1. 두 사용자간의 결제 채널을 개설한다.
                            <br></br>
                            2. 결제 채널 안에서 서로의 잔액을 갱신하는 방식으로 거래한다.
                            <br></br>
                            3. 결제 채널을 종료할 때 최종 거래 내역만 블록체인에 기록한다.
                        </div>

                        <h2>이더리움의 트릴레마</h2>

                        <div className="section">
                            <p>
                                현재 <strong>이더리움</strong>은 다른 L1 블록체인 (솔라나, 니어, 수이 등)과는 다르게,
                                탈중앙화와 확장성을 더욱 강화하는 방향으로 나아가고 있습니다.
                                보안성은 이더리움의 가치가 상승하면 자연스럽게 따라올 것이라고 예상됩니다.
                            </p>

                            <h3>보안성이 자동적으로 향상되는 이유</h3>
                            <ul>
                                <li>스테이킹된 이더리움의 가치가 상승하면, 더 많은 사용자가 스테이킹에 참여</li>
                                <li>검증자가 증가하여 네트워크의 분산성이 향상</li>
                                <li>네트워크 공격에 필요한 비용이 증가하여 보안성 강화</li>
                            </ul>
                        </div>

                        <h2>이더리움의 트릴레마를 극복하기 위한 노력</h2>

                        <div className="section">
                            <h3>- Layer 2</h3>

                            <h3>Rollup: 블록체인의 확장성을 높이기 위해 다수의 거래를 오프체인에서 처리한 뒤, 요약된 데이터만 온체인에 기록하는 기술</h3>
                            <ul>
                                <li>Optimistic Rollup이란?</li>
                                기본적으로 '모든 거래가 정상적으로 이루어졌다고 가정(Optimistic)하고 진행하는 롤업
                            </ul>
                            <ul>
                                <li>ZK Rollup이란?</li>
                                거래가 올바르게 수행되었음을 수학적으로 증명하여 이더리움에 기록하는 방식
                            </ul>

                            <br></br>
                            <h3>이더리움 노드 분포도에 대한 대시보드</h3>
                            <img src={process.env.PUBLIC_URL + "/ethereumNodeDashboard.png"} width={800} height={500} />
                        </div>

                        <h2>결론</h2>

                        <div className="section">
                            <p>
                                현재 이더리움은 <strong>탈중앙화</strong>와 <strong>확장성</strong>을 향상시키려 하며,
                                <strong> 보안성</strong>은 이더리움 가치 상승에 따라 자연스럽게 강화될 것으로 보고 있습니다.
                            </p>
                            <br></br>
                        </div>

                        <h2>솔라나</h2>

                        <div className="section">
                            <h3>솔라나 노드 분포도에 대한 대시보드</h3>
                            <img src={process.env.PUBLIC_URL + "/solanaDashboard.png"} width={800} height={400} />

                            <h1>솔라나의 핵심 기술: Proof of History (PoH)</h1>
                            <p>솔라나(Solana)는 최근 몇 년간 큰 주목을 받고 있는 블록체인 플랫폼 중 하나입니다. 그 이유 중 하나는 바로 솔라나가 도입한 독특한 합의 메커니즘인 'Proof of History(PoH)' 때문입니다. 이 기술은 솔라나가 높은 처리량과 낮은 거래 지연 시간을 달성하는 데 핵심적인 역할을 합니다.</p>
                        </div>

                        <h2>Proof of History(PoH)란?</h2>

                        <div className="section">
                            <p>PoH는 솔라나가 사용하는 합의 메커니즘으로, 거래가 일어난 순서를 기록하고 검증하는 방법입니다. 전통적인 블록체인 시스템에서는 거래 순서를 합의하기 위해 모든 노드가 거래 데이터를 공유하고 검증하는 과정이 필요했습니다. 이 과정은 시간이 많이 소요되며 네트워크의 확장성을 제한하는 주요 요인 중 하나였습니다.</p>

                            <p>PoH는 '시간의 증명'을 통해 각 거래가 발생한 시점을 블록체인에 기록합니다. 이는 고유한 해시 함수(SHA-256)를 사용하여 생성된 연속적인 해시값으로, 각 거래 사이에 일정한 시간 간격을 두어 이를 기록합니다. 이로 인해, 솔라나는 거래가 일어난 순서를 빠르게 결정할 수 있으며, 이는 전체 네트워크의 성능을 크게 향상시킵니다.</p>
                        </div>

                        <h2>PoH가 솔라나의 성능에 기여하는 방법</h2>

                        <div className="section">
                            <ul>
                                <li><strong>높은 처리량:</strong> PoH 덕분에 솔라나는 초당 수십만 건의 거래를 처리할 수 있습니다.</li>
                                <li><strong>낮은 거래 지연 시간:</strong> 거래의 순서를 빠르게 결정할 수 있기 때문에, 솔라나는 거래를 거의 실시간으로 처리할 수 있습니다.</li>
                                <li><strong>확장성:</strong> PoH는 네트워크의 확장성을 크게 향상시킵니다.</li>
                                <li><strong>보안성:</strong> PoH 메커니즘은 거래의 무결성을 보장합니다.</li>
                            </ul>

                            <h3>장점</h3>
                            <p>솔라나는 확장성 측면에서의 블록체인 트릴레마를 해결하며, <strong>빠른 속도</strong>를 제공합니다.</p>

                            <br></br>

                            <h3>- 솔라나 주요 지표 -</h3>
                            <p><img src={process.env.PUBLIC_URL + "/solanaIndicator.png"} width={800} height={600} /></p>

                            <h3>- 이더리움 주요 지표 -</h3>
                            <p><img src={process.env.PUBLIC_URL + "/ethereumIndicator.png"} width={1200} height={400} /></p>

                            <h3>단점</h3>
                            <p>솔라나 체인은 종종 정지되었던 역사를 가지고 있습니다.</p>

                            <img src={process.env.PUBLIC_URL + "/solanaChainStop.png"} width={800} height={400} />
                        </div>

                        <h2>이더리움과 솔라나 비교</h2>

                        <div className="section">
                            <ul>
                                <li><strong>이더리움:</strong>
                                    <ul>
                                        <li>이더리움 2.0(PoW → PoS) 도입으로 확장성과 보안성 향상 기대</li>
                                        <li>지속적인 하드포크와 네트워크 업그레이드를 통해 기능 추가 및 보안 강화</li>
                                        <li>레이어 2 솔루션(롤업, 플라즈마)을 통한 확장성 향상</li>
                                    </ul>
                                </li>
                                <li><strong>솔라나:</strong>
                                    <ul>
                                        <li>2025년 예정된 '파이어댄서'를 통한 확장성과 보안성 향상 기대</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>결론</h2>

                        <div className="section">
                            <p>Proof of History는 솔라나의 핵심 기술 중 하나로, 블록체인의 성능과 확장성, 보안성을 크게 향상시키는 데 기여하고 있습니다.</p>
                            <p>이 독특한 합의 메커니즘 덕분에 솔라나는 현재 블록체인 기술의 한계를 극복하고, 더 빠르고, 더 안전하며, 더 확장 가능한 네트워크를 제공할 수 있게 되었습니다.</p>
                            <p>비록 이더리움과 비교했을 때 네트워크의 안정성이 다소 떨어지지만, 사용자와 개발자 모두에게 매력적인 플랫폼으로 자리매김하고 있으며, 앞으로 더 많은 혁신과 성장이 기대됩니다.</p>
                        </div>
                    </div>
                )

            case 'TokenomicsResearch':
                return (
                    <div className="container">
                        <h2>토크노믹스 리서치</h2>

                        <img src={process.env.PUBLIC_URL + '/SolDeFiRanking.png'} width={800} height={400} />

                        <h2>JUP 토큰 이코노미 구성</h2>
                        <div className="section">

                            <h3>초기 분배 구조</h3>

                            <img src={process.env.PUBLIC_URL + '/JupTokenomics.png'} width={800} height={400} />

                            <ul>
                                <li>JUP의 초기 공급량(100억 개)은 다음과 같이 배분되었습니다.</li>
                                <ul>
                                    <li>사용자 에어드랍: 40% (4 billion JUP)
                                        <ul>
                                            <li>Jupiter를 사용한 트레이더들에게 지급</li>
                                            <li>DeFi 및 DEX 애그리게이터 사용자 기반 확대</li>
                                        </ul>
                                    </li>
                                    <li>커뮤니티 및 생태계 성장: 50% (5 billion JUP)
                                        <ul>
                                            <li>개발자 지원, 유동성 프로그램, 인센티브 등에 사용</li>
                                            <li>DAO 운영 자금</li>
                                        </ul>
                                    </li>
                                    <li>코어 팀 및 파트너십: 10% (1 billion JUP)
                                        <ul>
                                            <li>팀, 초기 투자자 및 전략적 파트너 보상</li>
                                        </ul>
                                    </li>
                                </ul>
                            </ul>

                            <h3>Jupiter의 토큰 활용 방식</h3>
                            <ul>
                                <li>거래 수수료 지불
                                    <ul>
                                        <li>Jupiter에서 토큰 스왑 시, JUP을 수수료로 사용 가능</li>
                                        <li>특정 기능 사용 시 할인을 제공할 가능성 있음</li>
                                    </ul>
                                </li>
                                <li>거버넌스 참여
                                    <ul>
                                        <li>JUP 보유자는 Jupiter DAO에서 거버넌스 제안 및 투표 가능</li>
                                        <li>Jupiter의 미래 방향(수수료율, 유동성 정책 등)에 직접적인 영향</li>
                                    </ul>
                                </li>
                                <li>유동성 인센티브 및 보상
                                    <ul>
                                        <li>AMM(Automated Market Maker) 유동성 공급자에게 JUP 토큰 지급</li>
                                        <li>Jupiter 내 다양한 기능(예: 실행 최적화, Flash Loan 등)에서 JUP 활용 가능</li>
                                    </ul>
                                </li>
                                <li>DeFi 및 기타 Jupiter 생태계 프로젝트 참여
                                    <ul>
                                        <li>Jupiter는 단순한 DEX 애그리게이터가 아니라, 다양한 DeFi 제품을 출시할 계획</li>
                                        <li>JUP 보유자는 신규 프로젝트에 대한 혜택을 받을 가능성 큼</li>
                                    </ul>
                                </li>
                            </ul>

                            <img src={process.env.PUBLIC_URL + '/JupBurn.png'} width={800} height={400} />

                        </div>

                        <h2>RAY 토큰 이코노미 구성</h2>
                        <div className="section">

                            <img src={process.env.PUBLIC_URL + '/RaydiumTokenomics.png'} width={800} height={400} />

                            <h3>유동성 공급(LP) 및 스테이킹 보상</h3>
                            <ul>
                                <li>유저가 Raydium의 유동성 풀(LP)에 토큰을 예치하면 RAY 토큰을 보상으로 지급</li>
                                <li>RAY를 스테이킹하면 추가적인 보상 획득 가능</li>
                            </ul>

                            <h3>거래 수수료 활용</h3>
                            <ul>
                                <li>Raydium에서 트레이딩 시, 일정 부분의 수수료가 발생하며, 일부는 RAY 홀더에게 배분될 가능성 있음</li>
                                <li>향후 거버넌스를 통해 RAY 수수료 구조 변경 가능</li>
                            </ul>

                            <img src={process.env.PUBLIC_URL + '/RayBuyback.png'} width={1200} height={400} />

                            <h3>거버넌스 참여 (Raydium DAO)</h3>
                            <ul>
                                <li>RAY 보유자는 거버넌스 투표를 통해 프로토콜 업그레이드 및 정책 변경에 참여 가능</li>
                                <li>DEX 운영 방식 및 수수료 조정 등에 직접적인 영향력 행사</li>
                            </ul>

                            <h3>AcceleRaytor (레이디움 런치패드) 참여</h3>
                            <ul>
                                <li>RAY 보유자는 Raydium의 IDO 플랫폼인 AcceleRaytor에서 신규 프로젝트 토큰 구매 가능</li>
                                <li>RAY를 스테이킹하면 더 많은 할당량을 받을 가능성 있음</li>
                            </ul>

                            <h3>NFT 및 GameFi 생태계 확장</h3>
                            <ul>
                                <li>Raydium은 Solana 기반 NFT 및 GameFi 프로젝트와 협력하여, RAY 토큰이 게임 및 NFT 거래에서도 활용될 가능성 있음</li>
                            </ul>

                            <h3>RAY의 성장 전략 및 미래 전망</h3>
                            <ul>
                                <li>Solana 생태계와의 강력한 연계
                                    <ul>
                                        <li>Raydium은 Serum, Jupiter 등 Solana DEX들과 깊이 연계되어 있음</li>
                                        <li>Solana 기반 프로젝트들이 성장할수록 Raydium의 유동성도 증가할 가능성이 높음</li>
                                    </ul>
                                </li>
                                <li>AcceleRaytor 통한 신규 프로젝트 활성화
                                    <ul>
                                        <li>Solana 생태계에서 신규 프로젝트들이 자금을 조달하는 주요 플랫폼 중 하나로 자리 잡음</li>
                                        <li>지속적인 IDO 진행으로 RAY 수요 증가 유도</li>
                                    </ul>
                                </li>
                                <li>DeFi & NFT 융합 지원
                                    <ul>
                                        <li>NFT-Fi(DeFi + NFT) 및 GameFi 프로젝트와 협력하여 RAY 토큰의 사용성을 확장</li>
                                        <li>예: Raydium 기반 NFT 거래 마켓 연동 가능성</li>
                                    </ul>
                                </li>
                                <li>DAO 기반의 탈중앙화 운영 강화
                                    <ul>
                                        <li>향후 거버넌스 강화를 통해 완전한 탈중앙화 목표</li>
                                        <li>RAY 보유자들이 직접 프로토콜 수익 배분 및 주요 정책을 결정하도록 유도</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                )
            case 'Truffle & Hardhat':
                return (
                    <div className="container">
                        <h2>스마트 컨트랙트를 배포하는 과정</h2>
                        <div className="section">
                            <p>‘컴파일’과 ‘배포’ 두 단계로 나뉘며, 각각 EVM 스마트 컨트랙트 개발의 필수적인 과정</p>

                            <h3>1. 스마트 컨트랙트 배포 과정 개요</h3>
                            <ul>
                                <li>컴파일(Compile): Solidity 코드를 EVM(이더리움 가상 머신)이 이해할 수 있는 바이트코드(Bytecode)로 변환</li>
                                <li>배포(Deploy): 변환된 바이트코드를 트랜잭션을 통해 블록체인에 배포</li>
                            </ul>

                            <h3>2. 컴파일(Compile)</h3>
                            <p>컴파일 과정은 Solidity 코드를 EVM이 이해할 수 있도록 변환하는 과정이다.</p>

                            <h4>컴파일 과정에서 수행하는 작업</h4>
                            <ul>
                                <li>Solidity 소스 코드(.sol) {arrow} 바이트코드(.bin)로 변환</li>
                                <li>ABI(Application Binary Interface) 생성(.json 파일)</li>
                                <li>컴파일 된 JSON 파일 저장</li>
                            </ul>

                            <h3>3. 배포(Deploy)</h3>
                            <p>배포 과정은 변환된 바이트코드를 블록체인에 올리는 과정</p>

                            <h4>배포 과정</h4>
                            <ul>
                                <li>스마트 컨트랙트 배포 트랜잭션 생성 및 블록체인에 전송</li>
                                <li>배포된 컨트랙트 주소 반환</li>
                            </ul>

                            <h4>배포 후 블록체인 상태</h4>
                            <ul>
                                <li>스마트 컨트랙트가 블록체인에 저장됨</li>
                                <li>컨트랙트 주소가 생성됨</li>
                                <li>이후 해당 주소를 사용하여 컨트랙트와 상호작용 가능</li>
                            </ul>

                            <h3>4. 컴파일 VS 배포 비교</h3>
                            <ul>
                                <li>컴파일은 스마트 컨트랙트를 블록체인에서 실행 가능한 형태로 변환하는 과정</li>
                                <li>배포는 변환된 코드를 실제 블록체인에 올리는 과정</li>
                            </ul>

                            <h2>Truffle</h2>
                            <div className="section">
                                <p>EVM 스마트 컨트랙트 개발을 쉽게 할 수 있도록 도와주는 프레임워크</p>
                                <ul>
                                    <li>스마트 컨트랙트의 개발, 테스트, 배포 및 네트워크 관리를 효율적으로 수행하도록 도와준다.</li>
                                    <li>node.js에서 동작을 하여 npm 으로 설치 할 수 있다.</li>
                                </ul>

                                <h4>Truffle 프로젝트 생성</h4>
                                <ul>
                                    <li>truffle init {arrow} Truffle Sample Project를 만들어준다.</li>
                                </ul>

                                <h4>Truffle Develop</h4>
                                <ul>
                                    <li>truffle develop {arrow} truffle에서 기본적으로 제공하는 이더리움 클라이언트</li>
                                </ul>

                                <h4>스마트 컨트랙트 작업</h4>
                                <ul>
                                    <li>스마트 컨트랙트 컴파일: compile</li>
                                    <li>스마트 컨트랙트 배포: migrate</li>
                                    <li>스마트 컨트랙트 테스트: test</li>
                                </ul>
                            </div>

                            <h2>Hardhat</h2>
                            <div className="section">
                                <p>EVM 스마트 컨트랙트 개발을 쉽게 할 수 있도록 도와주는 프레임워크</p>

                                <h4>Hardhat 프로젝트 생성</h4>
                                <ul>
                                    <li>npx hardhat init {arrow} Hardhat Sample-Hardhat Project를 만들어준다.</li>
                                </ul>

                                <h4>로컬 블록체인 네트워크 실행</h4>
                                <ul>
                                    <li>npx hardhat node</li>
                                </ul>

                                <h4>스마트 컨트랙트 작업</h4>
                                <ul>
                                    <li>스마트 컨트랙트 컴파일: npx hardhat compile</li>
                                    <li>스마트 컨트랙트 배포: npx hardhat ignition deploy</li>
                                    <li>스마트 컨트랙트 테스트: npx hardhat test</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                )
        }
    };

    return (
        <div className="blockchain-network">
            {renderContent()}
        </div>
    );
}

export default BlockChainNetwork;
