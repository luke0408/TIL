# undefined

## Summary

`undefined`는 JavaScript에서 값이 할당되지 않은 변수나 존재하지 않는 객체의 속성 등을 나타내는 특별한 값이다.

## Details

### 정의 및 특징

- **전역 객체의 속성**: `undefined`는 전역 객체의 속성으로, 전역 범위에서 접근할 수 있다. 
- **읽기 전용**: 대부분의 최신 브라우저에서 `undefined`는 읽기 전용이며, 재할당이나 변경이 불가능하다. 
- **유형**: `undefined`의 데이터 타입은 `undefined`이다. 

### 발생 상황

- **변수 선언 후 값이 할당되지 않은 경우**: 변수를 선언만 하고 값을 할당하지 않으면, 해당 변수의 값은 자동으로 `undefined`가 된다.
  ```javascript
  let x;
  console.log(x); // 출력: undefined
  ```
- **존재하지 않는 객체의 속성에 접근할 때**: 객체에 존재하지 않는 속성에 접근하면 `undefined`를 반환한다.
  ```javascript
  const obj = {};
  console.log(obj.nonExistentProperty); // 출력: undefined
  ```
- **함수가 명시적으로 값을 반환하지 않을 때**: 함수 내에서 `return` 문을 사용하지 않으면, 해당 함수는 자동으로 `undefined`를 반환한다.
  ```javascript
  function noReturn() {}
  console.log(noReturn()); // 출력: undefined
  ```

### 비교 및 검사

- **엄격한 비교**: 변수의 값이 정확히 `undefined`인지 확인하려면 엄격한 동등 연산자(`===`)를 사용한다.
  ```javascript
  let x;
  if (x === undefined) {
    console.log('x는 undefined입니다.');
  }
  ```
- **`typeof` 연산자 사용**: 변수가 선언되지 않았거나 값이 `undefined`인지 확인하려면 `typeof` 연산자를 사용할 수 있다.
  ```javascript
  console.log(typeof x === 'undefined'); // x가 선언되지 않은 경우에도 true를 반환
  ```

### 주의사항

- **`undefined`의 재정의**: 전역 범위에서 `undefined`를 변수로 선언하거나 값을 할당하는 것은 권장되지 않는다. 이는 코드의 가독성과 유지보수성을 해칠 수 있다.
  
  ```javascript
  let undefined = 'some value';
  console.log(undefined); // 출력: 'some value'
  ```

## Reference

**link:** External reference
- [MDN Web Docs - undefined](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- [ECMAScript® 2025 Language Specification - undefined](https://tc39.es/ecma262/multipage/global-object.html#sec-undefined)
