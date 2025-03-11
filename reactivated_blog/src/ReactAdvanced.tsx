import React, { useState } from 'react';

const ReactAdvanced = () => {
    const [showWeek5, setShowWeek5] = useState(false); // 1주차 정리본을 표시할지 말지에 대한 상태

    const toggleWeek5Content = () => {
        setShowWeek5(!showWeek5); // 상태를 반전시켜서 보이거나 숨기게끔 설정
    };

    return (
        <div className="container">
            <button onClick={toggleWeek5Content}>
                5주차 정리본 보기
            </button>

            {/* 첫 날만 정리함 */}
            {showWeek5 && (
                <section id="week5-summary">
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

                        <h4>주의점</h4>
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
                </section>
            )}
        </div>
    );
};

export default ReactAdvanced;
