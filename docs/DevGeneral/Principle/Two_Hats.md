# 두개의 모자

<!--
TIL을 작성할 때에는 해당 노트의 제목과 관련한 내용만 작성합니다.
추가적인 개념을 설명할 필요가 있다면, 해당 개념에 대한 노트를 새롭게 작성합니다.
이후 해당 개념 노트를 Reference에 링크합니다.

ex) 버블 정렬에 대해 설명하기 위해, Array 자료형을 설명해야할 경우 -> Array 노트 생성
-->

## Summary

> As software is developed by making behavioral and structural changes, do not attempt to do both at the same time. <br></br> Wear one hat to add new capabilities (including tests) without changing existing code, then wear the other hat to restructure the code without changing behavior.

## Details

켄트 백은 개발의 목적 분리 작업을 두 개의 모자에 비유한다.

기능을 추가할 때는 "기능 추가" 모자를 쓴 다음 **기존 코드는 절대 건드리지 않고 새 기능을 추가**하기만 한다. 진척도는 테스트를 추가해서 통과하는지 확인하는 방식으로 진행한다.

또한, 리팩터링을 할 때에는 "리팩터링" 모자를 쓴 다음 **기능 추가는 절대 하지 않기로 다짐한 뒤 오로지 코드 재구성**에만 전념합니다. 이때는 앞 과정에서 놓친 테스트 케이스를 발견한게 아닌 이상 테스트를 추가하지 않는다.

이러한 각각의 작업시간은 10분 미만으로 짧을 수 있다. 그럼에도 마틴 파울러는 그의 저서 [리팩터링](https://product.kyobobook.co.kr/detail/S000001810241)에서 항상 내가 쓰고 있는 모자가 무엇인지와 그에 따른 미묘한 작업 방식의 차이를 분명하게 인지할 것을 권장한다.

## Reference

<!-- 사용하지 않는 레퍼런스 종류는 삭제 후 업로드 -->

**author note:** Related note in this repo

- [리팩터링 정의](../Refactoring/Definition_of_Refactoring.md)
- [리팩터링의 필요성](../Refactoring/Reasons_for_Refactoring.md)
- [언제 리팩터링해야 할까?](../Refactoring/When_to_Refactoring.md)

**link:** External reference

- [Refactoring 2nd Edtion](https://product.kyobobook.co.kr/detail/S000001810241)
