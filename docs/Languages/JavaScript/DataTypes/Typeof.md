# `typeof` operator

## Summary

`typeof` 연산자는 JavaScript에서 변수의 타입을 문자열로 반환하는 단항 연산자이다. 주로 런타임에 변수의 타입을 확인하는 데 사용되며, 몇 가지 예외적인 동작에 주의해야 한다.

## Details

### typeof 연산자의 기본 사용법

`typeof`는 피연산자의 타입을 문자열 형태로 반환한다. 기본적으로 다음과 같은 결과를 반환한다.

| 표현식                 | 반환값        |
| ---------------------- | ------------- |
| `typeof 42`            | `"number"`    |
| `typeof 'hello'`       | `"string"`    |
| `typeof true`          | `"boolean"`   |
| `typeof undefined`     | `"undefined"` |
| `typeof Symbol()`      | `"symbol"`    |
| `typeof 10n`           | `"bigint"`    |
| `typeof {}`            | `"object"`    |
| `typeof []`            | `"object"`    |
| `typeof function() {}` | `"function"`  |

:::note `typeof`는 함수에 대해서만 특별히 `"function"`을 반환하고, 나머지 모든 객체는 `"object"`를 반환한다. :::

### null 타입의 예외

`typeof null`은 `"object"`를 반환한다. 이는 JavaScript 초창기 설계 실수이며, 지금까지 호환성 유지 차원에서 그대로 남아 있는 버그이다.

```js
typeof null; // "object"
```

:::caution `null`은 실제로 객체가 아니며, 타입 확인 시 주의해야 한다. :::

### 배열과 객체의 구분

`typeof`로는 배열과 일반 객체를 구분할 수 없다. 둘 다 `"object"`를 반환하기 때문이다.

```js
typeof []; // "object"
typeof {}; // "object"
```

배열인지 여부를 확인할 때는 `Array.isArray()`를 사용해야 한다.

```js
Array.isArray([]); // true
```

### 선언되지 않은 변수 처리

선언되지 않은 변수에 `typeof`를 사용하면 ReferenceError가 발생하지 않고 `"undefined"`를 반환한다. 이는 `typeof`만의 특징이다.

```js
typeof notDeclared; // "undefined"
```

:::tip 선언 여부와 무관하게 안전하게 타입을 확인할 수 있다는 점에서 `typeof`는 유용하다. :::

## Reference

**link:** External reference

- [MDN - typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [W3Schools - typeof](https://www.w3schools.com/Js/js_typeof.asp)
