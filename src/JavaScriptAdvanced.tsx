const arrow = "=>";

const JavaScriptAdvanced = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'Higher Order Function':
                return (
                    <div className="container">
                        {/* 2/24 */}
                        <h2>일급 객체</h2>
                        <div className="section">
                            <ul>
                                <li>변수에 할당 할 수 있다.</li>
                                <li>다른 함수의 전달인자로 전달될 수 있다.</li>
                                <li>다른 함수의 결과로써 리턴될 수 있다.</li>
                            </ul>
                        </div>

                        <h2>고차 함수(higher order function)</h2>
                        <div className="section">
                            <ul>
                                <li>함수를 전달인자로 받을 수 있고, 함수를 리턴할 수 있는 함수</li>
                                <li>콜백 함수: 다른 함수의 전달인자로 전달되는 함수</li>
                                <li>콜백 함수를 전달받은 고차 함수는, 함수 내부에서 이 콜백 함수를 ‘호출’할 수 있고, 조건에 따라 콜백 함수의 ‘실행 여부’를 결정할 수도 있다.</li>
                            </ul>
                        </div>

                        <div className="section">
                            <h3>내장 고차 함수 - filter 활용 예시</h3>
                            <ul>
                                <li>filter 메서드: 모든 배열의 요소 중에서 특정 조건을 만족하는 요소를 걸러내는 메서드</li>
                                <li>콜백 함수의 내부 조건에 따라 참 또는 거짓을 리턴한다.</li>
                            </ul>

                            <h3>내장 고차 함수 - map 활용 예시</h3>
                            <ul>
                                <li>배열의 각 요소가 특정 논리(함수)에 의해 다른 요소로 지정(map) 된다.</li>
                            </ul>

                            <h3>내장 고차 함수 - reduce 활용 예시</h3>
                            <ul>
                                <li>배열의 각 요소를 특정 방법(함수)에 따라 원하는 하나의 형태로 응축한다.</li>
                            </ul>
                        </div>

                        <h2>고차 함수의 중요성</h2>
                        <div className="section">
                            <ul>
                                <li>추상화: 복잡한 어떤 것을 압축해서 핵심만 추출한 상태로 만드는 것은 생산성의 향상</li>
                            </ul>
                        </div>
                    </div>



                );
            case 'Object Oriented Programming':
                return (
                    <div className="container">
                        {/* 2/25 */}
                        <h2>객체 지향 프로그래밍(OOP)</h2>
                        <div className="section">
                            <ul>
                                <li>하나의 모델이 되는 청사진(blueprint)을 만들고, 그 청사진을 바탕으로 한 객체(object)를 만드는 프로그래밍 패턴</li>
                            </ul>

                            <h3>청사진 - class</h3>
                            <h3>객체 - instance</h3>

                            <ul>
                                <li>일반적인 다른 함수와 구분하기 위해 ‘클래스’는 보통 ‘대문자’로 시작하며 일반명사로 만든다.</li>
                                <li>일반적인 함수는 적절한 동사를 포함하고 ‘소문자’로 시작한다.</li>
                            </ul>

                        </div>
                        <h2>속성과 메서드</h2>
                        <div className="section">
                            <ul>
                                <li><strong>속성:</strong> 객체에 따른 특징</li>
                                <li><strong>메서드:</strong> 객체에 딸린 함수</li>
                            </ul>
                        </div>

                        <h2>this</h2>
                        <div className="section">
                            <ul>
                                <li>인스턴스 객체</li>
                            </ul>
                        </div>

                        <h2>객체(Object)란?</h2>
                        <div className="section">
                            <ul>
                                <li>객체는 속성과 메서드를 가진 데이터 구조이다.</li>
                                <li>자바스크립트에서 객체는 { }를 사용해 만들 수 있다.</li>
                            </ul>
                        </div>

                        <h2>인스턴스(Instance)란?</h2>
                        <div className="section">
                            <ul>
                                <li>"인스턴스는 특정 클래스에서 생성된 객체”이다.</li>
                            </ul>
                        </div>

                        <h2>Method</h2>
                        <div className="section">
                            <ul>
                                <li>클래스의 인스턴스에서 실행되는 함수</li>
                            </ul>
                        </div>

                        <h2>용어 정리</h2>
                        <div className="section">
                            <ul>
                                <li><strong>prototype:</strong> 모델의 청사진을 만들 때 쓰는 원형 객체</li>
                                <li><strong>constructor:</strong> 인스턴스가 초기화될 때 실행하는 생성자 함수</li>
                                <li><strong>this:</strong> 함수가 실행될 때, 해당 scope마다 생성되는 고유한 실행 context, new 키워드로 인스턴스를 생성했을 때에는, 해당 인스턴스가
                                    바로 this의 값이 됨</li>
                            </ul>
                        </div>

                        <h2>객체 지향 프로그래밍의 주요 개념</h2>
                        <div className="section">
                            <h3>캡슐화</h3>
                            <ul>
                                <li>데이터(속성)와 기능(메서드)을 하나의 객체 안에 넣어서 묶는 것</li>
                                <li>내부 데이터나 내부 구현이 외부로 노출되지 않도록 만드는 것</li>
                            </ul>

                            <h3>추상화</h3>
                            <ul>
                                <li>내부 구현은 아주 복잡한데, 실제로 노출되는 부분은 단순하게 만든다는 개념</li>
                            </ul>

                            <h3>상속</h3>
                            <ul>
                                <li>부모 클래스의 특징을 자식 클래스가 물려받는 것</li>
                            </ul>

                            <h3>다형성</h3>
                            <ul>
                                <li>하나의 메서드나 클래스가 다양한 형태를 가질 수 있다.</li>
                            </ul>
                        </div>

                        <h2>객체 지향 언어들의 차이점</h2>
                        <div className="section">
                            <ul>
                                <li>은닉화(private 키워드)의 한계</li>
                                <li>추상화(interface 키워드) 기능의 부재</li>
                            </ul>
                        </div>

                        <h2>프로토타입(Prototype)</h2>
                        <div className="section">
                            <ul>
                                <li>JavaScript는 프로토타입 기반 언어이다.</li>
                                <li>프로토타입은 ‘원형 객체’를 의미한다.</li>
                            </ul>
                        </div>
                    </div>
                )
            case 'Asynchronous':
                return (
                    <div className="container">
                        {/* 2/26 */}
                        <h2>Read Me - 비동기</h2>
                        <div className="section">
                            <h3>블로킹</h3>
                            <ul>
                                <li>하나의 작업이 끝날 때까지 이어지는 작업을 막는 것</li>
                            </ul>
                        </div>

                        <h2>비동기적 실행 예시</h2>
                        <div className="section">
                            <ul>
                                <li>백그라운드 실행, 로딩 창 등의 작업</li>
                                <li>인터넷으로 서버로 요청을 보내고, 응답을 기다리는 작업</li>
                                <li>큰 용량의 파일을 로딩하는 작업</li>
                            </ul>
                        </div>

                        <h2>동기 & 비동기</h2>
                        <div className="section">
                            <h3>동기(synchronous)</h3>
                            <ul>
                                <li>특정 코드의 실행이 완료될 때까지 기다리고 난 후 다음 코드를 수행하는 것</li>
                            </ul>
                            <h3>비동기(asynchronous)</h3>
                            <ul>
                                <li>특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드들을 수행하는 것</li>
                            </ul>
                        </div>

                        <h2>JavaScript의 작동원리</h2>
                        <div className="section">
                            <ul>
                                <li>싱글 스레드 기반으로 동작하는 언어(한 번에 하나의 작업만 처리할 수 있다) {arrow} 기본적으로 동기적으로 코드 실행</li>
                                <li>JavaScript는 비동기 처리를 지원 {arrow} 런타임 환경이 함께 협력하여 비동기 작업을 처리하기 때문</li>
                            </ul>
                        </div>

                        <h2>비동기로 작동하는 코드를 제어할 수 있는 방법: Callback</h2>
                        <div className="section">
                            <ul>
                                <li>callback 함수를 통해 비동기 코드의 순서를 제어할 수 있다 {arrow} 비동기를 동기화할 수 있다.</li>
                            </ul>
                            <h3>Callback hell</h3>
                            <ul>
                                <li>callback 함수를 통해 비동기 코드의 순서를 제어할 수 있지만 코드가 길어질수록 복잡해지고 가독성이 낮아지는 단점이 있다.</li>
                            </ul>
                        </div>

                        <h2>비동기로 작동하는 코드를 제어할 수 있는 방법: Promise</h2>
                        <div className="section">
                            <h3>new Promise</h3>
                            <ul>
                                <li>Promise는 class이기 때문에 ‘new’ 키워드를 통해 Promise 객체를 생성한다.</li>
                                <li>Promise는 비동기 처리를 수행할 콜백 함수(executor)를 인수로 전달받는다.</li>
                                <li>콜백 함수는 resolve, reject 함수를 인수로 전달받으며 자동 실행된다.</li>
                                <li>코드가 정상적으로 처리되면 ‘resolve 함수’를 호출하고, 에러 발생 시 ‘reject 함수’를 호출한다.</li>
                            </ul>
                        </div>

                        <h2>내부 프로퍼티</h2>
                        <div className="section">
                            <h3>State</h3>
                            <ul>
                                <li>기본 상태는 pending(대기), 성공 시 fulfilled(이행), 에러 발생 시 rejected(거부)</li>
                            </ul>
                            <h3>Result</h3>
                            <ul>
                                <li>초기 상태는 undefined, resolve(value) 호출 시 value로, reject(error) 호출 시 error로 변경</li>
                            </ul>
                        </div>

                        <h2>Then, Catch, Finally</h2>
                        <div className="section">
                            <h3>Then</h3>
                            <ul>
                                <li>resolve 함수가 호출되면 .then 메서드로 접근 가능</li>
                                <li>Promise를 반환하면 다음 .then의 콜백 함수로 result 전달</li>
                            </ul>
                            <h3>Catch</h3>
                            <ul>
                                <li>reject 함수가 호출되면 .catch 메서드로 접근 가능</li>
                            </ul>
                            <h3>Finally</h3>
                            <ul>
                                <li>정상 처리 여부와 상관없이 .finally 메서드로 접근 가능</li>
                            </ul>
                        </div>

                        <h2>Promise Chaining</h2>
                        <div className="section">
                            <ul>
                                <li>비동기 작업을 순차적으로 진행해야 할 경우 사용</li>
                            </ul>
                        </div>

                        <h2>비동기로 작동하는 코드를 제어할 수 있는 방법: Promise.all()</h2>
                        <div className="section">
                            <ul>
                                <li>여러 개의 비동기 작업을 동시에 처리할 때 사용</li>
                                <li>인자로 배열을 받으며, 모든 Promise가 정상적으로 처리되면 결과를 배열로 저장하여 새로운 Promise 반환</li>
                                <li>하나라도 에러 발생 시 즉시 종료</li>
                            </ul>
                        </div>

                        <h2>Async / Await</h2>
                        <div className="section">
                            <ul>
                                <li>함수 앞에 async 키워드를 사용하고, async 함수 내에서만 await 키워드를 사용</li>
                                <li>await 키워드가 작성된 코드가 실행된 후 다음 코드 실행</li>
                            </ul>
                        </div>

                        <h2>Node.js</h2>
                        <div className="section">
                            <ul>
                                <li>JavaScript를 사용하여 서버 사이드 애플리케이션을 개발할 수 있게 해주는 런타임 환경</li>
                            </ul>
                            <h3>Node.js 내장 모듈을 사용하는 방법</h3>
                            <ul>
                                <li>모든 모듈은 require 구문을 이용하여 불러와야 함</li>
                            </ul>
                            <h3>3rd-party 모듈을 사용하는 방법</h3>
                            <ul>
                                <li>공식 제공하는 빌트인 모듈이 아닌 모든 외부 모듈</li>
                                <li>npm을 사용하여 다운로드 (Ex: npm install ...)</li>
                            </ul>
                        </div>

                        <h2>fetch API</h2>
                        <div className="section">
                            <ul>
                                <li>URL로 요청을 보낼 수 있는 API</li>
                            </ul>
                        </div>

                        <h2>Axios</h2>
                        <div className="section">
                            <ul>
                                <li>브라우저를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리</li>
                            </ul>
                            <h3>Axios 사용법</h3>
                            <ul>
                                <li>npm install axios</li>
                            </ul>
                            <h3>GET 요청</h3>
                            <ul>
                                <li>일반적으로 정보를 요청하기 위해 사용</li>
                            </ul>
                            <h3>POST 요청</h3>
                            <ul>
                                <li>서버에 데이터를 보내기 위해 사용</li>
                            </ul>
                        </div>
                    </div>
                )
            case 'React Basic':
                return (
                    <div className="container">
                        {/* 2/27 */}
                        <h2>React</h2>
                        <div className="section">
                            <h3>리액트란?</h3>
                            <ul>
                                <li>자바스크립트 프레임워크로, 사용자 인터페이스를 구축하기 위해 사용된다.</li>
                                <li>단일 페이지 애플리케이션(SPA)을 만들 때 유용하며, 데이터가 변경될 때 효율적으로 UI를 업데이트하는 데 강점이 있다.</li>
                            </ul>
                        </div>

                        <h2>리액트의 장점</h2>
                        <div className="section">
                            <h3>컴포넌트 기반</h3>
                            <ul>
                                <li>UI를 독립적인 컴포넌트로 나누어 재사용성이 높다.</li>
                            </ul>
                            <h3>가상 DOM</h3>
                            <ul>
                                <li>실제 DOM 대신 가상 DOM을 사용해 성능을 최적화한다.</li>
                            </ul>
                            <h3>풍부한 생태계</h3>
                            <ul>
                                <li>다양한 라이브러리와 도구를 지원하며, 커뮤니티가 활성화되어 있다.</li>
                            </ul>
                        </div>

                        <h2>리액트를 사용하는 이유</h2>
                        <div className="section">
                            <h3>SPA(Single Page Application) 지원</h3>
                            <ul>
                                <li>페이지 전환 없이 동적으로 콘텐츠를 업데이트 할 수 있다.</li>
                            </ul>
                            <h3>커뮤니티 지원</h3>
                            <ul>
                                <li>다양한 자료와 튜토리얼이 풍부하다.</li>
                            </ul>
                            <h3>유연성</h3>
                            <ul>
                                <li>다른 라이브러리나 프레임워크와 쉽게 통합할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>JSX(JavaScript XML)</h2>
                        <div className="section">
                            <h3>JSX란?</h3>
                            <ul>
                                <li>자바스크립트의 확장 문법으로, HTML과 유사한 구문을 사용해 UI를 정의한다.</li>
                                <li>JSX를 사용해 컴포넌트의 구조를 직관적으로 표현할 수 있다.</li>
                            </ul>
                            <h3>HTML과의 차이점</h3>
                            <ul>
                                <li>JSX는 HTML처럼 보이지만, 실제로는 자바스크립트로 변환된다.</li>
                                <li>HTML과 달리 class 대신 className을 사용한다.</li>
                            </ul>
                            <h3>JSX에서의 표현식 사용법</h3>
                            <ul>
                                <li>JSX 내부에서 중괄호 { }를 사용해 자바스크립트 표현식을 삽입할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>컴포넌트</h2>
                        <div className="section">
                            <h3>함수형 컴포넌트와 클래스형 컴포넌트</h3>
                            <ul>
                                <li>함수형 컴포넌트: 간단한 함수로 정의되며, Hooks를 사용해 상태를 관리한다.</li>
                                <li>클래스형 컴포넌트: 클래스로 정의되며, 생명주기 메서드를 사용할 수 있다.</li>
                            </ul>
                            <h3>컴포넌트의 재사용성과 조합</h3>
                            <ul>
                                <li>컴포넌트는 독립적이며, 여러 컴포넌트를 조합해 복잡한 UI를 만들 수 있다.</li>
                            </ul>
                        </div>

                        <h2>Props와 State</h2>
                        <div className="section">
                            <h3>Props</h3>
                            <ul>
                                <li>부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 데 사용된다.</li>
                            </ul>
                            <h3>State</h3>
                            <ul>
                                <li>컴포넌트 내부에서 관리되는 상태이다. 상태가 변경되면 컴포넌트가 다시 렌더링된다.</li>
                            </ul>
                            <h3>Props와 State의 차이점</h3>
                            <ul>
                                <li>Props: 외부에서 전달되며, 읽기 전용이다.</li>
                                <li>State: 컴포넌트 내부에서 관리되며, 변경 가능하다.</li>
                            </ul>
                        </div>

                        <h2>이벤트 처리</h2>
                        <div className="section">
                            <h3>이벤트 핸들링 기본 예제</h3>
                            <ul>
                                <li>리액트에서는 이벤트 핸들러를 camelCase로 작성된다.</li>
                            </ul>
                            <h3>이벤트 핸들러에서 State 업데이트</h3>
                            <ul>
                                <li>이벤트 핸들러를 통해 State를 업데이트할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>JSX(Javascript XML)</h2>
                        <div className="section">
                            <h3>JavaScript를 확장한 문법</h3>
                            <ul>
                                <li>브라우저가 이해할 수 있는 JavaScript 코드로 변환을 해주는 것이 바로 ‘Babel’이다.</li>
                                <li>Babel은 현대 자바스크립트(ES6 이상) 코드를 구형 브라우저에서도 동작할 수 있도록 변환해주는 자바스크립트 트랜스파일러이다.</li>
                            </ul>
                            <h3>특징</h3>
                            <ul>
                                <li>한 눈에 볼 수 있는 기능과 디자인</li>
                                <li>복잡성↓ 가독성↑</li>
                            </ul>
                        </div>

                        <h2>JSX 규칙</h2>
                        <div className="section">
                            <ul>
                                <li>하나의 엘리먼트 안에 모든 엘리먼트가 포함</li>
                                <li>여러 엘리먼트를 작성하고자 하는 경우, 최상위에서 opening tag와 closing tag로 감싸주어야 한다.</li>
                                <li>CSS class 속성을 지정하려면 “className”으로 표기해야 된다.</li>
                                <li>JavaScript 표현식 사용 시 중괄호를 이용해야 한다.</li>
                                <li>사용자 정의 컴포넌트는 대문자로 시작한다.</li>
                                <li>조건부 렌더링에는 삼항연산자가 사용된다.</li>
                                <li>여러 개의 HTML 엘리먼트를 표시할 때, map() 함수를 이용한다.</li>
                            </ul>
                        </div>

                        <h2>map을 이용한 반복</h2>
                        <div className="section">
                            <ul>
                                <li>배열의 각 요소를 특정 논리(함수)에 의해 다른 요소로 지정(map) 한다.</li>
                            </ul>
                        </div>

                        <h2>Key 속성</h2>
                        <div className="section">
                            <ul>
                                <li>map 메서드 사용 시, key 속성을 넣지 않으면 경고가 표시된다.</li>
                                <li>key 속성의 위치는 map 메서드 내부에 있는 엘리먼트 즉, 첫 엘리먼트에 넣어주면 된다.</li>
                            </ul>
                        </div>
                    </div>
                )

            case 'React SPA':
                return (
                    <div className="container">
                        {/* 2/28 */}
                        <h2>SPA</h2>
                        <div className="section">
                            <h3>SPA(Single Page Application)</h3>
                            <p>서버로부터 완전한 새로운 페이지를 불러오지 않고 페이지 갱신에 필요한 데이터만 받아 그 정보를 기준으로 현재의 페이지를 업데이트함으로써 사용자와 소통하는 웹 어플리케이션이나 웹 사이트</p>

                            <h3>SPA 등장 배경</h3>
                            <ul>
                                <li>전통적인 웹사이트는 사용자가 다른 페이지로 이동하면, 브라우저가 페이지를 보여주기 위해 매번 HTML 파일로 된 ‘페이지 전체’를 불러와야만 했다.</li>
                            </ul>

                            <h3>SPA의 등장</h3>
                            <ul>
                                <li><strong>1990년대:</strong> 업데이트에 필요한 데이터만 서버에서 전달받아 이 데이터를 JavaScript가 동적으로 HTML 요소를 생성해서 화면에 보여주는 방식이
                                    개발되어 사용되었다.</li>
                                <li><strong>2000년대:</strong> 위와 같은 개발 방식을 이용한 웹 어플리케이션이 보편화되었다 {arrow} SPA</li>
                            </ul>

                            <h3>SPA의 장점</h3>
                            <ul>
                                <li>필요한 부분의 데이터만 받아서 화면을 업데이트 하면 되기 때문에 사용자와의 상호작용에 빠르게 반응한다.</li>
                                <li>서버에서는 요청 받은 데이터만 넘겨주기 되기 때문에 서버 과부하 문제가 현저하게 줄어든다.</li>
                                <li>전체 페이지를 렌더링 할 필요가 없기 때문에 더 나은 유저경험을 제공한다.</li>
                            </ul>

                            <h3>SPA의 단점</h3>
                            <ul>
                                <li>긴 로딩시간</li>
                                <li>부족한 검색 엔진 최적화</li>
                            </ul>
                        </div>

                        <h2>Wireframe & Mockup</h2>
                        <div className="section">
                            <h3>Wireframe</h3>
                            <ul>
                                <li>웹페이지의 레이아웃과 UI 요소 등에 대한 뼈대</li>
                            </ul>

                            <h3>Mockup</h3>
                            <ul>
                                <li>데모 시연, 평가를 위한 최소한의 기능만 담은 모형</li>
                            </ul>
                        </div>

                        <h2>React Router</h2>
                        <div className="section">
                            <h3>React Router</h3>
                            <ul>
                                <li>SPA에서 페이지 전환 없이 URL에 따라 다른 컴포넌트를 렌더링 할 수 있다.</li>
                                <li>또한 화면에 따라 ‘주소’도 달라진다.</li>
                            </ul>

                            <h3>React Router 활용</h3>
                            <ul>
                                <li><strong>BrowserRouter:</strong> 라우터 역할</li>
                                <li><strong>Routes:</strong> 경로 매칭</li>
                                <li><strong>Route:</strong> 경로 변경</li>
                            </ul>
                        </div>
                    </div>

                )
        };

    }
    return (
        <div className="javascript-advanced">
            {renderContent()}
        </div>
    );
}
export default JavaScriptAdvanced;
