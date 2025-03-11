import React, { useState } from 'react';

const BlockChainInfo = () => {
    const [showWeek1, setShowWeek1] = useState(false); // 1주차 정리본을 표시할지 말지에 대한 상태

    const toggleWeek1Content = () => {
        setShowWeek1(!showWeek1); // 상태를 반전시켜서 보이거나 숨기게끔 설정
    };

    return (
        <div className="container">
            <button onClick={toggleWeek1Content}>
                1주차 정리본 보기
            </button>

            {/* 1주차 정리본이 보일 때만 바로가기 링크를 보이도록 조건 추가 */}
            {showWeek1 && (
                <section id="BlockChainInfo-summary">
                    <div id="week1-summary">
                        <h2>블록체인 구조와 특징</h2>

                        <div className="section">
                            <h3>해시, 디지털 서명, ISMS</h3>

                            <h4>사이버펑크 선언문</h4>
                            <ul>
                                <li>무언가를 숨기기 위해서는 암호화와 암호화된 서명이 필요하다.</li>
                                <li>정보는 이용 가능한 저장 공간을 채우기 위해서 확장되어 왔다.</li>
                                <li>지식은 합의를 필요로 한다. 정보는 암호화될 수 없다.</li>
                                <li>사이버펑크는 코드를 사용한다.</li>
                                <li>비밀을 보호하기 위해서 소프트웨어를 사용한다.</li>
                                <li>사이버펑크는 암호학에서의 규제를 비판한다.</li>
                                <li>사이버펑크는 익명 체계를 만들어냈으며, 익명과 디지털 서명 그리고 전자 돈을 사용해서 비밀을 막아왔다.</li>
                            </ul>

                            <h3>Before going in…</h3>
                            <ul>
                                <li>블록체인은 혁신적인 기술? 탈중앙화? 무결성? 제일 중요한 것은 ‘신뢰’이다.</li>
                                <li>블록체인 & 신뢰</li>
                            </ul>

                            <h3>비트코인은 최초의 블록체인이 아니다?</h3>
                            <ul>
                                <li>최초의 블록체인 아이디어: 디지털 문서의 타임 스탬프를 보장하기 위한 아이디어</li>
                                <li>1989년 연구 결과 조작 스캔들 발생</li>
                                <li>디지털 기록의 불변성 연구 시작</li>
                                <li>블록이라는 단위에 데이터 저장</li>
                                <li>블록이 순서를 가지고 연결됨</li>
                            </ul>
                        </div>

                        {/* 다른 섹션들... */}
                    </div>
                </section>
            )}
        </div>
    );
};

export default BlockChainInfo;
