const img = "img";

const Web = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case '웹 개요':
                return (
                    <div className="container">
                        {/* 2/10 */}
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
                            <h3>팀 버너스 리와 첫 번째 웹</h3>
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
                    </div>
                );
            case 'Git 개요':
                return (
                    <div className='container'>
                        {/* 2/11 */}
                        <h2>Git 개요</h2>

                        <div className="section">
                            <p>Git은 분산 버전 관리 시스템(DVCS)으로, 코드 변경 사항을 효과적으로 관리할 수 있도록 도와준다.</p>
                        </div>

                        <h2>Git(분산 버전 관리 시스템): 필요성</h2>

                        <div className="section">
                            <ul>
                                <li>파일이 변경될 때마다 변경 이력을 저장할 수 있다.</li>
                                <li>이전 버전으로 쉽게 되돌릴 수 있다.</li>
                                <li>어떤 변경 사항이 발생했는지 추적하기 쉽다.</li>
                                <li>협업을 효율적으로 수행할 수 있다.</li>
                                <li>백업 용도로도 사용할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>Git 호스팅 서비스(a.k.a GitHub)</h2>
                        <div className="section">
                            <p><strong>GitHub:</strong> Git 저장소를 호스팅하는 클라우드 서비스</p>
                            <ul>
                                <li>Public Repository(공개 저장소) 무료 제공</li>
                                <li>오픈소스 커뮤니티 적극 지원</li>
                            </ul>
                            <h3>Git 호스팅 서비스의 주요 기능</h3>
                            <ul>
                                <li>원격 저장소 제공 (Remote Repository)</li>
                                <li>협업 도구 (Pull Request, Merge Request, 코드 리뷰, 이슈 트래킹)</li>
                                <li>프로젝트 관리 기능 (칸반 보드, 이슈 연결)</li>
                                <li>CI/CD 지원 (자동 빌드, 테스트, 배포)</li>
                                <li>보안 및 접근 권한 관리</li>
                            </ul>
                        </div>

                        <h2>Git과 GitHub의 차이</h2>

                        <div className="section">
                            <ul>
                                <li><strong>Git:</strong> 로컬에서 코드 버전을 관리하는 도구</li>
                                <li><strong>GitHub:</strong> Git 저장소를 호스팅하는 클라우드 서비스</li>
                            </ul>
                        </div>

                        <h2>1. Git 워크플로우</h2>

                        <div className="section">
                            <h3>Working Directory</h3>
                            <p>현재 작업 중인 파일들이 위치하는 공간</p>

                            <h3>2. Staging Area</h3>
                            <p>커밋을 위해 준비된 파일들이 임시로 저장되는 공간 (<code>git add</code> 사용)</p>

                            <h3>3. Repository</h3>
                            <p>Git이 변경 이력을 저장하는 데이터베이스 (<code>git commit</code> 사용)</p>

                            <h3>Git 워크플로우의 요약</h3>
                            <ul>
                                <li>작업 & 수정 → <code>git add</code> → 스테이징</li>
                                <li><code>git commit</code> → 로컬 저장소 반영</li>
                                <li><code>git push</code> → 원격 저장소에 업로드</li>
                            </ul>
                        </div>

                        <h2>Branch (브랜치)</h2>

                        <div className="section">
                            <ul>
                                <li>독립적인 작업 공간을 제공</li>
                                <li>경량화된 포인터 개념</li>
                                <li>기본 브랜치(예: main)와 여러 개의 병렬 브랜치를 생성하여 관리 가능</li>
                            </ul>
                        </div>

                        <h2>Git 태그(버전 관리)</h2>

                        <div className="section">
                            <p>Git 태그는 특정 커밋을 가리키는 ‘읽기 전용 참조’로, 보통 릴리스 버전을 표시하는 데 사용된다.</p>

                            <h3>주요 특징</h3>
                            <ul>
                                <li>특정 커밋에 고정 (변경 불가)</li>
                                <li>읽기 전용 (수정하려면 삭제 후 새로 생성 필요)</li>
                                <li>소프트웨어 버전 관리에 활용</li>
                            </ul>

                            <h3>Git 태그의 유형</h3>
                            <ul>
                                <li><strong>Annotated Tag:</strong> 작성자, 날짜, 주석 포함 가능</li>
                                <li><strong>Lightweight Tag:</strong> 단순 커밋 참조 (주석 없음)</li>
                            </ul>

                            <h3>버전 관리를 위한 태그 활용</h3>
                            <ul>
                                <li>시멘틱 버전 (예: v1.0.0, v1.1.0)</li>
                                <li>릴리스 태그 (예: stable, beta, hotfix)</li>
                            </ul>
                        </div>

                    </div>
                );

            case 'HTML':
                return (
                    <div className='container'>
                        {/* 2/12 */}

                        <h2>HTML(HyperText Markup Language, 하이퍼텍스트 마크업 언어)</h2>

                        <div className="section">
                            <p>웹 페이지를 구성하는 기본 언어로, 텍스트를 구조화하고 멀티미디어 요소를 포함하며 브라우저가 콘텐츠를 표시하는 방식을 정의한다.</p>
                        </div>

                        <h2>HTML의 특징</h2>
                        <div className="section">
                            <ul>
                                <li>
                                    <strong>하이퍼텍스트</strong>
                                    <ul>
                                        <li>하이퍼텍스트는 문서 간 연결을 의미한다.</li>
                                        <li>하이퍼링크는 태그를 사용하여 웹 페이지 간의 연결을 만든다.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>마크업 언어</strong>
                                    <ul>
                                        <li>텍스트에 태그를 추가하여 ‘구조’와 ‘의미’를 정의하는 언어</li>
                                        <li>h1는 제목, p는 단락을 의미</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>브라우저에서 해석</strong>
                                    <ul>
                                        <li>HTML 파일은 웹 브라우저가 읽고 해석하여 사용자에게 웹 페이지로 ‘렌더링’된다.</li>
                                        <li>예: HTML 코드는 브라우저에서 시각적인 콘텐츠로 변환된다.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>구성 요소</h2>

                        <div className="section">
                            <ul>
                                <li><strong>!DOCTYPE html</strong>: HTML5 문서를 선언하는 코드</li>
                                <li><strong>html</strong>: HTML 문서의 루트(root) 요소로, 모든 HTML 태그를 감싼다.</li>
                                <li><strong>head</strong>: 문서의 ‘메타정보’를 담는 부분
                                    <ul>
                                        <li><strong>title</strong> 태그: 브라우저 ‘탭’에 표시되는 ‘제목’</li>
                                        <li><strong>meta</strong> 태그: 문서 정보(인코딩, 뷰포트 등)를 설정한다.</li>
                                    </ul>
                                </li>
                                <li><strong>body</strong>: 사용자가 실제로 볼 수 있는 ‘콘텐츠’를 담는 부분
                                    <ul>
                                        <li>텍스트, 이미지, 링크, 폼 등 다양한 요소가 포함된다.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>텍스트와 구조 태그</h2>

                        <div className="section">
                            <p>HTML은 텍스트를 구조화하기 위한 여러 태그를 제공한다.</p>

                            <h3>링크와 이미지 태그</h3>
                            <p>링크와 이미지를 표시하기 위한 HTML 태그가 있다. 예를 들어, <a></a> 하이퍼링크를 만들고, {img}는 이미지를 표시한다.</p>

                            <h3>리스트 태그</h3>
                            <p>HTML 문서에서 목록(List) 태그를 사용하는 방법:</p>

                            <ul>
                                <li>순서가 있는 목록: ol</li>
                                <li>순서가 없는 목록: ul</li>
                            </ul>
                        </div>

                        <h2>속성(Attribute)</h2>

                        <div className="section">
                            <p>태그에 추가 정보를 제공하여 해당 요소의 ‘동작’이나 ‘스타일’을 설정하는 데 사용된다.</p>
                            <p>속성은 항상 ‘시작 태그 안에 작성’되며 속성명=‘값’의 형식으로 표현된다.</p>
                        </div>

                        <h2>SEO (Search Engine Optimization)</h2>

                        <div className="section">
                            <p>SEO(검색 엔진 최적화)는 ‘검색 엔진’에서 웹사이트가 더 높은 순위에 노출되도록 최적화하는 작업이다.</p>
                        </div>

                    </div >
                )
            case 'CSS':
                return (
                    <div className='container'>
                        {/* 2/13 */}

                        <h2>CSS</h2>

                        <div className='section'>
                            <p>웹 페이지의 스타일과 레이아웃을 정의하는 언어</p>
                        </div>

                        <h2>
                            UX(User Experience)
                        </h2>
                        <div className='section'>
                            <ul>
                                <li>콘텐츠의 배치와 위치를 조정하는 ‘레이아웃 디자인’</li>
                                <li>텍스트를 강조하거나 밑줄을 긋는 등의 최소한의 ‘타이포그래피(Typography)’</li>
                            </ul>
                        </div>

                        <h2>
                            CSS의 주요 특징
                        </h2>

                        <div className='section'>
                            <h3>스타일링의 분리</h3>
                            <ul>
                                <li>CSS는 HTML에서 스타일을 분리하여 코드의 가독성과 재사용성을 높인다.</li>
                                <li>HTML은 구조를 담당하고 CSS는 디자인을 담당하여 역할을 분리한다.</li>
                            </ul>

                            <h3>재사용성</h3>
                            <ul>
                                <li>한 번 작성된 CSS 스타일을 여러 HTML 파일에서 재사용할 수 있어 유지보수가 용이하다.</li>
                            </ul>

                            <h3>반응형 디자인</h3>
                            <ul>
                                <li>CSS는 다양한 화면 크기와 장치에 적응하는 ‘반응형 웹 디자인’을 지원한다. 이를 위해 ‘미디어 쿼리’와 같은 기술을 활용한다.</li>
                            </ul>

                            <h3>계층적 구조</h3>
                            <ul>
                                <li>CSS는 ‘Cascading(계단식)’이라는 이름처럼, 스타일 규칙이 ‘계층적’으로 적용된다. 즉, 스타일의 우선순위를 정의할 수 있다.</li>
                            </ul>
                        </div>

                        <h2>
                            HTML과의 관계
                        </h2>

                        <div className='section'>
                            <h3>HTML(Hyper Text Markup Language)</h3>
                            <ul>
                                <li>웹 페이지의 구조와 콘텐츠를 정의한다.</li>
                                <li>제목, 문단, 이미지, 링크 등 페이지의 요소를 배치한다.</li>
                            </ul>

                            <h3>CSS(Cascading Style Sheets)</h3>
                            <ul>
                                <li>HTML로 작성된 요소들의 ‘디자인’과 ‘레이아웃’을 지정한다.</li>
                                <li>색상, 글꼴, 크기, 정렬 등을 제어하여 웹 페이지를 시각적으로 매력적이고 사용자 친화적으로 만든다.</li>
                            </ul>
                        </div>

                        <h2>
                            HTML과 CSS의 연결 방법
                        </h2>

                        <div className='section'>
                            <h3>외부 스타일시트 연결</h3>
                            <ul>
                                <li>외부 CSS 파일을 HTML 문서에 연결할 때 <code>&lt;link&gt;</code> 태그를 사용한다.</li>
                            </ul>

                            <h3>구문</h3>
                            <ul>
                                <li><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></li>
                            </ul>

                            <h3>속성 설명</h3>
                            <ul>
                                <li><code>rel="stylesheet"</code> : 연결된 파일이 CSS 스타일시트임을 지정한다.</li>
                                <li><code>href="styles.css"</code> : 연결할 CSS 파일의 경로를 지정한다.</li>
                            </ul>

                            <h3>내부 스타일시트</h3>
                            <ul>
                                <li>HTML 파일 안에서 <code>&lt;style&gt;</code> 태그를 사용하여 CSS 규칙을 정의할 수 있다.</li>
                            </ul>

                            <h3>인라인 스타일</h3>
                            <ul>
                                <li>HTML 요소에 직접 스타일을 정의할 수도 있다.</li>
                            </ul>
                        </div>

                        <h2>
                            HTML과 CSS의 협업 이점
                        </h2>

                        <div className='section'>
                            <ul>
                                <li>역할 분리</li>
                                <li>재사용성</li>
                                <li>반응형 웹 디자인</li>
                            </ul>
                        </div>

                    </div >
                )

            case 'JavaScript':
                return (
                    <div className='container'>
                        {/* 2/14 */}

                        <h2>JavaScript</h2>

                        <div className="section">
                            <p>HTML과 CSS로 구성된 웹 페이지를 '동적'으로 만들어주는 언어(웹 개발을 위한 프로그래밍 언어)</p>
                        </div>

                        <h2>JavaScript 역사</h2>

                        <div className="section">
                            <h3>1995년 탄생</h3>
                            <h3>ECMAScript 표준화</h3>
                            <ul>
                                <li>1997년 ECMA 국제 표준화 기구에 의해 표준화됨, ECMAScript(ES)라는 이름으로 정의된다.</li>
                            </ul>
                            <h3>현재의 위치</h3>
                            <ul>
                                <li>웹 애플리케이션의 중심 언어, React, Angular, Vue.js와 같은 '프레임워크'와 Node.js를 통해 웹, 서버,
                                    모바일 및 IoT 개발에도 광범위하게 사용되고 있다.
                                </li>
                            </ul>
                        </div>

                        <h2>JavaScript 특징</h2>

                        <div className="section">
                            <h3>인터프리터 언어</h3>
                            <ul>
                                <li>
                                    <h3>코드를 실행 전에 '컴파일'하지 않고, 브라우저가 즉시 해석하여 실행함</h3>
                                </li>
                            </ul>
                            <h3>크로스 플랫폼</h3>
                            <ul>
                                <li>
                                    <h3>브라우저만 있으면 플랫폼에 상관없이 실행 가능</h3>
                                </li>
                            </ul>
                            <h3>동적 타이핑</h3>
                            <ul>
                                <li>
                                    <h3>변수의 타입을 선언할 필요 X, 실행 중에 타입이 '동적'으로 결정된다.</h3>
                                </li>
                            </ul>
                            <h3>객체 지향과 함수형 프로그래밍</h3>
                            <ul>
                                <li>
                                    <h3>객체 지향 프로그래밍과 함수형 프로그래밍을 모두 지원한다.</h3>
                                </li>
                            </ul>
                            <h3>이벤트 기반 프로그래밍</h3>
                            <ul>
                                <li>
                                    <h3>사용자 상호작용(클릭, 입력 등)을 처리하기 위해 '이벤트' 기반 방식으로 동작한다.</h3>
                                </li>
                            </ul>
                        </div>

                        <h2>JavaScript로 할 수 있는 일</h2>

                        <div className="section">
                            <ul>
                                <li>
                                    <h3>동적인 웹 페이지 생성</h3>
                                    <ul>
                                        <li>
                                            <h3>DOM 조작을 통해 HTML 요소를 동적으로 업데이트하거나, CSS를 변경하여 페이지 스타일을 조정할 수
                                                있다.</h3>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>프론트엔드 애플리케이션 개발</h3>
                                    <ul>
                                        <li>
                                            <h3>React, Angular, Vue.js와 같은 프레임워크를 사용해 SPA(Single Page
                                                Application)를 개발할 수 있다.</h3>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>서버 애플리케이션 개발</h3>
                                    <ul>
                                        <li>
                                            <h3>Node.js를 활용해 서버를 구축, REST API를 개발할 수 있다.</h3>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>JavaScript 동작방식</h2>

                        <div className="section">
                            <ul>
                                <li>코드는 기본적으로 위에서 아래로 실행된다.</li>
                            </ul>
                            <h3>console.log()</h3>
                            <ul>
                                <li>
                                    <h3>출력 결과 확인</h3>
                                </li>
                            </ul>
                            <h3>주석</h3>
                            <ul>
                                <li>
                                    <h3>코드 내 메모</h3>
                                </li>
                            </ul>
                        </div>

                        <h2>값과 표현식</h2>

                        <div className="section">
                            <h3>값</h3>
                            <ul>
                                <li>
                                    <h3>평가가 완료되어 하나의 의미를 가지는 코드</h3>
                                </li>
                            </ul>
                            <h3>표현식</h3>
                            <ul>
                                <li>
                                    <h3>하나의 값으로 평가될 수 있는 코드</h3>
                                </li>
                            </ul>
                            <h3>연산자</h3>
                            <ul>
                                <li>
                                    <h3>산술 연산이나 논리 연산 등을 할 수 있는 기호</h3>
                                </li>
                            </ul>
                        </div>

                    </div>
                )

        }
    };

    return (
        <div className="web">
            {renderContent()}
        </div>
    );
};

export default Web;
