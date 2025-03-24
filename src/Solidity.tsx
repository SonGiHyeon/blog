const arrow = "=>";

const Solidity = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'Solditiy Basic Grammar 1':
                return (
                    <div className="container">

                        {/* 3/24 */}

                        <h2>Solidity란?</h2>
                        <div className="section">
                            <h3>이더리움 스마트 컨트랙트를 작성하기 위한 프로그래밍 언어</h3>
                            <ul>
                                <li>Solidity를 활용하면 계약을 자동화하고, 신뢰할 수 있는 거래를 블록체인에서 실행할 수 있다.</li>
                                <li>이더리움뿐만 아니라 Binance Smart Chain, Polygon 등 EVM 호환 네트워크에서도 활용된다.</li>
                            </ul>
                        </div>

                        <h2>Solidity의 역사</h2>
                        <div className="section">
                            <ul>
                                <li>2014년 이더리움 재단에서 개발되었으며, 블록체인 스마트 컨트랙트의 표준 언어로 자리 잡았다.</li>
                            </ul>
                            <h4>2014년</h4>
                            <ul>
                                <li>이더리움 공동 창립자 가빈 우드가 Solidity 개념을 제안</li>
                            </ul>
                            <h4>2015년</h4>
                            <ul>
                                <li>이더리움 재단이 Solidity를 공식적으로 발표</li>
                            </ul>
                            <h4>2017년 이후</h4>
                            <ul>
                                <li>Solidity는 지속적으로 업데이트되며, 보안 및 성능이 개선됨</li>
                            </ul>
                            <h4>현재</h4>
                            <ul>
                                <li>DeFi, NFT, DAO 같은 다양한 블록체인 애플리케이션에 사용됨</li>
                            </ul>
                        </div>

                        <h2>Solidity 설치</h2>
                        <div className="section">
                            <ul>
                                <li>다양한 개발 환경에서 실행할 수 있다. 기본적인 개발을 위해 Hardhat, Truffle, Remix IDE를 사용할 수 있다.</li>
                            </ul>
                            <h4>Remix IDE</h4>
                            <ul>
                                <li>브라우저에서 Solidity 코드를 실행할 수 있는 온라인 개발 환경</li>
                            </ul>
                            <h4>Hardhat</h4>
                            <ul>
                                <li>Solidity 개발, 테스트, 배포 자동화를 지원하는 Node.js 기반 프레임워크</li>
                            </ul>
                            <h4>Truffle</h4>
                            <ul>
                                <li>스마트 컨트랙트 배포 및 네트워크 관리에 특화된 개발 환경</li>
                            </ul>
                        </div>

                        <h2>Solidity의 특징</h2>
                        <div className="section">
                            <h3>1. 스마트 컨트랙트 기반</h3>
                            <ul>
                                <li>블록체인에서 자동으로 실행되는 계약을 작성할 수 있음</li>
                            </ul>
                            <h3>2. 정적 타입 언어</h3>
                            <ul>
                                <li>Solidity는 정적 타입 언어이며, 변수의 타입을 명확하게 선언해야 함</li>
                            </ul>
                            <h3>3. EVM에서 실행 가능</h3>
                            <ul>
                                <li>Solidity로 작성된 스마트 컨트랙트는 EVM(Ethereum Virtual Machine)에서 실행됨</li>
                                <li>이더리움뿐만 아니라 Polygon, Avalanche, BNB Chain 등에서도 활용 가능</li>
                            </ul>
                            <h3>4. 이벤트 기반 프로그래밍</h3>
                            <ul>
                                <li>Solidity는 이벤트(Event) 기능을 지원하여, 블록체인 데이터를 쉽게 추적 가능</li>
                            </ul>
                            <h3>5. 보안 중심 개발</h3>
                            <ul>
                                <li>스마트 컨트랙트는 배포 후 변경할 수 없으므로, 보안이 매우 중요함</li>
                                <li>Solidity는 modifier, require, assert 등을 활용한 보안 강화 기능 제공</li>
                            </ul>
                        </div>

                        <h2>Remix IDE</h2>
                        <div className="section">
                            <ul>
                                <li>Solidity 개발을 위한 전용 웹 기반 IDE(Intergrated Development Environment, 통합 개발 환경)</li>
                            </ul>
                        </div>

                        <h2>Solidity 코드 실행 흐름</h2>
                        <div className="section">
                            <ul>
                                <li>1. 변수를 선언하고 초기화</li>
                                <li>2. 함수 실행</li>
                                <li>3. 트랜잭션 처리</li>
                            </ul>
                        </div>

                        <h2>Solidity 콘솔 출력(이더리움 네트워크 로그 사용)</h2>
                        <div className="section">
                            <ul>
                                <li>블록체인 상에서 로그를 기록할 수 있도록 이벤트(event) 기능을 제공한다.</li>
                            </ul>
                        </div>

                        <h2>Solidity 코드의 오류 처리</h2>
                        <div className="section">
                            <ul>
                                <li>Solidity 코드가 실행되다가 오류가 발생하면 트랜잭션이 롤백되며, 특정 지점에서 실행이 멈춘다.</li>
                            </ul>
                        </div>

                        <h2>Solidity에서 오류 처리 방법</h2>
                        <div className="section">
                            <ul>
                                <li>require(condition, message): 조건이 참이 아니면 오류 발생</li>
                                <li>assert(condition): 내부 오류 체크(개발자용)</li>
                                <li>revert(message): 강제적으로 실행을 취소하고 트랜잭션 롤백</li>
                            </ul>
                        </div>

                    </div>
                )
        }
    }

    return (
        <div className="solidity">
            {renderContent()}
        </div>
    );
}

export default Solidity;