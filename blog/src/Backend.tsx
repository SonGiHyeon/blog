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

        }
    }
    return (
        <div className="backend">
            {renderContent()}
        </div>
    );
}

export default Backend;
