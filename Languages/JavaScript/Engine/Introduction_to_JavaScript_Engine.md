# Introduction to JavaScript Engine

## Summary
JavaScript 엔진은 JavaScript 코드를 실행하는 핵심 구성 요소로, 브라우저 및 런타임 환경(Node.js 등)에서 동작한다. JavaScript 코드를 해석하고 실행하며, 성능 최적화를 위해 Just-In-Time(JIT) 컴파일러를 활용한다.

## Details

### 1. JavaScript 엔진이란?
JavaScript 엔진은 텍스트 기반의 JavaScript 코드를 **바이트코드(Bytecode) 또는 기계어(Machine Code)로 변환**하여 실행하는 프로그램이다. 

### 2. 주요 JavaScript 엔진
JavaScript 엔진은 브라우저 및 다양한 환경에서 동작하며, 대표적인 엔진은 다음과 같다:
- **V8** (Google Chrome, Node.js)
- **SpiderMonkey** (Mozilla Firefox)
- **JavaScriptCore** (Apple Safari)
- **Chakra** (Microsoft Edge - 레거시 버전)

### 3. JavaScript 엔진의 핵심 기능
1. **Parsing (구문 분석)**: JavaScript 코드를 해석하고 **AST(Abstract Syntax Tree, 추상 구문 트리)** 를 생성한다.
2. **Compilation (컴파일)**: AST를 바탕으로 바이트코드(Bytecode)를 생성한다.
3. **Execution (실행)**: 바이트코드를 실행하면서 JIT(Just-In-Time) 컴파일러를 통해 기계어로 변환한다.
4. **Memory Management (메모리 관리)**: 가비지 컬렉션(Garbage Collection)을 수행하여 메모리를 효율적으로 관리한다.
5. **Optimization (최적화)**: 실행 중 최적화(Optimizing JIT)를 수행하여 반복 실행되는 코드를 효율적으로 처리한다.

### 4. JavaScript 코드 실행 과정
1. **Parsing → AST 생성**: 소스 코드를 분석하여 추상 구문 트리를 만든다.
2. **Bytecode 변환**: AST를 기반으로 바이트코드를 생성한다.
3. **JIT 최적화**: 실행 중 핫 코드(Hot Code)를 감지하여 기계어로 변환하고 성능을 향상시킨다.
4. **Deoptimization (최적화 해제)**: 예상치 못한 코드 실행 패턴이 발생하면 최적화된 코드를 폐기하고 다시 인터프리터 방식으로 실행한다.

## Reference
**issue:** Related issue in this repo
- [JavaScript Engine은 어떻게 동작하는가?](https://github.com/luke0408/TIL/issues/1)

**author note:** Related note in this repo
- [JavaScript Compilation Process](./JavaScript_Compilation_Process.md)

**link:** External reference
- [How JavaScript Really Works?](https://dev.to/laxminarayana31/how-javascript-really-works-1p6i)
- [How Does JavaScript Work Behind the Scenes? JS Engine and Runtime Explained](https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes/)
- [Introduction to Javascript Engines](https://www.geeksforgeeks.org/introduction-to-javascript-engines/)
- [JavaScript Engine and Runtime Explained](https://www.freecodecamp.org/news/javascript-engine-and-runtime-explained/)