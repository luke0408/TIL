---
title: "RAG"
description: "RAG(Retrieval-Augmented Generation)는 외부 지식을 검색해 질의 문맥을 보강한 뒤, 그 보강된 입력으로 모델이 답변을 생성하도록 만드는 구조다. 이름 때문에 생성 단계 중심 기술로 오해하기 쉽지만, 실제 실무 가치는 생성."
slug: /ai_ml/rag
created_at: "2026-02-17 17:20+09:00"
sidebar_position: 1
---

# RAG

## Summary

RAG(Retrieval-Augmented Generation)는 외부 지식을 검색해 질의 문맥을 보강한 뒤, 그 보강된 입력으로 모델이 답변을 생성하도록 만드는 구조다. 이름 때문에 생성 단계 중심 기술로 오해하기 쉽지만, 실제 실무 가치는 생성 이전의 검색·정렬·문맥 구성 품질에서 대부분 결정된다.

## Details

RAG를 이해할 때 가장 먼저 잡아야 할 관점은 "LLM 성능 보정"이 아니라 "입력 품질 설계"다. 사용자의 질문이 들어오면 먼저 질문과 문서가 벡터 공간에서 비교 가능한 형태로 바뀌고, 관련 문서 조각이 검색되며, 그 결과를 기반으로 최종 프롬프트가 구성된다. 즉, LLM은 파이프라인의 마지막 단계에서만 호출되고, 앞단의 검색·결합 로직이 답변 신뢰도를 좌우한다.

:::info[핵심 관점]
RAG의 본질은 생성을 강화하는 기술이라기보다, 생성에 들어가기 전 "컨텍스트를 강화"하는 기술에 가깝다.
:::

구성 요소는 단순해 보이지만 서로 강하게 의존한다. 임베딩 품질이 낮으면 검색 후보가 흔들리고, 검색 후보가 불안정하면 컨텍스트 조합이 왜곡되며, 결국 생성 결과도 부정확해진다. 이 연결 구조는 [RAG Embedding의 구조와 동작](./Embedding.md), [벡터 인덱싱](./vector_db_architecture_and_indexing_hnsw_ivf_pq.md), [벡터 데이터 운영](./vector_db_data_operations_and_metadata_strategy.md)으로 이어서 보면 흐름이 명확해진다.

실무에서 RAG가 유용한 이유는 모델 재학습 없이도 최신 지식 반영이 가능하기 때문이다. 반대로 검색 품질, 청크 전략, 메타데이터 품질이 낮으면 기대한 성능을 얻기 어렵고 지연 시간도 쉽게 증가한다. 결국 운영 관점에서의 RAG는 "좋은 검색 + 좋은 문맥 구성 + 적절한 생성"의 균형 문제다.

:::warning[주의]
RAG를 도입했다고 자동으로 환각이 사라지지 않는다. 검색 품질과 문맥 구성 품질이 낮으면 오히려 잘못된 근거를 더 그럴듯하게 말하는 상황이 생길 수 있다.
:::

고급 단계에서는 질의 변환, 재정렬, 다중 벡터 표현, 그래프 기반 탐색 같은 기법을 붙여 정확도를 높인다. 다만 이 단계에서도 원칙은 같다. 기능을 많이 붙이는 것보다, 현재 데이터와 질의 패턴에 맞는 최소한의 파이프라인을 먼저 안정화하는 것이 전체 가독성과 운영 난이도 모두에서 유리하다.

## Reference

**link**
- [What is RAG? - V7 Labs](https://www.v7labs.com/blog/what-is-rag)
- [RAG Zero to Hero Guide – What is RAG?](https://github.com/KalyanKS-NLP/rag-zero-to-hero-guide/blob/main/RAG%20Basics/What_is_RAG.md)
