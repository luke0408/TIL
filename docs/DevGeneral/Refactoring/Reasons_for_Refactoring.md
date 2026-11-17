---
title: "리팩터링의 필요성"
description: "리팩터링은 코드를 건강한 상태로 유지하는 중요한 개발 활동이다. 소프트웨어의 설계 개선, 코드 이해도 향상, 버그 발견 용이성 증가, 그리고 전반적인 개발 속도 향상에 기여한다."
slug: /devgeneral/refactoring/reasons_for_refactoring
created_at: "2025-02-07 09:24Z"
sidebar_position: 3
---
# 리팩터링의 필요성

## Summary

리팩터링은 코드를 건강한 상태로 유지하는 중요한 개발 활동이다. 소프트웨어의 설계 개선, 코드 이해도 향상, 버그 발견 용이성 증가, 그리고 전반적인 개발 속도 향상에 기여한다.

## Details

### 소프트웨어 설계 개선 효과

코드의 아키텍처가 무너지는 것을 방지하고 설계를 개선하는 효과가 있다. 중복 코드를 제거하여 모든 코드가 고유한 일을 수행하도록 보장하며, 이는 바람직한 설계의 핵심이 된다.

### 코드 이해도 향상

프로그래밍은 컴퓨터와의 대화이지만, 코드를 읽는 쪽은 컴퓨터만이 아니다. 몇 달 뒤 그 코드를 고칠 개발자(자기 자신 포함)도 읽는다. 그래서 의도와 코드 표현의 차이를 최소화해야 한다. 리팩터링으로 코드를 이해하기 쉽게 만들면 다음 사람이 코드를 파악하는 시간이 줄어든다.

```js
// 리팩터링 전: 숫자와 조건의 의미를 알아내야 한다
if (user.age >= 19 && Date.now() - user.joinedAt > 2592000000) {
  grantCoupon(user);
}

// 리팩터링 후: 의도가 이름에 드러난다
const ADULT_AGE = 19;
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

const isAdult = user.age >= ADULT_AGE;
const isLongTermMember = Date.now() - user.joinedAt > THIRTY_DAYS_MS;

if (isAdult && isLongTermMember) {
  grantCoupon(user);
}
```

두 코드의 동작은 같다. 하지만 두 번째 코드는 주석 없이도 "성인이면서 가입한 지 30일이 지난 회원에게 쿠폰을 준다"는 규칙이 읽힌다.

### 버그 발견 용이성

코드의 구조를 명확하게 다듬으면서 프로그램의 동작을 더 깊이 이해하게 된다. 이 과정에서 버그를 쉽게 발견할 수 있으며, 코드의 의도가 명확해져 버그를 놓치기 어려워진다.

### 개발 속도 향상과 설계 지구력

내부 설계가 잘 된 소프트웨어는 다음과 같은 이점이 있다:

- 모듈화가 잘 되어 새로운 기능의 작성 포인트를 쉽게 찾을 수 있다
- 명확한 코드로 인해 버그 발생 가능성이 줄어든다
- 버그가 발생하더라도 디버깅이 용이하다

마틴 파울러는 이를 '설계 지구력 가설(Design Stamina Hypothesis)'이라 부르며, 내부 설계에 투자하면 소프트웨어의 개발 속도를 높은 상태로 오래 유지할 수 있다고 설명한다.

설계에 신경 쓰지 않으면 초기에는 빠르게 기능을 추가할 수 있다. 하지만 코드가 쌓일수록 새 기능을 어디에 넣어야 할지, 기존 코드에 어떤 영향을 줄지 파악하는 시간이 늘어난다. 결국 같은 크기의 기능을 추가하는 데 점점 더 오래 걸린다. 반대로 리팩터링으로 설계를 꾸준히 개선하면 시간이 지나도 기능 추가 속도가 크게 떨어지지 않는다. 파울러는 두 곡선이 만나는 지점이 생각보다 빨리, 보통 몇 주 안에 온다고 본다.

> [!NOTE]
> 이 주장은 측정으로 증명된 법칙이 아니라 경험에서 나온 가설이다. 파울러도 그래서 "가설"이라는 이름을 붙였다.

## Reference

**link**: 관련 개념 노트

- [리팩터링 정의](./Definition_of_Refactoring.md)
- [언제 리팩터링해야 할까?](./When_to_Refactoring.md)
- [두개의 모자](../Principle/Two_Hats.md)

**link:** External reference

- [리팩터링 (Refactoring) - 마틴 파울러](https://martinfowler.com/books/refactoring.html)
- [Design Stamina Hypothesis - Martin Fowler](https://martinfowler.com/bliki/DesignStaminaHypothesis.html)
