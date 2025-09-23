# IEEE 754 Floating Point

## Summary

IEEE 754는 대부분의 현대적인 컴퓨팅 시스템에서 사용하는 부동 소수점 연산 표준이다. 이 표준은 부동 소수점 숫자가 어떻게 표현되고, 저장되며, 연산되는지를 정의한다.

## Details

### IEEE 754 개요

- IEEE 754는 1985년에 제정된 부동 소수점 연산을 위한 표준이다.
- JavaScript, Python, Java, C 등 다양한 프로그래밍 언어에서 사용된다.
- 일반적으로 사용되는 두 가지 표현 방식이 있다.
  - **단정도(single precision, 32비트)**
  - **배정도(double precision, 64비트)** → JavaScript는 배정도 방식을 사용함.

### IEEE 754 64비트 부동 소수점 구조

IEEE 754의 **64비트 배정도(double precision)** 부동 소수점 숫자는 다음과 같은 구조를 가진다.

| 비트 수 | 구성 요소 | 설명 |
|---------|---------|------------------------------------|
| 1비트  | 부호(Sign) | 0이면 양수, 1이면 음수 |
| 11비트 | 지수(Exponent) | 1023을 기준으로 지수를 저장 |
| 52비트 | 가수(Fraction, Mantissa) | 숫자의 유효 숫자(significant digits) |

![Image](https://github.com/user-attachments/assets/efffecb3-534d-478f-8a93-d9f0f729f607)

부동 소수점 수의 값은 다음 공식으로 계산된다.

![Image](https://github.com/user-attachments/assets/e42dab7f-2340-4f6a-ba1e-cb4e0d14ead4)

### 0과 -0이 존재하는 이유

IEEE 754는 부호 비트를 사용하여 `0`과 `-0`을 구분한다.

- `0` → **부호 비트:** `0`, **지수:** `00000000000`, **가수:** `0000000000000000000000000000000000000000000000000000`
- `-0` → **부호 비트:** `1`, **지수:** `00000000000`, **가수:** `0000000000000000000000000000000000000000000000000000`

이 차이는 연산 결과에서 중요한 영향을 미칠 수 있다.

```javascript
console.log(1 / 0);  // Infinity
console.log(1 / -0); // -Infinity
```

### IEEE 754의 정밀도 문제

IEEE 754는 숫자를 **이진수(binary)** 로 변환하여 저장하기 때문에, 일부 소수(decimal fraction)는 정확히 표현되지 않는다. 이로 인해 정밀도 오류가 발생한다.

```javascript
console.log(0.1 + 0.2);  // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

이러한 문제는 0.1과 0.2가 이진수로 정확하게 표현될 수 없기 때문에 발생한다.

## Reference

**issue**: Related issue in this repo
- [JavaScript의 number는 왜 0과 -0을 지원하는가?](https://github.com/luke0408/TIL/issues/3)

**link:** External reference
- [MDN Web Docs: IEEE 754](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [ECMAScript® 2025 Language Specification](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-number-objects)