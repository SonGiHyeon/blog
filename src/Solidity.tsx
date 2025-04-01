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

            // 3/26
            case 'Solditiy Basic Grammar 3':
                return (
                    <div className="container">

                        <h2> 변수 선언 및 가시성 </h2>
                        <div className="section">

                            <ul>
                                <li>Solidity에서 변수(Variable)는 데이터를 저장하고 관리하는 데 사용된다.</li>
                                <li>변수를 선언하면 이더리움 블록체인 상의 스마트 컨트랙트에 상태(State)를 유지할 수 있게 된다.</li>
                            </ul>

                            <h3> 특징 </h3>
                            <ul>
                                <li>변수를 선언할 때 데이터 타입과 가시성(Visibility)을 명시해야 함</li>
                                <li>선언된 변수는 블록체인 상에 저장되며, public으로 선언된 변수는 자동으로 getter 함수가 생성됨</li>
                            </ul>

                            <h3> 변수 선언 형식 </h3>
                            <ul>
                                <li><code>&lt;데이터 타입&gt; &lt;가시성&gt; &lt;변수명&gt; = &lt;초기값&gt;;</code></li>
                            </ul>

                            <h3> 변수의 가시성(Visibility) </h3>
                            <ul>
                                <li><strong>public</strong>: 외부, 내부에서 모두 접근 가능 (모든 컨트랙트, 외부 계정)</li>
                                <li><strong>private</strong>: 선언된 컨트랙트 내부에서만 접근 가능</li>
                                <li><strong>internal</strong>: 선언된 컨트랙트 및 상속받은 컨트랙트에서 접근 가능</li>
                                <li><strong>external</strong>: 외부에서만 접근 가능 (변수에는 사용 불가, 함수에만 사용 가능)</li>
                            </ul>
                        </div>

                        <h2> 상태 변수와 로컬 변수 </h2>
                        <div className="section">

                            <h3> 상태 변수 </h3>
                            <ul>
                                <li>블록체인 저장소(Storage)에 저장</li>
                                <li>영구적으로 저장(트랜잭션 후에도 유지)</li>
                                <li>가스 비용 발생(쓰기, 읽기 시)</li>
                                <li>컨트랙트 내부에서 선언</li>
                            </ul>

                            <h3> 로컬 변수 </h3>
                            <ul>
                                <li>메모리 또는 스택에 저장</li>
                                <li>함수 실행 시에만 존재, 실행 후 소멸</li>
                                <li>가스 비용 적음(일시적 사용)</li>
                                <li>함수 내부에서 선언</li>
                            </ul>
                        </div>

                        <h2> 상수 및 불변 함수 </h2>
                        <div className="section">

                            <h3> 상수 </h3>
                            <ul>
                                <li>배포 시점에 고정된 값</li>
                                <li>수정 불가능</li>
                                <li>가스 비용 절감 (읽기 연산에만 사용됨)</li>
                            </ul>

                            <h3> 불변 </h3>
                            <ul>
                                <li>배포 시점에서만 설정 가능, 이후에는 변경 불가능</li>
                                <li>보안성이 향상됨</li>
                            </ul>
                        </div>

                        <h2> 함수(Function) </h2>
                        <div className="section">

                            <ul>
                                <li>스마트 컨트랙트에서 특정 동작을 수행하는 코드 블록</li>
                                <li>입력값을 받아 처리하고, 결과값을 반환하거나 상태를 변경하는 역할</li>
                            </ul>

                            <h3> 특징 </h3>
                            <ul>
                                <li>특정 작업을 수행하는 코드 블록</li>
                                <li>외부 호출 또는 내부 로직에서 사용</li>
                                <li>상태 변수에 접근하거나 외부에서 데이터를 가져오는 데 사용됨</li>
                                <li>가시성 및 상태 변경자를 설정 가능</li>
                            </ul>

                            <h3> 함수의 기본 구성 요소 </h3>
                            <ul>
                                <li><code>Function</code>: 함수 선언 키워드</li>
                                <li>함수 이름</li>
                                <li>입력 파라미터(타입과 이름)</li>
                                <li>가시성 지정자</li>
                                <li>상태 변경자</li>
                                <li>반환 타입</li>
                            </ul>

                            <h3> 상태 변경자 </h3>
                            <ul>
                                <li><strong>view</strong>: 상태 변수의 읽기만 허용(가스 비용 없음)</li>
                                <li><strong>pure</strong>: 상태 변수의 읽기 및 쓰기 모두 금지(가스 비용 없음)</li>
                                <li><strong>payable</strong>: 이더리움을 받을 수 있는 함수(특정 금액을 받기 위한 함수)</li>
                            </ul>

                            <h3> 반환값 </h3>
                            <ul>
                                <li>returns 키워드를 사용하여 반환값의 타입을 지정</li>
                            </ul>

                            <h3> 함수 호출 방법 </h3>
                            <ul>
                                <li><strong>내부 호출</strong>: <code>internalFunction()</code>을 직접 호출 가능</li>
                                <li><strong>외부 호출</strong>: <code>this.externalFunction()</code> 형식으로 접근</li>
                            </ul>

                            <h3> 접근 제어자(Modifiers) </h3>
                            <ul>
                                <li>특정 조건을 충족할 때만 함수를 실행하도록 설정 가능</li>
                            </ul>

                            <h3> 함수 오버로딩 </h3>
                            <ul>
                                <li>같은 이름의 함수를 서로 다른 매개변수로 선언 가능</li>
                            </ul>
                        </div>

                        <h2> storage, memory, calldata </h2>
                        <div className="section">

                            <h3> storage </h3>
                            <ul>
                                <li>블록체인의 영구 저장소(상태 변수)</li>
                                <li>트랜잭션 이후에도 유지됨</li>
                                <li>읽기/쓰기 시 비용이 높음</li>
                                <li>변경 가능</li>
                            </ul>

                            <h3> memory </h3>
                            <ul>
                                <li>임시 메모리(함수 실행 중에만 유지)</li>
                                <li>함수 실행 종료 후 소멸됨</li>
                                <li>가스 비용이 저렴</li>
                                <li>변경 가능</li>
                            </ul>

                            <h3> calldata </h3>
                            <ul>
                                <li>함수 호출 시 외부 입력 데이터(읽기 전용)</li>
                                <li>함수 호출이 끝나면 소멸됨</li>
                                <li>가스 비용이 가장 저렴</li>
                                <li>변경 불가능</li>
                            </ul>
                        </div>

                        <h2> 조건문 및 반복문 </h2>
                        <div className="section">

                            <h3> 1. 조건문 </h3>
                            <ul>
                                <li>특정 조건을 만족할 때 코드의 실행을 결정한다.</li>
                            </ul>

                            <h4> - If, else if, else </h4>
                            <ul>
                                <li><strong>If</strong>: 조건이 참일 경우 코드 실행</li>
                                <li><strong>else if</strong>: 이전 조건이 거짓일 경우 다른 조건 확인</li>
                                <li><strong>else</strong>: 모든 조건이 거짓일 경우 실행</li>
                            </ul>

                            <h3> - 삼항 연산자 </h3>
                            <ul>
                                <li>간단한 조건문을 한 줄로 작성할 수 있다.</li>
                                <li>형식: (조건) ? (참 일 때 값) : (거짓일 때 값)</li>
                            </ul>

                            <h3> 2. 반복문 </h3>
                            <ul>
                                <li>특정 조건이 만족될 때까지 코드를 반복 실행한다.</li>
                            </ul>

                            <h4> - for 문 </h4>
                            <ul>
                                <li>반복 횟수가 명확할 때 사용</li>
                                <li>반복 조건이 거짓이 될 때까지 반복 실행</li>
                            </ul>

                            <h4> - While 문 </h4>
                            <ul>
                                <li>조건이 참인 동안 계속 실행</li>
                                <li>반복 횟수가 명확하지 않거나 조건에 따라 반복 여부가 결정될 때 사용</li>
                            </ul>

                            <h3> 3. 반복문 제어 키워드 </h3>
                            <ul>
                                <li><strong>break</strong>: 반복문을 즉시 종료</li>
                                <li><strong>continue</strong>: 다음 반복으로 건너뛰기</li>
                            </ul>

                            <h3> 4. 반복문 사용 시 주의사항 </h3>
                            <ul>
                                <li>가스 비용 고려</li>
                                <li>무한 루프 방지</li>
                                <li>최적화된 데이터 구조 사용</li>
                            </ul>

                        </div>

                        <h2> 이벤트(Events) </h2>
                        <div className="section">

                            <ul>
                                <li>스마트 컨트랙트와 외부 애플리케이션과의 통신을 위한 메커니즘</li>
                                <li>스마트 컨트랙트 내에서 발생한 특정 동작을 기록하고, 해당 로그는 이더리움 블록체인에 저장되어 외부 애플리케이션이 이를 감지할 수 있다.</li>
                            </ul>

                            <h3> 특징 </h3>
                            <ul>
                                <li>블록체인에 기록되어 외부에서 읽기 가능</li>
                                <li>트랜잭션 로그로 저장(영구 저장은 아니지만 검색 가능)</li>
                                <li>스마트 컨트랙트와 외부 애플리케이션 간의 소통에 사용됨</li>
                            </ul>

                            <h3> 1. 이벤트 선언 및 사용 방법 </h3>
                            <ul>
                                <li><strong>아밴트 선언</strong>: <code>event</code> 키워드를 변수 앞에다 붙이면 됨</li>
                                <li><strong>이벤트 발생(emit)</strong>: 이벤트는 <code>emit</code> 키워드로 발생시킬 수 있다. 이벤트 로그가 블록체인에 기록되어 외부 애플리케이션이 감지할 수 있음</li>
                            </ul>

                            <h3> 2. 이벤트 필터링 </h3>
                            <ul>
                                <li>이벤트 로그는 인덱스(Indexed)를 사용해 값 타입을 빠르게 검색할 수 있다.</li>
                            </ul>

                            <h3> 3. 이벤트 활용 사례 </h3>
                            <ul>
                                <li>상태 변경 로그 기록</li>
                                <li>거래 기록</li>
                                <li>엑세스 제어 로그</li>
                            </ul>

                            <h3> 4. 트랜잭션 로그에서 이벤트 확인 </h3>
                            <ul>
                                <li>Hardhat이나 Ethers.js 같은 것들을 이용해서 해당 이벤트를 조회할 수 있다.</li>
                            </ul>

                            <h3> 5. 가스 비용 최적화와 이벤트 </h3>
                            <ul>
                                <li>이벤트는 가스 비용이 낮음</li>
                                <li>로그로 저장되므로, 상태 저장 비용 없이 외부에서 데이터를 추적할 수 있음</li>
                                <li>복잡한 데이터 저장 대신 이벤트를 활용해 가스 비용을 줄이는 것이 일반적</li>
                            </ul>

                        </div>

                        <h2> 접근 제어자 </h2>
                        <div className="section">

                            <ul>
                                <li>함수 실행 전에 특정 조건을 검사하거나, 공통적인 동작을 재사용 가능하게 만드는 기능</li>
                                <li>접근 제어, 상태 확인, 재사용 가능한 코드 작성에 사용된다.</li>
                            </ul>

                            <h3> 특징 </h3>
                            <ul>
                                <li>함수 실행 전에 특정 조건을 검사</li>
                                <li>코드의 재사용성을 높임</li>
                                <li>주로 접근 제한과 조건 확인에 사용됨</li>
                            </ul>

                            <h3> 1. 기본적인 Modifier 구조 </h3>
                            <ul>
                                <li><strong>Modifier 선언</strong>: 보통 내부의 <code>require</code>문이 참이어야지 실행된다</li>
                                <li><code>_</code> {arrow} 해당 위치에서 원래의 함수 코드가 실행된다.</li>
                            </ul>

                            <h3> 2. Modifier 활용 사례 </h3>
                            <ul>
                                <li>접근 제어</li>
                                <li>상태 확인</li>
                                <li>재진입 방지</li>
                            </ul>

                            <h3> 3. Modifier에서 인자 사용하기 </h3>
                            <ul>
                                <li>Modifier에서 매개변수를 받아 조건을 설정할 수 있다.</li>
                            </ul>

                            <h3> 4. Modifier와 다중 사용 </h3>
                            <ul>
                                <li>여러 Modifier를 동시에 사용할 수도 있다.</li>
                            </ul>

                            <h3> 5. Modifier의 장점 </h3>
                            <ul>
                                <li>코드 재사용성</li>
                                <li>가독성 향상</li>
                                <li>보안 강화</li>
                                <li>가스 비용 최적화</li>
                            </ul>

                        </div>

                        <h2> 에러 처리 </h2>
                        <div className="section">

                            <ul>
                                <li>예외(Exception)를 처리하기 위한 다양한 방법을 제공한다.</li>
                            </ul>

                            <h3> 에러 처리 메커니즘 </h3>
                            <ul>
                                <li><code>require()</code> {arrow} 조건 검사 및 입력값 검증</li>
                                <li><code>revert()</code> {arrow} 명시적으로 오류 발생</li>
                                <li><code>assert()</code> {arrow} 내부 논리 오류 체크</li>
                                <li><code>try/catch</code> {arrow} 외부 호출 실패를 처리</li>
                            </ul>

                            <h3> 1. require() 함수 </h3>
                            <ul>
                                <li>주로 입력 값 검증이나 특정 조건이 만족되지 않을 경우 사용된다.</li>
                                <li>기본 문법</li>
                                <ul>
                                    <li><code>condition</code>: 참이어야 하는 조건</li>
                                    <li><code>Error message</code>: 조건이 참이 아닐 경우 출력되는 메시지</li>
                                </ul>
                            </ul>

                            <h3> 2. revert() 함수 </h3>
                            <ul>
                                <li>특정 조건이 충족되지 않을 때 명시적으로 오류를 발생시킨다.</li>
                            </ul>

                            <h3> 3. assert() 함수 </h3>
                            <ul>
                                <li>내부 오류나 불변성 검사를 위해 사용된다.</li>
                                <li>실패 시 모든 가스를 소모하므로 주의해야 한다.</li>
                            </ul>

                            <h3> 4. try/catch 블록 </h3>
                            <ul>
                                <li><code>try/catch</code>는 외부 호출이나 저수준 함수 호출에서 발생할 수 있는 실패를 처리한다.</li>
                            </ul>

                            <h3> 5. 가스 소비 최적화와 에러 처리 </h3>
                            <ul>
                                <li><code>require()</code> {arrow} 입력값 검사 및 가스 절약에 가장 효율적</li>
                                <li><code>revert()</code> {arrow} 특정 조건을 명시적으로 처리, 트랜잭션 중단 및 가스 반환</li>
                                <li><code>assert()</code> {arrow} 코드 버그 및 불변성 유지, 실패 시 모든 가스 소모</li>
                            </ul>

                        </div>

                        <h2> 이더 송금 </h2>
                        <div className="section">

                            <ul>
                                <li>이더를 스마트 컨트랙트 간에 송금하거나, 스마트 컨트랙트에서 외부 계정으로 이더를 전송할 수 있다.</li>
                                <li>이더 송금은 주로 ‘지불’, ‘입출금’ 기능을 구현할 때 사용된다.</li>
                            </ul>

                            <h3> 이더 송금을 위한 3가지 방법 </h3>
                            <ul>
                                <li><strong>transfer()</strong> {arrow} 안전한 이더 송금(가스 제한: 2,300)</li>
                                <li><strong>send()</strong> {arrow} 실패 시 반환값으로 성공 여부 확인</li>
                                <li><strong>call()</strong> {arrow} 가장 유연하지만 주의가 필요한 송금 방법</li>
                            </ul>

                            <h3> 1. 이더를 받기 위한 설정(payable 키워드) </h3>
                            <ul>
                                <li>함수가 이더를 받을 수 있으려면 <code>payable</code> 키워드를 명시해야 한다.</li>
                            </ul>

                            <h3> 2. 이더 송금 방법 </h3>
                            <ul>
                                <li><strong>transfer() 함수</strong></li>
                                <ul>
                                    <li>이더 전송 시 가장 안전한 방법</li>
                                    <li>가스 한도: 2,300 gas {arrow} 상태 변경 로직이 없는 수신자만 사용 가능</li>
                                    <li>실패 시 자동으로 트랜잭션이 롤백됨</li>
                                </ul>

                                <li><strong>send() 함수</strong></li>
                                <ul>
                                    <li>가스 한도: 2,300 gas</li>
                                    <li>반환값으로 성공 여부(true/false) 확인 가능</li>
                                    <li>실패 시 트랜잭션은 롤백되지 않음 {arrow} 명시적으로 처리해야 함</li>
                                </ul>

                                <li><strong>call() 함수</strong></li>
                                <ul>
                                    <li>가장 유연하고 강력한 방법</li>
                                    <li>가스 제한이 없으며, 원하는 만큼 가스를 전송 가능</li>
                                    <li>재진입 공격에 취약할 수 있음</li>
                                </ul>
                            </ul>

                            <h3> 3. 이더 수신 함수 </h3>
                            <ul>
                                <li><strong>receive() 함수</strong>: 순수 이더 전송 시 호출됨</li>
                                <li><strong>fallback() 함수</strong>: receive 함수가 없거나, 호출할 함수가 없는 경우 호출</li>
                            </ul>

                            <h3> 4. 이더 송금 시 보안 고려사항 </h3>
                            <ul>
                                <li>재진입 공격 방지</li>
                                <li><strong>call()</strong> 사용 시 재진입 공격 방지를 위한 ReentrancyGuard 패턴 사용</li>
                            </ul>

                            <h3> 5. 이더 잔액 확인 </h3>
                            <ul>
                                <li>스마트 컨트랙트의 잔액 또는 특정 주소의 잔액을 조회할 수 있다.</li>
                            </ul>

                        </div>


                    </div>
                )
            // 3/27
            case 'Solditiy Basic Grammar 4':
                return (
                    <div className="container">

                        <h2>주요 전역 변수와 전역 함수</h2>
                        <div className="section">

                            <h3>전역 변수</h3>
                            <ul>
                                <li>이더리움 블록체인에서 스마트 계약 실행 시 자동으로 제공되는 ‘읽기 전용 데이터’이다.</li>
                                <li>주로 블록, 트랜잭션, 메시지에 대한 정보를 제공한다.</li>
                            </ul>

                            <h4>전역 변수 목록</h4>
                            <ul>
                                <li><strong>msg.sender</strong>: 현재 함수를 호출한 주체의 주소</li>
                                <li><strong>msg.value</strong>: 호출 시 전송된 이더의 양(wei 단위)</li>
                                <li><strong>msg.data</strong>: 호출 시 전송된 데이터 전체</li>
                                <li><strong>tx.origin</strong>: 트랜잭션을 시작한 외부 계정 주소(최초 발신자의 주소 반환)</li>
                                <li><strong>block.timestamp</strong>: 현재 블록이 생성된 시간(초 단위, 유닉스 타임스탬프)</li>
                                <li><strong>block.number</strong>: 현재 블록의 번호</li>
                                <li><strong>block.prevrando</strong>: 이전 블록의 난수값</li>
                                <li><strong>block.gaslimit</strong>: 현재 블록의 가스 한도(전체 사용 가능한 가스의 양)</li>
                                <li><strong>block.coinbase</strong>: 현재 블록을 채굴한 채굴자의 주소</li>
                                <li><strong>gasleft()</strong>: 현재 실행 중인 함수에 남아 있는 가스량</li>
                            </ul>

                            <h3>전역 함수</h3>
                            <ul>
                                <li>스마트 계약 내에서 호출할 수 있는 내장 함수로, 주로 트랜잭션 관리나 블록 상태 추적에 사용된다.</li>
                            </ul>

                            <h4>전역 함수 목록</h4>
                            <ul>
                                <li><strong>gasleft()</strong>: 현재 트랜잭션에 남아 있는 가스 양 확인</li>
                                <li><strong>keccak256()</strong>: 입력된 데이터를 해시 처리(SHA-3)</li>
                                <li><strong>blockhash(uint)</strong>: 특정 블록 번호에 대한 해시 값을 반환(256개 이내의 최근 블록)</li>
                            </ul>

                            <h3>전역 변수와 함수의 활용 시 주의사항</h3>
                            <ul>
                                <li><strong>보안 문제</strong>
                                    <ul>
                                        <li>tx.origin은 재진입 공격에 취약하여 인증에 사용하지 않음</li>
                                        <li>대신 msg.sender 사용 권장</li>
                                    </ul>
                                </li>
                                <li><strong>타임스탬프 조작</strong>
                                    <ul>
                                        <li>block.timestamp는 채굴자에 의해 소폭 조작될 수 있음</li>
                                    </ul>
                                </li>
                                <li><strong>가스 관리</strong>
                                    <ul>
                                        <li>반복문이나 복잡한 로직은 가스 비용 증가에 주의</li>
                                        <li>gasleft() 함수를 활용해 남은 가스량을 실시간으로 추적</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <h2>상속</h2>
                        <div className="section">

                            <h3>정의</h3>
                            <ul>
                                <li>기존 계약의 기능을 확장하거나 재사용하기 위한 기능</li>
                                <li>기존 스마트 계약의 코드를 그대로 사용하면서도 새로운 기능을 덧붙일 수 있음</li>
                            </ul>

                            <h4>상속의 장점</h4>
                            <ul>
                                <li>코드 재사용</li>
                                <li>계약의 유지 보수 용이성</li>
                                <li>가독성 향상 및 코드의 명확성 증가</li>
                            </ul>

                            <h3>기본 상속 문법</h3>
                            <ul>
                                <li>is 키워드를 사용해 부모 계약을 상속</li>
                                <li>부모 계약의 함수나 변수에 접근 가능</li>
                                <li>상속된 함수와 상태 변수는 별도의 선언 없이도 사용 가능</li>
                            </ul>

                            <h3>함수 오버라이딩</h3>
                            <ul>
                                <li><strong>virtual</strong>: 부모 계약에서 오버라이딩 가능하도록 설정</li>
                                <li><strong>override</strong>: 자식 계약에서 부모 계약의 함수를 재정의할 때 사용</li>
                            </ul>

                            <h3>다중 상속</h3>
                            <ul>
                                <li>상속 우선순위는 상속 선언 순서에 따라 결정됨</li>
                            </ul>

                            <h3>접근 제어자와 상속</h3>
                            <ul>
                                <li><strong>public</strong>: 상속받은 계약에서 접근 가능</li>
                                <li><strong>internal</strong>: 상속받은 계약에서 접근 가능(외부에서는 접근 불가)</li>
                                <li><strong>private</strong>: 상속받은 계약에서도 접근 불가</li>
                            </ul>
                        </div>

                        <h2>인터페이스와 추상 계약</h2>
                        <div className="section">

                            <h3>인터페이스</h3>
                            <ul>
                                <li>외부 계약이 따를 수 있는 표준 함수 시그니처만 정의</li>
                                <li>상태 변수나 구현 로직 없이, 오직 함수 선언만 포함</li>
                            </ul>

                            <h3>추상 계약</h3>
                            <ul>
                                <li>하나 이상의 구현되지 않은 함수를 가진 계약</li>
                                <li>공통 기능을 정의하고, 이를 상속받은 계약에서 구현</li>
                            </ul>

                            <h4>추상 계약의 특징</h4>
                            <ul>
                                <li>직접 배포할 수 없음</li>
                                <li>최소한 하나 이상의 virtual 함수 포함</li>
                                <li>상속받은 계약에서 반드시 override 필요</li>
                            </ul>
                        </div>

                        <h2>라이브러리</h2>
                        <div className="section">

                            <h3>정의</h3>
                            <ul>
                                <li>재사용 가능한 코드 집합</li>
                                <li>상태 변수가 없고, 배포 불가능하며, 오직 함수만 제공</li>
                            </ul>

                            <h3>라이브러리의 특징</h3>
                            <ul>
                                <li>상태 변수를 가질 수 없음</li>
                                <li>library 키워드를 사용해 정의</li>
                                <li>pure 또는 view 함수를 주로 포함</li>
                                <li>스마트 계약에서 직접 호출되거나 using for 구문 사용 가능</li>
                                <li>내장된 가스 최적화 기능 제공</li>
                            </ul>
                        </div>

                    </div>
                )
            case 'Solditiy Basic Grammar 5':
                return (
                    <div className="container">

                        <h2>데이터 타입 심화</h2>
                        <div className="section">

                            <h3>- 구조체의 매핑</h3>
                            <ul>
                                <li>매핑과 구조체를 함께 사용해 데이터를 더 구조적으로 관리할 수 있다.</li>
                            </ul>

                            <h3>- 다중 매핑 구조</h3>
                            <ul>
                                <li>매핑 안에 또 다른 매핑을 정의해 2차원 이상의 데이터 저장이 가능하다.</li>
                                <li>주로 권한 관리와 복잡한 관계 설정에 유용하다.</li>
                            </ul>

                        </div>
                        <h2>Fallback & Receive Functions</h2>
                        <div className="section">

                            <h3>- (Function) Receive</h3>
                            <ul>
                                <li>이더를 직접 수신할 때 호출되는 함수</li>
                                <li>계약이 명시적으로 이더를 받을 때 호출</li>
                                <li>external과 payable로 선언해야 함</li>
                            </ul>

                            <h3>- (function) Fallback</h3>
                            <ul>
                                <li>정의되지 않은 함수가 호출되거나, 데이터가 포함된 호출이 발생할 때 자동으로 실행</li>
                                <li>external로 선언되어야 함</li>
                                <li>이더 전송이 포함되었다면 payable도 필요</li>
                            </ul>

                        </div>
                        <h2>에러 처리</h2>
                        <div className="section">

                            <h3>- try/catch 문법</h3>
                            <ul>
                                <li>외부 함수 호출이나 스마트 계약의 생성 시 오류가 발생할 수 있으며, 이를 방지하기 위해 try/catch 문법을 사용한다.</li>
                                <li>try: 성공적으로 실행될 경우 결과 반환</li>
                                <li>catch: 에러 발생 시 처리</li>
                            </ul>

                            <h3>- 사용자 정의 에러</h3>
                            <ul>
                                <li>특정 조건이 충족되지 않았을 때 발생할 수 있는 에러를 명확하게 정의할 수 있다.</li>
                                <li>가스 비용이 절감되는 장점이 있다.</li>
                                <li>error: 에러 정의</li>
                                <li>revert: 에러 발생 시 실행 중단 및 에러 반환</li>
                            </ul>

                        </div>
                    </div>
                )
            case 'Solditiy Practice Exercise 1':
                return (
                    <div className="container">
                        <h2>Getter & Setter</h2>
                        <div className="section">

                            <h3>Solidity의 Getter와 Setter</h3>

                            <ul>
                                <li>
                                    Solidity에서 getter(조회 함수)와 setter(설정 함수)는 스마트 컨트랙트에서 상태 변수를 다루는 핵심 개념이다.
                                </li>
                            </ul>

                            <h4>Getter 함수</h4>
                            <ul>
                                <li>상태 변수를 조회하는 함수(자동 생성 가능)</li>
                                <li>public 가시성 사용 시 자동으로 생성됨</li>
                            </ul>

                            <h4>Setter 함수</h4>
                            <ul>
                                <li>상태 변수를 변경하는 함수</li>
                                <li>수동으로 구현해야 함</li>
                            </ul>

                        </div>
                        <h2>스마트 컨트랙트 개발에서 테스트가 중요한 이유</h2>
                        <div className="section">

                            <ul>
                                <li>스마트 컨트랙트는 한 번 배포되면 수정이 불가능하기 때문에, 배포 전에 철저하게 테스트하는 것이 필수적이다.</li>
                                <li>Hardhat 또는 Truffle은 테스트 및 배포 환경을 제공하는 강력한 이더리움 개발 도구로, 스마트 컨트랙트 테스트를 효율적으로 수행할 수 있도록 도와준다.</li>
                            </ul>

                            <h3>스마트 컨트랙트 테스트가 중요한 이유</h3>

                            <ul>
                                <li>배포 후 수정 불가능</li>
                                <li>가스 비용 절감</li>
                                <li>보안 강화</li>
                                <li>예측 가능한 동작 보장</li>
                            </ul>

                            <h3>테스트 코드 작성 시 사용되는 라이브러리</h3>

                            <ul>
                                <li><strong>chai</strong>: 테스트 라이브러리</li>
                                <li><strong>ethers</strong>: 이더리움(EVM)과 상호작용할 수 있도록 도와주는 라이브러리</li>
                                <li><strong>Hardhat</strong>: 기본 블록체인 라이브러리로 ethers를 사용</li>
                            </ul>

                        </div>

                    </div>
                )
            case 'Solditiy Practice Exercise 2':
                return (
                    <div className="container">

                        <h2>Public으로 선언하지 않은 상태변수의 Getter</h2>
                        <div className="section">
                            <h3>설명</h3>
                            <ul>
                                <li>Solidity에서 상태 변수를 public으로 선언하면 자동으로 getter 함수가 생성된다.</li>
                                <li>private 또는 internal로 선언하면 외부에서 직접 접근할 수 없기 때문에 getter를 직접 구현해야 한다.</li>
                            </ul>
                        </div>

                        <h2>구조체의 getter & setter</h2>
                        <div className="section">
                            <h3>설명</h3>
                            <ul>
                                <li>Solidity에서 struct(구조체)는 기본적으로 접근 제한자로 설정되지 않는다.</li>
                                <li>다른 상태 변수를 통해 private로 선언할 수 있다.</li>
                            </ul>

                            <h3>구조체의 getter</h3>
                            <ul>
                                <li>상태 변수를 private로 선언하면 getter 함수가 자동으로 생성되지 않는다.</li>
                                <li>따라서 별도의 getter 함수를 public으로 만들어야 한다.</li>
                            </ul>

                            <h3>구조체의 setter</h3>
                            <ul>
                                <li>구조체 데이터를 설정하는 setter 함수는 특정 필드만 변경할 수도 있고, 전체 구조체를 한 번에 설정할 수도 있다.</li>
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