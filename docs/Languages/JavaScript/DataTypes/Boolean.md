# 논리 타입 (Boolean)

## Summary

Boolean 값은 `true` 또는 `false` 두 가지 값만 가질 수 있으며, 논리적 명제의 진리값을 나타낸다.

## Details

### Boolean 값 생성

- Boolean 값은 비교 연산자, 동등 연산자, 논리 NOT (`!`) 연산자 등을 사용하여 생성된다.
- 또한, `Array.isArray()`와 같은 조건을 반환하는 함수에서도 생성될 수 있다.
- `&&`, `||`와 같은 이진 논리 연산자는 반드시 Boolean 값을 반환하지 않으며, 피연산자의 값이 그 자체로 반환된다.

### 조건문에서의 사용

- Boolean 값은 조건문에서 자주 사용된다. 예를 들어, `if...else`, `while`문, 삼항 연산자 (`? :`), `Array.prototype.filter()`와 같은 메서드에서 조건을 테스트할 때 사용된다.

### 명시적 변환

- JavaScript는 Boolean 문맥에서 자동으로 값을 Boolean으로 변환하므로 명시적으로 변환할 필요는 거의 없다.
- 그러나, 명확한 코드 의도를 위해 조건이 Boolean 값임을 확실히 할 수 있다.
- 예시:
  ```js
  // 명시적으로 Boolean 값을 반환
  const isObject = (obj) => !!obj && typeof obj === 'object';
  const isObject = (obj) => Boolean(obj) && typeof obj === 'object';
  const isObject = (obj) => obj !== null && typeof obj === 'object';
  ```

### Boolean 원시값과 Boolean 객체

- Boolean 값을 원시값으로 변환하려면 `Boolean()` 함수나 이중 부정 연산자(`!!`)를 사용해야 한다.
- `new Boolean()`으로 객체를 생성하면 Boolean 객체가 생성되므로 주의해야 한다. 이는 항상 truthy 값으로 평가된다.
  ```js
  const bad = new Boolean(false); // Boolean 객체는 항상 truthy
  if (new Boolean(true)) {
    console.log('로그가 출력된다.');
  }
  if (new Boolean(false)) {
    console.log('이 로그도 출력된다.');
  }
  ```

### Boolean 강제 변환

- JavaScript에서는 여러 내장 연산자가 Boolean 값을 기대할 때 자동으로 강제 변환을 수행한다.
  - `undefined`, `null`, `0`, `-0`, `NaN`, `""` (빈 문자열)은 `false`로 변환된다.
  - 그 외의 값은 `true`로 변환된다.

### Truthy와 Falsy 값

- **Falsy 값**: `false`, `0`, `-0`, `NaN`, `null`, `undefined`, `""` (빈 문자열) 등
- **Truthy 값**: 위의 falsy 값을 제외한 모든 값은 truthy로 평가된다.
- 예시:
  ```js
  if ([]) {
    console.log('[]는 truthy');
  }
  if ([] == false) {
    console.log('[]는 false와 같음');
  }
  // []는 truthy이며, [] == false는 true
  ```

### Boolean()과 !! 연산자

- `!!`는 두 번의 부정을 사용하여 값을 Boolean 값으로 변환하는 방법이다.
- `Boolean()` 함수도 동일한 방식으로 변환을 수행한다.
  ```js
  const good = Boolean(expression);
  const good2 = !!expression;
  ```

### Boolean 객체의 생성자와 메서드

- `Boolean()` 생성자는 Boolean 객체를 생성하며, `Boolean.prototype.toString()`은 객체의 값을 "true" 또는 "false"로 반환한다.
- `Boolean.prototype.valueOf()`는 객체의 원시값을 반환한다.

### 예시

#### false 값을 생성하는 방법

```js
const bNoParam = Boolean(); // false
const bZero = Boolean(0); // false
const bNull = Boolean(null); // false
const bEmptyString = Boolean(''); // false
const bfalse = Boolean(false); // false
```

#### true 값을 생성하는 방법

```js
const btrue = Boolean(true); // true
const btrueString = Boolean('true'); // true
const bfalseString = Boolean('false'); // true
const bSuLin = Boolean('Su Lin'); // true
const bArrayProto = Boolean([]); // true
const bObjProto = Boolean({}); // true
```

## Reference

**link:**

- [Boolean - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [ECMAScript® 2025 Language Specification - Boolean](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-boolean-objects)
