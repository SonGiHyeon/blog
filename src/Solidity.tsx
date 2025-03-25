const arrow = "=>";

const Solidity = ({ activeContent }: { activeContent: string }) => {

    const renderContent = () => {
        switch (activeContent) {
            case 'Solditiy Basic Grammar 1':
                return (
                    <div className="container">

                        {/* 3/24 */}

                        <h2>Solidity란?</h2>
                        <div className="section">
                            <h3>이더리움 스마트 컨트랙트를 작성하기 위한 프로그래밍 언어</h3>
                            <ul>
                                <li>Solidity를 활용하면 계약을 자동화하고, 신뢰할 수 있는 거래를 블록체인에서 실행할 수 있다.</li>
                                <li>이더리움뿐만 아니라 Binance Smart Chain, Polygon 등 EVM 호환 네트워크에서도 활용된다.</li>
                            </ul>
                        </div>

                        <h2>Solidity의 역사</h2>
                        <div className="section">
                            <ul>
                                <li>2014년 이더리움 재단에서 개발되었으며, 블록체인 스마트 컨트랙트의 표준 언어로 자리 잡았다.</li>
                            </ul>
                            <h4>2014년</h4>
                            <ul>
                                <li>이더리움 공동 창립자 가빈 우드가 Solidity 개념을 제안</li>
                            </ul>
                            <h4>2015년</h4>
                            <ul>
                                <li>이더리움 재단이 Solidity를 공식적으로 발표</li>
                            </ul>
                            <h4>2017년 이후</h4>
                            <ul>
                                <li>Solidity는 지속적으로 업데이트되며, 보안 및 성능이 개선됨</li>
                            </ul>
                            <h4>현재</h4>
                            <ul>
                                <li>DeFi, NFT, DAO 같은 다양한 블록체인 애플리케이션에 사용됨</li>
                            </ul>
                        </div>

                        <h2>Solidity 설치</h2>
                        <div className="section">
                            <ul>
                                <li>다양한 개발 환경에서 실행할 수 있다. 기본적인 개발을 위해 Hardhat, Truffle, Remix IDE를 사용할 수 있다.</li>
                            </ul>
                            <h4>Remix IDE</h4>
                            <ul>
                                <li>브라우저에서 Solidity 코드를 실행할 수 있는 온라인 개발 환경</li>
                            </ul>
                            <h4>Hardhat</h4>
                            <ul>
                                <li>Solidity 개발, 테스트, 배포 자동화를 지원하는 Node.js 기반 프레임워크</li>
                            </ul>
                            <h4>Truffle</h4>
                            <ul>
                                <li>스마트 컨트랙트 배포 및 네트워크 관리에 특화된 개발 환경</li>
                            </ul>
                        </div>

                        <h2>Solidity의 특징</h2>
                        <div className="section">
                            <h3>1. 스마트 컨트랙트 기반</h3>
                            <ul>
                                <li>블록체인에서 자동으로 실행되는 계약을 작성할 수 있음</li>
                            </ul>
                            <h3>2. 정적 타입 언어</h3>
                            <ul>
                                <li>Solidity는 정적 타입 언어이며, 변수의 타입을 명확하게 선언해야 함</li>
                            </ul>
                            <h3>3. EVM에서 실행 가능</h3>
                            <ul>
                                <li>Solidity로 작성된 스마트 컨트랙트는 EVM(Ethereum Virtual Machine)에서 실행됨</li>
                                <li>이더리움뿐만 아니라 Polygon, Avalanche, BNB Chain 등에서도 활용 가능</li>
                            </ul>
                            <h3>4. 이벤트 기반 프로그래밍</h3>
                            <ul>
                                <li>Solidity는 이벤트(Event) 기능을 지원하여, 블록체인 데이터를 쉽게 추적 가능</li>
                            </ul>
                            <h3>5. 보안 중심 개발</h3>
                            <ul>
                                <li>스마트 컨트랙트는 배포 후 변경할 수 없으므로, 보안이 매우 중요함</li>
                                <li>Solidity는 modifier, require, assert 등을 활용한 보안 강화 기능 제공</li>
                            </ul>
                        </div>

                        <h2>Remix IDE</h2>
                        <div className="section">
                            <ul>
                                <li>Solidity 개발을 위한 전용 웹 기반 IDE(Intergrated Development Environment, 통합 개발 환경)</li>
                            </ul>
                        </div>

                        <h2>Solidity 코드 실행 흐름</h2>
                        <div className="section">
                            <ul>
                                <li>1. 변수를 선언하고 초기화</li>
                                <li>2. 함수 실행</li>
                                <li>3. 트랜잭션 처리</li>
                            </ul>
                        </div>

                        <h2>Solidity 콘솔 출력(이더리움 네트워크 로그 사용)</h2>
                        <div className="section">
                            <ul>
                                <li>블록체인 상에서 로그를 기록할 수 있도록 이벤트(event) 기능을 제공한다.</li>
                            </ul>
                        </div>

                        <h2>Solidity 코드의 오류 처리</h2>
                        <div className="section">
                            <ul>
                                <li>Solidity 코드가 실행되다가 오류가 발생하면 트랜잭션이 롤백되며, 특정 지점에서 실행이 멈춘다.</li>
                            </ul>
                        </div>

                        <h2>Solidity에서 오류 처리 방법</h2>
                        <div className="section">
                            <ul>
                                <li>require(condition, message): 조건이 참이 아니면 오류 발생</li>
                                <li>assert(condition): 내부 오류 체크(개발자용)</li>
                                <li>revert(message): 강제적으로 실행을 취소하고 트랜잭션 롤백</li>
                            </ul>
                        </div>
                    </div>

                )
            case 'Solditiy Basic Grammar 2':
                return (
                    <div className="container">

                        <h2>타입(Type) - 참조</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 데이터를 직접 저장하는 대신 참조하는 방식으로 동작한다.</li>
                            </ul>
                        </div>

                        <h2>문자열(String)</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 문자열 데이터를 저장하는 타입</li>
                                <li>{arrow} Solidity에서는 문자열 조작이 제한적이므로, bytes 타입을 활용하는 것이 성능 면에서 더 효율적일 수 있다.</li>
                            </ul>
                        </div>

                        <h2>배열(Array)</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 동일한 타입의 여러 데이터를 저장하는 타입</li>
                            </ul>
                        </div>

                        <h2>매핑(Mapping)</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 키-값 쌍을 저장하는 해시 테이블 구조의 데이터 타입</li>
                            </ul>
                        </div>

                        <h2>구조체(Struct)</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 사용자 정의 데이터 구조를 만드는 데 사용된다.</li>
                            </ul>
                        </div>

                        <h2>바이트 배열(Bytes)</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 가변 크기의 바이트 배열을 저장한다.</li>
                            </ul>
                        </div>

                        <h2>Type: String</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 텍스트 데이터를 저장하는 데 사용된다.</li>
                                <li>{arrow} Solidity에서는 문자열 조작 기능이 제한적이며, 가스 비용이 높은 연산이 많기 때문에 주의가 필요하다.</li>
                            </ul>
                        </div>

                        <h3>특징</h3>
                        <div className="section">
                            <ul>
                                <li>Solidity의 string 타입은 UTF-8 인코딩된 문자들을 저장</li>
                                <li>String 동적 크기를 가지며, 배열처럼 개별 문자에 직접 접근할 수 없음</li>
                                <li>Solidity는 문자열 연결(concat), 길이 확인(length) 등의 문자열 조작 기능이 제한적</li>
                                <li>문자열을 더 효율적으로 조작하려면 bytes 타입을 사용하는 것이 더 좋음</li>
                            </ul>
                        </div>

                        <h3>1. 문자열 선언 및 기본 사용</h3>
                        <div className="section">
                            <ul>
                                <li>기본적인 String 선언</li>
                                <li>{arrow} message 변수에 문자열을 저장하고, public으로 선언하여 자동 getter 함수 생성</li>
                            </ul>
                        </div>

                        <h3>2. 문자열 조작</h3>
                        <div className="section">
                            <ul>
                                <li>문자열 길이 확인</li>
                                <li>{arrow} 문자열을 다루는 기능이 제한적, 개별 문자 접근이 불가능하다.</li>
                                <li>{arrow} 길이를 확인하려면 bytes로 변환해야 한다.</li>
                            </ul>
                        </div>

                        <h3>3. 문자열 연결</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 문자열을 직접 연결할 수 없다.</li>
                                <li>{arrow} abi.encodePacked()를 사용해야 한다.</li>
                            </ul>
                        </div>

                        <h3>4. 문자열과 바이트 변환</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} bytes()를 사용하여 문자열을 바이트 배열로 변환 가능</li>
                                <li>{arrow} string(byteData)를 사용하여 바이트 배열을 다시 문자열로 변환 가능</li>
                            </ul>
                        </div>

                        <h3>5. 문자열 비교</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} keccak256 해시 값을 비교하는 방법을 사용한다.</li>
                            </ul>
                        </div>

                        <h2>Type: Array</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 같은 데이터 타입의 여러 값을 저장하는 자료구조</li>
                                <li>{arrow} 배열을 사용하면 여러 개의 값을 하나의 변수에 저장하고, 쉽게 관리할 수 있다.</li>
                            </ul>
                        </div>

                        <h3>특징</h3>
                        <div className="section">
                            <ul>
                                <li>동적 크기와 고정 크기 배열로 나뉨</li>
                                <li>push(), pop() 등의 내장 함수 제공</li>
                                <li>특정 요소 접근 및 수정 가능(array[index])</li>
                                <li>Solidity의 배열은 가스 비용이 높을 수 있음 {arrow} 최적화 필요</li>
                            </ul>
                        </div>

                        <h3>1. 배열의 종류</h3>
                        <div className="section">
                            <ul>
                                <li>동적 크기 배열</li>
                                <li>{arrow} 배열의 크기가 고정되지 않으며, push()를 통해 요소를 추가할 수 있다.</li>
                                <li>고정 크기 배열</li>
                                <li>{arrow} 배열의 크기가 고정되며, 선언할 때 크기를 지정해야 한다.</li>
                            </ul>
                        </div>

                        <h3>2. 배열의 주요 기능(내장 함수 및 연산)</h3>
                        <div className="section">
                            <ul>
                                <li>요소 추가(push())</li>
                                <li>{arrow} push()를 사용하여 배열 끝에 요소 추가 가능</li>
                                <li>요소 제거(pop())</li>
                                <li>{arrow} pop()을 사용하면 배열의 마지막 요소 제거</li>
                                <li>특정 인덱스 값 가져오기(array[index])</li>
                                <li>{arrow} 배열의 특정 인덱스에 접근하려면 array[index] 형식 사용</li>
                                <li>배열 길이 확인(.length)</li>
                                <li>{arrow} .length 속성을 사용하여 배열 크기 확인 가능</li>
                            </ul>
                        </div>

                        <h3>3. 배열과 루프 활용</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 배열을 for 루프와 함께 사용하여 데이터를 효율적으로 다룰 수 있다.</li>
                            </ul>
                        </div>

                        <h3>4. 다차원 배열</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 배열 안에 배열을 저장할 수도 있다.</li>
                            </ul>
                        </div>

                        <h3>5. 배열에서 특정 요소 삭제</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 인덱스를 지정하여 수동으로 삭제할 수 있다.</li>
                                <li>특정 인덱스 요소 삭제(delete)</li>
                                <li>{arrow} 해당 인덱스의 값이 0으로 초기화된다.</li>
                            </ul>
                        </div>

                        <h2>Type: Mapping</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 키-값(Key-Value)쌍을 저장하는 자료구조</li>
                                <li>{arrow} 특정 키를 사용하여 값을 빠르게 조회할 수 있다.</li>
                            </ul>
                        </div>

                        <h3>특징</h3>
                        <div className="section">
                            <ul>
                                <li>mapping(KeyType {arrow} ValueType) 형식으로 선언</li>
                                <li>키를 입력하면 해당하는 값을 즉시 조회 가능</li>
                                <li>모든 키는 기본적으로 0 또는 false와 같은 초기값을 가짐</li>
                                <li>storage에만 저장 가능</li>
                            </ul>
                        </div>

                        <h3>1. 매핑 선언 및 기본 사용</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 특정 주소의 잔액을 저장하고 조회하는데 사용된다.</li>
                            </ul>
                        </div>

                        <h3>2. 매핑이 주요 기능</h3>
                        <div className="section">
                            <ul>
                                <li>값 설정(쓰기 연산)</li>
                                <li>값 읽기(조회 연산)</li>
                                <li>값 삭제(delete)</li>
                            </ul>
                        </div>

                        <h3>3. 중첩 매핑</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 매핑 안에 또 다른 매핑을 선언하여 2차원 매핑을 만들 수 있다.</li>
                            </ul>
                        </div>

                        <h3>4. 매핑과 구조체 결합</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 매핑을 구조체와 함께 사용하여 더욱 복잡한 데이터 관리가 가능하다.</li>
                                <li>{arrow} 사용자의 address를 키로 하여 데이터를 효율적으로 관리 가능</li>
                            </ul>
                        </div>

                        <h2>Type: Struct</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} 여러 개의 변수를 하나의 사용자 정의 데이터 타입으로 묶어 저장하는 자료구조</li>
                                <li>{arrow} 스마트 컨트랙트에서 복잡한 데이터를 효율적으로 관리할 수 있도록 도와준다.</li>
                            </ul>
                        </div>

                        <h3>특징</h3>
                        <div className="section">
                            <ul>
                                <li>여러 타입의 변수를 하나의 데이터 구조로 묶을 수 있음</li>
                                <li>storage, memory 키워드를 사용하여 저장 방식 선택 가능</li>
                                <li>매핑(mapping)과 함께 사용하면 강력한 데이터 저장 기능을 제공</li>
                            </ul>
                        </div>

                        <h3>1. 구조체 선언 및 사용 방법</h3>
                        <div className="section">
                            <ul>
                                <li>구조체 선언 및 변수 생성</li>
                                <li>{arrow} 구조체를 사용하여 사용자 정보를 저장 및 조회하는데 사용된다.</li>
                            </ul>
                        </div>

                        <h3>2. 구조체를 배열로 저장하기</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 여러 개의 구조체를 관리하기 위해 구조체 배열을 선언할 수 있다.</li>
                                <li>{arrow} 구조체를 배열로 선언하고, push()를 사용하여 데이터 추가 가능</li>
                            </ul>
                        </div>

                        <h3>3. 매핑과 구조체 결합</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 구조체와 매핑을 함께 사용하면 데이터를 더 효율적으로 저장하고 관리할 수 있다.</li>
                                <li>{arrow} 사용자의 address를 키로 하여 데이터를 효율적으로 관리 가능</li>
                            </ul>
                        </div>

                        <h3>4. 구조체 수정 및 삭제</h3>
                        <div className="section">
                            <ul>
                                <li>구조체 내부 값 수정</li>
                                <li>구조체 삭제(delete)</li>
                            </ul>
                        </div>

                        <h3>5. 메모리(Memory), 저장소(Storage)에서 구조체 사용</h3>
                        <div className="section">
                            <ul>
                                <li>메모리 구조체 사용(임시 데이터 저장)</li>
                                <li>{arrow} 메모리에서만 사용되는 구조체는 가스 비용 절감 효과가 있음</li>
                                <li>저장소(Storage) 구조체 사용(영구 데이터 저장)</li>
                                <li>{arrow} 저장소(storage)에 데이터를 저장하면 영구적으로 보관됨</li>
                            </ul>
                        </div>

                        <h2>Type: Bytes</h2>
                        <div className="section">
                            <ul>
                                <li>{arrow} bytes 타입은 이진 데이터(Binary Data)를 저장하는 데 사용된다.</li>
                                <li>{arrow} bytes 타입은 크게 고정 크기 바이트 배열과 가변 크기 바이트 배열로 나뉜다.</li>
                            </ul>
                        </div>

                        <h3>특징</h3>
                        <div className="section">
                            <ul>
                                <li>bytes 타입은 UTF-8 문자열을 바이트 형태로 저장할 수 있음</li>
                                <li>고정 크기(bytes1 ~ bytes32)와 가변 크기(bytes) 배열이 존재</li>
                                <li>string보다 효율적인 저장 및 조작이 가능하며, 가스 비용 절감 효과가 있음</li>
                            </ul>
                        </div>

                        <h3>1. 바이트 배열의 종류</h3>
                        <div className="section">
                            <ul>
                                <li>고정 크기 바이트 배열(bytes1 ~ bytes32)</li>
                                <li>{arrow} bytes1부터 bytes32까지 1~32바이트 크기의 고정 크기 배열 제공</li>
                                <li>{arrow} 더 적은 가스를 사용하며, 연산 속도가 빠름</li>
                                <li>{arrow} 크기가 정해져 있어 push()나 pop() 등의 조작이 불가능</li>
                                <li>가변 크기 바이트 배열(bytes)</li>
                                <li>{arrow} bytes는 동적 크기의 바이트 배열</li>
                                <li>{arrow} string과 유사하지만, 더 작은 가스를 사용하며 개별 바이트 접근 가능</li>
                                <li>{arrow} push(), pop() 등을 사용하여 크기를 조정할 수 있음</li>
                            </ul>
                        </div>

                        <h3>2. 바이트 배열의 주요 기능</h3>
                        <div className="section">
                            <ul>
                                <li>바이트 배열 길이 확인(.length)</li>
                                <li>특정 바이트 값 접근</li>
                                <li>바이트 배열 추가(push())</li>
                                <li>바이트 배열 삭제(pop())</li>
                            </ul>
                        </div>

                        <h3>3. 바이트 배열과 문자열 변환</h3>
                        <div className="section">
                            <ul>
                                <li>{arrow} 문자열을 다룰 때 bytes 타입을 활용하면 더 효율적이다.</li>
                            </ul>
                        </div>

                    </div>
                )
        }
    }

    return (
        <div className="solidity">
            {renderContent()}
        </div>
    );
}

export default Solidity;