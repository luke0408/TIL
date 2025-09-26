# Implicit Type Casting in JavaScript

## Summary
JavaScript에서 Implicit Type Casting(암시적 형 변환)은 표현식의 문맥에 따라 자동으로 데이터 타입이 변환되는 현상이다. 이 과정은 **Type Coercion**이라고도 하며, 개발자가 명시적으로 변환하지 않아도 JavaScript 엔진이 내부적으로 처리한다.

## Details

### Implicit Type Casting이란?
암시적 형 변환은 JavaScript에서 서로 다른 타입의 값을 연산할 때, 문맥에 따라 **자동으로 타입을 변환**하여 연산을 수행하는 동작이다. 이 과정은 예기치 못한 결과를 초래할 수 있기 때문에 주의가 필요하다.

:::info
Implicit Type Casting은 명시적 변환(`String()`, `Number()` 등)과 달리, 개발자가 의도하지 않은 타입 변환이 일어날 수 있어 코드의 의도를 흐릴 수 있다.
:::

### 변환의 주요 규칙

#### 1. 숫자와 문자열
- `+` 연산자는 문자열이 포함되면 문자열 연결로 동작한다.
```js
'5' + 3     // '53'
5 + '3'     // '53'
```
- `-`, `*`, `/`는 문자열을 숫자로 변환한다.
```js
'5' - 3     // 2
'5' * 2     // 10
'10' / '2'  // 5
```

#### 2. Boolean 변환
JavaScript에서는 다음 값을 **falsy**로 간주하며, 이외는 모두 **truthy**하다:
- `false`, `0`, `''`(빈 문자열), `null`, `undefined`, `NaN`

```js
Boolean(0)        // false
Boolean('hello')  // true
```

:::note
조건문이나 논리 연산에서 자동 형 변환이 자주 일어난다.
:::

#### 3. 객체와 원시값
객체가 원시값과 연산될 때, 객체는 `toString()` 또는 `valueOf()`를 통해 문자열이나 숫자로 변환된다.

```js
[1,2] + 3         // '1,23'
{} + []           // '[object Object]'
```

:::tip
배열이나 객체를 숫자나 문자열로 연산할 때는 의도한 결과인지 꼭 확인해야 한다.
:::

### 자주 혼동되는 사례

| 표현식       | 결과     | 설명                             |
|------------|----------|----------------------------------|
| `true + 1` | `2`      | `true` → `1`으로 변환             |
| `false + 1`| `1`      | `false` → `0`으로 변환            |
| `null + 1` | `1`      | `null` → `0`으로 변환             |
| `undefined + 1` | `NaN`| `undefined`는 숫자로 변환 불가    |

:::warning
`undefined`나 `NaN`이 포함된 연산은 `NaN`이 되기 때문에 연산 전 체크가 필요하다.
:::

## Reference

**link:** External reference
- [JavaScript Type Conversion - W3Schools](https://www.w3schools.com/js/js_type_conversion.asp)
- [Explain Typecasting in JavaScript - TutorialsPoint](https://www.tutorialspoint.com/explain-typecasting-in-javascript)
- [What You Need to Know About JavaScript's Implicit Coercion - Dev.to](https://dev.to/promisetochi/what-you-need-to-know-about-javascripts-implicit-coercion-e23)

**author note:** Related note in this repo
- [JavaScript - Explicit Type Castring](./Explicit_Type_Casting.md)