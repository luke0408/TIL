---
title: "벡터 인덱싱"
description: "벡터 DB는 완전탐색 대신 HNSW, IVF, PQ 같은 ANN 인덱스로 검색하며, 인덱스 선택은 정확도, 지연 시간, 메모리 사이의 균형 문제다."
slug: /ai_ml/rag/vector_db_architecture_and_indexing_hnsw_ivf_pq
created_at: "2026-02-17 17:20+09:00"
sidebar_position: 3
---
# 벡터 인덱싱

## Summary

벡터 DB는 질의 벡터와 가장 가까운 벡터를 찾는 저장소다. 데이터가 많아지면 모든 벡터와 거리를 계산하는 완전탐색은 너무 느리다. 그래서 정확도를 조금 포기하고 속도를 얻는 근사 최근접 이웃(ANN, Approximate Nearest Neighbor) 인덱스를 쓴다. 대표 방식은 HNSW, IVF, PQ이고, 각 방식은 정확도, 지연 시간, 메모리 사용량을 다르게 교환한다.

이 노트는 스터디 토론 내용을 바탕으로 정리했다.

## Details

### 확장형과 전용형

벡터 DB는 크게 두 유형으로 나눌 수 있다. 확장형은 기존 DB에 벡터 검색 기능을 붙인 형태다. PostgreSQL의 pgvector, Elasticsearch와 OpenSearch의 kNN 검색이 여기에 속한다. 벡터와 일반 컬럼을 같은 트랜잭션으로 저장하고, 조인과 필터를 그대로 쓸 수 있다. 백업과 모니터링 같은 기존 운영 도구도 재사용할 수 있다.

전용형은 벡터 검색만을 위해 만든 엔진이다. Milvus, Qdrant, Weaviate, Pinecone이 여기에 속한다. ANN 인덱스 종류와 양자화 옵션이 많고, 분산 처리로 대규모 데이터에서 성능을 내기 쉽다. 대신 원본 데이터와 저장소가 나뉘므로 둘 사이의 동기화를 따로 관리해야 한다. 데이터 규모가 수백만 건 이하이고 이미 관계형 DB를 쓰고 있다면 확장형으로 시작하는 경우가 많다.

### 완전탐색의 한계

완전탐색(flat 또는 brute-force 검색)은 질의 벡터를 저장된 모든 벡터와 비교한다. 결과는 항상 정확하지만, 비용이 데이터 수와 차원 수에 비례한다. 768차원 벡터 1천만 개를 검색하면 질의 하나에 곱셈이 약 77억 번 필요하다. 그래서 대규모 검색에서는 ANN 인덱스가 사실상 필수다. ANN의 정확도는 보통 recall@k로 잰다. recall@k는 완전탐색의 상위 k개 결과 중 ANN이 찾은 비율이다.

### HNSW

HNSW(Hierarchical Navigable Small World)는 그래프 기반 인덱스다. 벡터를 노드로 두고 가까운 노드끼리 간선으로 잇는다. 그래프는 여러 층으로 되어 있다. 위층에는 노드가 적고 먼 거리를 잇는 간선이 있고, 아래층으로 갈수록 노드가 많고 연결이 촘촘하다. 검색은 맨 위층에서 질의와 가까운 쪽으로 이동하며 시작하고, 한 층씩 내려가며 범위를 좁힌다.

주요 파라미터는 노드당 이웃 수 `M`, 빌드 시 후보 수 `ef_construction`, 검색 시 후보 수 `ef_search`다. 값을 키우면 recall이 올라가지만 메모리와 시간이 더 든다. HNSW는 recall과 속도가 모두 좋아서 기본 선택지로 많이 쓰인다. 단점은 그래프 전체를 메모리에 두어야 해서 메모리 사용량이 크고, 빌드가 느리며, 삭제가 많으면 그래프 품질이 떨어진다는 것이다.

### IVF

IVF(Inverted File Index)는 군집 기반 인덱스다. 먼저 k-means로 벡터를 `nlist`개 군집으로 나누고, 각 벡터를 가장 가까운 군집 중심에 등록한다. 검색할 때는 질의와 가까운 군집 `nprobe`개만 골라 그 안의 벡터만 비교한다.

IVF는 HNSW보다 메모리를 적게 쓰고 빌드가 빠르다. 대신 군집 중심을 학습해야 하므로, 데이터 분포가 크게 바뀌면 다시 학습해야 한다. 또 정답 벡터가 군집 경계 근처에 있으면 탐색하지 않은 군집에 들어가 놓칠 수 있다. `nprobe`를 늘리면 이 손실이 줄지만 검색이 느려진다.

### PQ

PQ(Product Quantization)는 탐색 방식이 아니라 압축 방식이다. 벡터를 `m`개의 부분 벡터로 나누고, 각 부분 벡터를 미리 학습한 코드북에서 가장 가까운 대표값의 번호로 바꾼다. 코드북 크기가 256이면 번호 하나가 1바이트다. 예를 들어 768차원 float32 벡터는 3,072바이트지만, `m=96`으로 압축하면 96바이트가 된다. 거리 계산도 부분 벡터별 거리표를 미리 만들어 두고 더하기만 하므로 빠르다.

PQ는 손실 압축이므로 정확도가 떨어진다. 그래서 PQ로 후보를 넓게 뽑은 다음 원본 벡터로 다시 정렬(rerank)하는 방식을 자주 쓴다. 실무에서는 IVF로 탐색 범위를 줄이고 PQ로 메모리를 줄이는 IVF-PQ 조합이 대규모 데이터에서 많이 쓰인다.

```python
import faiss

d = 768
quantizer = faiss.IndexFlatL2(d)                     # 군집 중심을 찾는 기본 인덱스
index = faiss.IndexIVFPQ(quantizer, d, 1024, 96, 8)  # nlist=1024, m=96, 부분당 8비트

index.train(train_vectors)  # 군집 중심과 PQ 코드북 학습
index.add(vectors)
index.nprobe = 16           # 질의마다 탐색할 군집 수
distances, ids = index.search(query_vectors, 10)
```

### 방식 비교

| 방식 | 원리 | 정확도 | 메모리 | 주요 파라미터 | 주의할 점 |
| --- | --- | --- | --- | --- | --- |
| Flat | 모든 벡터와 비교 | 100% | 원본 크기 | 없음 | 데이터가 많으면 느림 |
| HNSW | 계층형 그래프 탐색 | 높음 | 원본보다 큼 | `M`, `ef_search` | 메모리 사용량, 삭제 |
| IVF | 군집 일부만 탐색 | 중간~높음 | 원본과 비슷 | `nlist`, `nprobe` | 학습 필요, 경계 손실 |
| IVF-PQ | 군집 + 압축 | 중간 | 아주 작음 | `nlist`, `nprobe`, `m` | 재정렬 필요 |

### pgvector에서 인덱스 만들기

확장형인 pgvector는 HNSW와 IVF(`ivfflat`)를 지원한다. 인덱스를 만들 때 거리 지표를 연산자 클래스로 정하고, 검색 시 정확도와 속도의 균형을 세션 변수로 조정한다.

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id        bigserial PRIMARY KEY,
  content   text,
  embedding vector(768)
);

-- HNSW: 코사인 거리 기준
CREATE INDEX ON documents USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);
SET hnsw.ef_search = 100;  -- 기본값 40, 키우면 recall 상승

-- IVF: 데이터를 넣은 뒤에 만들어야 군집이 제대로 학습된다
CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 1000);
SET ivfflat.probes = 32;   -- 시작값으로 sqrt(lists) 정도를 권장

-- <=> 는 코사인 거리 연산자
SELECT id, content
FROM documents
ORDER BY embedding <=> $1
LIMIT 5;
```

### 인덱스 선택

인덱스는 벤치마크 수치만 보고 고르면 안 된다. 같은 인덱스도 데이터 분포와 차원 수에 따라 결과가 달라진다. 실제 데이터와 질의로 recall@k, p95/p99 지연 시간, 메모리 사용량, 빌드 시간을 함께 측정해야 한다. 속도만 보고 파라미터를 낮추면 검색 품질이 조용히 떨어지고, RAG에서는 이것이 답변 품질 저하로 나타난다. 메타데이터 필터를 함께 쓰면 인덱스 성능이 다시 달라지는데, 이 부분은 [벡터 데이터 운영](./vector_db_data_operations_and_metadata_strategy.md)에서 다룬다.

인덱스가 비교하는 벡터와 거리 지표의 기초는 [임베딩 벡터](../embedding_vector_basics_dense_l2_cosine_similarity.md)에서 다룬다.

## Reference

**link**

- [Efficient and robust approximate nearest neighbor search using HNSW graphs - arXiv](https://arxiv.org/abs/1603.09320)
- [Faiss indexes - Faiss Wiki](https://github.com/facebookresearch/faiss/wiki/Faiss-indexes)
- [Hierarchical Navigable Small Worlds (HNSW) - Pinecone](https://www.pinecone.io/learn/series/faiss/hnsw/)
- [Product Quantization - Pinecone](https://www.pinecone.io/learn/series/faiss/product-quantization/)
- [pgvector - GitHub](https://github.com/pgvector/pgvector)
