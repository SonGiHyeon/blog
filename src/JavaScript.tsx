const arrow = "=>";

const JavaScript = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'JavaScript':
                return (
                    <div className="container">

                        {/* 2/17 */}
                        <h2>
                            조건문
                        </h2>

                        <div className="section">
                            <h3>If 문</h3>
                            <ul>
                                <li>if문은 주어진 조건식의 참/거짓 여부에 따라 실행이 결정된다.</li>
                            </ul>

                            <h3>동치연산자(===)</h3>
                            <ul>
                                <li>피연산자가 동일하면 true, 그렇지 않으면 false를 반환한다.</li>
                                <li>!==는 반대로 두 피연산자가 동일하지 않으면 true, 동일하면 false를 반환한다.</li>
                            </ul>

                            <h3>비교연산자()</h3>
                            <ul>
                                <li>두 피연산자의 값의 크기를 비교한다.</li>
                            </ul>

                            <h3>논리연산자(&&, ||)</h3>
                            <ul>
                                <li>||는 여러 조건 중 하나만 true여도 true로 판단, &&는 여러 조건 중 하나라도 false이면 false로 판단한다.</li>
                            </ul>

                            <h3>부정연산자(!)</h3>
                            <ul>
                                <li>조건을 부정한다. 조건이 true이면 false, 조건이 false이면 true를 리턴한다.</li>
                            </ul>

                            <h3>else문</h3>
                            <ul>
                                <li>조건이 true 혹은 false일 때 각각 다른 코드를 실행되도록 하는 명령어</li>
                                <li>조건을 더 추가하고 싶다면 else if문을 사용한다.</li>
                            </ul>

                            <h3>삼항 조건 연산자</h3>
                            <ul>
                                <li>if문과 else문을 삼항 조건 연산자로 바꿔 쓸 수 있다.</li>
                                <li>조건식을 먼저 작성한 후 ?를 입력하고, ?뒤로 참/거짓일 때 실행할 코드를 각각 입력한다. 참/거짓일 때 실행할 코드는 :로 구분한다.</li>
                            </ul>

                            <h3>반복문</h3>
                        </div>

                        <h2>for문</h2>
                        <div className="section">
                            <ul>
                                <li>for(초기값; 조건식; 증감식) {'{'} // 실행할 코드 {'}'}</li>
                                <li>초기값: 증감식 반복 횟수를 카운트하는 역할을 하는 변수.</li>
                                <li>조건식: 코드블록 내부의 코드 실행 여부를 결정한다.</li>
                                <li>증감식: 코드블록 내부의 코드를 실행한 후 초기값으로 선언된 변수의 증가 또는 감소시키기 위한 표현식이다.</li>
                            </ul>

                            <h3>반복문의 활용(문자열과 반복문)</h3>
                        </div>

                        <h2>문자열과 반복문</h2>
                        <div className="section">

                            <h3>인덱스</h3>
                            <ul>
                                <li>특정 문자의 인덱스를 확인하는 메서드는 indexOf()입니다.</li>
                                <li>찾는 문자가 2개 이상일 경우, 가장 앞에 있는 문자의 인덱스를 조회한다.</li>
                            </ul>

                            <h3>길이</h3>
                            <ul>
                                <li>문자열의 길이는 문자열 뒤에 .length를 붙임으로써 조회할 수 있다.</li>
                            </ul>

                            <h3>반복문의 중첩</h3>
                            <ul>
                                <li>반복문은 중첩이 가능하다. 반복문 내부에 또 다른 반복문을 사용할 수 있다.</li>
                                <li>2개의 반복문이 중첩된 경우 이중반복문, 3개의 반복문이 중첩된 경우 삼중반복문이라고 부른다.</li>
                            </ul>

                            <h3>반복문 - while</h3>
                            <ul>
                                <li>조건식만 입력한 후 조건식의 평가결과가 true인 경우 코드블록 내부의 코드를 반복하여 실행한다.</li>
                            </ul>

                            <h3>do...while문</h3>
                            <ul>
                                <li>while 뒤에 오는 조건식이 true로 평가되는 동안 do 뒤에 오는 코드블록 내부의 코드를 반복하여 실행한다.</li>
                                <li>위의 경우, do의 코드블록 내부의 코드가 최소 한 번은 실행된다.</li>
                            </ul>
                        </div>

                        <h2>for문과 while문</h2>
                        <div className="section">

                            <h3>for문을 사용하는 경우</h3>
                            <ul>
                                <li>반복 횟수가 비교적 명확할 때</li>
                                <li>배열, 문자열 내부를 순회할 때</li>
                                <li>반복문의 중첩이 필요할 때</li>
                            </ul>

                            <h3>while문을 사용하는 경우</h3>
                            <ul>
                                <li>반복 횟수가 명확하지 않을 때</li>
                            </ul>
                        </div>
                    </div>

                );
            case 'Calculator':
                return (
                    <div className="container">
                        {/* 2/18 */}
                        <h2>Simple Web Page Creation</h2>

                        <div className="section">
                            <p>
                                간단한 웹 페이지 만들기(계산기)
                            </p>

                            <ul>
                                <li>1. 숫자 버튼</li>
                                <li>2. 연산자 버튼</li>
                                <li>3. 소수점 버튼</li>
                                <li>4. 계산 버튼</li>
                                <li>5. 초기화 버튼</li>
                            </ul>
                        </div>

                        <img src={process.env.PUBLIC_URL + '/Calculator.png'} width={640} height={640} />

                    </div>
                )
            case 'Reference type, Array & Object Learing':
                return (
                    <div className="container">
                        {/* 2/19 */}

                        <h2>참조 타입(Reference Type)</h2>

                        <div className="section">
                            <ul>
                                <li>값 자체가 아닌 ‘메모리 주소’를 저장한다.</li>
                                <li>여러 데이터를 묶어서 관리하거나 구조화할 때 사용된다.</li>
                            </ul>


                            <h3>객체(Object)</h3>
                            <ul>
                                <li>여러 데이터를 키와 값(Key-Value) 형태로 묶어 표현할 수 있다.</li>
                                <li>객체는 데이터의 ‘구조화된 저장소’ 역할을 한다.</li>
                            </ul>



                            <h3>배열(Array)</h3>
                            <ul>
                                <li>여러 데이터를 ‘순서대로 나열’하여 관리할 수 있는 리스트 형태의 데이터 타입</li>
                                <li>인덱스로 접근 가능</li>
                            </ul>

                            <h3>함수(Function)</h3>
                            <ul>
                                <li>특정 작업을 수행하는 코드 블록</li>
                                <li>값처럼 변수에 저장하거나 다른 함수에 전달할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>참조 타입의 특징</h2>

                        <div className="section">

                            <h3>참조 저장</h3>
                            <ul>
                                <li>값을 저장하는 대신 ‘메모리 주소’를 저장한다.</li>
                                <li>하나의 객체를 여러 변수가 공유할 수 있다.</li>
                            </ul>

                            <h3>데이터 복사</h3>
                            <ul>
                                <li>참조 타입을 복사하면, 새로운 객체가 만들어지는 것이 아니라 ‘같은 객체’를 참조한다.</li>
                            </ul>

                            <h3>얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)</h3>

                            <h3>얕은 복사</h3>
                            <ul>
                                <li>객체의 1단계 데이터만 복사한다.</li>
                                <li>중첩된 객체나 배열은 참조만 복사한다.</li>
                                <li>복사본에서 중첩 데이터를 수정하면 원본에도 영향을 미친다.</li>
                            </ul>
                            <ul>
                                <li><strong>예시:</strong> 스프레드 연산자(…), Object.assign() 메서드</li>
                            </ul>

                            <h3>깊은 복사</h3>
                            <ul>
                                <li>객체의 모든 데이터(중첩된 객체나 배열 포함)를 완전히 새로운 메모리 공간에 복사한다.</li>
                                <li>한쪽을 수정해도 다른 쪽에 영향을 미치지 않는다.</li>
                            </ul>
                            <ul>
                                <li><strong>예시:</strong> JSON.parse(JSON.stringify()), 라이브러리</li>
                            </ul>
                        </div>

                        <h2>배열(Array)</h2>

                        <div className="section">
                            <ul>
                                <li>여러 데이터를 하나의 리스트로 묶어서 관리</li>
                                <li>다양한 타입의 데이터를 순서대로 저장할 수 있는 구조</li>
                                <li>배열의 각 요소는 인덱스(Index)를 통해 접근 가능</li>
                            </ul>

                            <h3>배열의 주요 특징</h3>
                            <ul>
                                <li>순서가 있는 데이터 집합</li>
                                <li>다양한 데이터 타입 저장 가능</li>
                                <li>동적 크기</li>
                            </ul>
                        </div>

                        <h2>배열의 반복</h2>

                        <div className="section">

                            <h3>기본 반복문</h3>
                            <ul>
                                <li><strong>for 루프:</strong> 배열의 길이를 기준으로 각 요소를 처리한다.</li>
                                <li><strong>for...of 루프:</strong> 배열의 요소에만 집중하는 간결한 반복문</li>
                            </ul>
                        </div>

                        <h2>객체</h2>

                        <div className="section">

                            <h3>객체(Object)란?</h3>
                            <ul>
                                <li>자바스크립트의 가장 중요한 데이터 구조 중 하나</li>
                                <li>데이터를 ‘키’-‘값’ 형태로 저장한다.</li>
                            </ul>

                            <h3>객체의 기본 구조</h3>
                            <ul>
                                <li><strong>키:</strong> 속성을 구분하는 이름, 문자열 또는 심볼 타입이어야 한다.</li>
                                <li><strong>값:</strong> 키에 연결된 데이터로, 모든 데이터 타입을 사용할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>기본 내장 함수</h2>

                        <div className="section">
                            <ul>
                                <li>배열, 문자열, 객체 등 다양한 데이터 타입을 쉽게 다룰 수 있도록 자바스크립트에서 미리 제공하는 함수</li>
                                <li>프로그래밍을 더욱 효율적이고 직관적으로 만들어주는 도구다.</li>
                            </ul>
                        </div>
                    </div>

                )
            case 'JavaScript Grammar':
                return (
                    <div className="container">
                        {/* 2/20 */}

                        <h2>원시 & 참조 타입</h2>

                        <div className="section">
                            <h3>원시 자료형의 특징</h3>
                            <ul>
                                <li>원시 자료형을 변수에 할당하면 메모리 공간에 값 자체가 저장된다.</li>
                                <li>원시 값을 갖는 변수를 다른 변수에 할당하면 원시 값 자체가 복사되어 전달된다.</li>
                                <li>원시 자료형은 변경 불가능한 값이다.</li>
                            </ul>

                            <h3>참조 자료형의 특징</h3>
                            <ul>
                                <li>참조 자료형은 변수에 할당하면 메모리 공간에 주소값이 저장된다.</li>
                                <li>참조 값을 갖는 변수를 다른 변수에 할당하면 주소값이 복사되어 전달된다.</li>
                                <li>참조 자료형은 변경이 가능한 값(mutable value)이다.</li>
                            </ul>
                        </div>

                        <h2>스코프, 키워드(var, let, const)</h2>

                        <div className="section">
                            <h3>스코프</h3>
                            <ul>
                                <li>변수의 유효범위를 정하는 것</li>
                            </ul>

                            <h3>var, let, const</h3>
                            <ul>
                                <li><strong>Var:</strong> 함수 스코프를 따르는 변수</li>
                                <li><strong>const:</strong> 값이 변하지 않는 상수를 정의할 때 쓰는 변수</li>
                                <li><strong>let:</strong> 값을 변하게 하고 싶을 때 쓰는 변수</li>
                            </ul>
                        </div>

                        <h2>클로저</h2>
                        <div className="section">
                            <ul>
                                <li>외부 함수에서 내부 함수의 변수를 쓸 수 있는 것</li>
                            </ul>
                        </div>

                        <h2>spread/rest 문법</h2>
                        <div className="section">

                            <h3>spread 문법</h3>
                            <ul>
                                <li>주로 배열을 풀어서 인자로 전달하거나, 배열을 풀어서 각각의 요소로 넣을 때 사용한다.</li>
                            </ul>

                            <h3>rest 문법</h3>
                            <ul>
                                <li>파라미터를 배열의 형태로 받아서 사용할 수 있다. 파라미터 개수가 가변적일 때 유용하다.</li>
                            </ul>
                        </div>

                        <h2>구조 분해 할당</h2>
                        <div className="section">
                            <ul>
                                <li>spread 문법을 이용하여 값을 해체한 후, 개별 값을 변수에 새로 할당하는 과정</li>
                            </ul>

                            <h2>화살표 함수</h2>
                            <ul>
                                <li>함수를 정의할 때 function 키워드 대신 화살표{arrow}를 사용한다.</li>
                            </ul>
                        </div>
                    </div>
                )
            case 'DOM':
                return (
                    <div className="container">

                        <h2>DOM</h2>

                        <div className="section">
                            <ul>
                                <li>Document Object Model의 약자로, HTML 요소를 Object처럼 조작할 수 있는 Model이다.</li>
                            </ul>
                        </div>

                        <h2>HTML에 JavaScript 적용하기</h2>

                        <div className="section">
                            <ul>
                                <li><code>&lt;script&gt;</code> 태그를 이용한다.</li>
                                <li>웹 브라우저가 작성한 코드를 해석하는 과정에서 <code>&lt;script&gt;</code>를 만나면, 웹 브라우저는 HTML 해석을 잠시 멈춘다.</li>
                                <li>HTML 해석을 잠시 멈춘 웹 브라우저는 <code>&lt;script&gt;</code> 요소를 먼저 실행한다.</li>
                            </ul>
                        </div>

                        <h2>DOM 다루기</h2>

                        <div className="section">
                            <ul>
                                <li>CRUD가 중요하다.</li>
                                <li>
                                    <h3>CRUD</h3>
                                    <ul>
                                        <li>C: Create(생성)</li>
                                        <li>R: Read(조회)</li>
                                        <li>U: Update(수정)</li>
                                        <li>D: Delete(삭제)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>이벤트 객체</h2>

                        <div className="section">
                            <ul>
                                <li>클릭이나 드래그하는 일을 이벤트라고 한다.</li>
                                <li>사용자가 엘리먼트에 특정 이벤트를 발생시켰을 때 이벤트 핸들러가 동작하도록 한다.</li>
                            </ul>
                        </div>


                    </div>
                )
        };

    }
    return (
        <div className="javascript">
            {renderContent()}
        </div>
    );
}
export default JavaScript;
