# Embedding Vector Basics: Dense, L2 Normalization, and Cosine Similarity

## Summary
- This note summarizes study-discussion insights (not a direct book summary).
- Embedding quality in modern systems is strongly tied to dense vectors, normalization, and cosine-based comparison.

## Details
- Embeddings represent meaning in multi-dimensional vectors.
- Dense vectors are preferred for practical embedding systems because all dimensions participate in representation.
- L2 normalization standardizes vector magnitude so similarity focuses on direction.
- Cosine similarity becomes a stable default metric when normalized vectors are used.
- Training intuition:
  - anchor/positive vectors are pulled closer,
  - anchor/negative vectors are pushed farther,
  - resulting space improves semantic retrieval.
- Related operations include vector averaging, arithmetic, and similarity-driven ranking.
- Operationally, this feeds directly into [Vector DB Architecture and Indexing](./RAG/vector_db_architecture_and_indexing_hnsw_ivf_pq.md).

## Reference
**issue**
- N/A

**link**
- N/A (study discussion notes)
