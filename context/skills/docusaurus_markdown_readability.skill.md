# Skill: docusaurus_markdown_readability

## Goal
Docusaurus에서 지원하는 Markdown 기능을 사용하되, 최우선 기준은 항상 가독성으로 둔다.

## Readability-First Principles
1. 기능 사용 가능성보다 읽기 흐름을 우선한다.
2. 같은 정보를 더 단순한 문법으로 표현할 수 있으면 단순한 문법을 선택한다.
3. 장식적 기능(JSX/복잡한 HTML)은 학습 전달력이 올라갈 때만 사용한다.

## Recommended Feature Usage (Docusaurus)
- Headings: `#`, `##`, `###`로 문서 구조를 명확히 나눈다.
- Emphasis: `**bold**`, `_italic_`는 핵심 강조에만 제한적으로 사용한다.
- Links/Images: 기본 Markdown 링크/이미지를 사용한다.
- Code blocks: 예시는 fenced code block(언어 지정)으로 제공한다.
- Blockquotes: 인용문/원문 발췌에만 사용한다.
- Front matter: 문서 상단 YAML 메타데이터(`title`, `description`, `sidebar_position`)를 사용한다.
- Details (`<details>`): 본문 흐름을 방해하는 부가 설명을 접어둘 때만 사용한다.

## Use With Caution
- Raw HTML/JSX(MDX): UI적 이점이 명확할 때만 사용한다.
- 중첩 구조(중첩 리스트, 중첩 details)는 최소화한다.

## Preferred Note Skeleton
```md
---
title: <짧은 개념 제목>
description: <한 줄 설명>
sidebar_position: <숫자>
---

# <짧은 개념 제목>

## Summary
<줄글 중심으로 개요를 작성>

## Details
<줄글 중심으로 핵심 설명>

## Reference (optional)
**issue**
- <필요한 경우만>

**link**
- <필요한 경우만>
```

## Anti-Patterns
- 리스트만 연속으로 배치해 문서가 체크리스트처럼 보이게 작성하지 않는다.
- 가독성 향상 효과 없는 MDX/HTML 기능을 과도하게 추가하지 않는다.
- 본문보다 시각 효과에 집중하지 않는다.
