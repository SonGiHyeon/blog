const arrow = "=>";

const AWS = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'AWS Intro':
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
        }
    }
    return (
        <div className="aws">
            {renderContent()}
        </div>
    );
}

export default AWS;