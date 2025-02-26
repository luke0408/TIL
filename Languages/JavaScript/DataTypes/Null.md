# null

## Summary

`null`은 JavaScript에서 의도적으로 어떤 객체 값이 없음을 나타내는 특별한 값이다.

## Details

### 정의 및 특징

- **데이터 타입**: `null`은 JavaScript의 원시 값 중 하나로, `null` 타입은 오직 `null` 값만을 가진다. 
- **의도적 부재**: `null`은 변수나 속성이 객체를 참조하지 않음을 명시적으로 나타낼 때 사용된다. 
- **`typeof` 연산자와의 관계**: `typeof null`을 실행하면 `"object"`를 반환하는데, 이는 초기 JavaScript 구현상의 버그로, 현재까지 수정되지 않고 있다. 

### 발생 상황

- **명시적 할당**: 변수가 더 이상 객체를 참조하지 않도록 하려면 `null`을 할당할 수 있다.
  ```javascript
  let obj = { name: "Alice" };
  obj = null;
  console.log(obj); // 출력: null
  ```
- **DOM 메서드의 반환 값**: DOM 관련 메서드에서 검색된 요소가 없을 경우 `null`을 반환한다.
  ```javascript
  const element = document.getElementById("nonExistentId");
  console.log(element); // 출력: null
  ```

### 비교 및 검사

- **엄격한 비교**: `null` 값을 확인할 때는 엄격한 동등 연산자(`===`)를 사용하는 것이 좋다.
  ```javascript
  let value = null;
  if (value === null) {
    console.log("값이 null입니다.");
  }
  ```
- **느슨한 비교**: `null`과 `undefined`는 느슨한 동등 연산자(`==`)로 비교할 때 동등하게 취급된다.
  ```javascript
  console.log(null == undefined); // 출력: true
  ```

### 주의사항

- **속성 접근 시 오류 발생**: `null` 값의 속성에 접근하려 하면 `TypeError`가 발생한다.
  ```javascript
  let obj = null;
  console.log(obj.property); // TypeError: Cannot read property 'property' of null
  ```
  이러한 오류를 방지하기 위해 옵셔널 체이닝(Optional Chaining) 연산자(`?.`)를 사용할 수 있다.
  ```javascript
  let obj = null;
  console.log(obj?.property); // 출력: undefined
  ```

## Reference

**author note**: Related note in this repo
- [JavaScript - Null](./Null.md)

**link:** External reference
- [MDN Web Docs - null](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/null)
- [ECMAScript® 2025 Language Specification - null](https://tc39.es/ecma262/multipage/overview.html#sec-null-value) 