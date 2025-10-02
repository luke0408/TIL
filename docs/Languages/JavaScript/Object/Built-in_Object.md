# JavaScript Built-in Object 개요

## Summary

JavaScript의 built-in object는 언어 자체에서 기본적으로 제공하는 객체들로, 개발자가 별도로 정의하지 않아도 사용할 수 있다. 이러한 객체들은 데이터 처리, 수학 연산, 날짜 관리, 문자열 조작 등 다양한 기능을 제공하며, JavaScript의 기본적인 로직 구현에 핵심적인 역할을 한다.

## Details

### Built-in Object의 범주

JavaScript의 built-in object는 크게 다음과 같은 범주로 나눌 수 있다:

| 분류 | 주요 객체 | 설명 |
| --- | --- | --- |
| 기본 자료형 래퍼 객체 | `String`, `Number`, `Boolean`, `BigInt`, `Symbol` | 기본 자료형 값을 객체처럼 사용할 수 있도록 래핑하는 객체들 |
| 수학 및 날짜 | `Math`, `Date` | 수학 계산 및 날짜/시간 처리 기능 제공 |
| 컬렉션 | `Array`, `Set`, `Map`, `WeakSet`, `WeakMap` | 자료 구조로 데이터를 저장하고 다루는 객체 |
| 구조화된 데이터 | `Object`, `JSON` | 일반 객체 및 JSON 처리에 사용 |
| 에러 처리 | `Error`, `TypeError`, `ReferenceError` 등 | 예외 처리에 사용되는 다양한 오류 객체들 |
| 정규 표현식 | `RegExp` | 문자열에서 패턴을 찾고 조작하는 데 사용 |
| 기타 유틸리티 | `Function`, `Promise`, `Intl`, `Reflect`, `Proxy` 등 | 함수 정의, 비동기 처리, 국제화, 메타프로그래밍 등 다양한 용도 |

:::tip 대부분의 built-in object는 prototype 기반으로 설계되어 있어, 메서드를 상속하거나 커스터마이징할 수 있다. :::

### 전역 객체(Global Object)와의 관계

- JavaScript에서 제공하는 built-in object들은 모두 **전역 객체(Global Object)**의 속성이다.
- 브라우저 환경에서는 전역 객체가 `window`이며, `window.Math`, `window.Array`와 같이 접근 가능하다.
- Node.js 환경에서는 `global` 객체가 전역 객체의 역할을 한다.

### 동작 방식

- built-in object는 JS 엔진에 의해 실행 환경이 초기화될 때 생성된다.
- 사용자가 생성자를 통해 인스턴스를 만들 수도 있고, 일부 객체(`Math`, `JSON` 등)는 인스턴스를 만들지 않고 바로 사용할 수 있다.

```js
const now = new Date(); // Date 객체 인스턴스 생성
const random = Math.random(); // Math는 인스턴스를 만들지 않고 바로 사용
```

### 주의점: 확장 vs 오염

- JavaScript는 유연한 언어이므로 built-in 객체의 프로토타입을 확장할 수 있다.
- 그러나 **프로토타입 오염(prototype pollution)**은 예기치 않은 부작용을 일으킬 수 있어 주의가 필요하다.

```js
Array.prototype.last = function () {
  return this[this.length - 1];
};

[1, 2, 3].last(); // 3
```

:::caution 타인이 사용하는 라이브러리와 충돌할 가능성이 있으므로, 프로덕션 코드에서의 built-in object 확장은 매우 신중히 해야 한다. :::

### 최신 추가 객체

ES6 이후 다음과 같은 객체들이 추가되었다:

- `Promise`: 비동기 처리를 위한 객체
- `Map`, `Set`: 키-값 구조 또는 중복 없는 데이터 구조
- `Symbol`, `BigInt`: 새로운 기본형과 관련 객체
- `Reflect`, `Proxy`: 메타프로그래밍을 위한 객체

:::note 최신 객체는 기존 객체로는 표현하기 어려웠던 고급 기능들을 다룰 수 있도록 설계되었다. :::

## Reference

**link:** External reference

- [MDN: JavaScript Global Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [Tutorialride: JavaScript Built-in Objects](https://www.tutorialride.com/javascript/javascript-built-in-objects.htm#google_vignette)
- [javascript.info: Native Prototypes](https://ko.javascript.info/extend-natives)
