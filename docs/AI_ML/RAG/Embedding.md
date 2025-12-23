# RAG Embedding의 구조와 동작

## Summary
RAG 구조에서 Embedding은 텍스트를 고정 차원의 Vector로 변환하여 Vector Search가 가능하도록 만드는 핵심 단계이다.

이 과정은 **Tokenization → Numericalization → Vectorization**으로 구성되며, Embedding Model의 선택은 RAG 성능과 Vector DB 운용 구조에 직접적인 영향을 미친다. 

Embedding은 [RAG](./RAG.md)의 Retrieval 정확도, Query Matching 품질, 모델 호환성, 인프라 비용을 결정하는 주요 요소이기 때문에 올바른 이해가 필수적이다.

## Details

### 1) Embedding Pipeline의 구조
RAG에서 Embedding은 다음 세 단계로 구성된다.

**[1. Tokenization]**

텍스트를 Token 단위로 분해하여 모델이 처리할 수 있는 최소 단위로 변환한다.
Tokenizer는 모델별로 다르며 BPE(Byte Pair Encoding), WordPiece 등의 방식을 사용한다.

**[2. Numericalization (Vocabulary Mapping)]**

Token을 각 모델이 보유한 Vocabulary에 따라 정수 ID로 매핑한다.
같은 단어라도 모델마다 ID가 다르며, 이 단계에서 이미 모델 간 호환성이 갈린다.

**[3. Vectorization (Fixed-dimension Embedding)]**

길이가 일정하지 않은 Token ID 배열을 **고정 차원 Vector(예: 768, 1024, 1536)** 로 변환한다.
이 과정에서 짧은 Token Sequence는 Padding/확장되며, 긴 Sequence는 Truncation 또는 알고리즘 기반 축소 과정으로 처리한다.

:::info[INFO]
Embedding Model은 Tokenizer, Vocabulary, Vectorization 알고리즘을 모두 포함한 별도의 모델이며, GPT 같은 LLM과는 다른 전용 구조를 가진다.
:::

### 2) Embedding 길이 확장/축소의 동작 방식

**[Short → Long (확장)]**

Token 수가 Vector Dimension보다 작으면 내부적으로 Padding 또는 Projection을 통해 필요한 길이를 확보한다.

**[Long → Short (축소)]**

Token 수가 너무 길면 Truncation, Random Dropping, Attention 기반 Sampling 등 다양한 방법으로 Sequence를 줄인다.
Embedding 품질을 위해 단순 버리기보다는 모델 내부 알고리즘이 활용된다.

:::warning[WARNING]
길이가 긴 문서를 하나의 Embedding으로 처리하면 정보 손실이 매우 커지므로 Chunking은 필수이다.
:::

### 3) Embedding Model과 LLM의 차이
백엔드 관점에서 가장 중요한 차이는 다음과 같다.

| 구분 | Embedding Model | LLM(Language Model) |
|---|---|---|
| 목적 | 벡터 생성 | 텍스트 생성 |
| 입력/출력 | 텍스트 → Vector | 텍스트 → 텍스트 |
| Tokenizer | 모델별 상이 | 모델별 상이 |
| 호환성 | 모델 간 100% 불가 | 동일 계열에서도 일부 불가 |
| 사용 위치 | Retrieval 단계 | Generation 단계 |

Embedding Model
- 예: **BGE-small, all-MiniLM, text-embedding-3-large**

LLM 
- 예: **GPT, Claude, Gemini, Phi, HyperCLOVA**

### 4) Embedding Model 호환성 문제
Embedding Model은 tokenizer와 vocabulary가 모두 다르므로 모델을 바꾸면 기존 Vector DB는 완전히 무용지물이 된다.
다시 말해, Vector DB에 저장된 모든 document embedding을 처음부터 재생성해야 한다.

:::danger[DANGER]
*Embedding Model 변경 = Vector DB 전체 재생성*
대규모 RAG 시스템에서 이는 수백 GB 재처리가 되어 비용·시간이 심각하게 증가한다.
:::

### 5) RAG에서 Embedding Model 선택의 중요성
백엔드 엔지니어가 Embedding Model을 선택할 때 고려해야 할 요소는 다음과 같다.

1. **Vector Dimension 크기** (DB 저장 비용, 검색 속도에 영향)
2. **Tokenizer 품질** (한국어 여부 등 고려)
3. **Inference 속도** (서버/온프레미스 환경 고려)
4. **모델 안정성 및 장기 유지보수 여부**
5. **Semantic Search 정확도**
6. **Chunk 크기와 모델 limits**

:::tip[TIP]
엔터프라이즈급 서비스라면 초기 Embedding Model 선택이 시스템 수명 전체를 좌우하게 된다.
:::

### 6) Query Decomposition과 Embedding의 관계
사용자의 자연어 질문은 대부분 **컨텍스트 중심**이며, RAG DB는 **팩트 기반**이기 때문에 그대로 Embedding하면 매칭률이 대폭 낮아진다.

**[해결: Query Decomposition]**
질문을 LM이 다음과 같은 팩트 기반 Query로 재구성하도록 한다.

- “삼성 반도체 최근 실적 요약”
- “비메모리 분야 경쟁사 대비 Samsung 성과”

이렇게 변환해야 Embedding이 효과적으로 Vector DB와 일치한다.

:::note[NOTE]
Embedding 품질보다 Query Decomposition이 RAG 정확도에 더 큰 영향을 주는 경우가 많다.
:::

### 7) Embedding 기반 RAG 동작의 전체 흐름

1. **Document Chunking**
2. **Chunk Embedding → Vector DB에 저장**
3. **User Query → Query Decomposition**
4. **Query Embedding**
5. **Vector Search(KNN, cosine similarity 등)**
6. **Top-K Retrieval**
7. **LLM에게 Context Injection**
8. **Final Answer 생성**

이 중 **Embedding 단계**가 Retrieval의 정밀도·속도·비용을 결정한다.

## Reference
- [RAG를 통해 LLM을 꽃 피우게 하는 조연 ‘임베딩 모델’은 어떻게 흘러가고 있을까?](https://introduce-ai.tistory.com/entry/RAG%EB%A5%BC-%ED%86%B5%ED%95%B4-LLM%EC%9D%84-%EA%BD%83-%ED%94%BC%EC%9A%B0%EA%B2%8C%ED%95%98%EB%8A%94-%EC%A1%B0%EC%97%B0-%E2%80%98%EC%9E%84%EB%B2%A0%EB%94%A9-%EB%AA%A8%EB%8D%B8%E2%80%99%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%9D%98%EB%9F%AC%EA%B0%80%EA%B3%A0-%EC%9E%88%EC%9D%84%EA%B9%8C)
- [Understanding the Role of Embeddings in RAG & LLMs](https://coralogix.com/ai-blog/understanding-the-role-of-embeddings-in-rag-llms/)
- [Mastering RAG: How to Select an Embedding Model](https://galileo.ai/blog/mastering-rag-how-to-select-an-embedding-model)
- [뉴런데브 — Embedding 설명 영상](https://www.youtube.com/watch?v=k5Yianl5VeI&list=PLBNdLLaRx_rIOonq7AvNnjrYNVQqNsOY0&index=7)
