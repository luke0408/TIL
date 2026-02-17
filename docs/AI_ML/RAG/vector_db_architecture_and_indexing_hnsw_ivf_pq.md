# Vector DB Architecture and Indexing (HNSW, IVF, PQ)

## Summary
- This note summarizes study-discussion insights (not a direct book summary).
- Vector DB design is a balance between recall quality, latency, and resource efficiency.

## Details
- Vector DB options usually fall into:
  - extensions on existing databases,
  - or dedicated vector-native engines.
- Main trade-off:
  - integrated systems simplify metadata/transaction usage,
  - dedicated engines provide stronger ANN optimization.
- ANN indexing is required because exact high-dimensional search is too expensive at scale.
- Common index families:
  - HNSW: graph-based proximity navigation
  - IVF: coarse partition first, refine later
  - PQ: compressed representation for faster approximate search
- Important caution:
  - index choice and data distribution must be validated together,
  - speed improvements can reduce retrieval fidelity if uncalibrated.
- Conceptually grounded by [Embedding Vector Basics](../embedding_vector_basics_dense_l2_cosine_similarity.md).

## Reference
**issue**
- N/A

**link**
- N/A (study discussion notes)
