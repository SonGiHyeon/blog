const arrow = "=>";

const AWS = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'AWS Front Deploy':
                return (
                    <div className="container">
                        <h2>AWS란?</h2>
                        <div className="section">
                            <ul>
                                <li>아마존이 만든 클라우드 컴퓨팅 서비스 플랫폼</li>
                                <li>인터넷을 통해 서버, 데이터베이스, 저장소, 네트워크, AI 등 수백 가지 IT 자원을 빌려 쓸 수 있는 공간</li>
                            </ul>
                        </div>

                        <h2>AWS로 할 수 있는 것들</h2>
                        <div className="section">
                            <ul>
                                <li>서버를 빌릴 수 있다 (EC2)</li>
                                <li>파일 저장소가 있다 (S3)</li>
                                <li>도메인 연결 가능 (Route 53)</li>
                                <li>배포 자동화 가능 (Amplify)</li>
                                <li>AI, 빅데이터 등 사용 가능</li>
                            </ul>
                        </div>

                        <h2>AWS가 제공하는 주요 서비스</h2>
                        <div className="section">
                            <ul>
                                <li><strong>S3:</strong> 정적 파일 저장, 웹사이트 호스팅</li>
                                <li><strong>EC2:</strong> 가상 서버(웹 백엔드 등 실행 가능)</li>
                                <li><strong>Lambda:</strong> 서버 없이 함수 실행(서버리스 컴퓨팅)</li>
                                <li><strong>CloudFront:</strong> 콘텐츠를 빠르게 전송하는 CDN</li>
                                <li><strong>Route 53:</strong> 도메인 구입 및 연결</li>
                                <li><strong>Amplify:</strong> 프론트엔드 앱을 쉽게 배포하고 관리</li>
                                <li><strong>RDS:</strong> MySQL, PostgreSQL 같은 데이터베이스 관리</li>
                                <li><strong>ACM:</strong> HTTPS 인증서 발급 및 관리</li>
                            </ul>
                        </div>

                        <h2>AWS의 S3</h2>
                        <div className="section">
                            <h3>{arrow} AWS에서 제공하는 파일 저장소 서비스 (인터넷에 연결된 클라우드 드라이브)</h3>

                            <h4>주요 특징</h4>
                            <ul>
                                <li>객체 스토리지: 파일(객체)을 키와 함께 저장 (예: 이미지, HTML, JS 파일 등등)</li>
                                <li>높은 내구성: 데이터를 99.9%로 안정적으로 보관</li>
                                <li>무제한 저장: 파일 수나 크기 제한 없이 사용 가능</li>
                                <li>버전 관리: 파일의 과거 버전 보존 가능</li>
                                <li>정적 웹 호스팅: HTML, JS, CSS 같은 정적 파일을 웹사이트로 서비스 가능</li>
                            </ul>

                            <h4>주의할 점</h4>
                            <ul>
                                <li>보안 정책: 정적 웹 호스팅 시, 퍼블릭 읽기 권한이 필요 (또는 CloudFront + OAC 사용)</li>
                                <li>라우팅 문제: SPA의 경우 404 에러 페이지를 index.html로 설정해야 제대로 작동</li>
                                <li>HTTPS 미지원: S3 웹 호스팅 URL은 기본적으로 HTTP만 지원 → HTTPS를 원하면 CloudFront를 사용해야 함</li>
                            </ul>
                        </div>

                        <h2>CloudFront</h2>
                        <div className="section">
                            <h3>{arrow} 사용자와 가까운 위치에서 콘텐츠(HTML, 이미지, JS, 영상 등)를 빠르게 전달해주는 캐시 서버 (CDN)</h3>
                            <h3>{arrow} S3 웹사이트를 빠르고 안전하게 전 세계에 제공하기 위한 AWS의 CDN</h3>

                            <h4>CloudFront 사용 이유</h4>
                            <ul>
                                <li>빠른 응답속도: 사용자의 위치와 가까운 서버에서 콘텐츠 제공</li>
                                <li>원본 서버 부하 감소: 캐시를 통해 서버 호출 횟수 줄이기 → 비용 절감</li>
                                <li>보안 강화: HTTPS, SSL 인증서, WAF, signed URL 등 지원</li>
                                <li>전 세계 콘텐츠 제공: 전 세계 400개 이상의 엣지 로케이션 보유</li>
                                <li>다양한 콘텐츠 지원: 정적 파일, API 응답, 동영상 스트리밍 등 다양하게 전달 가능</li>
                            </ul>

                            <h4>CloudFront 동작 방식</h4>
                            <ul>
                                <li>사용자가 웹사이트에 접속</li>
                                <li>CloudFront가 요청을 받은 후
                                    <ul>
                                        <li>캐시가 있으면 → 즉시 응답</li>
                                        <li>캐시가 없으면 → 원본 서버(S3, EC2 등)에서 받아와 캐시에 저장</li>
                                    </ul>
                                </li>
                                <li>다음 요청부터는 CloudFront 캐시에서 빠르게 응답</li>
                            </ul>
                        </div>

                    </div>
                )
            case 'AWS Back Deploy':
                return (
                    <div className="container">
                        <h2>EC2</h2>
                        <div className="section">
                            <h3>EC2(Elastic Compute Cloud)</h3>
                            <ul>
                                <li>AWS에서 제공하는 클라우드 기반 가상 서버 서비스이다.</li>
                                <li>주로 백엔드 서버 배포 시 많이 사용된다.</li>
                            </ul>
                        </div>

                        <h2>IP</h2>
                        <div className="section">
                            <h3>IP(Internet Protocol)</h3>
                            <ul>
                                <li>컴퓨터 네트워크에서 장치 간에 데이터를 교환하는 데 사용되는 주소 체계이다.</li>
                                <li>IP 주소는 네트워크 상의 각 기기를 식별하는 고유한 숫자이다.</li>
                                <li>IPv4와 IPv6가 널리 사용되며, 각 IP 버전은 고유한 형식을 가지고 있다.</li>
                            </ul>

                            <h4>IPv4(Internet Protocol version 4)</h4>
                            <ul>
                                <li>32비트로 구성되며, 일반적으로 ‘x.x.x.x’ 형식으로 표현된다.</li>
                                <li>예: 192.168.0.1</li>
                            </ul>

                            <h4>IPv6(Internet Protocol version 6)</h4>
                            <ul>
                                <li>128비트로 구성되며, 주소는 16진수로 표시된다.</li>
                                <li>예: 2001:0db8:85a3:0000:0000:8a2e:0370:7334</li>
                            </ul>
                        </div>

                        <h2>Port</h2>
                        <div className="section">
                            <h3>포트란?</h3>
                            <ul>
                                <li>네트워크 통신에서 서비스를 식별하는 데 사용되는 숫자이다.</li>
                                <li>컴퓨터에서 실행되는 각 프로그램은 고유한 포트 번호에 바인딩될 수 있다.</li>
                            </ul>

                            <h4>주요 포트 예시</h4>
                            <ul>
                                <li>포트 80(HTTP): 웹 서버와 클라이언트 간의 HTTP 통신에 사용</li>
                                <li>포트 443(HTTPS): 보안된 HTTP 통신에 사용</li>
                                <li>포트 22(SSH): 안전한 셀(SSH) 통신에 사용</li>
                                <li>포트 5432(PostgreSQL): PostgreSQL 데이터베이스 서버의 표준 포트</li>
                            </ul>
                        </div>

                        <h2>RDS(Relational Database Service)</h2>
                        <div className="section">
                            <h3>RDS란?</h3>
                            <ul>
                                <li>AWS에서 제공하는 클라우드 기반 관계형 데이터베이스 관리 서비스이다.</li>
                                <li>사용자가 직접 데이터베이스 서버를 설치하고 관리하지 않아도, AWS가 대신 설치, 운영, 백업, 확장 등을 자동 처리한다.</li>
                            </ul>

                            <h4>파라미터 그룹</h4>
                            <ul>
                                <li>RDS 인스턴스의 데이터베이스 엔진 설정값들을 모아놓은 ‘설정 템플릿’이다.</li>
                            </ul>
                        </div>

                        <h2>Nginx</h2>
                        <div className="section">
                            <h3>Nginx란?</h3>
                            <ul>
                                <li>고성능 웹 서버이자, 리버스 프록시 서버, 로드 밸런서, 캐시 서버로도 사용되는 오픈소스 소프트웨어이다.</li>
                            </ul>

                            <h4>역할</h4>
                            <ul>
                                <li>웹 서버: HTML, CSS, 이미지 같은 정적 파일을 클라이언트에게 전달</li>
                                <li>리버스 프록시: 클라이언트의 요청을 백엔드 서버에 대신 전달</li>
                                <li>로드 밸런서: 여러 서버로 요청을 분산시켜 부하 분산</li>
                                <li>캐시 서버: 응답 결과를 저장해 동일 요청이 들어왔을 때 빠르게 제공</li>
                                <li>HTTPS 처리기: SSL 인증서를 적용해 HTTPS 통신 가능하게 함</li>
                            </ul>
                        </div>

                    </div>
                )
            case 'Message Queue':
                return (
                    <div className="container">
                        <h2>Message Queue(MQ)</h2>
                        <div className="section">
                            <h3>Message Queue란?</h3>
                            <ul>
                                <li>Message Queue(MQ)는 애플리케이션 간에 메시지를 비동기적으로 전달할 수 있도록 중간에서 중개하는 메시지 지향 미들웨어(Message-Oriented Middleware)이다.</li>
                            </ul>

                            <h4>기본 개념</h4>
                            <ul>
                                <li>Message: 하나의 데이터 단위 (예: JSON, 문자열 등)</li>
                                <li>Queue: 메시지를 순서대로 저장하는 FIFO(First-In-First-Out) 방식의 데이터 구조</li>
                                <li>시스템 간 직접 호출 대신 큐를 통해 비동기 처리 수행</li>
                            </ul>
                        </div>

                        <h2>Message Queue를 사용하는 이유</h2>
                        <div className="section">
                            <ul>
                                <li>블록체인 시스템은 트랜잭션의 무결성, 순서 보장, 고가용성이 중요한데, 외부 API나 오프체인 컴포넌트와 연결 시 Nonce 충돌이 발생할 수 있음</li>
                            </ul>

                            <h4>Queue 도입 시 기대 효과</h4>
                            <ul>
                                <li>트랜잭션 요청을 Message Queue에 넣고 하나씩 순차적으로 처리 → Nonce 충돌 방지</li>
                                <li>안정적인 트랜잭션 흐름 유지 및 사용자 경험 개선</li>
                            </ul>
                        </div>

                        <h2>MQ의 동작 방식</h2>
                        <div className="section">
                            <ul>
                                <li>Producer(생산자): 메시지를 생성하여 큐에 보냄</li>
                                <li>Queue(중간 저장소): 메시지를 순서대로 저장</li>
                                <li>Consumer(소비자): 큐에서 메시지를 꺼내 처리</li>
                                <li>Ack(확인 응답): 메시지를 잘 처리했음을 큐에 알림</li>
                                <li>DLQ(Dead Letter Queue): 처리 실패한 메시지를 저장</li>
                            </ul>
                        </div>

                        <h2>Message Queue 주요 용어 정리</h2>
                        <div className="section">
                            <h4>1. Producer(생산자)</h4>
                            <ul>
                                <li>메시지를 생성하고 Queue에 보내는 주체</li>
                                <li>실제 작업 요청을 시작하는 서비스 또는 애플리케이션</li>
                                <li>예: 주문 정보, 알림 요청 등을 생성</li>
                            </ul>

                            <h4>2. Consumer(소비자)</h4>
                            <ul>
                                <li>Queue에서 메시지를 꺼내어 처리하는 주체</li>
                                <li>예: 이메일 발송, 재고 감소, 데이터 저장 등</li>
                            </ul>

                            <h4>3. Message(메시지)</h4>
                            <ul>
                                <li>Producer가 큐에 넣는 단위 데이터</li>
                                <li>본문(Body): 실제 데이터(JSON 등)</li>
                                <li>속성(Properties): 전송자, 시간, 메시지 ID 등</li>
                                <li>메타정보(Headers): 처리에 필요한 부가 정보</li>
                            </ul>

                            <h4>4. Queue(큐)</h4>
                            <ul>
                                <li>메시지를 저장하고 순서대로 소비자에게 전달하는 공간</li>
                                <li>FIFO 구조, 여러 Producer/Consumer 동시 사용 가능</li>
                            </ul>

                            <h4>5. Visibility Timeout</h4>
                            <ul>
                                <li>메시지가 Consumer에 전달된 후 일정 시간 동안 큐에서 보이지 않게 되는 시간</li>
                                <li>Timeout 내 처리 실패 시 메시지는 다시 큐에 등장</li>
                            </ul>

                            <h4>6. Acknowledgment(Ack)</h4>
                            <ul>
                                <li>Consumer가 메시지를 정상적으로 처리했음을 알리는 신호</li>
                                <li>Ack가 오면 메시지는 큐에서 삭제됨</li>
                                <li>Ack가 없으면 Timeout 이후 재처리 대상이 됨</li>
                            </ul>

                            <h4>7. Dead Letter Queue(DLQ)</h4>
                            <ul>
                                <li>여러 번 처리 실패한 메시지를 따로 저장하는 큐</li>
                                <li>문제 있는 메시지를 격리해 손실 없이 확인 가능</li>
                            </ul>

                            <h4>8. Retry Policy</h4>
                            <ul>
                                <li>메시지 처리 실패 시 재시도에 대한 정책</li>
                                <li>최대 재시도 횟수, 간격, 백오프 전략 등 포함</li>
                            </ul>

                            <h4>9. FIFO Queue</h4>
                            <ul>
                                <li>정해진 순서대로 메시지를 정확히 처리</li>
                                <li>중복 방지를 위한 deduplication ID 사용 가능</li>
                            </ul>

                            <h4>10. Delay Queue / Message Delay</h4>
                            <ul>
                                <li>특정 메시지를 일정 시간 후에 처리하도록 지연</li>
                            </ul>

                            <h4>11. Polling</h4>
                            <ul>
                                <li><strong>Short Polling</strong>: Consumer가 큐를 주기적으로 확인 (낮은 실시간성, 리소스 낭비)</li>
                                <li><strong>Long Polling</strong>: 일정 시간 큐 응답을 기다림 (SQS에서 기본 권장)</li>
                            </ul>
                        </div>

                        <h2>Amazon SQS(Simple Queue Service)</h2>
                        <div className="section">
                            <h3>Amazon SQS란?</h3>
                            <ul>
                                <li>AWS에서 제공하는 완전관리형 메시지 큐 서비스</li>
                                <li>분산 시스템, 마이크로서비스, 이벤트 기반 아키텍처에서 비동기 메시지 처리를 용이하게 함</li>
                            </ul>

                            <h4>특징</h4>
                            <ul>
                                <li>서버 관리 불필요: 운영, 확장, 장애 처리 자동</li>
                                <li>높은 확장성: 초당 수천만 개 메시지 처리 가능</li>
                                <li>보안 및 접근 제어: IAM, VPC 엔드포인트 지원</li>
                                <li>AWS 서비스와의 통합 용이: Lambda, SNS, CloudWatch 등</li>
                            </ul>

                            <h4>SQS 아키텍처 구조</h4>
                            <ul>
                                <li>Producer: 메시지를 큐에 보냄</li>
                                <li>Queue: 메시지를 저장</li>
                                <li>Consumer: 메시지를 꺼내서 처리</li>
                                <li>Visibility Timeout: 처리 중인 메시지 잠금 시간</li>
                                <li>Dead Letter Queue(DLQ): 실패한 메시지를 분리 저장</li>
                            </ul>
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="aws">
            {renderContent()}
        </div>
    );
}

export default AWS;