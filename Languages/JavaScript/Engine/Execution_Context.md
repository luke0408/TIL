# Execution Context in JavaScript

## Summary

Execution Context(실행 컨텍스트)는 **JavaScript 코드가 실행되는 환경**을 의미하며, **변수 및 함수의 범위를 관리하고 실행 흐름을 제어하는 핵심 개념**이다. 실행 컨텍스트는 **전역 실행 컨텍스트(Global Execution Context, GEC)** 와 **함수 실행 컨텍스트(Function Execution Context, FEC)** 로 나뉜다.

## Details

### 1. 실행 컨텍스트란?

실행 컨텍스트는 **JavaScript 코드가 실행될 때 생성되는 환경**으로, 해당 환경 내에서 **변수, 함수, 스코프 및 this 키워드**가 관리된다.

### 2. 실행 컨텍스트의 유형

#### **1) Global Execution Context (GEC)**

- JavaScript 코드가 실행될 때 **가장 먼저 생성되는 컨텍스트**
- `window` 객체(브라우저) 또는 `global` 객체(Node.js)를 `this`로 가짐
- 함수 실행 컨텍스트(FEC)보다 상위에 위치하며, 모든 코드의 실행 환경을 제공

#### **2) Function Execution Context (FEC)**

- 함수가 호출될 때마다 **새로운 실행 컨텍스트가 생성**됨
- 각 실행 컨텍스트는 **독립적인 변수 및 스코프를 가짐**
- 실행이 완료되면 스택에서 제거됨

### 3. 실행 컨텍스트 생성 과정

실행 컨텍스트는 **두 개의 주요 단계**를 거쳐 생성된다.

#### **1) Creation Phase (생성 단계)**

- **Variable Object (VO) 생성**: 변수와 함수 선언을 메모리에 저장함
- **Scope Chain 설정**: 현재 컨텍스트와 부모 컨텍스트를 연결하는 체인을 구성함
- **this 바인딩**: `this` 키워드를 결정함

#### **2) Execution Phase (실행 단계)**

- 코드를 한 줄씩 실행하면서 변수에 값이 할당되고, 함수가 실행됨
- 실행이 끝나면 해당 컨텍스트는 **콜 스택(Call Stack)** 에서 제거됨

### 4. 실행 컨텍스트와 Call Stack

JavaScript는 **싱글 스레드(Single-Threaded)** 언어이므로 **Call Stack(호출 스택)** 을 사용하여 실행 컨텍스트를 관리한다.

```js
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
}

first();
```

위 코드 실행 시 **Call Stack 흐름**:

1. `first()` 실행 → `first`의 실행 컨텍스트가 Call Stack에 추가됨
2. `console.log("First function")` 실행
3. `second()` 호출 → `second`의 실행 컨텍스트가 Call Stack에 추가됨
4. `console.log("Second function")` 실행
5. `second()` 실행 완료 → `second`의 실행 컨텍스트가 제거됨
6. `first()` 실행 완료 → `first`의 실행 컨텍스트가 제거됨

### 5. 실행 컨텍스트와 Hoisting

- 실행 컨텍스트가 생성될 때, **변수와 함수 선언이 메모리에 저장되는 과정에서 Hoisting(호이스팅)이 발생**
- 변수 선언이 코드 상단으로 끌어올려진 것처럼 동작함 (단, `let`과 `const`는 TDZ로 인해 바로 접근 불가)

### 6. 실행 컨텍스트와 Closure

- 실행 컨텍스트는 **클로저(Closure)의 동작을 결정하는 핵심 요소**
- 내부 함수는 부모 함수의 실행 컨텍스트가 제거된 후에도 **해당 스코프에 접근 가능**

```js
function outer() {
  let outerVar = "I'm from outer!";
  return function inner() {
    console.log(outerVar);
  };
}
const innerFunc = outer();
innerFunc(); // "I'm from outer!"
```

위 코드에서 `innerFunc()`는 `outerVar`에 접근할 수 있으며, 이는 **Closure가 실행 컨텍스트를 유지하기 때문**이다.

## Reference

**issue:** Related issue in this repo

- [JavaScript Engine은 어떻게 동작하는가?](https://github.com/luke0408/TIL/issues/1)

**author note:** Related note in this repo

- [JavaScript Engine Intro](./Introduction_to_JavaScript_Engine.md)
- [JavaScript Compilation Process](./JavaScript_Compilation_Process.md)

**link:** External reference

- [How JavaScript Really Works?](https://dev.to/laxminarayana31/how-javascript-really-works-1p6i)
- [JavaScript Engine and Runtime Explained](https://www.freecodecamp.org/news/javascript-engine-and-runtime-explained/)
