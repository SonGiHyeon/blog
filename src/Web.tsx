import React, { useState } from 'react';

const Web = () => {
    const [showWeek2, setShowWeek2] = useState(false); // 1주차 정리본을 표시할지 말지에 대한 상태

    const toggleWeek2Content = () => {
        setShowWeek2(!showWeek2); // 상태를 반전시켜서 보이거나 숨기게끔 설정
    };

    return (
        <div className="container">
            <button onClick={toggleWeek2Content}>
                2주차 정리본 보기
            </button>

            {/* 첫 날만 정리함 */}
            {showWeek2 && (
                <section id="week2-summary">

                    <h2>웹 개요</h2>

                    <div className="section">
                        <h3>웹이란?</h3>
                        <p>인터넷 위에서 동작하는 정보 시스템</p>

                        <h3>인터넷과 웹의 차이</h3>
                        <ul>
                            <li><strong>인터넷:</strong> 전 세계 컴퓨터와 장치들이 서로 연결되어 데이터를 주고받는 네트워크 인프라</li>
                            <li><strong>웹:</strong> 인터넷 위에서 동작하는 정보 시스템 (웹사이트, 블로그, 온라인 포럼 등)</li>
                        </ul>

                        <h3>TCP/IP 프로토콜(1983)</h3>
                        <p>네트워크의 증가하는 복잡성과 규모를 관리하기 위한 통신 규약</p>
                        <ul>
                            <li>데이터를 패킷화하고 주소 지정, 전송, 라우팅, 수신하는 규칙 제공</li>
                        </ul>


                        <h3>웹의 탄생</h3>
                        <h4>팀 버너스 리와 첫 번째 웹</h4>
                        <ul>
                            <li>팀 버너스 리: 웹 창시자로 첫 번째 웹 브라우저 및 서버 개발(1990)</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>WWW의 개념</h2>
                        <ul>
                            <li>하이퍼텍스트(링크)의 활용</li>
                            <li>인터넷을 활용한 글로벌 정보 공유</li>
                            <li>웹의 구성 요소: HTML, HTTP, URL</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>Web3: 웹의 발전 과정</h2>
                        <h3>Web 1.0: 정적 웹</h3>
                        <p>1990~2000, 정적인 자료 검색 방식 (HTML, CSS, GIF 활용)</p>
                        <h3>Web 2.0: 소셜 웹</h3>
                        <p>2000~현재, 사용자가 직접 데이터 생성 및 공유 (AJAX, JavaScript, HTML5, CSS3)</p>
                        <h3>Web 3.0: 탈중앙화와 지능형 웹</h3>
                        <p>현재~미래, 사용자 데이터 소유권 강조 (블록체인, AI, 스마트 컨트랙트)</p>
                    </div>

                    <div className="section">
                        <h2>웹의 기초 기술</h2>
                        <h3>1️. HTML</h3>
                        <p>웹 페이지의 구조와 내용을 작성하는 태그 기반 언어</p>
                        <h3>2️. HTTP</h3>
                        <p>클라이언트와 서버 간의 통신 규칙</p>
                        <h3>3️. URL</h3>
                        <p>웹 상의 리소스를 고유하게 식별하는 주소 체계</p>
                    </div>

                    <div className="section">
                        <h2>클라이언트(Client)와 서버(Server)</h2>
                        <h3>클라이언트</h3>
                        <p>사용자가 서버와 상호작용하는 장치(예: 웹 브라우저)</p>
                        <h3>서버</h3>
                        <p>클라이언트 요청을 처리하고 데이터를 응답하는 시스템</p>
                    </div>

                    <div className="section">
                        <h2>웹 페이지 구성</h2>
                        <h3>1️. HTML</h3>
                        <p>웹 페이지의 구조 정의</p>
                        <h3>2. CSS</h3>
                        <p>웹 페이지의 스타일 및 디자인 적용</p>
                        <h3>3️. JavaScript</h3>
                        <p>웹 페이지의 동적 기능 추가</p>
                    </div>

                </section>
            )}
            {/* 다른 섹션들 */}
        </div>
    );
};

export default Web;
