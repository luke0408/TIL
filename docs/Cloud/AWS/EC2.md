---
title: "Amazon Elastic Compute Cloud(Amazon EC2)"
description: "Amazon EC2는 AWS에서 가상 서버(인스턴스)를 만들고 보안과 네트워킹을 구성해 운영하는 클라우드 컴퓨팅 서비스다."
slug: /cloud/aws/ec2
created_at: "2025-02-07 07:49Z"
sidebar_position: 2
---
# Amazon Elastic Compute Cloud(Amazon EC2)

## Summary

EC2는 AWS에서 가상 서버를 빌려 쓰는 서비스다. AWS에서는 이 가상 서버를 인스턴스라고 부른다. 사용자는 CPU, 메모리, 스토리지, 네트워크 성능을 고르고, 운영체제 이미지를 정해 몇 분 안에 서버를 띄운다. 물리 서버를 사지 않고 필요한 만큼만 쓰고, 쓴 시간만큼 비용을 낸다.

## Details

### 인스턴스를 구성하는 요소

인스턴스 하나를 띄우려면 몇 가지를 함께 정해야 한다. AMI(Amazon Machine Image)는 운영체제와 기본 소프트웨어가 담긴 이미지이며, 인스턴스는 이 이미지를 복사해서 시작한다. 인스턴스 유형은 CPU와 메모리 같은 하드웨어 사양을 정한다. 디스크는 보통 EBS(Elastic Block Store) 볼륨을 붙여 쓴다. EBS는 네트워크로 연결된 블록 스토리지라서 인스턴스를 멈춰도 데이터가 남는다.

네트워크와 보안도 인스턴스를 만들 때 정한다. 인스턴스는 VPC의 서브넷 안에 놓이고, 보안 그룹이 들어오고 나가는 트래픽을 포트와 출발지 단위로 허용한다. 보안 그룹은 허용 규칙만 있고, 규칙에 없는 트래픽은 모두 막는다. SSH로 접속하려면 키 페어를 지정하거나, 키 없이 접속하는 Systems Manager Session Manager를 쓴다.

```sh
aws ec2 run-instances \
  --image-id ami-0123456789abcdef0 \
  --instance-type t3.micro \
  --key-name my-key \
  --subnet-id subnet-0123456789abcdef0 \
  --security-group-ids sg-0123456789abcdef0 \
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=web-1}]'
```

### 인스턴스 유형

인스턴스 유형 이름은 규칙을 따른다. `m7g.large`에서 `m`은 패밀리, `7`은 세대, `g`는 추가 속성(AWS Graviton 프로세서), `large`는 크기다. 같은 패밀리에서는 크기가 한 단계 커질 때마다 vCPU와 메모리가 대략 두 배가 된다. 세대가 높을수록 같은 가격에 성능이 좋은 경우가 많으므로, 특별한 이유가 없으면 최신 세대를 고른다.

| 분류 | 패밀리 예 | 적합한 워크로드 |
| --- | --- | --- |
| 범용 | `t`, `m` | 웹 서버, 일반 애플리케이션 |
| 컴퓨팅 최적화 | `c` | 배치 처리, 인코딩, 고성능 웹 서버 |
| 메모리 최적화 | `r`, `x` | 인메모리 캐시, 대용량 DB |
| 스토리지 최적화 | `i`, `d` | 로컬 디스크 I/O가 많은 DB, 분산 파일 시스템 |
| 가속 컴퓨팅 | `p`, `g`, `inf` | 머신러닝 학습·추론, 그래픽 처리 |

`t` 패밀리는 버스트 가능 인스턴스다. 평소에는 기준 성능 아래로 CPU를 쓰면서 크레딧을 모으고, 부하가 몰릴 때 크레딧을 써서 기준 이상으로 동작한다. CPU를 계속 높게 쓰는 서버에는 맞지 않는다.

### 인스턴스 수명 주기

인스턴스는 `pending` → `running` → `stopping` → `stopped` 또는 `shutting-down` → `terminated` 상태를 거친다. 중지(stop)는 서버를 끄는 것이다. EBS 볼륨은 남고 컴퓨팅 요금은 멈추지만, EBS 저장 요금은 계속 나간다. 종료(terminate)는 인스턴스를 삭제하는 것이다. 루트 EBS 볼륨은 기본 설정에서 함께 삭제된다. 인스턴스에 물리적으로 붙은 인스턴스 스토어 디스크는 중지하거나 종료하면 데이터가 사라진다.

### 요금 모델

| 모델 | 방식 | 맞는 경우 |
| --- | --- | --- |
| 온디맨드 | 약정 없이 쓴 시간만큼 지불 | 짧은 실험, 예측이 어려운 부하 |
| Savings Plans | 1년 또는 3년 동안 시간당 사용 금액을 약정하고 할인 | 꾸준히 쓰는 기본 부하 |
| 예약 인스턴스 | 1년 또는 3년 동안 특정 인스턴스 조건을 약정하고 할인 | 유형과 리전이 고정된 부하 |
| 스팟 인스턴스 | 남는 용량을 큰 할인으로 사용, AWS가 회수할 수 있음 | 중단되어도 되는 배치, CI, 분석 작업 |

스팟 인스턴스는 예전에는 입찰 방식이었지만 지금은 입찰하지 않는다. 가격은 수요와 공급에 따라 천천히 바뀐다. AWS가 용량을 회수할 때는 2분 전에 중단 알림을 보내므로, 스팟에서 도는 작업은 언제든 중단되고 다시 시작할 수 있게 만들어야 한다.

:::note

Linux 인스턴스의 온디맨드 요금은 초 단위로 계산하며 최소 과금 시간은 60초다.

:::

## Reference

**link:** External reference

- [Amazon EC2란 무엇인가요?](https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/concepts.html)
- [Amazon EC2 인스턴스 유형](https://aws.amazon.com/ec2/instance-types/)
- [Amazon EC2 instance type naming conventions](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html)
- [Spot Instance interruptions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html)
- [Amazon EC2 FAQ](https://aws.amazon.com/ko/ec2/faqs/)
