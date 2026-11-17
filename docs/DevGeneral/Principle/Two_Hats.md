---
title: "두개의 모자"
description: "두 개의 모자는 기능 추가와 리팩터링을 동시에 하지 않고, 한 번에 한 가지 작업만 하라는 원칙이다."
slug: /devgeneral/principle/two_hats
created_at: "2025-02-06 09:05Z"
sidebar_position: 3
---
# 두개의 모자

## Summary

> As software is developed by making behavioral and structural changes, do not attempt to do both at the same time. <br></br> Wear one hat to add new capabilities (including tests) without changing existing code, then wear the other hat to restructure the code without changing behavior.

두 개의 모자는 동작을 바꾸는 작업과 구조를 바꾸는 작업을 한 번에 하나씩만 하라는 원칙이다. 켄트 벡이 처음 쓴 비유이며, 마틴 파울러가 『리팩터링』에서 소개했다.

## Details

### 두 모자의 규칙

"기능 추가" 모자를 쓰면 기존 코드는 건드리지 않고 새 기능만 추가한다. 진행 상황은 테스트를 추가하고 그 테스트가 통과하는지로 확인한다.

"리팩터링" 모자를 쓰면 기능은 추가하지 않고 코드 구조만 바꾼다. 앞 단계에서 놓친 테스트 케이스를 발견한 경우가 아니면 테스트도 추가하지 않는다. 리팩터링 중에는 기존 테스트가 계속 통과해야 하며, 그것이 동작을 바꾸지 않았다는 증거가 된다.

### 왜 섞으면 안 되는가

두 작업을 섞으면 테스트가 실패했을 때 원인을 가릴 수 없다. 새 기능이 아직 덜 만들어져서 실패한 것인지, 구조를 바꾸다가 기존 동작을 망가뜨린 것인지 알 수 없다. 반대로 한 번에 한 모자만 쓰면 판단 기준이 명확하다. 리팩터링 중에 테스트가 깨지면 방금 바꾼 구조가 원인이고, 기능 추가 중에 테스트가 깨지면 새 코드가 원인이다.

코드 리뷰와 이력 관리에도 같은 이점이 있다. 구조 변경 커밋과 동작 변경 커밋을 나누면 리뷰어는 구조 변경 커밋에서 "동작이 같은가"만 확인하면 된다. 문제가 생겼을 때도 원인 커밋만 골라 되돌리기 쉽다.

### 예시

할인 금액 계산에 회원 등급별 할인을 추가해야 한다고 하자. 기존 코드는 할인율이 함수 안에 흩어져 있다.

```js
// 기존 코드
function finalPrice(order) {
  let price = order.quantity * order.itemPrice;
  if (order.quantity > 100) price -= price * 0.05;
  return price;
}
```

먼저 리팩터링 모자를 쓰고 할인 계산을 별도 함수로 뽑는다. 이 단계에서는 결과가 바뀌면 안 되므로 기존 테스트만 돌린다.

```js
// 커밋 1: refactor - 동작 변경 없음
function finalPrice(order) {
  const base = order.quantity * order.itemPrice;
  return base - discount(order, base);
}

function discount(order, base) {
  return order.quantity > 100 ? base * 0.05 : 0;
}
```

그 다음 기능 추가 모자로 바꿔 쓰고 등급 할인을 추가한다. 새 테스트를 함께 추가한다.

```js
// 커밋 2: feat - 등급 할인 추가
function discount(order, base) {
  const volume = order.quantity > 100 ? base * 0.05 : 0;
  const member = order.grade === 'gold' ? base * 0.03 : 0;
  return volume + member;
}
```

이처럼 모자를 바꾸는 시간은 10분이 안 될 수도 있다. 그래도 파울러는 지금 어떤 모자를 쓰고 있는지, 그 모자에 따라 작업 방식이 어떻게 다른지를 항상 의식하라고 권한다.

## Reference

**link**: 관련 개념 노트

- [리팩터링 정의](../Refactoring/Definition_of_Refactoring.md)
- [리팩터링의 필요성](../Refactoring/Reasons_for_Refactoring.md)
- [언제 리팩터링해야 할까?](../Refactoring/When_to_Refactoring.md)

**link:** External reference

- [Refactoring 2nd Edition](https://product.kyobobook.co.kr/detail/S000001810241)
