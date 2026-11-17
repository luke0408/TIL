---
title: "리팩터링 정의"
description: "리팩터링은 소프트웨어의 동작을 유지한 채 코드를 이해하고 수정하기 쉽게 바꾸는 작업이다."
slug: /devgeneral/refactoring/definition_of_refactoring
created_at: "2025-02-06 07:29Z"
sidebar_position: 2
---
# 리팩터링 정의

## Summary

리팩터링은 소프트웨어의 동작은 그대로 유지한 채, 코드를 이해하고 수정하기 쉽도록 내부 구조를 바꾸는 작업이다. 마틴 파울러에 따르면 리팩터링하는 동안 코드는 항상 정상 동작해야 하며, 그래서 언제든 작업을 멈출 수 있다.

## Details

리팩터링(refactoring)은 소프트웨어 공학에서 결과를 바꾸지 않고 코드 구조를 재조정하는 일을 뜻한다. 주된 목적은 가독성을 높이고 유지보수를 쉽게 하는 것이다. 버그를 고치거나 새 기능을 추가하는 일은 리팩터링이 아니다. 사용자가 보는 동작은 그대로 두고 내부 논리와 구조만 바꾼다.

### 마틴 파울러의 정의

리팩터링이라는 말은 개발자 사이에서 "코드 정리" 전반을 가리키는 느슨한 뜻으로 자주 쓰인다. 마틴 파울러는 이 말을 더 엄격하게 정의해서 쓸모 있게 만든다. 그는 명사와 동사를 나누어 정의한다.

> 리팩터링: [명사] 소프트웨어의 겉보기 동작은 그대로 유지한 채, 코드를 이해하고 수정하기 쉽도록 내부 구조를 변경하는 기법

함수 추출하기, 조건부 로직을 다형성으로 바꾸기처럼 이름이 붙은 개별 기법이 명사 정의에 해당한다.

> 리팩터링(하다): [동사] 소프트웨어의 겉보기 동작은 그대로 유지한 채, 여러 가지 리팩터링 기법을 적용해서 소프트웨어를 재구성하다.

즉 코드를 정리하는 모든 작업이 리팩터링은 아니다. 동작을 보존하는 작은 단계를 쌓아 가는 특정한 방식으로 코드를 정리하는 것만 리팩터링이다. 각 단계가 끝날 때마다 코드는 정상 동작하므로, 전체 작업이 끝나지 않았더라도 언제든 멈출 수 있다. 코드가 며칠 동안 깨진 상태로 있었다면 그것은 리팩터링이 아니라 재구성(restructuring)이다.

### 예시: 함수 추출하기

아래 코드는 주문 내역을 출력하면서 합계도 함께 계산한다.

```js
function printOwing(invoice) {
  let outstanding = 0;
  console.log('***** 고객 채무 *****');

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
}
```

합계 계산을 함수로 추출하면 `printOwing`은 "무엇을 출력하는가"만 드러낸다. 출력 결과는 이전과 같다.

```js
function printOwing(invoice) {
  console.log('***** 고객 채무 *****');
  const outstanding = calculateOutstanding(invoice);
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, o) => sum + o.amount, 0);
}
```

이 변경은 작고, 테스트로 동작이 같은지 바로 확인할 수 있다. 리팩터링은 이런 단계를 여러 번 쌓아서 큰 구조 변화를 만든다.

### 성능 최적화와의 차이

성능 최적화도 동작을 바꾸지 않고 코드를 고친다는 점에서 리팩터링과 비슷하다. 하지만 목적이 다르다. 리팩터링의 목적은 코드를 이해하고 수정하기 쉽게 만드는 것이다. 성능 최적화의 목적은 속도나 메모리 사용을 개선하는 것이며, 그 결과 코드가 더 읽기 어려워질 수도 있다.

## Reference

**link**: 관련 개념 노트

- [리팩터링의 필요성](./Reasons_for_Refactoring.md)
- [언제 리팩터링해야 할까?](./When_to_Refactoring.md)
- [두개의 모자](../Principle/Two_Hats.md)

**link:** External reference

- [위키피디아: 리팩터링](https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81)
- [Refactoring 2nd Edition](https://product.kyobobook.co.kr/detail/S000001810241)
- [Refactoring catalog - refactoring.com](https://refactoring.com/catalog/)
