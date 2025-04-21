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

        }
    }

    return (
        <div className="solidity-advanced">
            {renderContent()}
        </div>
    );

}

export default SolidityAdvanced;