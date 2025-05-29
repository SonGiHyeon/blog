const arrow = "=>";

const Backend = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'Database':
                return (
                    <div className="container">
                        <h2> Database란? </h2>
                        <div className="section">

                            <p>데이터베이스란, 여러 사람이 사용할 목적으로 데이터를 구조화하여 저장한 ‘정보의 집합’이다.</p>

                        </div>
                        <h2> 데이터베이스 특징 </h2>
                        <div className="section">

                            <ul>
                                <li><strong>검색속도:</strong> 빠름(인덱스 활용)</li>
                                <li><strong>데이터 무결성:</strong> 제약 조건으로 보장 가능</li>
                                <li><strong>동시성 처리:</strong> DBMS가 처리함</li>
                                <li><strong>확장성:</strong> 확장성 좋음</li>
                            </ul>

                        </div>
                        <h2> 데이터베이스 구성 요소 </h2>
                        <div className="section">

                            <ul>
                                <li><strong>데이터:</strong> 저장된 정보</li>
                                <li><strong>스키마(Schema):</strong> 데이터 구조 정의(예: 어떤 테이블에 어떤 열이 있는지)</li>
                                <li><strong>DBMS:</strong> 데이터베이스를 관리해주는 소프트웨어(MySQL, PostgreSQL 등)</li>
                            </ul>

                        </div>
                        <h2> 데이터베이스의 핵심 품질 속성 </h2>
                        <div className="section">

                            <p>DB를 사용하는 이유를 기술적으로 뒷받침해주는 개념이다.</p>

                            <h3> 데이터 무결성(Data Integrity) </h3>
                            <ul>
                                <li><strong>개체 무결성:</strong> 기본 키는 유일하고 NULL일 수 없음</li>
                                <li><strong>참조 무결성:</strong> 외래 키가 참조하는 값이 실제 존재해야 함</li>
                                <li><strong>도메인 무결성:</strong> 특정 컬럼의 값이 유효한 범위 안에 있어야 함</li>
                                <li><strong>사용자 정의 무결성:</strong> 사용자가 정의한 조건 만족</li>
                            </ul>
                            <p>⇒ 제약 조건(PRIMARY KEY, FOREIGN KEY, CHECK, NOT NULL) 등으로 DB가 강제함</p>

                            <h3> 동시성 처리(Concurrency Control) </h3>
                            <p>여러 사용자가 동시에 DB에 접근해도 데이터 충돌 없이 일관성 있게 처리되도록 관리하는 것</p>
                            <ul>
                                <li><strong>트랜잭션(Transaction):</strong> 작업 단위를 묶어서 원자성 보장(BEGIN ~ COMMIT)</li>
                                <li><strong>잠금(Lock):</strong> 데이터를 수정하는 동안 다른 트랜잭션이 접근 못하게 막음(Row-level lock 등)</li>
                                <li><strong>격리 수준(Isolation Level):</strong> 동시성 제어의 강도 설정(READ COMMITTED, SERIALIZABLE 등)</li>
                            </ul>
                            <p>⇒ DBMS는 내부적으로 잠금(Locking)과 트랜잭션 격리 수준으로 충돌 방지와 일관성 보장을 자동 처리함</p>

                            <h3> 확장성(Scalability) </h3>
                            <p>데이터나 요청이 많아졌을 때, 성능 저하 없이 시스템을 확장할 수 있는 능력</p>
                            <ul>
                                <li><strong>수직 확장(Scale Up):</strong> 서버의 CPU, RAM, SSD 등 하드웨어 성능 강화</li>
                                <li><strong>수평 확장(Scale Out):</strong> 여러 DB 서버를 두고 요청을 분산 처리</li>
                                <li><strong>분할(Sharding):</strong> 데이터를 ID나 지역별로 물리적으로 나누어 저장</li>
                                <li><strong>캐싱:</strong> 자주 조회하는 데이터를 메모리에 저장(Redis, Memcached 등)</li>
                            </ul>
                            <p>⇒ DB 구조 설계 + 인프라 아키텍처가 확장성에 직접적인 영향</p>

                        </div>
                        <h2> RDBMS vs NoSQL </h2>
                        <div className="section">

                            <h3> RDBMS란? </h3>
                            <ul>
                                <li>Relational Database Management System의 약자</li>
                                <li>데이터를 표(테이블)로 관리</li>
                                <li>각 테이블은 행(Row)과 열(Column)로 구성</li>
                                <li>테이블 간 관계는 외래 키(Foreign Key)로 연결</li>
                            </ul>

                            <h4> 대표적인 RDBMS </h4>
                            <ul>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>Oracle</li>
                                <li>Microsoft SQL Server</li>
                            </ul>

                            <h3> NoSQL이란? </h3>
                            <ul>
                                <li>Not Only SQL의 약자</li>
                                <li>비정형/반정형 데이터 저장에 유리</li>
                                <li>테이블 대신 문서, 키-값, 그래프, 컬럼 등 다양한 구조 사용</li>
                                <li>스키마 유연성, 수평 확장성에 강점</li>
                            </ul>

                            <h4> 대표적인 NoSQL DB </h4>
                            <ul>
                                <li>MongoDB(문서 기반)</li>
                                <li>Redis(키-값 저장소)</li>
                                <li>Cassandra(컬럼형)</li>
                                <li>Neo4j(그래프형)</li>
                            </ul>

                        </div>
                        <h2> 테이블, 행, 열, 스키마 </h2>
                        <div className="section">

                            <h3> 테이블(Table)이란? </h3>
                            <p>데이터를 구조화된 형식으로 저장하는 그릇</p>
                            <ul>
                                <li>하나의 테이블은 한 종류의 정보를 저장</li>
                            </ul>

                            <h3> 열(Column)이란? </h3>
                            <p>테이블에서 데이터의 속성(항목)을 정의한 것</p>
                            <ul>
                                <li>하나의 열은 특정한 데이터 타입과 의미를 가짐</li>
                            </ul>

                            <h3> 행(Row)이란? </h3>
                            <p>테이블에서 하나의 실제 데이터(레코드)를 의미함</p>
                            <ul>
                                <li>각 행은 열에 맞춰 하나의 개별 정보 묶음을 담고 있다.</li>
                            </ul>

                            <h3> 스키마(Schema)란? </h3>
                            <p>테이블 구조, 데이터 타입, 제약 조건 등을 정의하는 설계도</p>
                            <ul>
                                <li>테이블 이름, 열 이름, 열의 데이터 타입, 제약 조건 등 포함</li>
                                <li>실제 데이터를 담는 것이 아니라 데이터를 어떤 구조로 정의할지를 설계한다.</li>
                            </ul>

                        </div>
                        <h2> RDBMS의 핵심 용어 </h2>
                        <div className="section">

                            <h3> Primary Key(기본 키) </h3>
                            <ul>
                                <li>각 행(row)을 유일하게 식별할 수 있는 값</li>
                                <li>중복 안됨</li>
                                <li>NULL 안됨</li>
                                <li>한 테이블에 하나만 존재 가능</li>
                            </ul>

                            <h3> Foreign Key(외래 키) </h3>
                            <ul>
                                <li>다른 테이블의 기본 키를 참조하는 열</li>
                                <li>두 테이블 사이에 관계를 정의하는 역할</li>
                                <li>데이터의 일관성과 무결성 보장</li>
                                <li>사용자의 삭제/수정 시 제한 또는 연쇄 처리 가능</li>
                            </ul>

                            <h3> Index(인덱스) </h3>
                            <ul>
                                <li>검색 속도를 빠르게 하기 위한 데이터 구조</li>
                                <li>검색 기능 향상</li>
                                <li>쓰기 성능은 낮아질 수 있음</li>
                            </ul>

                            <h3> Unique Key </h3>
                            <ul>
                                <li>중복되지 않는 값을 보장하지만, NULL은 허용</li>
                                <li>기본 키처럼 보이지만 하나 이상의 열에 설정 가능</li>
                            </ul>

                            <h3> Not Null </h3>
                            <ul>
                                <li>해당 열에 NULL 값이 들어오는 걸 막는 제약 조건</li>
                            </ul>

                        </div>
                        <h2> ACID </h2>
                        <div className="section">

                            <p>데이터베이스 트랜잭션이 정확하고 안정적으로 처리되도록 보장하는 네 가지 핵심 속성</p>
                            <p>트랜잭션: 하나의 작업 단위를 의미</p>

                            <ul>
                                <li><strong>A - Atomicity(원자성):</strong> 트랜잭션은 전부 성공하거나 전부 실패해야 한다</li>
                                <li><strong>C - Consistency(일관성):</strong> 트랜잭션이 끝나면 데이터는 항상 정해진 규칙(제약 조건)을 만족해야 한다.</li>
                                <li><strong>I - Isolation(격리성):</strong> 동시에 실행되는 트랜잭션이 서로에게 영향을 주지 않아야 한다.</li>
                                <li><strong>D - Durability(지속성):</strong> 트랜잭션이 완료되면, 그 결과는 영구적으로 보존되어야 한다.</li>
                            </ul>

                        </div>
                        <h2> PostgreSQL </h2>
                        <div className="section">

                            <p>PostgreSQL은 객체-관계형 데이터베이스 관리 시스템(ORDBMS)이다.</p>

                            <ul>
                                <li>SQL 표준을 충실히 따르는 정통 관계형 데이터베이스</li>
                                <li>객체지향적 개념(상속, 사용자 정의 타입 등)도 일부 지원</li>
                                <li>복잡한 쿼리, 트랜잭션, 확장성에 강함</li>
                                <li>무료 & 오픈소스 라이선스(상업적 사용 가능)</li>
                            </ul>

                            <h3> PostgreSQL 사용처 </h3>
                            <ul>
                                <li>금융/의료 등 안정성과 정합성이 중요한 시스템</li>
                                <li>Python, JavaScript, Java 등 다양한 언어와 연동</li>
                                <li>NestJS, Django, Spring 등 백엔드 프레임워크와 조화가 잘 됨</li>
                            </ul>

                        </div>

                    </div>
                )
            case 'SQL 기본 문법':
                return (
                    <div className="container">
                        <div className="section">
                            <h2>SQL 문법</h2>
                            <h3>SQL(Structured Query Language)은 데이터베이스에 정보를 요청하거나 조작하기 위한 언어</h3>
                            <ul>
                                <li>SELECT(데이터를 가져오고)</li>
                                <li>INSERT(데이터를 넣고)</li>
                                <li>UPDATE(데이터를 수정하고)</li>
                                <li>DELETE(데이터를 지우기)</li>
                            </ul>
                        </div>

                        <div className="section">
                            <h2>기본 SQL 문법 구조</h2>
                            <h3>SQL 문장은 보통 이렇게 생겼다</h3>
                            <ul>
                                <li><code>SELECT 컬럼명 FROM 테이블명 WHERE 조건;</code></li>
                            </ul>
                        </div>

                        <div className="section">
                            <h2>SQL 기본 명령어 - SELECT, INSERT, UPDATE, DELETE</h2>

                            <h3>1. SELECT - 데이터 조회하기</h3>
                            <ul>
                                <li>데이터베이스에서 필요한 정보를 꺼내올 때 사용하는 명령어</li>
                                <li>예시: <code>SELECT 컬럼명 FROM 테이블명;</code></li>
                            </ul>
                            <h4>WHERE 조건을 붙이면?</h4>
                            <ul>
                                <li>SELECT, UPDATE, DELETE 쿼리에서 “어떤 행(Row)을 대상으로 할지” 정하는 필터 조건</li>
                            </ul>

                            <h3>2. INSERT - 데이터 추가하기</h3>
                            <ul>
                                <li>테이블에 새로운 행(Row)을 삽입할 때 사용</li>
                                <li>예시: <code>INSERT INTO 테이블명(컬럼1, 컬럼2)</code></li>
                            </ul>

                            <h3>3. UPDATE - 데이터 수정하기</h3>
                            <ul>
                                <li>기존 데이터를 변경할 때 사용</li>
                                <li><strong>주의:</strong> WHERE를 꼭 써야 특정 데이터만 변경</li>
                                <li>예시: <code>UPDATE 테이블명 SET 컬럼1 = 값1, 컬럼2 = 값2 WHERE 조건;</code></li>
                            </ul>

                            <h3>4. DELETE - 데이터 삭제하기</h3>
                            <ul>
                                <li>특정 조건에 해당하는 데이터를 지울 때 사용</li>
                                <li><strong>주의:</strong> WHERE를 꼭 써야 특정 데이터만 삭제</li>
                                <li>예시: <code>DELETE FROM 테이블명 WHERE 조건;</code></li>
                            </ul>
                        </div>

                        <div className="section">
                            <h2>SQL 조건문 - WHERE, AND, OR, LIKE</h2>

                            <h3>1. WHERE - 조건을 걸어 데이터를 필터링하기</h3>
                            <ul>
                                <li>“이 조건을 만족하는 데이터만”이라는 뜻</li>
                                <li>예시: <code>SELECT * FROM 테이블명 WHERE 조건;</code></li>
                            </ul>

                            <h3>2. AND, OR - 여러 조건 결합하기</h3>
                            <ul>
                                <li><strong>AND:</strong> 모든 조건을 동시에 만족</li>
                                <li><strong>OR:</strong> 하나라도 만족하면 포함</li>
                            </ul>

                            <h3>3. LIKE - 패턴으로 문자열 검색하기</h3>
                            <ul>
                                <li>문자열이 특정 패턴일 때 검색</li>
                                <li>예시 패턴:
                                    <ul>
                                        <li>'A%': A로 시작하는 값</li>
                                        <li>'%son': -son으로 끝나는 값</li>
                                        <li>'%Lee%': Lee를 포함하는 값</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="section">
                            <h2>SQL 결과를 정돈하는 법 - ORDER BY와 LIMIT</h2>

                            <h3>1. ORDER BY - 결과 정렬하기</h3>
                            <ul>
                                <li>쿼리 결과를 특정 열을 기준으로 정렬</li>
                                <li>예시: <code>SELECT * FROM 테이블명 ORDER BY 컬럼명 [ASC | DESC]</code></li>
                                <li>ASC: 오름차순</li>
                                <li>DESC: 내림차순</li>
                            </ul>

                            <h3>2. LIMIT - 결과 행 수 제한하기</h3>
                            <ul>
                                <li>조회 결과 중 몇 개만 보고 싶을 때 사용</li>
                                <li>예시: <code>SELECT * FROM 테이블명 LIMIT 숫자;</code></li>
                            </ul>

                            <h3>3. ORDER BY + LIMIT 함께 쓰기</h3>
                            <ul>
                                <li>정렬된 결과 중 일부만 보고 싶을 때 자주 사용</li>
                            </ul>
                        </div>

                        <div className="section">
                            <h2>JOIN</h2>
                            <h3>JOIN은 SQL에서 두 개 이상의 테이블을 연결해 하나의 결과처럼 보여주는 기능</h3>

                            <h3>JOIN 기본 구조</h3>
                            <ul>
                                <li><code>SELECT * FROM A JOIN B ON A.공통컬럼 = B.공통컬럼</code></li>
                            </ul>

                            <h3>JOIN의 종류와 차이점</h3>
                            <ul>
                                <li><strong>INNER JOIN:</strong> 두 테이블에 공통되는 데이터만 조회</li>
                                <li><strong>LEFT JOIN:</strong> 왼쪽 테이블의 모든 데이터 + 일치하는 오른쪽 데이터</li>
                                <li><strong>RIGHT JOIN:</strong> 오른쪽 테이블의 모든 데이터 + 일치하는 왼쪽 데이터</li>
                                <li><strong>FULL JOIN:</strong> 양쪽 테이블의 모든 데이터</li>
                            </ul>
                        </div>

                        <div className="section">
                            <h2>SQL 집계 함수와 GROUP BY - 데이터를 요약하고 통계내기</h2>

                            <h3>대표적인 집계 함수</h3>
                            <ul>
                                <li><strong>COUNT():</strong> 행 개수 세기</li>
                                <li><strong>AVG():</strong> 평균값 계산</li>
                                <li><strong>MAX():</strong> 최대값</li>
                                <li><strong>MIN():</strong> 최소값</li>
                                <li><strong>SUM():</strong> 합계</li>
                            </ul>
                        </div>

                    </div>
                )
            case '고급 SQL과 성능':
                return (
                    <div className="container">
                        <h2>SubQuery</h2>

                        <div className="section">
                            <h3>서브쿼리란?</h3>
                            <ul>
                                <li>SQL을 더 강력하고 유연하게 만들어주는 핵심 기능 중 하나로 “하나의 쿼리 안에 또 다른 쿼리”를 작성하는 것</li>
                                <li>메인 쿼리(Main Query)를 도와서 중간 결과를 만들거나, 필터링을 도와주는 역할</li>
                            </ul>

                            <h3>서브쿼리 기본 구조</h3>
                            <pre>
                                SELECT 컬럼명
                                FROM (서브쿼리) AS 별칭
                                WHERE 조건;
                            </pre>
                            <ul>
                                <li>서브쿼리는 항상 () 소괄호 안에 작성</li>
                                <li>서브쿼리는 메인쿼리에 값을 제공하거나, 조건을 만든다.</li>
                            </ul>

                            <h3>서브쿼리 사용 위치 3가지</h3>
                            <ul>
                                <li><strong>SELECT 내부</strong>: 특정 컬럼을 계산해서 가져옴</li>
                                <li><strong>WHERE 내부</strong>: 조건으로 사용</li>
                                <li><strong>FROM 내부</strong>: 임시 테이블처럼 사용</li>
                            </ul>
                        </div>

                        <h2>View, Transaction, Commit/Rollback</h2>

                        <div className="section">
                            <h3>View(뷰) - 가상의 테이블</h3>
                            <ul>
                                <li>뷰(View)는 실제 데이터를 저장하지 않고, SELECT 쿼리 결과를 마치 테이블처럼 보여주는 가상의 테이블</li>
                            </ul>

                            <pre>
                                CREATE VIEW 뷰이름 AS
                                SELECT … FROM … WHERE …;
                            </pre>

                            <h4>뷰의 특징</h4>
                            <ul>
                                <li>가볍다(데이터 별도 저장 X)</li>
                                <li>복잡한 쿼리를 쉽게 재사용할 수 있다.</li>
                                <li>단점: 뷰를 갱신하는 건 일부 제한이 있음</li>
                            </ul>

                            <h3>Transaction(트랜잭션) - 작업을 하나처럼 묶기</h3>
                            <ul>
                                <li>트랜잭션(Transaction)은 데이터베이스에서 여러 작업을 하나의 단위로 묶는 것</li>
                                <li>모두 성공해야 하고, 하나라도 실패하면 전부 취소해야 한다 (마치 try-catch문과 비슷)</li>
                            </ul>

                            <h3>Commit / Rollback - 결과 확정 또는 취소</h3>
                            <ul>
                                <li><strong>COMMIT</strong> → 트랜잭션의 모든 변경 사항을 확정하고 저장</li>
                                <li><strong>ROLLBACK</strong> → 트랜잭션 중 발생한 변경 사항을 모두 취소</li>
                            </ul>
                        </div>

                        <h2>Index</h2>

                        <div className="section">
                            <h3>인덱스란?</h3>
                            <ul>
                                <li>데이터베이스 테이블에서 필요한 데이터를 빠르게 찾기 위한 일종의 “목차”</li>
                                <li>인덱스를 만들면 특정 데이터를 순식간에 조회할 수 있다.</li>
                            </ul>

                            <h4>인덱스가 필요한 상황</h4>
                            <ul>
                                <li>WHERE로 특정 값을 자주 검색할 때</li>
                                <li>JOIN에 사용하는 컬럼일 때</li>
                                <li>ORDER BY 혹은 GROUP BY에 쓰이는 컬럼일 때</li>
                            </ul>

                            <h4>주의사항</h4>
                            <ul>
                                <li>모든 컬럼에 인덱스를 만들면 안 됨 — 인덱스도 저장 공간을 차지하고, INSERT/UPDATE 성능이 느려짐</li>
                                <li>자주 변경되는 컬럼에 인덱스 주의 — 수정될 때마다 인덱스도 갱신돼야 함</li>
                                <li>읽기(Read) 위주 테이블에 특히 유리 — 조회가 많은 경우 인덱스 효과가 큼</li>
                            </ul>

                            <h3>복합 인덱스(Composite Index)</h3>
                            <ul>
                                <li>여러 컬럼을 조합해 하나의 인덱스로 만드는 것도 가능하다.</li>
                                <li>인덱스는 왼쪽 컬럼부터 최우선 적용된다.</li>
                            </ul>
                        </div>

                        <h2>정규화와 비정규화</h2>

                        <div className="section">
                            <h3>정규화(Normalization)</h3>
                            <ul>
                                <li>데이터 중복을 줄이고, 일관성을 높이기 위해 테이블을 쪼개는 것</li>
                            </ul>

                            <h4>정규화의 목적</h4>
                            <ul>
                                <li>데이터 중복 제거</li>
                                <li>데이터 무결성 강화</li>
                                <li>유지보수 용이</li>
                            </ul>

                            <h4>정규화 단계</h4>
                            <ul>
                                <li><strong>1NF(제1정규형)</strong>: 각 컬럼이 원자값(atomic value)만 갖는다 (리스트 형태 X)</li>
                                <li><strong>2NF(제2정규형)</strong>: 부분적 종속 제거 (기본 키의 일부에만 종속되는 컬럼 제거)</li>
                                <li><strong>3NF(제3정규형)</strong>: 이행적 종속 제거 (기본 키가 아닌 컬럼에 또 다른 컬럼이 종속되지 않게)</li>
                            </ul>

                            <h3>비정규화(Denormalization)</h3>
                            <ul>
                                <li>속도나 편의성을 위해 일부러 정규화를 깨고 중복을 허용하는 것</li>
                            </ul>

                            <h4>비정규화의 이유</h4>
                            <ul>
                                <li>성능 최적화 (JOIN이 많으면 느려지기 때문)</li>
                                <li>조회 속도 향상 (테이블을 합치지 않고 한 번에 읽게 함)</li>
                                <li>단순화 (복잡한 테이블 구조를 단순하게)</li>
                            </ul>
                        </div>

                    </div>
                )
            case 'NestJS U& DB 설계':
                return (
                    <div className="container">
                        <h2> NestJS & DB 설계 </h2>

                        <div className="section">
                            <h3>Entity</h3>
                            <ul>
                                <li>엔티티(Entity)란, 현실 세계에 존재하는 사물, 개념, 사람, 사건 등의 데이터를 표현하기 위한 단위</li>
                                <li>정보를 저장하고 관리해야 하는 대상</li>
                                <li>엔티티는 표(Table)로 표현된다.</li>
                            </ul>
                        </div>

                        <h2>NestJS와 DB 연결: Entity</h2>

                        <div className="section">
                            <ul>
                                <li> NestJS와 DB 연결을 위해 사용되는 것들
                                    <ul>
                                        <li>Entity(엔티티)</li>
                                        <li>Repository(레포지토리)</li>
                                        <li>Service(서비스)</li>
                                        <li>Controller(컨트롤러)</li>
                                    </ul>
                                </li>
                                <li> Entity는 데이터베이스의 구조(테이블)을 정의하는 가장 기본적인 부분</li>
                            </ul>

                            <h3>Entity란?(NestJS 기준)</h3>
                            <ul>
                                <li>NestJS에서는 TypeORM 같은 라이브러리를 사용해서 데이터베이스 테이블을 TypeScript 코드로 표현한다.</li>
                                <li>이때 사용하는 것이 바로 <code>@Entity()</code> 데코레이터이다.</li>
                            </ul>

                            <h3>앤티티와 DB의 연결 순서</h3>
                            <ul>
                                <li>NestJS에서 <code>@Entity</code> 클래스를 정의하면 TypeORM이 그 클래스를 DB 테이블로 인식한다.</li>
                                <li>클래스의 속성(<code>@Column()</code>)이 DB 테이블의 컬럼(column)이 된다.</li>
                                <li>그리고 NestJS는 이 구조를 기반으로 데이터를 조회하거나 저장할 수 있는 Repository 객체를 자동으로 만들어준다.</li>
                            </ul>
                        </div>

                    </div>
                )
            case 'Server & DB':
                return (
                    <div className="container">
                        <h2>Repository</h2>

                        <div className="section">
                            <h3>개요</h3>
                            <ul>
                                <li>데이터베이스에 접근하여 데이터를 CRUD(Create, Read, Update, Delete) 하는 전담 객체이다.</li>
                                <li>NestJS는 TypeORM과 함께 사용할 때, 이 Repository 패턴을 적극 활용한다.</li>
                                <li>Repository는 데이터베이스에 질문하거나 저장하는 창구 역할이다.</li>
                            </ul>

                            <h3>주요 역할</h3>
                            <ul>
                                <li><strong>읽기:</strong> 특정 조건에 맞는 데이터를 조회(<code>find</code>, <code>findOne</code>)</li>
                                <li><strong>쓰기:</strong> 새로운 데이터를 추가(<code>save</code>, <code>insert</code>)</li>
                                <li><strong>수정:</strong> 기존 데이터를 업데이트(<code>update</code>)</li>
                                <li><strong>삭제:</strong> 데이터를 삭제(<code>delete</code>)</li>
                            </ul>

                            <h3>Repository가 중요한 이유</h3>
                            <ul>
                                <li>비지니스 로직과 DB 로직을 분리할 수 있다.</li>
                                <li>테스트 코드 작성이 용이해진다.</li>
                                <li>ORM이 제공하는 기능을 추상화해서 깔끔한 코드로 만들 수 있다.</li>
                            </ul>
                        </div>

                        <h2>Repository Methods</h2>

                        <div className="section">
                            <h3>find()</h3>
                            <ul>
                                <li>모든 레코드 조회</li>
                            </ul>

                            <h3>findOne()</h3>
                            <ul>
                                <li>단일 레코드 조회(복합 조건 포함 가능)</li>
                            </ul>

                            <h3>findOneBy()</h3>
                            <ul>
                                <li>단일 조건만 받을 때 사용</li>
                                <li><code>findOne</code>보다 간결함</li>
                            </ul>

                            <h3>findBy()</h3>
                            <ul>
                                <li>여러 조건으로 여러 개의 레코드 조회</li>
                            </ul>

                            <h3>findOneOrFail()</h3>
                            <ul>
                                <li>결과가 없으면 예외(<code>EntityNotFoundError</code>) 발생</li>
                            </ul>

                            <h3>save()</h3>
                            <ul>
                                <li>데이터 저장: id가 있으면 업데이트, 없으면 생성(Upsert)</li>
                            </ul>

                            <h3>insert()</h3>
                            <ul>
                                <li>항상 새 데이터 삽입</li>
                            </ul>

                            <h3>update()</h3>
                            <ul>
                                <li>기존 데이터 업데이트(조건으로 선택, 전체 또는 부분 업데이트)</li>
                            </ul>

                            <h3>remove() / delete()</h3>
                            <ul>
                                <li><code>remove()</code>는 엔티티 객체를 넣고, <code>delete()</code>는 조건을 넣음</li>
                            </ul>

                            <h3>count()</h3>
                            <ul>
                                <li>조건에 맞는 레코드 개수 반환</li>
                            </ul>

                            <h3>exist()</h3>
                            <ul>
                                <li>조건에 맞는 데이터가 존재하는지 boolean 반환</li>
                            </ul>

                            <h3>createQueryBuilder()</h3>
                            <ul>
                                <li>복잡한 쿼리를 직접 작성할 때 사용</li>
                            </ul>

                            <h3>softDelete()</h3>
                            <ul>
                                <li>실제로 데이터를 DB에서 완전히 지우지 않고, 특정 필드(예: <code>deletedAt</code>)에 삭제된 시간만 기록하는 방식</li>
                            </ul>

                            <h4>softDelete를 사용하기 위한 전제조건</h4>
                            <ul>
                                <li><code>UserEntity</code>에서 <code>@DeleteDateColumn()</code>이 선언되어 있어야 함</li>
                            </ul>
                        </div>

                    </div>
                )
        }
    }
    return (
        <div className="backend">
            {renderContent()}
        </div>
    );
}

export default Backend;
