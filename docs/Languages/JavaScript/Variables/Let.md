# `let`

## Summary

`let`은 `var`의 문제점을 해결한 **모던한 변수 선언 방식**으로, **블록 스코프(block scope)를 가지며, 재선언이 불가능**하다.

## Details

### `let`의 특징

- **블록 스코프(block scope)**: 중괄호 `{}` 내에서 선언된 변수는 해당 블록 내부에서만 유효하다.
- **재선언 불가능**: 동일한 변수명을 재선언하면 오류가 발생한다.
- **호이스팅 발생**: `var`처럼 호이스팅되지만, **TDZ(Temporal Dead Zone, 일시적 사각지대)** 에 의해 선언 전에 접근하면 오류가 발생한다.

### 예제 코드

```javascript
if (true) {
  let name = 'John';
}
console.log(name); // ReferenceError: name is not defined
```

위 코드에서 `name`은 블록 내부에서만 존재하며, 외부에서는 접근할 수 없다.

#### `let`과 `var` 비교

```javascript
console.log(a); // undefined (호이스팅 발생)
var a = 5;

console.log(b); // ReferenceError (TDZ로 인해 접근 불가)
let b = 10;
```

### 결론

`let`은 블록 스코프를 제공하며, `var`보다 안전한 변수 선언 방식이므로 **가변 데이터를 선언할 때 권장된다**.

## Reference

<!-- 사용하지 않는 레퍼런스 종류는 삭제 후 업로드 -->

**author note:** Related note in this repo

- [JavaScript - var](./Var.md)
- [JavaScript - const](./Const.md)
- [JavaScript - hoisting](./Hoisting.md)

**link:** External reference

- [let - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- [변수와 상수 - JavaScript.Info](https://ko.javascript.info/variables)
