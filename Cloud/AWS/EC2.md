# Amazon Elastic Compute Cloud(Amazon EC2)
<!-- 
TIL을 작성할 때에는 해당 노트의 제목과 관련한 내용만 작성합니다.
추가적인 개념을 설명할 필요가 있다면, 해당 개념에 대한 노트를 새롭게 작성합니다.
이후 해당 개념 노트를 Reference에 링크합니다.

ex) 버블 정렬에 대해 설명하기 위해, Array 자료형을 설명해야할 경우 -> Array 노트 생성
-->

## Summary
<!-- A brief overview of the topic. -->

EC2는 Amazon Web Services(AWS)의 클라우드 컴퓨팅 서비스를 의미한다. EC2 인스턴스(가상 서버)를 빌드하고 보안 및 네트워킹을 구성하여 관리하는 등 개발자가 보다 쉽게 클라우드 컴퓨팅을 할 수 있도록 설계되었다.

## Details
<!--
  Detailed explanation of the topic.
  Additional information and examples.
-->

### 주요 특징

Amazon EC2는 다음의 대략적인 기능을 제공한다.

- 인스턴스 유형, 운영체제, 소프트웨어 패키지를 선택하여 사용할 수 있다.
- 필요에 따라 컴퓨팅 파워를 조정할 수 있다.
- 사용한 용량만큼만 비용을 지불한다.
- 보안 및 네트워크 구성이 가능하다.

### 인스턴스 유형
- 범용(t2, m5): 균형잡힌 컴퓨팅, 메모리, 네트워크 리소스를 제공한다.
- 컴퓨팅 최적화(c5): CPU 성능이 중요한 애플리케이션에 적합하다.
- 메모리 최적화(r5): 대규모 데이터셋을 처리하는 애플리케이션에 적합하다.
- 스토리지 최적화(i3, d2): 대규모 데이터의 순차적 읽기/쓰기 접근에 최적화되었다.

### 요금 모델
- 온디맨드: 선결제 금액이나 장기 약정 없이 사용한 만큼 지불한다.
- 예약 인스턴스: 1년 또는 3년 약정으로 할인된 가격에 이용한다.
- 스팟 인스턴스: 미사용 EC2 용량을 경매 방식으로 저렴하게 이용한다.


## Reference
<!-- 사용하지 않는 레퍼런스 종류는 삭제 후 업로드 -->

**link:** External reference
- [Amazon EC2란 무엇인가요?](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/concepts.html)
- [Amazon EC2 FAQ](https://aws.amazon.com/ko/ec2/faqs/)
- [Amazon EC2](https://aws.amazon.com/ec2/)
- [EC2 인스턴스 유형](https://aws.amazon.com/ec2/instance-types/)