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

                </section>
            )
            }
            {/* 다른 섹션들 */}
        </div >
    );
};

export default BlockChainNetwork;
