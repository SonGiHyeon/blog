const arrow = "=>";

const ReactAdvanced = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {

            case 'React State & Props':
                return (
                    <div className="container">
                        {/* 3/4 */}
                        <h2>
                            State
                        </h2>
                        <div className="section">
                            <ul>
                                <li>컴포넌트 내에서 변경될 수 있는 데이터</li>
                                <li>컴포넌트의 상태가 변경되면 자동으로 리렌더링이 발생한다.</li>
                            </ul>

                            <h3>State의 특징</h3>
                            <ul>
                                <li>컴포넌트 내부에서 관리됨(Private)</li>
                                <li>변경될 수 있는 동적인 데이터(Mutable)</li>
                                <li>useState 등을 사용하여 관리</li>
                                <li>값이 변경되면 해당 컴포넌트와 하위 컴포넌트가 리렌더링 된다.</li>
                            </ul>

                            <h3>State hook, useState</h3>
                            <ul>
                                <li>useState란, React에서 State를 관리하기 위한 훅(Hook)이다.</li>
                                <li>useState를 호출하면 배열을 반환</li>
                                <li>배열의 0번째 요소는 현재 state 변수이고, 1번째 요소는 이 변수를 갱신할 수 있는 함수이다.</li>
                                <li>useState의 인자로 넘겨주는 값은 state의 초깃값이다.</li>
                            </ul>

                            <h3>주의점</h3>
                            <ul>
                                <li>React 컴포넌트는 state가 변경되면 새롭게 호출되고, 리렌더링 된다.</li>
                            </ul>
                        </div>


                        <h2>
                            Props
                        </h2>
                        <div className="section">
                            <ul>
                                <li>Props(속성, Properties)는 부모 컴포넌트에서 ‘자식 컴포넌트로 전달’하는 값</li>
                                <li>Props는 변경될 수 없으며, 부모가 변경해야 한다.</li>
                            </ul>

                            <h3>Props의 특징</h3>
                            <ul>
                                <li>컴포넌트의 속성(property)를 의미한다 = 외부로부터 전달받은 값</li>
                                <li>부모 컴포넌트(상위 컴포넌트)로부터 전달받은 값</li>
                                <li>객체 형태</li>
                                <li>읽기 전용</li>
                            </ul>

                            <h3>Props 사용하는 방법</h3>
                            <ul>
                                <li>하위 컴포넌트에 전달하고자 하는 값과 속성을 정의한다.</li>
                                <li>props를 이용하여 정의된 값과 속성을 전달한다.</li>
                                <li>전달받은 props를 렌더링한다.</li>
                            </ul>
                        </div>

                        <h2>
                            이벤트 처리
                        </h2>
                        <div className="section">
                            <ul>
                                <li>소문자 대신 카멜 케이스를 사용한다.</li>
                                <li>JSX를 사용하여 문자열이 아닌 함수로 이벤트 처리 함수를 전달한다.</li>
                            </ul>

                            <h3>onChange</h3>
                            <ul>
                                <li>입력필드의 값을 변경할 때 발생하는 이벤트</li>
                                <li>이벤트핸들러 함수를 통해 입력된 값에 대한 처리를 한다.</li>
                            </ul>

                            <h3>onClick</h3>
                            <ul>
                                <li>사용자가 클릭이라는 행동을 하였을 때 발생하는 이벤트</li>
                                <li>이벤트핸들러 함수를 통해 입력된 값에 대한 처리를 한다.</li>
                            </ul>
                        </div>
                    </div >


                );
            case 'HTTP/네트워크':
                return (
                    <div className="container">
                        {/* 3/5 */}
                        <h2>
                            2 Tier Architecture
                        </h2>
                        <div className="section">
                            <ul>
                                <li>리소스가 존재하는 곳과 리소스를 사용하는 앱을 분리시킨 것(클라이언트-서버 아키텍처)</li>
                            </ul>
                        </div>

                        <h2>
                            3 Tier Architecture
                        </h2>
                        <div className="section">
                            <ul>
                                <li>2티어 아키텍처에 데이터베이스가 추가된 형태를 3티어 아키텍처라 부른다.</li>
                            </ul>

                        </div>

                        <h2>
                            프론트엔드와 백엔드
                        </h2>
                        <div className="section">
                            <h3>프론트엔드</h3>
                            <ul>
                                <li>사용자가 눈으로 보고 대면하는 클라이언트 앱을 개발하는 것(UI 클릭 혹은 터치하는 것과 같은 상호작용)</li>
                            </ul>
                            <h3>백엔드</h3>
                            <ul>
                                <li>사용자 눈에 직접 보이지 않는 것을 개발하는 것(상품 정보를 API로 노출, 권한 관리…)</li>
                            </ul>
                        </div>

                        <h2>
                            HTTP
                        </h2>
                        <div className="section">
                            <ul>
                                <li>웹에서 클라이언트(브라우저 등)와 서버 간에 데이터를 주고받기 위한 프로토콜</li>
                                <li>이를 통해 사용자는 웹사이트를 탐색하고, 데이터를 요청하고, 서버에서 제공하는 정보를 받아볼 수 있다.</li>
                            </ul>

                            <h3>HTTP의 역할</h3>
                            <ul>
                                <li>웹 페이지 로딩: 리소스 요청하고 표시</li>
                                <li>API 통신: 클라이언트와 서버 간의 데이터 교환을 지원한다.</li>
                                <li>파일 전송: 이미지, 동영상, 문서 등의 리소스를 서버에서 클라이언트로 전송한다.</li>
                                <li>상태 비저장(Stateless): HTTP는 각 요청을 독립적으로 처리하며, 서버는 이전 요청의 정보를 기억하지 않는다.</li>
                            </ul>

                            <h3>HTTPS</h3>
                            <ul>
                                <li>HTTPS(HyperText Transfer Protocol Secure): HTTP에 보안 계층(SSL/TLS)이 추가된 버전으로, 데이터가 암호화되어 안전하게 전송된다.</li>
                                <li>이를 통해 다음과 같은 보안 요소를 보장한다.
                                    <ul>
                                        <li>기밀성</li>
                                        <li>무결성</li>
                                        <li>인증</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>
                            HTTP Messages
                        </h2>
                        <div className="section">
                            <ul>
                                <li>서버 사이에서 데이터가 교환되는 방식</li>
                            </ul>
                            <h3>요청</h3>
                            <h3>응답</h3>
                            <ul>
                                <li>요청과 응답은 다음과 같은 유사한 구조를 가진다
                                    <ul>
                                        <li>start line: 요청이나 응답의 상태를 나타낸다.</li>
                                        <li>HTTP headers: 요청을 지정하거나, 메시지에 포함된 본문을 설명하는 헤더의 집합.</li>
                                        <li>Empty line: 헤더와 본문을 구분하는 빈 줄.</li>
                                        <li>body: 요청과 관련된 데이터나 응답과 관련된 데이터 포함.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3>Stateless</h3>
                            <ul>
                                <li>HTTP가 클라이언트나 서버의 상태를 확인하지 않는 것.</li>
                                <li>필요에 따라 쿠키-세션, API 등을 통해 상태를 확인할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>
                            브라우저의 보이지 않는 곳 & 보이는 곳
                        </h2>
                        <div className="section">
                            <h3>브라우저의 보이지 않는 곳</h3>
                            <ul>
                                <li>네트워크 요청</li>
                                <li>IP 주소와 포트</li>
                                <li>DNS</li>
                                <li>URL과 URI</li>
                            </ul>

                            <h3>브라우저의 보이는 곳</h3>
                            <ul>
                                <li>AJAX</li>
                                <li>렌더링 방식(SSR과 CSR)</li>
                                <li>CORS</li>
                            </ul>
                        </div>

                        <h2>
                            URL과 URI
                        </h2>
                        <div className="section">
                            <h3>URL</h3>
                            <ul>
                                <li>Uniform Resource Locator의 줄임말로, 네트워크 상에서 웹 페이지, 이미지, 동영상 등의 파일이 위치한 정보를 나타낸다.</li>
                            </ul>

                            <h3>URI</h3>
                            <ul>
                                <li>Uniform Resource Identifier의 줄임말로, URL의 기본 요소인 scheme, hosts, url-path에 더해 query, fragment를 포함한다.</li>
                            </ul>
                        </div>

                        <h2>
                            REST API
                        </h2>
                        <div className="section">
                            <ul>
                                <li>REST는 Representational State Transfer의 약자로 웹에서 사용되는 데이터나 자원을 HTTP URI로 표현하고, HTTP 프로토콜을 통해 요청과 응답을 정의하는
                                    방식.
                                </li>
                            </ul>

                            <h3>REST 성숙도 모델</h3>
                            <h3>0단계</h3>
                            <ul>
                                <li>HTTP 프로토콜 사용</li>
                            </ul>
                            <h3>1단계</h3>
                            <ul>
                                <li>개별 리소스와의 통신을 준수해야 한다.</li>
                            </ul>
                            <h3>2단계</h3>
                            <ul>
                                <li>CRUD에 따른 메서드를 사용해야 한다.</li>
                            </ul>
                            <h3>3단계</h3>
                            <ul>
                                <li>HATEOAS(Hypermedia As The Engine Of Application State) 적용.</li>
                            </ul>

                            <h3>Open API</h3>
                            <ul>
                                <li>누구에게나 열려있는 API.</li>
                                <li>API마다 정해진 이용 수칙이 있으며, 그에 따라 제한사항이 있을 수 있다.</li>
                            </ul>

                            <h3>Postman</h3>
                            <ul>
                                <li>매번 코드를 작성하는 것 대신, HTTP 요청을 테스트할 수 있는 다양한 API 테스트 도구 중 하나.</li>
                            </ul>
                        </div>
                    </div>
                )
            case 'AJAX':
                return (
                    <div className="container">
                        <h2>State 끌어올리기</h2>
                        <div className="section">
                            <ul>
                                <li>리액트는 데이터의 흐름이 단방향으로 흘러가는데, 어떻게 하면 부모의 상태를 변경할 수 있을까?</li>
                                <li>상태를 변경시키는 함수(handler)를 하위 컴포넌트에 props로 전달해서 해결할 수 있다.</li>
                                <li>상위 컴포넌트의 “상태를 변경하는 함수” 그 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트가 실행한다.</li>
                            </ul>
                        </div>

                        <h2>Side Effect(부수 효과)</h2>
                        <div className="section">
                            <ul>
                                <li>함수 내에서 어떤 구현이 함수 외부에 영향을 끼치는 경우</li>
                                <li>주로 React에서는 컴포넌트 내에서 ‘fetch를 사용해 API 정보를 가져오거나’ ‘이벤트를 활용해 DOM 직접 조작할 때 Side Effect’가 발생했다고 말한다.</li>
                            </ul>
                        </div>

                        <h2>Pure Function(순수 함수)</h2>
                        <div className="section">
                            <ul>
                                <li>함수의 엽락만이 함수의 결과에 영향을 주는 함수</li>
                                <li>입력으로 전달된 값을 수정하지 않는다.</li>
                                <li>어떠한 전달 인자가 주어질 경우, 항상 똑같은 값이 리턴됨을 보장한다. 그래서 예측 가능한 함수이기도 하다.</li>
                            </ul>
                        </div>

                        <h2>React 컴포넌트에서의 Side Effect</h2>
                        <div className="section">
                            <ul>
                                <li>타이머 사용(setTimeout)</li>
                                <li>데이터 가져오기(fetch API, localStorage)</li>
                            </ul>
                        </div>

                        <h2>Effect Hook(useEffect)</h2>
                        <div className="section">
                            <ul>
                                <li>useEffect는 함수형 컴포넌트에서 Side Effect(부수 효과)를 실행할 수 있게 해주는 Hook이다.</li>
                                <li>Hook이란, 리액트 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 함수</li>
                            </ul>
                        </div>

                        <h2>UseEffect 예시</h2>
                        <div className="section">
                            <ul>
                                <li>useEffect(함수, [의존성 배열])</li>
                            </ul>
                            <ol>
                                <li><strong>첫 번째 인자(함수):</strong>
                                    <ul>
                                        <li>Side Effeect를 실행하는 함수다.</li>
                                        <li>컴포넌트가 렌더링된 후 실행된다.</li>
                                        <li>함수 내에서 반환하는 값은 정리(clean-up)함수로, 컴포넌트가 언마운트되거나 다음 렌더링 전에 실행된다.</li>
                                    </ul>
                                </li>
                                <li><strong>두 번째 인자(의존성 배열):</strong>
                                    <ul>
                                        <li>이 배열에 포함된 값이 변경될 때만 Effect가 실행된다.</li>
                                        <li>배열이 비어 있으면 Effect는 컴포넌트가 마운트될 때 한 번만 실행되고, 언마운트될 때 정리 함수가 실행된다.</li>
                                        <li>배열을 생략하면, Effect는 매 렌더링마다 실행된다.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <h2>Hook을 쓸 때 주의할 점</h2>
                        <div className="section">
                            <ul>
                                <li>최상위에서만 Hook을 호출한다.</li>
                                <li>React 함수 내에서 Hook을 호출한다.</li>
                            </ul>
                        </div>

                        <h2>컴포넌트 내에서의 Ajax 요청</h2>
                        <div className="section">
                            <ul>
                                <li>목록 내 필터링을 구현하기 위한 두 가지 접근이 존재</li>
                            </ul>
                            <ol>
                                <li><strong>컴포넌트 내에서 필터링:</strong> 전체 목록 데이터를 불러오고, 목록을 검색어로 filter 하는 방법</li>
                                <li><strong>컴포넌트 외부에서 필터링:</strong> 컴포넌트 외부로 API 요청을 할 때, 필터링한 결과를 받아오는 방법</li>
                            </ol>
                        </div>

                    </div>
                )
            case 'TypeScript':
                return (
                    <div className="container">
                        <h2>TypeScript(타입스크립트)</h2>
                        <div className="section">
                            <p>JavaScript에 정적타입 검사와 클래스 기반 객체 지향 프로그래밍 등의 기능을 추가하여 개발된 언어</p>
                        </div>

                        <h2>TypeScript의 등장 배경</h2>
                        <div className="section">
                            <ul>
                                <li>JavaScript는 함수나 변수의 타입을 명시적으로 지정하지 않아도 동작하는 경우가 많아 예상치 못한 결과를 초래하게 되었다.</li>
                                <li>위와 같은 문제점을 보완하기 위해 TypeScript라는 언어가 등장하게 되었다.</li>
                            </ul>
                        </div>

                        <h2>TypeScript의 강점</h2>
                        <div className="section">
                            <ul>
                                <li>정적타입 검사 기능 제공</li>
                                <li>코드의 가독성과 유지 보수성을 높여준다.</li>
                                <li>ES6의 문법을 포함한 최신 JavaScript 문법을 지원하며, 인터페이스, 제네릭, 데코레이터 등의 기능을 제공하며 객체 지향 프로그래밍을 보다 쉽게 할 수 있도록 도와준다.</li>
                            </ul>
                        </div>

                        <h2>TypeScript의 타입</h2>

                        <div className="section">
                            <ul>
                                <li>
                                    <h3>Boolean</h3>
                                    <ul>
                                        <li>참(true), 거짓(false) 존재</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Number</h3>
                                    <ul>
                                        <li>정수와 실수의 구분 없이 Number 타입 하나로 표기한다.</li>
                                        <li>추가로 bigint도 지원한다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>String</h3>
                                    <ul>
                                        <li>작은따옴표(‘)나 큰따옴표(“)를 사용하여 문자열 데이터를 표현한다.</li>
                                        <li>백틱(`)을 사용해서 여러 줄에 걸쳐 문자열을 작성할 수 있다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Array</h3>
                                    <ul>
                                        <li>배열의 요소들을 나타내는 타입 뒤에 배열을 나타내는 []을 쓴다</li>
                                        <li>제네릭 배열 타입을 사용한다. {arrow} Array를 먼저 작성한 뒤, &lt;&gt; 안에 배열의 요소들을 나타내는 타입을 작성한다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Tuple</h3>
                                    <ul>
                                        <li>요소의 타입과 개수가 고정된 배열을 표현할 수 있다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Object</h3>
                                    <ul>
                                        <li>모든 객체를 수용하는 타입</li>
                                        <li>객체의 속성 타입들이 any로 지정되기 때문에 어떠한 프로퍼티라도 추가할 수 있다. {arrow} 타입 안정성 보장 X, 추천 X</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Any</h3>
                                    <ul>
                                        <li>타입 검사를 하지 않고자 할 때 any 타입을 사용할 수 있다.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>TypeScript의 함수</h2>

                        <div className="section">
                            <ul>
                                <li>기명 함수(named function)와 화살표 함수(arrow function) 등으로 만들 수 있다.</li>
                                <li>매개변수의 타입과 반환 타입을 명시해야 한다.</li>
                                <li>리턴값이 없다면 void를 사용하여 작성할 수 있다.</li>
                                <li>매개변수의 개수에 맞춰 전달인자를 전달해야 한다.</li>
                            </ul>
                        </div>

                        <h2>TypeScript의 연산자 활용 타입</h2>

                        <div className="section">
                            <ul>
                                <li>
                                    <h3>Union 타입</h3>
                                    <ul>
                                        <li>둘 이상의 타입을 합쳐서 만들어진 새로운 타입</li>
                                        <li>| 연산자를 이용한다(Ex: number | string)</li>
                                        <li>유니온 타입의 장점:
                                            <ul>
                                                <li>타입 추론 가능 {arrow} 타입과 관련된 API를 쉽게 자동완성으로 얻어낼 수 있다.</li>
                                                <li>코드의 가독성을 높일 수 있다.</li>
                                            </ul>
                                        </li>
                                        <li>유니온 타입 사용 시 유의할 점:
                                            <ul>
                                                <li>유니온에 있는 모든 타입에 공통인 멤버들에만 접근할 수 있기 때문에 유의해야 한다.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>TypeScript의 열거형(Enum)</h2>

                        <div className="section">
                            <ul>
                                <li>특정 값이 집합을 정의할 때 사용된다.</li>
                                <li>문자, 숫자형 열거형을 지원한다.</li>
                            </ul>

                            <h2>TypeScript의 인터페이스</h2>
                            <ul>
                                <li>객체의 구조를 정의하기 위해 주로 사용되는 예약어</li>
                            </ul>

                            <h2>TypeScript의 클래스</h2>
                            <ul>
                                <li>클래스의 속성과 메서드에 대한 타입을 명시할 수 있다.</li>
                            </ul>

                            <h2>TypeScript의 제네릭</h2>
                            <ul>
                                <li>코드 재사용성을 높이고 타입 안정성을 보장하는 기능</li>
                            </ul>
                        </div>
                    </div>
                )
        };
    }
    return (
        <div className="react-advanced">
            {renderContent()}
        </div>
    );
}

export default ReactAdvanced;
