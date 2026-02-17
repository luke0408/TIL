# Symbol

## Summary

`Symbol`은 JavaScript에서 고유하고 변경 불가능한 원시 값으로, 주로 객체의 프로퍼티 키로 사용된다.

## Details

### 정의 및 특징

- **고유성 보장**: `Symbol()` 함수를 호출하면 고유한 심볼 값이 생성된다. 동일한 설명을 가진 심볼이라도 각각 고유하다.
  ```javascript
  const sym1 = Symbol('desc');
  const sym2 = Symbol('desc');
  console.log(sym1 === sym2); // false
  ```
- **데이터 타입**: `typeof` 연산자를 사용하면 심볼의 타입은 'symbol'로 반환된다.
  ```javascript
  const sym = Symbol();
  console.log(typeof sym); // 'symbol'
  ```

### 객체 프로퍼티 키로 사용

- **심볼을 프로퍼티 키로 사용**: 심볼은 객체의 프로퍼티 키로 사용될 수 있으며, 이는 프로퍼티를 숨기거나 외부 접근을 방지하는 데 유용하다.
  ```javascript
  const sym = Symbol('hidden');
  const obj = {
    [sym]: '비밀 값',
    visible: '공개 값',
  };
  console.log(obj[sym]); // '비밀 값'
  console.log(obj.visible); // '공개 값'
  ```
- **반복문에서 제외**: 심볼로 정의된 프로퍼티는 `for...in`이나 `Object.keys()` 등에서 열거되지 않는다.
  ```javascript
  for (let key in obj) {
    console.log(key); // 'visible'만 출력됨
  }
  console.log(Object.keys(obj)); // ['visible']
  ```

### 전역 심볼 레지스트리

- **`Symbol.for()` 메서드**: 전역 심볼 레지스트리를 통해 키를 기반으로 심볼을 생성하거나 검색할 수 있다. 동일한 키를 사용하면 항상 동일한 심볼을 반환한다.
  ```javascript
  const globalSym1 = Symbol.for('globalKey');
  const globalSym2 = Symbol.for('globalKey');
  console.log(globalSym1 === globalSym2); // true
  ```
- **`Symbol.keyFor()` 메서드**: 전역 심볼의 키를 가져올 수 있다.
  ```javascript
  const sym = Symbol.for('globalKey');
  console.log(Symbol.keyFor(sym)); // 'globalKey'
  ```

### 내장 심볼 (Well-known Symbols)

JavaScript는 내장 심볼을 제공하여 특정한 언어 동작을 커스터마이즈할 수 있게 한다. 예를 들어:

- **`Symbol.iterator`**: 객체의 기본 반복자를 정의하는 데 사용된다.
  ```javascript
  const iterableObj = {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    },
  };
  for (const value of iterableObj) {
    console.log(value); // 1, 2, 3
  }
  ```
- **`Symbol.toStringTag`**: 객체의 기본 문자열 설명을 정의한다.
  ```javascript
  const customObj = {
    [Symbol.toStringTag]: 'CustomObject',
  };
  console.log(Object.prototype.toString.call(customObj)); // '[object CustomObject]'
  ```

## Reference

**link:** External reference

- [MDN Web Docs - Symbol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [ECMAScript® 2025 Language Specification - Symbol](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol-objects)
- [JavaScript.info - Symbol](https://ko.javascript.info/symbol)
