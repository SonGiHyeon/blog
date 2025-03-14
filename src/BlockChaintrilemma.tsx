import React, { useState } from 'react';

const BlockChaintrilemma = () => {
    const [showBlockChaintrilemma, setshowBlockChaintrilemma] = useState(false); // 1주차 정리본을 표시할지 말지에 대한 상태

    const toggleshowBlockChaintrilemma = () => {
        setshowBlockChaintrilemma(!showBlockChaintrilemma); // 상태를 반전시켜서 보이거나 숨기게끔 설정
    };
    // L2 내용 추가(비트, 이더)
    // 솔라나 백서 사진?
    return (
        <div className="container">
            <button onClick={toggleshowBlockChaintrilemma}>
                블록체인 트릴레마
            </button>

            {showBlockChaintrilemma && (
                <section id="BlockChainNetwork-summary">
                    <h2>트릴레마란?</h2>

                    <h3>사전적 정의: 트릴레마(trilemma)는 세 가지 옵션 중 어느 것도 받아들이기 어려운 상황을 뜻합니다. 세 가지 문제가 서로 얽혀 있어 해결할 수 없는 상황을 가리키기도 합니다. </h3>

                    <ul>- 트릴레마의 예시
                        <li>거시경제학에서 물가, 실업, 국제수지의 3가지 간에 존재하는 상충관계 </li>
                        <li>블록체인 기술에서 확장성, 탈중앙화, 보안성의 3가지 근본 가치를 동시에 달성하기 어려운 상황 </li>
                        <li>에너지 시스템에서 에너지안보, 에너지 형평성, 환경적 지속가능성의 3가지 핵심적 요소를 동시에 달성하기 어려운 상황 </li>
                    </ul>

                    <h2>블록체인의 트릴레마</h2>

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

                    <h2>비트코인의 트릴레마를 극복하기 위한 노력</h2>

                    <h3>- Layer 2</h3>

                    <h3><li>라이트닝 네트워크(오프체인 결제 솔루션)</li></h3>


                    1. 두 사용자간의 결제 채널을 개설한다.
                    <br></br>
                    2. 결제 채널 안에서 서로의 잔액을 갱신하는 방식으로 거래한다.
                    <br></br>
                    3. 결제 채널을 종료할 때 최종 거래 내역만 블록체인에 기록한다.



                    <h2>이더리움의 트릴레마</h2>
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

                    <h2>이더리움의 트릴레마를 극복하기 위한 노력</h2>

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

                    <h2>결론</h2>
                    <p>
                        현재 이더리움은 <strong>탈중앙화</strong>와 <strong>확장성</strong>을 향상시키려 하며,
                        <strong> 보안성</strong>은 이더리움 가치 상승에 따라 자연스럽게 강화될 것으로 보고 있습니다.
                    </p>
                    <br></br>

                    <h2>솔라나</h2>

                    <h3>솔라나 노드 분포도에 대한 대시보드</h3>
                    <img src={process.env.PUBLIC_URL + "/solanaDashboard.png"} width={800} height={400} />

                    <h1>솔라나의 핵심 기술: Proof of History (PoH)</h1>
                    <p>솔라나(Solana)는 최근 몇 년간 큰 주목을 받고 있는 블록체인 플랫폼 중 하나입니다. 그 이유 중 하나는 바로 솔라나가 도입한 독특한 합의 메커니즘인 'Proof of History(PoH)' 때문입니다. 이 기술은 솔라나가 높은 처리량과 낮은 거래 지연 시간을 달성하는 데 핵심적인 역할을 합니다.</p>

                    <h2>Proof of History(PoH)란?</h2>
                    <p>PoH는 솔라나가 사용하는 합의 메커니즘으로, 거래가 일어난 순서를 기록하고 검증하는 방법입니다. 전통적인 블록체인 시스템에서는 거래 순서를 합의하기 위해 모든 노드가 거래 데이터를 공유하고 검증하는 과정이 필요했습니다. 이 과정은 시간이 많이 소요되며 네트워크의 확장성을 제한하는 주요 요인 중 하나였습니다.</p>

                    <p>PoH는 '시간의 증명'을 통해 각 거래가 발생한 시점을 블록체인에 기록합니다. 이는 고유한 해시 함수(SHA-256)를 사용하여 생성된 연속적인 해시값으로, 각 거래 사이에 일정한 시간 간격을 두어 이를 기록합니다. 이로 인해, 솔라나는 거래가 일어난 순서를 빠르게 결정할 수 있으며, 이는 전체 네트워크의 성능을 크게 향상시킵니다.</p>

                    <h2>PoH가 솔라나의 성능에 기여하는 방법</h2>
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

                    <h2>이더리움과 솔라나 비교</h2>
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

                    <h2>결론</h2>
                    <p>Proof of History는 솔라나의 핵심 기술 중 하나로, 블록체인의 성능과 확장성, 보안성을 크게 향상시키는 데 기여하고 있습니다.</p>
                    <p>이 독특한 합의 메커니즘 덕분에 솔라나는 현재 블록체인 기술의 한계를 극복하고, 더 빠르고, 더 안전하며, 더 확장 가능한 네트워크를 제공할 수 있게 되었습니다.</p>
                    <p>비록 이더리움과 비교했을 때 네트워크의 안정성이 다소 떨어지지만, 사용자와 개발자 모두에게 매력적인 플랫폼으로 자리매김하고 있으며, 앞으로 더 많은 혁신과 성장이 기대됩니다.</p>
                </section>
            )
            }
            {/* 다른 섹션들 */}
        </div >
    );
};

export default BlockChaintrilemma;
