const arrow = "->";

const Server = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'Server intro':
                return (
                    <div className="container">
                        <h2>블록체인에 서버가 필요한 이유?</h2>

                        <div className="section">
                            <h4>
                                <ul>
                                    <li>외부 세계의 정보를 알 수 없다.</li>
                                    <li>복잡한 연산이나 데이터 저장에 부적합하다.</li>
                                    <li>사용자 인증, 접근 제어 등 UI 중심 기능을 직접 처리하기 어렵다.</li>
                                </ul>
                            </h4>
                        </div>

                        <h2>서버가 필요한 이유</h2>

                        <div className="section">
                            <h3>1. 사용자 인증과 보안 처리</h3>
                            <h4>
                                <ul>
                                    <li>스마트 컨트랙트는 사용자의 신원을 확인할 수 없다.</li>
                                    <li>서버는 지갑 서명 기반 로그인, JWT 발급 등을 통해 사용자 인증을 처리할 수 있다.</li>
                                </ul>
                            </h4>

                            <h3>2. 데이터 저장 및 조회 최적화</h3>
                            <h4>
                                <ul>
                                    <li>블록체인은 데이터 저장 비용이 비싸다(Gas비가 필요하기 때문)</li>
                                    <li>서버는 오프체인 DB(PostgreSQL 등)에 데이터를 저장하고 빠르게 조회할 수 있다.</li>
                                </ul>
                            </h4>

                            <h3>3. 외부 API 연동</h3>
                            <h4>
                                <ul>
                                    <li>스마트 컨트랙트는 외부 API를 직접 호출할 수 없다.</li>
                                    <li>서버는 날씨, 환율, NFT 메타데이터 등 외부 정보를 받아와 컨트랙트에 전달할 수 있다.</li>
                                </ul>
                            </h4>

                            <h3>4. 트랜잭션 전처리 및 중계</h3>
                            <h4>
                                <ul>
                                    <li>사용자가 서명해야 할 트랜잭션 데이터를 생성하거나, Meta Transaction을 통해 서버가 대신 트랜잭션을 제출할 수도 있다.</li>
                                </ul>
                            </h4>

                            <h3>5. 로그 기록 및 분석</h3>
                            <h4>
                                <ul>
                                    <li>블록체인 이벤트를 서버에서 수신하여 별도로 기록하고 분석할 수 있다.</li>
                                </ul>
                            </h4>
                        </div>

                        <h2>서버는 블록체인의 ‘조력자’</h2>

                        <div className="section">
                            <h4>
                                <ul>
                                    <li>블록체인 = 데이터의 신뢰성과 투명성을 보장</li>
                                    <li>서버 = 외부 세계와 연결하고, 사용자 경험을 향상시키는 도구</li>
                                    <li>이 둘이 함께할 때, 진짜 의미 있는 DApp이 완성된다.</li>
                                </ul>
                            </h4>
                        </div>

                        <h2>서버</h2>

                        <div className="section">
                            <h3>사용자의 요청을 받아서, 그에 대한 응답을 보내주는 컴퓨터 또는 프로그램</h3>
                            <h4>
                                <ul>
                                    <li>서버는 단순한 컴퓨터가 아니라, 특정 요청을 받고 응답하는 프로그램이 설치된 컴퓨터이다.</li>
                                    <li>사용자의 요청을 기다린다.</li>
                                    <li>요청이 오면 적절한 데이터를 찾아 응답한다.</li>
                                    <li>웹사이트, 파일, 이미지, 데이터 등을 보낼 수 있다.</li>
                                </ul>
                            </h4>

                            <h3>서버는 요청과 응답을 처리하는 역할</h3>
                            <h4>
                                <ul>
                                    <li>사용자가 보내는 것: 요청(Request)</li>
                                    <li>서버가 보내주는 것: 응답(Response)</li>
                                </ul>
                            </h4>
                        </div>

                        <h2>서버 종류</h2>

                        <div className="section">
                            <h4>
                                <ul>
                                    <li><strong>웹 서버</strong>
                                        <ul>
                                            <li>HTML/CSS/JS 파일을 브라우저에 보내줌</li>
                                            <li>예: Apache, Nginx, Express</li>
                                        </ul>
                                    </li>
                                    <li><strong>API 서버(Back-end Server)</strong>
                                        <ul>
                                            <li>데이터 중심: JSON 형식으로 클라이언트에 응답</li>
                                            <li>웹/앱/DApp에서 버튼 클릭 시 동작</li>
                                            <li>예: Express, NextJS, Django REST, Spring Boot</li>
                                        </ul>
                                    </li>
                                    <li><strong>파일 서버</strong>
                                        <ul>
                                            <li>이미지, 영상, 문서 등 정적 파일을 저장하고 전송</li>
                                            <li>예: AWS S3, FTP 서버</li>
                                        </ul>
                                    </li>
                                    <li><strong>데이터베이스 서버</strong>
                                        <ul>
                                            <li>데이터를 저장, 검색, 수정, 삭제 처리</li>
                                            <li>클라이언트는 직접 DB에 접근하지 않고, API 서버를 통해 접근</li>
                                            <li>예: MySQL, PostgreSQL, MongoDB</li>
                                        </ul>
                                    </li>
                                </ul>
                            </h4>
                        </div>

                        <h2>Node.js</h2>

                        <div className="section">
                            <h3>Node.js는 브라우저 밖에서 JavaScript를 실행할 수 있게 해주는 런타임 환경이다.</h3>
                            <h4>
                                <ul>
                                    <li>원래 JavaScript는 브라우저에서만 실행되었지만,</li>
                                    <li>Node.js 덕분에 서버 사이드에서도 JavaScript를 사용할 수 있게 되었다.</li>
                                </ul>
                            </h4>

                            <h3>Node.js의 핵심 개념</h3>
                            <h4>
                                <ul>
                                    <li>실행 환경: 브라우저가 아닌 컴퓨터(서버)에서 JavaScript 실행</li>
                                    <li>기반: 구글의 V8 JavaScript 엔진 사용(크롬 엔진)</li>
                                    <li>용도: 웹 서버, 백엔드 API, 파일 시스템 작업, 네트워크 프로그램 등</li>
                                    <li>특징: 이벤트 기반, 논블로킹 I/O, 싱글 쓰레드 모델</li>
                                </ul>
                            </h4>

                            <h3>Node.js의 장점</h3>
                            <h4>
                                <ul>
                                    <li>자바스크립트 풀스택 개발 가능(프론트엔드 + 백엔드 모두 JS로 개발)</li>
                                    <li>비동기 I/O 처리로 고성능 서버 구축에 유리(예: 실시간 채팅, 스트리밍)</li>
                                    <li>NPM(Node Package Manager)을 통해 다양한 오픈소스 패키지 활용 가능</li>
                                </ul>
                            </h4>
                        </div>

                        <h2>웹에서 정보가 오고가는 흐름</h2>

                        <div className="section">
                            <h3>웹의 기본 구조는 ‘요청과 응답’</h3>
                            <h4>
                                <ul>
                                    <li>웹에서는 항상 ‘무언가를 요청’하고, 그에 대한 ‘응답을 받는 구조’로 작동한다.</li>
                                </ul>
                            </h4>

                            <h3>주요 개념 정리</h3>
                            <h4>
                                <ul>
                                    <li>클라이언트: 요청을 보내는 쪽(예: 브라우저, 앱)</li>
                                    <li>서버: 요청을 받아서 처리하고 응답을 보내는 쪽</li>
                                    <li>인터넷: 클라이언트와 서버가 통신하는 통로</li>
                                    <li>HTTP: 요청과 응답이 오고 갈 때 사용하는 약속(프로토콜)</li>
                                    <li>URL: 요청이 어떤 자원을 가리키는지 표현하는 주소</li>
                                </ul>
                            </h4>

                            <h3>HTTP 요청과 응답의 구성</h3>
                            <h4>
                                <ul>
                                    <li><strong>요청(Request)</strong>
                                        <ul>
                                            <li>메서드: GET, POST, PUT, DELETE 등</li>
                                            <li>URL: 어떤 자원에 대한 요청인지</li>
                                            <li>헤더(Header): 브라우저, 인증 정보, 형식 등 부가 정보</li>
                                            <li>본문(Body): (주로 POST에서) 서버에 보낼 데이터</li>
                                        </ul>
                                    </li>
                                    <li><strong>응답(Response)</strong>
                                        <ul>
                                            <li>상태 코드: 200(성공), 404(없음), 500(서버 에러) 등</li>
                                            <li>헤더: 응답의 형식, 길이, 캐시 정보 등</li>
                                            <li>본문(Body): 사용자에게 보여줄 실제 내용(HTML, JSON 등)</li>
                                        </ul>
                                    </li>
                                </ul>
                            </h4>
                        </div>

                        <h2>미들웨어(MiddleWare)</h2>

                        <div className="section">
                            <h3>미들웨어와 요청 처리 흐름</h3>
                            <h4>
                                <ul>
                                    <li>요청과 응답 사이에서 요청을 가로채고, 검사하고, 가공하고, 심지어 차단까지 할 수 있는 중간 과정</li>
                                </ul>
                            </h4>

                            <h3>미들웨어란 무엇인가?</h3>
                            <h4>
                                <ul>
                                    <li>요청이 서버에 도착했을 때, 최종 응답을 생성하기 전까지 거쳐가는 중간 처리 함수</li>
                                    <li>여러 개의 미들웨어를 순차적으로 연결(chain)할 수 있다.</li>
                                </ul>
                            </h4>

                            <h3>미들웨어의 특징</h3>
                            <h4>
                                <ul>
                                    <li>체인 구조: 여러 개를 순서대로 연결 가능</li>
                                    <li>next() 함수: 다음 미들웨어로 넘기기 위해 호출</li>
                                    <li>요청 검사/응답 조작: 인증, 로깅, 에러 처리 등에 많이 사용</li>
                                    <li>특정 경로에만 적용 가능: <code>app.use(‘/api’, …)</code> 처럼 특정 URL만 처리 가능</li>
                                </ul>
                            </h4>

                            <h3>미들웨어의 대표적인 용도</h3>
                            <h4>
                                <ul>
                                    <li>로그 기록: 누가 언제 무엇을 요청했는지 출력</li>
                                    <li>인증/권한 확인: 로그인 여부, 토큰 유효성 검사</li>
                                    <li>에러 처리: 문제가 생기면 사용자에게 알맞은 메시지 전달</li>
                                    <li>요청 데이터 가공: JSON 파싱, 폼 데이터 처리 등</li>
                                    <li>보안 처리: CORS, Helmet 등 보안 설정 미들웨어 적용</li>
                                </ul>
                            </h4>
                        </div>

                        <h2>다시보는 REST API와 라우팅 구조</h2>

                        <div className="section">
                            <h3>REST API란?</h3>
                            <h4>
                                <ul>
                                    <li>REST(Representational State Transfer)의 약자</li>
                                    <li>자원을 URL로 식별하고, HTTP 메서드로 행동을 지정</li>
                                </ul>
                            </h4>

                            <h3>REST API의 예시</h3>
                            <h4>
                                <ul>
                                    <li>GET: 조회 (예: 모든 사용자 목록, 특정 ID의 사용자 조회)</li>
                                    <li>POST: 생성 (예: 새로운 사용자 생성)</li>
                                    <li>PUT: 전체 수정 (예: ID가 1인 사용자 정보 전체 수정)</li>
                                    <li>PATCH: 부분 수정 (예: 일부 필드만 수정)</li>
                                    <li>DELETE: 삭제 (예: ID가 1인 사용자 삭제)</li>
                                </ul>
                            </h4>

                            <h3>라우팅(Routing)</h3>
                            <h4>
                                <ul>
                                    <li>어떤 URL로 요청이 들어왔을 때 어떤 코드가 실행될지를 결정하는 과정</li>
                                </ul>
                            </h4>
                        </div>

                    </div>

                )

        }

    }

    return (
        <div className="server">
            {renderContent()}
        </div>
    );
}

export default Server;