# `var`  

## Summary  
`var`는 자바스크립트에서 가장 오래된 변수 선언 방식이다. 하지만 **호이스팅(hoisting) 문제**, **함수 스코프(function scope)** 등의 이유로 현대적인 코드에서는 사용이 권장되지 않는다.  

## Details  

### `var`의 특징  
- **함수 스코프(function scope)**: `var`로 선언된 변수는 **블록 스코프를 가지지 않고**, 오직 함수 스코프를 따른다.  
- **호이스팅(hoisting)**: `var`로 선언된 변수는 **선언부가 코드의 최상단으로 끌어올려지는 특성**을 가진다.  
- **재선언 가능**: 같은 변수명을 여러 번 선언해도 오류가 발생하지 않는다.  

### 예제 코드  
```javascript
console.log(name); // undefined (변수가 선언되었지만, 초기화되지 않음)
var name = "John";
console.log(name); // "John"
```
위 코드에서 `name` 변수는 선언부만 호이스팅되었으며, 초기화는 원래 자리에 남아 있다.  

### `var`의 문제점  
1. **블록 스코프를 지원하지 않음**  
   ```javascript
   if (true) {
       var test = "hello";
   }
   console.log(test); // "hello" (블록 내부에서 선언했지만 전역에서 접근 가능)
   ```
2. **재선언이 가능하여 의도치 않은 값 변경 발생**  
   ```javascript
   var user = "Alice";
   var user = "Bob";
   console.log(user); // "Bob" (변수가 덮어쓰기 됨)
   ```

### 결론  
현재는 `var` 대신 `let` 또는 `const`를 사용하는 것이 권장된다.  

## Reference
<!-- 사용하지 않는 레퍼런스 종류는 삭제 후 업로드 -->

**author note:** Related note in this repo
- [JavaScript - let](./Let.md)
- [JavaScript - const](./Const.md)
- [JavaScript - hoisting](./Hoisting.md)

**link:** External reference
- [var - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/var)
- [변수와 상수 - JavaScript.Info](https://ko.javascript.info/variables)