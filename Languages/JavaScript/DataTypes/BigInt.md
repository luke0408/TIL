# BigInt

## Summary
`BigInt`는 JavaScript에서 **정수(integer)를 임의의 정밀도로 표현**할 수 있도록 도입된 데이터 타입이다. 기존의 `Number` 타입은 **2^53 - 1**까지의 안전한 정수(`Number.MAX_SAFE_INTEGER`)만을 정확히 표현할 수 있었지만, `BigInt`를 사용하면 이 범위를 초과하는 큰 정수도 정확히 다룰 수 있다.

## Details

### BigInt의 필요성
- JavaScript의 `Number` 타입은 IEEE 754 표준의 **배정밀도 부동소수점**을 따른다.
  
- 이로 인해 `Number`는 `-(2^53 - 1)`부터 `2^53 - 1`까지만 정확히 표현 가능하다.
  
- **금융 계산**이나 **암호화** 등에서 더 큰 정수가 필요한 경우 `BigInt`가 유용하다.

### BigInt 생성 방법

1. **리터럴 표기법**:
   - 정수 리터럴 뒤에 **`n`**을 붙인다.
   ```javascript
   const bigNum = 123456789012345678901234567890n;
   ```

2. **BigInt 생성자 사용**:
   - 문자열 또는 숫자를 인자로 전달한다.
   ```javascript
   const bigNum = BigInt("123456789012345678901234567890");
   const anotherBigNum = BigInt(9007199254740991); // Number.MAX_SAFE_INTEGER
   ```

### BigInt의 특징

- `BigInt`는 **정수만** 표현할 수 있다. 소수점은 허용되지 않는다.
  ```javascript
  BigInt(10.5); // 오류 발생
  ```
  
- `BigInt`와 `Number` 타입 간의 **혼합 연산 불가**:
  ```javascript
  const big = 10n;
  const num = 5;
  console.log(big + num); // TypeError 발생
  ```

> [!TIP]
> 연산 전 **명시적 변환**이 필요하다:
> ```javascript
> console.log(big + BigInt(num)); // 정상 동작
> ```

- **비교 연산자**는 `Number`와 `BigInt` 간 비교 가능:
  ```javascript
  console.log(10n == 10);   // true (느슨한 비교)
  console.log(10n === 10);  // false (엄격한 비교)
  console.log(10n > 5);     // true
  ```

### 사용 가능한 연산자
- 산술 연산자(`+`, `-`, `*`, `/`, `%`) 사용 가능
  ```javascript
  const a = 100000000000000000000n;
  const b = 2n;
  console.log(a * b); // 200000000000000000000n
  ```

- **나눗셈 결과는 정수**로 반환된다.
  ```javascript
  console.log(5n / 2n); // 2n (소수점 이하 버림)
  ```

### BigInt와 JSON
- `JSON.stringify()` 사용 시 오류 발생
  ```javascript
  const big = 10n;
  JSON.stringify(big); // TypeError 발생
  ```
> [!TIP]
> BigInt를 문자열로 변환한 후 직렬화해야 한다:
> ```javascript
> JSON.stringify(big.toString()); // '"10"'
> ```

### 활용 예시
- **암호화 알고리즘**: RSA 키 계산 등에서 대규모 정수 연산에 사용
- **정밀 금융 계산**: 매우 큰 금액을 정확히 다뤄야 하는 금융 시스템에서 사용
- **고정 소수점 계산**: 소수점 처리를 직접 구현하여 정밀도를 보장할 때 사용

## Reference

**author note:** Related note in this repo

- [JavaScript - number](./Number.md)

**link:** External reference

- [MDN Web Docs - BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [ECMAScript BigInt Proposal](https://github.com/tc39/proposal-bigint)
