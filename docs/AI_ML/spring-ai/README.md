---
title: "Spring AI"
description: "AI Application은 AI 모델을 활용해 실제 서비스를 구현하는 응용 시스템이다. 이러한 시스템은 Front-End, Back-End(API Server), AI 모델의 유기적 상호작용으로 구성되며, 이를 효율적으로 통합하기 위해 Spring."
slug: /ai_ml/spring-ai
created_at: "2026-02-17 17:28+09:00"
sidebar_position: 1
---

# Spring AI

## Summary

AI Application은 AI 모델을 활용해 실제 서비스를 구현하는 응용 시스템이다. 이러한 시스템은 Front-End, Back-End(API Server), AI 모델의 유기적 상호작용으로 구성되며, 이를 효율적으로 통합하기 위해 Spring AI와 같은 프레임워크가 사용된다. Spring AI는 Java 및 Spring Boot 환경에서 LLM과의 통합을 단순화하고, 엔터프라이즈급 AI 응용 서비스를 개발할 수 있도록 지원한다.

## Details

### AI Application의 구성 요소
AI Application은 AI 모델을 중심으로 다양한 계층이 상호작용하며 동작한다.

| 구성 요소 | 역할 |
|------------|------|
| **Front-End (Web/App)** | 사용자의 입력을 수집하고, AI의 응답을 시각화함. 입력은 텍스트, 이미지, 영상 등 다양한 형태로 존재함. |
| **Back-End (API Server)** | AI Agent로서 핵심 역할 수행. 프롬프트 생성, 도구 호출, 멀티모달 데이터 처리, 추론 결과 기록을 담당함. |
| **AI Model (LLM)** | 클라우드 또는 온프레미스 환경에서 실행되며, Back-End의 요청에 따라 추론과 응답을 수행함. |

:::note[핵심]
Back-End는 단순한 API 서버가 아니라 AI 모델을 조정하고 외부 시스템을 제어하는 AI Agent의 중심이다.
:::

### AI Agent의 개념
AI Agent는 AI 모델을 활용해 특정 목적을 수행하는 응용 시스템을 의미한다. 예를 들어 챗봇형, 가상비서형, 자율형 서비스로 구현할 수 있다. 일반적으로 REST API 형태로 구성되며, 입력 전처리, 프롬프트 구성, 모델 호출, 결과 후처리의 흐름으로 동작한다.

### 프레임워크의 필요성
AI Application 개발에서는 데이터 흐름과 모델 연동 코드가 빠르게 복잡해지고, 대화 메모리·문서 검색·도구 호출 같은 기능을 재사용하기 어려워진다. Python 생태계에서는 LangChain이, Java 생태계에서는 Spring AI가 이 문제를 다루기 위한 대표 프레임워크로 자리 잡았다.

### Spring AI란?
Spring AI는 LLM을 Java 생태계에 통합하기 위한 Spring 프로젝트다. Spring Boot 자동 구성과 익숙한 Bean 기반 개발 모델을 활용해 모델 연동 코드를 단순화하고, RAG·메모리·Tool Calling 같은 기능을 서비스 코드와 자연스럽게 결합할 수 있게 한다.

구체적인 모델 호출 인터페이스는 [ChatModel](./ChatModel.md) 노트에서 이어서 볼 수 있다.

:::tip[정리]
Spring AI의 핵심 가치는 단순 API 호출 편의성보다, 엔터프라이즈 환경에서 AI 기능을 일관되게 운영 가능한 구조로 만드는 데 있다.
:::

## Reference

**link**
- [AI 애플리케이션 개발의 기초와 Spring AI 소개 (한빛미디어)](https://www.hanbit.co.kr/channel/view.html?cmscode=CMS8021447288)
- [뉴런데브 - 스프링AI 1. AI프로젝트 구성 (YouTube)](https://www.youtube.com/watch?v=6YObwWmTUEo)
