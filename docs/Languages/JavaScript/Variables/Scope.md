## JavaScript Scope

## Summary

JavaScript에서 **Scope(스코프)** 는 변수의 접근 가능 범위를 결정한다. 스코프는 크게 **Block Scope, Function Scope, Global Scope** 세 가지로 나뉜다. 이를 이해하면 변수가 어디에서 유효한지, 의도치 않은 값 변경을 어떻게 방지할 수 있는지 알 수 있다.

## Details

### Block Scope

**Block Scope(블록 스코프)** 는 `{}` 중괄호 내부에서 선언된 변수들이 그 블록 내에서만 유효하도록 한다.

- `let`과 `const` 키워드는 **Block Scope**를 가진다.
- `var`는 Block Scope를 가지지 않으며, 블록 외부에서도 접근 가능하다.

#### 예제

```javascript
{
  let x = 2;
  const y = 3;
}
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
```

반면 `var`로 선언된 변수는 블록을 벗어나도 접근할 수 있다.

```javascript
{
  var z = 5;
}
console.log(z); // 5 (블록 외부에서도 접근 가능)
```

:::note ES6 이전에는 JavaScript에서 Block Scope 개념이 없었다. ES6 이후 `let`과 `const`의 도입으로 블록 스코프가 지원되기 시작했다. :::

### Function Scope

**Function Scope(함수 스코프)** 는 **함수 내에서 선언된 변수는 함수 내부에서만 접근 가능**하도록 한다.

- `var`, `let`, `const` 모두 Function Scope를 가진다.
- 함수가 종료되면 함수 내부에서 선언된 변수들은 삭제된다.

#### 예제

```javascript
function myFunction() {
  let car = 'Tesla';
  console.log(car); // "Tesla"
}
console.log(car); // ReferenceError: car is not defined
```

:::info **Function Scope는 독립적이다.** 같은 변수 이름을 여러 함수에서 사용할 수 있으며, 서로 간섭하지 않는다. :::

```javascript
function first() {
  let message = 'Hello';
  console.log(message);
}

function second() {
  let message = 'World';
  console.log(message);
}

first(); // "Hello"
second(); // "World"
```

### Global Scope

**Global Scope(전역 스코프)** 는 **어디서든 접근할 수 있는 변수 범위**를 의미한다.

- **함수 바깥에서 선언된 변수는 전역 변수(Global Variable)** 가 된다.
- `var`, `let`, `const`로 선언된 변수는 전역 변수로 사용할 수 있다.
- 전역 변수는 **모든 함수와 스크립트에서 접근 가능**하다.

#### 예제

```javascript
let car = 'BMW';

function showCar() {
  console.log(car); // "BMW"
}

showCar();
console.log(car); // "BMW"
```

:::caution **전역 변수 사용은 신중해야 한다.** 전역 변수는 어디에서든 접근 가능하기 때문에 **다른 코드에 의해 값이 변경될 위험이 있다.** 가능하면 **함수 내부에서 변수 선언을 제한하여 사용 범위를 좁히는 것이 좋다.** :::

### 자동 전역 변수 (Automatically Global)

JavaScript에서는 **선언 없이 값을 할당하면 자동으로 전역 변수가 된다.**  
이러한 특징은 의도치 않은 오류를 발생시킬 수 있다.

#### 예제

```javascript
function myFunction() {
  carName = 'Tesla'; // 선언 없이 할당 -> 자동 전역 변수
}

myFunction();
console.log(carName); // "Tesla"
```

:::warning **자동 전역 변수는 Strict Mode에서 방지된다.** `"use strict";`를 사용하면 선언되지 않은 변수에 값을 할당할 경우 오류가 발생한다. :::

```javascript
'use strict';

function myFunction() {
  carName = 'Tesla'; // ReferenceError: carName is not defined
}
myFunction();
```

### Global Scope와 `window` 객체

JavaScript에서는 전역 변수가 `window` 객체에 속할 수 있다.

- `var`로 선언한 전역 변수는 `window` 객체에 속한다.
- `let`, `const`로 선언한 전역 변수는 `window` 객체에 속하지 않는다.

#### 예제

```javascript
var car = 'Audi';
console.log(window.car); // "Audi"

let bike = 'Yamaha';
console.log(window.bike); // undefined
```

:::tip `let`과 `const`를 사용하면 `window` 오염을 방지할 수 있다. **전역 변수를 최소화하는 것이 좋은 코드 작성 습관이다.** :::

### 변수의 생명 주기 (Lifetime)

JavaScript 변수는 선언 시점부터 특정 조건에 의해 **삭제될 때까지 존재**한다.

- **지역 변수 (Local Variable)**: 함수가 실행될 때 생성되고, 함수 실행이 종료되면 삭제된다.
- **전역 변수 (Global Variable)**: 페이지가 로드될 때 생성되며, 브라우저가 닫힐 때까지 유지된다.

#### 예제

```javascript
function testScope() {
  let temp = 'I exist';
  console.log(temp); // "I exist"
}
testScope();
console.log(temp); // ReferenceError: temp is not defined
```

:::warning 전역 변수를 남용하면 메모리를 지속적으로 차지할 수 있으므로 **사용을 최소화하는 것이 중요하다.** :::

### 함수의 매개변수 (Function Arguments)

함수의 매개변수는 **함수 내부에서만 접근 가능한 지역 변수**로 동작한다.

#### 예제

```javascript
function greet(name) {
  console.log('Hello, ' + name);
}

greet('Alice'); // "Hello, Alice"
console.log(name); // ReferenceError: name is not defined
```

:::note 매개변수는 함수가 실행될 때 생성되고, 실행이 끝나면 삭제된다. :::

## Reference

**author note:** Related note in this repo

- [JavaScript - let](./Let.md)
- [JavaScript - const](./Const.md)
- [JavaScript - hoisting](./Hoisting.md)

**link:** External reference

- [JavaScript Scope - w3schools](https://www.w3schools.com/js/js_scope.asp)
- [JavaScript ES2015: Block Scoping](https://www.geeksforgeeks.org/javascript-es2015-block-scoping/)
- [Understanding Variable Scopes in JavaScript](https://www.geeksforgeeks.org/understanding-variable-scopes-in-javascript/)
- [Standard ECMA-262 6th Edition / June 2015](https://262.ecma-international.org/6.0/)
