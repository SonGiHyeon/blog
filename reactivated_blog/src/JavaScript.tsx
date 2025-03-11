import React, { useState } from 'react';

const JavaScript = () => {
    const [showWeek3, setShowWeek3] = useState(false); // 1주차 정리본을 표시할지 말지에 대한 상태

    const toggleWeek3Content = () => {
        setShowWeek3(!showWeek3); // 상태를 반전시켜서 보이거나 숨기게끔 설정
    };

    return (
        <div className="container">
            <button onClick={toggleWeek3Content}>
                3주차 정리본 보기
            </button>

            {/* 첫 날만 정리함 */}
            {showWeek3 && (
                <section id="week3-summary">
                    <div className="section">
                        <h2>
                            조건문
                        </h2>

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

                    <div className="section">
                        <h2>for문</h2>
                        <ul>
                            <li>for(초기값; 조건식; 증감식) {'{'} // 실행할 코드 {'}'}</li>
                            <li>초기값: 증감식 반복 횟수를 카운트하는 역할을 하는 변수.</li>
                            <li>조건식: 코드블록 내부의 코드 실행 여부를 결정한다.</li>
                            <li>증감식: 코드블록 내부의 코드를 실행한 후 초기값으로 선언된 변수의 증가 또는 감소시키기 위한 표현식이다.</li>
                        </ul>

                        <h3>반복문의 활용(문자열과 반복문)</h3>
                    </div>

                    <div className="section">
                        <h2>문자열과 반복문</h2>

                        <h4>인덱스</h4>
                        <ul>
                            <li>특정 문자의 인덱스를 확인하는 메서드는 indexOf()입니다.</li>
                            <li>찾는 문자가 2개 이상일 경우, 가장 앞에 있는 문자의 인덱스를 조회한다.</li>
                        </ul>

                        <h4>길이</h4>
                        <ul>
                            <li>문자열의 길이는 문자열 뒤에 .length를 붙임으로써 조회할 수 있다.</li>
                        </ul>

                        <h4>반복문의 중첩</h4>
                        <ul>
                            <li>반복문은 중첩이 가능하다. 반복문 내부에 또 다른 반복문을 사용할 수 있다.</li>
                            <li>2개의 반복문이 중첩된 경우 이중반복문, 3개의 반복문이 중첩된 경우 삼중반복문이라고 부른다.</li>
                        </ul>

                        <h4>반복문 - while</h4>
                        <ul>
                            <li>조건식만 입력한 후 조건식의 평가결과가 true인 경우 코드블록 내부의 코드를 반복하여 실행한다.</li>
                        </ul>

                        <h4>do...while문</h4>
                        <ul>
                            <li>while 뒤에 오는 조건식이 true로 평가되는 동안 do 뒤에 오는 코드블록 내부의 코드를 반복하여 실행한다.</li>
                            <li>위의 경우, do의 코드블록 내부의 코드가 최소 한 번은 실행된다.</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>for문과 while문</h2>

                        <h4>for문을 사용하는 경우</h4>
                        <ul>
                            <li>반복 횟수가 비교적 명확할 때</li>
                            <li>배열, 문자열 내부를 순회할 때</li>
                            <li>반복문의 중첩이 필요할 때</li>
                        </ul>

                        <h4>while문을 사용하는 경우</h4>
                        <ul>
                            <li>반복 횟수가 명확하지 않을 때</li>
                        </ul>
                    </div>
                </section>
            )}
        </div>
    );
};

export default JavaScript;
