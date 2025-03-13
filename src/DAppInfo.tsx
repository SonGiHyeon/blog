import React, { useState } from 'react';

const DAppInfo = () => {
    const [showDAppInfo, setshowDAppInfo] = useState(false); // 1주차 정리본을 표시할지 말지에 대한 상태

    const toggleshowDAppInfo = () => {
        setshowDAppInfo(!showDAppInfo); // 상태를 반전시켜서 보이거나 숨기게끔 설정
    };

    return (
        <div className="container">
            <button onClick={toggleshowDAppInfo}>
                DApp 정리
            </button>

            {showDAppInfo && (
                <section id="DAppInfosummary">

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

                </section>
            )
            }
            {/* 다른 섹션들 */}
        </div >
    );
};

export default DAppInfo;
