# JavaScript에서 Number 타입의 문제점

## Summary

JavaScript의 `Number` 타입은 IEEE 754 부동 소수점 표준을 기반으로 동작하며, 정밀도 문제, 안전한 정수 범위, 연산 오류 등의 한계를 가지고 있다. 이를 이해하고 적절한 대처법을 적용하는 것이 중요하다.

## Details

### Number 타입 개요

- JavaScript에서 `Number` 타입은 **64비트 IEEE 754 배정도 부동 소수점 형식**을 사용한다.
- 정수와 실수를 구분하지 않고 동일한 `Number` 타입으로 관리된다.

```javascript
console.log(typeof 10); // 'number'
console.log(typeof 10.5); // 'number'
```

### 정밀도 문제

- JavaScript의 `Number` 타입은 소수를 정확하게 표현하지 못하는 경우가 많다.
- 이는 IEEE 754 부동 소수점 표준에서 **이진수 변환 시 발생하는 오차** 때문이다.

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

#### **왜 0.1 + 0.2가 0.3이 아닌가?**

- 0.1과 0.2는 이진수로 정확하게 표현될 수 없는 값이다.
- 실제 내부 저장 방식은 다음과 같다.
  - `0.1` ≈ `0.00011001100110011001100110011001100110011001100110011... (2진수)`
  - `0.2` ≈ `0.0011001100110011001100110011001100110011001100110011... (2진수)`
- 이진수 연산 결과가 정확히 0.3이 되지 않기 때문에 오차가 발생한다.

### 안전한 정수 범위

JavaScript의 `Number` 타입은 **안전한 정수(Safe Integer)** 를 다음 범위 내에서만 정확하게 표현할 수 있다.

![Image](https://github.com/user-attachments/assets/d45aee2d-e1ca-46bb-9dd8-fcd289b26406)

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

이 범위를 벗어나면 연산 결과가 부정확할 수 있다.

```javascript
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992 (잘못된 결과)
```

### 연산 오류

부동 소수점 연산에서 발생하는 오류 중 하나는 **0과 -0의 구분**이다.

```javascript
console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity
```

`-0`과 `0`은 비교 연산에서는 같지만, 연산 결과는 다를 수 있다.

### 해결 방법

#### **1. BigInt 사용**

- `BigInt`는 정수를 안전하게 표현하는 별도의 데이터 타입이다.
- `n`을 붙여서 `BigInt` 타입으로 변환할 수 있다.

```javascript
console.log(9007199254740991n + 2n); // 9007199254740993n
```

- 단, `BigInt`는 `Number`와 혼합해서 사용할 수 없다.

```javascript
console.log(10n + 5); // TypeError: Cannot mix BigInt and other types
```

#### **2. 라이브러리 활용**

- 부동 소수점 오차를 방지하기 위해 `decimal.js`, `big.js`, `bignumber.js`와 같은 라이브러리를 사용할 수 있다.

```javascript
const Big = require('big.js');
console.log(new Big(0.1).plus(0.2).toString()); // "0.3"
```

## Reference

**issue**: Related issue in this repo

- [JavaScript의 number는 왜 0과 -0을 지원하는가?](https://github.com/luke0408/TIL/issues/3)

**author note**: Related note in this repo

- [JavaScript - number](./Number.md)
- [IEEE 754 Floating Point](../../../DevGeneral/IEEE/IEEE_754_Floating_Point.md)

**link:** External reference

- [MDN Web Docs: Number](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [ECMAScript Number 객체](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-number-objects)
- [What Every Computer Scientist Should Know About Floating-Point Arithmetic (David Goldberg, 1991)](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)
- [The Floating-Point Guide](https://floating-point-gui.de/)
