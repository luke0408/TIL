# Parser and AST (Abstract Syntax Tree)

## Summary

JavaScript 엔진은 코드를 실행하기 전에 **파싱(Parsing) 과정**을 거쳐 **추상 구문 트리(AST, Abstract Syntax Tree)** 를 생성한다. AST는 코드 구조를 트리 형태로 표현한 것으로, 이후 컴파일과 최적화의 기초가 된다.

## Details

### 1. Parsing 과정 개요

JavaScript 엔진이 코드를 실행하기 위해서는 먼저 **파싱(Parsing)** 단계를 거친다. 이 과정에서 **소스 코드**가 **토큰(token)으로 분리**된 후 **AST(Abstract Syntax Tree)** 로 변환된다.

### 2. Parsing 단계

Parsing은 크게 두 단계로 이루어진다.

1. **Lexical Analysis (어휘 분석, 토큰화)**

   - 소스 코드를 읽고 의미 있는 최소 단위(토큰)로 분해하는 과정이다.
   - 예시:
     ```js
     let x = 10;
     ```
     위 코드는 다음과 같은 토큰으로 변환된다:
     - `let` (키워드)
     - `x` (식별자)
     - `=` (할당 연산자)
     - `10` (숫자 리터럴)
     - `;` (세미콜론)

2. **Syntax Analysis (구문 분석, AST 생성)**

   - 토큰을 기반으로 **AST(Abstract Syntax Tree, 추상 구문 트리)** 를 생성한다.
   - AST는 코드의 구조를 트리 형태로 표현한 것이다.
   - 위 코드(`let x = 10;`)의 AST 표현 예시:
     ```
     VariableDeclaration
     ├── Identifier (x)
     ├── NumericLiteral (10)
     ```

### 3. AST Explorer를 이용한 Acorn 방식 AST 예제

AST Explorer를 통해 **Acorn 파서**로 변환한 AST 결과는 다음과 같다:

> **파싱 대상**
```js
let x = 10;
```

> **파싱 결과 (Acorn 방식)**
```json
{
  "type": "VariableDeclaration",
  "start": 179,
  "end": 190,
  "declarations": [
    {
      "type": "VariableDeclarator",
      "start": 183,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 184,
        "name": "x"
      },
      "init": {
        "type": "Literal",
        "start": 187,
        "end": 189,
        "value": 10,
        "raw": "10"
      }
    }
  ],
  "kind": "let"
}
```

### 4. AST의 역할

AST는 코드의 실행 과정에서 중요한 역할을 한다.

1. **코드 분석 및 최적화**: JIT 컴파일러는 AST를 기반으로 코드의 최적화 가능성을 분석한다.
2. **트랜스파일링(Transpiling)**: Babel과 같은 도구는 AST를 변환하여 최신 JavaScript 문법을 구버전에서도 실행 가능하도록 변환한다.
3. **코드 리팩토링**: AST를 활용하면 코드 구조를 이해하고 자동 변환할 수 있다.

## Reference

**issue:** Related issue in this repo
- [JavaScript Engine은 어떻게 동작하는가?](https://github.com/luke0408/TIL/issues/1)

**author note:** Related note in this repo
- [JavaScript Engine Intro](./Introduction_to_JavaScript_Engine.md)
- [JavaScript Compilation Process](./JavaScript_Compilation_Process.md)

**link:** External reference

- [AST Explorer](https://astexplorer.net)
- [MDN Abstract Syntax Tree](https://developer.mozilla.org/en-US/docs/Glossary/Abstract_Syntax_Tree)
- [Acron](https://github.com/acornjs/acorn)
- [ESPrima](https://esprima.org/)

