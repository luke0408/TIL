---
title: "Pulumi 개요"
description: "Pulumi 개요 개념을 정리한 노트입니다."
slug: /devops/pulumi
sidebar_position: 1
---

# Pulumi 개요

## Summary

Pulumi는 인프라를 선언형 DSL이 아닌 일반 프로그래밍 언어로 관리할 수 있게 해주는 IaC 도구다. TypeScript, Python, Go, .NET 등 익숙한 언어 문법을 그대로 사용해 리소스를 정의할 수 있기 때문에, 인프라 코드와 애플리케이션 코드의 사고 방식을 자연스럽게 연결하기 좋다.

## Details

Pulumi를 이해할 때 중요한 지점은 "코드를 작성한다"가 아니라 "코드 실행 결과로 인프라 상태를 수렴시킨다"는 관점이다. 사용자가 작성한 프로그램은 리소스 선언을 만들고, CLI는 현재 상태와 목표 상태를 비교해 변경 계획을 계산한 뒤 실제 클라우드 API 호출로 반영한다. 이 흐름을 안정적으로 운영하려면 상태(state) 관리 전략이 핵심이며, 로컬 백엔드와 원격 백엔드 선택은 팀 협업 방식에 직접 영향을 준다.

Pulumi의 실제 구성 단위는 [Project](./Project.md)와 [Stack](./Stack.md)으로 나뉜다. Project는 인프라 코드의 논리적 단위이고, Stack은 같은 코드를 서로 다른 환경 값으로 실행하는 배포 단위다. 보통 dev/stage/prod를 Stack으로 분리해 운영하며, 이때 설정값과 비밀값 관리 방식을 먼저 합의해 두는 것이 장기 운영에서 중요하다.

:::tip[실무 관점]
Pulumi의 장점은 언어 친화성이 아니라, 재사용 가능한 인프라 모듈을 애플리케이션 개발 흐름과 같은 방식으로 관리할 수 있다는 점에서 더 크게 드러난다.
:::

멀티 클라우드나 Kubernetes까지 확장해도 기본 원리는 같다. 변경 계획을 검토하고, 상태를 일관되게 유지하며, 환경별 차이를 Stack으로 통제한다. 도구 선택 자체보다 이 운영 원칙을 지키는 것이 장애를 줄이고 배포 신뢰도를 높이는 데 더 큰 영향을 준다.

## Reference

**link**
- [Pulumi 공식 문서: How Pulumi Works](https://www.pulumi.com/docs/iac/concepts/how-pulumi-works/)
