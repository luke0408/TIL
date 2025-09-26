# 숫자형 (number)

## Summary

모던 자바스크립트는 숫자를 나타내는 주요 자료형으로 IEEE-754 64비트 배정밀도 부동소수점 형식을 사용한다. 또한, `BigInt`를 사용하여 매우 큰 정수를 다룰 수 있다.

## Details

### 숫자를 입력하는 다양한 방법

:::note
큰 숫자를 표현할 때 `e` 표기법을 사용하면 가독성이 향상된다.
:::

```js
let billion = 1e9;  // 10억
alert( 7.3e9 );  // 73억
```

작은 숫자 표현에도 `e`를 사용할 수 있다.

```js
let ms = 1e-6; // 0.000001
```

### 다양한 진법 표현

:::tip
자바스크립트는 16진수, 8진수, 2진수를 직접 지원한다.
:::

```js
alert( 0xff ); // 255 (16진수)
alert( 0b11111111 ); // 255 (2진수)
alert( 0o377 ); // 255 (8진수)
```

또한 `toString(base)` 메서드를 이용하면 원하는 진법으로 변환할 수 있다.

```js
let num = 255;
alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

### 어림수 구하기

:::info
소수를 다룰 때는 `Math` 객체의 어림수 함수들을 활용한다.
:::

| 함수              | 설명      |
| --------------- | ------- |
| `Math.floor(x)` | 내림 (버림) |
| `Math.ceil(x)`  | 올림      |
| `Math.round(x)` | 반올림     |
| `Math.trunc(x)` | 소수부 제거  |

```js
alert( Math.floor(3.7) ); // 3
alert( Math.ceil(3.1) );  // 4
alert( Math.round(3.5) ); // 4
alert( Math.trunc(3.9) ); // 3
```

소수점 n번째 자리까지 반올림하려면 `toFixed(n)`을 사용한다.

```js
let num = 12.345;
alert( num.toFixed(2) ); // "12.35"
```

### 부정확한 계산

:::warning
자바스크립트는 부동소수점 연산에서 정밀도 손실이 발생할 수 있다.
:::

```js
alert( 0.1 + 0.2 == 0.3 ); // false
alert( 0.1 + 0.2 ); // 0.30000000000000004
```

해결 방법:

```js
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3
```

### 숫자 변환

`parseInt`와 `parseFloat`를 사용하면 숫자 변환이 가능하다.

```js
alert( parseInt("100px") ); // 100
alert( parseFloat("12.5em") ); // 12.5
```

진법을 지정하여 변환할 수도 있다.

```js
alert( parseInt("ff", 16) ); // 255
```

### 기타 수학 함수

:::tip
`Math` 객체를 활용하면 다양한 수학 연산을 수행할 수 있다.
:::

```js
alert( Math.random() ); // 0과 1 사이의 난수
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.pow(2, 10) ); // 1024
```

## Reference

**author note:** Related note in this repo

- [JavaScript - bigInt](./BigInt.md)

**link:** External reference

- [MDN - Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [JavaScript.info - number](https://ko.javascript.info/number)
