import React, { useState } from 'react';

const BlockChainNetwork = () => {
    const [showBlockChainNetwork, setshowBlockChainNetwork] = useState(false); // 1주차 정리본을 표시할지 말지에 대한 상태

    const toggleshowBlockChainNetwork = () => {
        setshowBlockChainNetwork(!showBlockChainNetwork); // 상태를 반전시켜서 보이거나 숨기게끔 설정
    };

    return (
        <div className="container">
            <button onClick={toggleshowBlockChainNetwork}>
                블록체인 네트워크
            </button>

            {showBlockChainNetwork && (
                <section id="BlockChainNetwork-summary">

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

                    {/* 3/13 */}

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


                </section>
            )
            }
            {/* 다른 섹션들 */}
        </div >

    );
};

export default BlockChainNetwork;
