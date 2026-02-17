---
title: "벡터 인덱싱"
description: "벡터 인덱싱 개념을 정리한 노트입니다."
slug: /ai_ml/rag/vector_db_architecture_and_indexing_hnsw_ivf_pq
created_at: "2026-02-17 17:20+09:00"
sidebar_position: 3
---
# 벡터 인덱싱

## Summary
- 이 노트는 스터디 토론에서 나온 인사이트를 정리한 내용입니다.
- 벡터 DB 설계는 정확도, 지연 시간, 자원 효율 사이의 균형 문제입니다.

## Details
- 벡터 DB는 기존 DB 확장형과 전용 엔진형으로 나눌 수 있습니다.
- 확장형은 기존 메타데이터/트랜잭션과 결합이 쉽고, 전용형은 ANN 최적화가 강합니다.
- 대규모 검색에서는 완전탐색이 어려워 ANN 인덱싱이 사실상 필수입니다.
- 대표 방식:
  - HNSW: 그래프 기반 근접 탐색
  - IVF: 거친 군집 후 세부 탐색
  - PQ: 압축 표현으로 빠른 근사 비교
- 인덱스 선택은 데이터 분포와 함께 검증해야 하며, 속도 향상만 보면 검색 품질이 떨어질 수 있습니다.
- 기반 개념은 [임베딩 벡터](../embedding_vector_basics_dense_l2_cosine_similarity.md)에서 이어집니다.
