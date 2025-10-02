### JavaScript 호이스팅 (Hoisting)

## Summary

JavaScript에서 호이스팅(Hoisting)은 인터프리터가 코드를 실행하기 전에 함수, 변수, 클래스 또는 import 선언을 해당 범위의 맨 위로 끌어올리는 것처럼 보이는 현상을 의미한다.

:::note 하지만 ECMAScript 사양에서는 "Hoisting"이라는 용어를 공식적으로 정의하지 않으며, 대신 특정 선언 방식에 따라 코드 평가가 어떻게 수행되는지를 설명한다. :::

## Details

### 1. 호이스팅의 개념

호이스팅은 다음과 같은 방식으로 작동한다.

- **값 호이스팅(Value Hoisting)**: 변수가 선언된 줄 이전에 해당 범위에서 변수 값을 사용할 수 있는 경우.
- **선언 호이스팅(Declaration Hoisting)**: 변수가 선언된 줄 이전에 참조할 수 있지만 `ReferenceError`가 발생하지 않고 값이 `undefined`인 경우.

호이스팅은 `선언 유형`에 따라 다르게 적용된다.

| 선언 유형 | 호이스팅 동작 |
| --- | --- |
| `function` | 함수 선언문이 최상위로 이동하며, 전체 함수가 미리 로드됨 |
| `var` | 변수 선언만 위로 올라가고, 초기화는 원래 위치에서 수행됨 (즉, `undefined` 값이 할당됨) |
| `let`, `const` | 호이스팅되지만, **TDZ(Temporal Dead Zone)** 로 인해 선언 전에 접근할 경우 `ReferenceError` 발생 |
| `class` | `let`, `const`와 동일하게 TDZ의 영향을 받음 |
| `import` | 가장 먼저 실행되며, 선언 전에 접근이 불가능함 (`SyntaxError` 발생) |

### 2. 선언 방식에 따른 차이점

#### **var의 호이스팅**

```js
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

- `var`로 선언된 변수는 선언만 호이스팅되며 초기화는 원래 위치에서 수행되므로 첫 번째 `console.log(a)`는 `undefined`를 출력한다.

#### **let, const의 호이스팅**

```js
console.log(b); // ReferenceError
let b = 10;
```

- `let`과 `const`는 선언 전에 접근할 경우 **TDZ(Temporal Dead Zone)**로 인해 `ReferenceError`가 발생한다.

#### **function의 호이스팅**

```js
greet(); // "Hello, world!"

function greet() {
  console.log('Hello, world!');
}
```

- `function` 선언문은 완전히 호이스팅되며, 선언 전에 호출할 수 있다.

#### **class의 호이스팅**

```js
const obj = new MyClass(); // ReferenceError
class MyClass {}
```

- `class`는 `let`과 동일하게 호이스팅되지만 **TDZ**의 영향을 받는다.

### 3. Temporal Dead Zone(TDZ)와 호이스팅의 차이

**TDZ(Temporal Dead Zone)** 는 변수 선언 전에 변수를 접근하는 것을 방지하는 메커니즘이다.

```js
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

- `const x = 2`가 실행되기 전까지 블록 내에서 `x`에 접근할 수 없다.

### 4. 호이스팅이 적용되지 않는 경우

```js
{
  var x = 1;
}
console.log(x); // 1
```

- `var`는 함수 스코프를 가지므로 블록(`{}`) 내에 선언해도 글로벌 또는 함수 범위에 영향을 미친다.
- 블록 스코프(`let`, `const` 등)와 달리 "선언 전 접근"이 존재하지 않음.

## Reference

**author note**: Related note in this repo

- [JavaScript - var](./Var.md)
- [JavaScript - const](./Const.md)
- [JavaScript - let](./Let.md)

**link:** External reference

- [JavaScript의 hoisting (호이스팅) 이란? - let과 var의 차이, let과 const 호이스팅](https://dev-ellachoi.tistory.com/1)
- [호이스팅 - MDN](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)
