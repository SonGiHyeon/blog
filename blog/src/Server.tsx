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
            case 'Express':
                return (
                    <div className="container">
                        <h2>Express</h2>

                        <div className="section">

                            <h3>- Express는 Node.js를 위한 가볍고 유연한 웹 애플리케이션 프레임워크다.</h3>
                            <ul>
                                <li>다양한 HTTP 유틸리티와 미들웨어를 제공하여 빠르게 서버를 구축하고 API를 만들 수 있도록 돕는다.</li>
                            </ul>

                            <ul>
                                <li>Node.js의 기본 HTTP 모듈 위에 만들어졌다.</li>
                                <li>RESTful API, 웹 애플리케이션, 마이크로서비스에 적합하다.</li>
                                <li>‘미들웨어’ 기반으로 구성되어 있어 구조를 단순하게 유지하면서도 확장이 쉽다.</li>
                            </ul>
                        </div>

                        <h2>왜 Express를 사용할까?</h2>

                        <div className="section">
                            <h3>- Express의 장점</h3>
                            <ul>
                                <li>코드가 간결해지고 유지보수가 쉬워짐</li>
                                <li>라우팅, 요청 파싱, 정적 파일 제공 등 기능이 내장되어 있음</li>
                                <li>다양한 미들웨어와의 호환성이 뛰어남</li>
                                <li>커뮤니티가 크고 학습 자료가 풍부함</li>
                            </ul>

                            <ul>
                                <li>Express는 웹 서버 개발을 빠르게 시작할 수 있도록 도와주는 ‘기본 툴킷’ 역할을 한다.</li>
                            </ul>
                        </div>

                        <h2>Express 기본 구조</h2>

                        <div className="section">
                            <h3>- app.js 또는 server.js의 역할</h3>
                            <ul>
                                <li>Express 애플리케이션 생성(express() 호출)</li>
                                <li>미들웨어 등록(app.use())</li>
                                <li>라우터 연결(app.use(‘/경로’, 라우터) 방식 또는 app.get() 등 직접 정의)</li>
                                <li>서버 실행(app.listen())</li>
                            </ul>

                            <h3>- 미들웨어란(Middleware)?</h3>
                            <ul>
                                <li>요청과 응답 사이에서 실행되는 함수</li>
                                <li>모든 Express 앱은 미들웨어의 연속체로 구성되어 있다.</li>
                            </ul>

                            <h4>* 주요 미들웨어 예시</h4>
                            <ul>
                                <li><strong>express.json()</strong>: JSON 요청 본문을 자동으로 파싱해 req.body에 넣어준다.</li>
                                <li><strong>express.static()</strong>: 정적 파일(CSS, JS, 이미지 등)을 제공할 때 사용한다.</li>
                                <li><strong>커스텀 미들웨어</strong></li>
                            </ul>

                            <h3>- 라우팅(Routing)</h3>
                            <ul>
                                <li>라우팅이란, 클라이언트의 요청 URL과 메서드(GET, POST 등)에 따라 어떤 동작을 할지 정의하는 것</li>
                                <li>app.get()</li>
                                <li>app.post()</li>
                                <li>app.put()</li>
                                <li>app.delete()</li>
                                <li>app.patch()</li>
                            </ul>

                            <h3>- 요청(Request)과 응답(Response) 객체</h3>

                            <h4>* req 객체 예시</h4>
                            <ul>
                                <li>req.method: 요청 방식(GET, POST 등)</li>
                                <li>req.url: 요청 경로</li>
                                <li>req.query: URL 쿼리 파라미터</li>
                                <li>req.params: 경로 파라미터</li>
                                <li>req.body: 요청 본문(json 미들웨어 필요)</li>
                            </ul>

                            <h4>* res 객체 예시</h4>
                            <ul>
                                <li>res.send(): 문자열 응답</li>
                                <li>res.json(): JSON 응답</li>
                                <li>res.status(code): 상태 코드 설정</li>
                            </ul>
                        </div>

                        <h2>REST API 기능 설계</h2>

                        <div className="section">
                            <h3>- CRUD 구조</h3>
                            <ul>
                                <li>생성: POST: 데이터를 생성</li>
                                <li>조회: GET: 데이터를 읽거나 조회</li>
                                <li>수정: PUT / PATCH: 데이터를 수정</li>
                                <li>삭제: DELETE: 데이터를 삭제</li>
                            </ul>

                            <h3>- 파라미터 처리</h3>
                            <ul>
                                <li>req.params(경로 파라미터)</li>
                                <li>req.query(쿼리 스트링)</li>
                                <li>req.body(본문 데이터)</li>
                            </ul>

                            <h3>- 상태 코드와 응답 보내기</h3>
                            <ul>
                                <li>응답을 보낼 때는 단순히 데이터를 넘겨주는 것뿐 아니라 적절한 HTTP 상태 코드도 함께 보내는 것이 중요하다.</li>
                            </ul>

                            <h4>* 자주 쓰이는 상태 코드</h4>
                            <ul>
                                <li>200: OK - 성공적인 일반 요청</li>
                                <li>201: Created - 리소스 생성 성공</li>
                                <li>204: No Content - 응답 본문 없음</li>
                                <li>400: Bad Request - 잘못된 요청</li>
                                <li>404: Not Found - 리소스 없음</li>
                                <li>500: Internal Server Error - 서버 오류</li>
                            </ul>
                        </div>

                        <h2>에러 핸들링과 구조화</h2>

                        <div className="section">
                            <h3>- 404 / 500 에러 처리 미들웨어</h3>
                            <ul>
                                <li>Express는 마지막까지 어떤 라우터에도 매칭되지 않으면 404 에러를 처리하고, 에러가 발생하면 500 오류를 핸들링 할 수 있는 미들웨어를 정의할 수 있다.</li>
                                <li>이 둘 미들웨어는 app.use()의 마지막에 배치하는 것이 원칙이다.</li>
                            </ul>

                            <h3>- 라우터 분리(express.Router())</h3>
                            <ul>
                                <li>하나의 파일에 모든 API를 넣기보다는 기능 단위로 분리하는 것이 유지보수에 좋다.</li>
                            </ul>

                            <h3>- 컨트롤러 / 서비스 계층 구조</h3>
                            <ul>
                                <li>기능이 복잡해지면 요청 처리 로직을 컨트롤러와 서비스 계층으로 나눈다.</li>
                            </ul>

                            <h4>* Controller: 요청(req)와 응답(res)을 처리하는 레벨</h4>
                            <h4>* Service: 실제 로직을 수행하는 계층(DB 조회, 데이터 가공 등)</h4>

                        </div>
                    </div>
                )
            case 'Cookie & Session & JWT':
                return (
                    <div className="container">
                        <h2> 우리는 왜 인증이 필요한가? </h2>
                        <div className="section">

                            <h3>인증 & 인가</h3>

                            <h4>Authentication (인증):</h4>
                            <ul>
                                <li>정의: “너 누구야?”</li>
                                <li>예시: 로그인, 서명, 패스워드 입력</li>
                            </ul>

                            <h4>Authorization (인가):</h4>
                            <ul>
                                <li>정의: “너 이거 할 수 있어?”</li>
                                <li>예시: 관리자만 접근, 글 수정 권한</li>
                            </ul>

                            <h3>서버는 기억력이 없다?</h3>

                            <ul>
                                <li>웹에서의 요청 방식:</li>
                                <ul>
                                    <li>[브라우저] → 요청 → [서버] → 응답 → 끝</li>
                                </ul>
                                <li>서버는 요청이 끝나면 이전 요청을 잊어버린다.</li>
                                <li>상태를 저장하지 않는(stateless) 특성 때문이다.</li>
                            </ul>

                            <h3>로그인 상태 유지: 세션 & 쿠키</h3>

                            <ul>
                                <li>‘세션’과 ‘쿠키’ 같은 기술은 ‘로그인 상태’를 기억하게 만들어주는 장치다.</li>
                            </ul>

                            <h4>쿠키</h4>
                            <ul>
                                <li>저장 위치: 브라우저(클라이언트)</li>
                                <li>담고 있는 정보: 세션 ID, 사용자 정보 등</li>
                                <li>사용 목적: 사용자가 ‘누군지’ 계속해서 알려주기 위해</li>
                            </ul>

                            <h4>세션</h4>
                            <ul>
                                <li>저장 위치: 서버</li>
                                <li>담고 있는 정보: 사용자 상태(id, 권한 등)</li>
                                <li>서버가 ‘사용자의 로그인 상태나 권한’을 유지하고 식별하기 위해</li>
                            </ul>

                            <h3>JWT(JSON Web Token): 로그인 상태를 저장하는 또 다른 방식</h3>

                            <ul>
                                <li>사용자의 인증 정보를 포함하는 토큰 기반 인증 방식</li>
                                <li>서버에 상태를 저장하지 않음 (Stateless)</li>
                            </ul>

                            <h4>JWT는 왜 사용될까?</h4>
                            <ul>
                                <li>세션을 서버에 저장하지 않아도 됨 → 확장성 ↑</li>
                                <li>클라이언트에 모든 정보 포함 → 서버 부담 ↓</li>
                                <li>다양한 서비스(API, 모바일 등)에서 일관된 인증 가능</li>
                            </ul>

                            <h4>JWT 구조</h4>
                            <ul>
                                <li>Header: 알고리즘, 토큰 타입</li>
                                <li>Payload: 사용자 정보 (예: userId)</li>
                                <li>Signature: 위조 방지용 서명</li>
                            </ul>

                            <h4>예시 흐름</h4>
                            <ul>
                                <li>1. 로그인 시 서버가 JWT 생성해 클라이언트에 전달</li>
                                <li>2. 클라이언트가 JWT를 저장 (예: localStorage, cookie)</li>
                                <li>3. 이후 요청마다 Authorization: Bearer &lt;토큰&gt; 헤더에 포함해 전송</li>
                                <li>4. 서버는 토큰 유효성만 검증하고 사용자 인증 완료</li>
                            </ul>

                        </div>

                    </div>
                )
            case 'NestJS':
                return (
                    <div className="container">
                        <h2> NestJS </h2>
                        <div className="section">

                            <h4>Node.js 기반의 서버 애플리케이션을 위한 프레임워크로, Express 위에서 동작하며 모듈화, 객체지향, 함수형 프로그래밍 요소를 통합한 구조를 제공한다.</h4>
                        </div>

                        <h2> Express와의 관계 </h2>
                        <div className="section">
                            <ul>
                                <li>NextJS는 기본적으로 Express 위에서 동작한다.</li>
                                <li>Express를 사용하는 것처럼 요청 처리나 라우팅을 수행할 수 있다.</li>
                                <li>Fastify(웹 서버 프레임워크)를 선택하여 더 빠른 처리도 가능하다.</li>
                            </ul>
                        </div>

                        <h2> NestJS의 주요 특징 </h2>
                        <div className="section">

                            <h3>의존성 주입</h3>
                            <ul>
                                <li>NestJS는 의존성 주입 컨테이너를 제공하여 클래스 간 결합도를 낮추고 유지보수를 쉽게 한다.</li>
                            </ul>
                            <h3>모듈 기반 설계</h3>
                            <ul>
                                <li>각 기능은 Module 단위로 분리되며, Controller와 Service가 함께 구성된다.</li>
                            </ul>
                            <h3>테스트 친화적 구조</h3>
                            <ul>
                                <li>Nest는 TestingModule과 의존성 주입을 통해 ‘단위 테스트’와 ‘통합 테스트’를 쉽게 할수 있다.</li>
                            </ul>
                        </div>

                        <h2> NestJS 프로그램 구성예시 - User </h2>
                        <div className="section">

                            <h3>Nest CLI로 구성 요소 생성하기</h3>
                            <ul>
                                <li>nest generate controller user</li>
                                <li>nest generate service user</li>
                                <li>nest generate module user</li>
                            </ul>
                            <h3>Controller - HTTP 요청을 처리하는 진입점</h3>
                            <ul>
                                <li>컨트롤러는 클라이언트의 HTTP 요청을 받아 해당 요청을 서비스로 전달한다.</li>
                            </ul>
                            <h3>Service - 비지니스 로직 처리</h3>
                            <ul>
                                <li>서비스는 실제 로직이나 데이터를 처리하는 계층</li>
                                <li>컨트롤러로부터 요청을 받고, 결과를 반환한다.</li>
                            </ul>
                        </div>

                        <h2> 요청 처리 고급 기능 </h2>
                        <div className="section">

                            <h3>DTO(Data Transfer Object)와 유효성 검사</h3>
                            <ul>
                                <li>요청 데이터의 형식과 제약을 명확히 정의하는 객체</li>
                                <li>class-validator 라이브러리와 함께 사용하면 유효성 검사를 간편하게 처리할 수 있다.</li>
                            </ul>
                            <h3>Pipe: 요청 값의 변환 및 검증</h3>
                            <ul>
                                <li>Pipe는 요청이 컨트롤러에 도달하기 전 값을 가공하거나 검증하는 데 사용된다.</li>
                            </ul>
                            <h3>미들웨어 사용하기</h3>
                            <ul>
                                <li>미들웨어는 라우트에 도달하기 전 공통 처리 로직을 넣는 데 사용된다.</li>
                                <li>로깅, 인증, 카운트 증가 등 다양한 용도로 활용된다.</li>
                            </ul>
                            <h3>Exception Filter로 예외 처리 통일</h3>
                            <ul>
                                <li>NestJS에서는 Exception Filter를 통해 예외 처리 형식을 통일할 수 있다.</li>
                            </ul>
                        </div>

                        <h2> 인증 및 보안 </h2>
                        <div className="section">

                            <h3>JWT 안중 방식과 Passport + Guard 조합을 사용해 안전한 사용자 인증 흐름을 구현하는 것이 핵심이다.</h3>
                            <h4>개념 이해: 인증 흐름의 구성 요소</h4>
                            <ul>
                                <li>JWT: 사용자 정보를 담아 클라이언트에게 전달하는 토큰</li>
                                <li>Passport: 다양한 인증 전략(Local, JWT 등)을 지원하는 미들웨어</li>
                                <li>Guard: 요청을 가로채 인증된 사용자만 접근 허용</li>
                                <li>Decorator: 인증된 사용자 정보에 접근할수 있게 해줌(@Request, @User)</li>
                            </ul>
                            <h4>JWT 로그인 흐름 구현</h4>
                            <ul>
                                <li>AuthModule 기본 설정</li>
                            </ul>
                            <h4>Passport 모듈과 Guard 활용</h4>
                            <ul>
                                <li>JwtStrategy 구현</li>
                                <li>Guard 구현</li>
                            </ul>
                            <h4>로그인 구현</h4>
                            <ul>
                                <li>로그인 요청 처리 및 토큰 발급</li>
                            </ul>
                            <h4>인증된 사용자 정보 요청하기</h4>
                            <ul>
                                <li>Guard 적용</li>
                                <li>커스텀 데코레이터(@User)</li>
                            </ul>
                        </div>

                        <h2> 환경변수 관리 - @nestjs/config </h2>
                        <div className="section">

                            <h3>환경변수를 관리해야 하는 이유</h3>
                            <ul>
                                <li>인증정보(JWT 비밀키, DB 비밀번호 등)를 코드에 직접 쓰는 건 보안상 위험</li>
                                <li>운영 환경(dev, prod, test 등)에 따라 유동적인 설정값 필요</li>
                            </ul>
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