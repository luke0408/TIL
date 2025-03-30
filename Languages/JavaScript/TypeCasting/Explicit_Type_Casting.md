# Explicit Type Casting in JavaScript
<!-- 
TIL을 작성할 때에는 해당 노트의 제목과 관련한 내용만 작성합니다.
추가적인 개념을 설명할 필요가 있다면, 해당 개념에 대한 노트를 새롭게 작성합니다.
이후 해당 개념 노트를 Reference에 링크합니다.

ex) 버블 정렬에 대해 설명하기 위해, Array 자료형을 설명해야할 경우 -> Array 노트 생성
-->

## Summary
명시적 타입 캐스팅은 개발자가 의도적으로 하나의 타입을 다른 타입으로 변환하는 것을 의미한다. JavaScript에서는 주로 `String()`, `Number()`, `Boolean()` 등의 생성자 함수나 `parseInt()`, `parseFloat()`와 같은 함수, 또는 `toString()` 메서드를 사용하여 타입을 명시적으로 변환한다.

## Details

### 명시적 타입 캐스팅이란
명시적 타입 캐스팅(Explicit Type Casting)은 프로그래머가 코드 상에서 명확하게 타입을 변경하는 행위를 의미한다. JavaScript는 동적 타입 언어이기 때문에 암시적 타입 변환도 자주 발생하지만, 명시적 타입 변환을 통해 더욱 의도적인 코드 작성이 가능하다.

> [!TIP]
> 명시적 타입 캐스팅을 활용하면 예외 상황을 방지하고, 디버깅을 쉽게 하며, 타입 불일치로 인한 버그를 줄일 수 있다.

### 문자열로 변환 (To String)
- `String(value)`
- `value.toString()`

```js
String(123);        // "123"
(123).toString();   // "123"
true.toString();    // "true"
```

> [!WARNING]
> `null`과 `undefined`는 `toString()`을 직접 호출하면 오류가 발생하므로 `String()` 함수를 사용하는 것이 안전하다.

### 숫자로 변환 (To Number)
- `Number(value)`
- `parseInt(value)`
- `parseFloat(value)`

```js
Number("123");        // 123
parseInt("123.45");   // 123
parseFloat("123.45"); // 123.45
Number(true);         // 1
Number(false);        // 0
```

> [!CAUTION]
> `Number("")`은 0이지만, `Number("abc")`는 `NaN`이 된다.

### 불리언으로 변환 (To Boolean)
- `Boolean(value)`

```js
Boolean(0);        // false
Boolean("hello");  // true
Boolean("");       // false
Boolean(null);     // false
Boolean({});       // true
```

> [!NOTE]
> JavaScript에서 `false`로 변환되는 값은 다음과 같다: `0`, `""`, `null`, `undefined`, `NaN`, `false`

### Object로 변환
일반적으로는 명시적 타입 캐스팅이 아닌 객체 리터럴을 활용한다. 그러나 `Object(value)`를 통해 원시 값을 객체로 변환할 수 있다.

```js
Object(123);    // Number {123}
Object("abc");  // String {"abc"}
Object(true);   // Boolean {true}
```

> [!IMPORTANT]
> 이러한 변환은 일반적인 객체 사용보다 드물며, 명시적으로 객체 포장을 해야 할 필요가 있는 특수한 상황에 사용된다.

## Reference

**link:** External reference
- [Type Conversions in JavaScript – Csharp.com](https://www.csharp.com/article/type-conversions-in-javascript/)
- [MDN Web Docs - Type Conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)
- [TutorialsPoint - Explain Typecasting in JavaScript](https://www.tutorialspoint.com/explain-typecasting-in-javascript)

**author note:** Related note in this repo
- []
