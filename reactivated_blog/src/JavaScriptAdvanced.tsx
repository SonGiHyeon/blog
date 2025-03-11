import React, { useState } from 'react';

const JavaScriptAdvanced = () => {
    const [showWeek4, setShowWeek4] = useState(false); // 1주차 정리본을 표시할지 말지에 대한 상태

    const toggleWeek4Content = () => {
        setShowWeek4(!showWeek4); // 상태를 반전시켜서 보이거나 숨기게끔 설정
    };

    return (
        <div className="container">
            <button onClick={toggleWeek4Content}>
                4주차 정리본 보기
            </button>

            {/* 첫 날만 정리함 */}
            {showWeek4 && (
                <section id="week4-summary">
                    <h2>일급 객체</h2>
                    <div className="section">
                        <ul>
                            <li>변수에 할당 할 수 있다.</li>
                            <li>다른 함수의 전달인자로 전달될 수 있다.</li>
                            <li>다른 함수의 결과로써 리턴될 수 있다.</li>
                        </ul>
                    </div>

                    {/* 2/24 */}

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
                </section>
            )}
        </div>
    );
};

export default JavaScriptAdvanced;
