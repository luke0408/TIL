# Merge Sort

## Summary

Merge Sort는 Divide and Conquer 전략을 기반으로 한 정렬 알고리즘이다. 데이터를 반으로 나눈 뒤 각각 정렬하고, 이를 다시 합치는 과정을 재귀적으로 반복하여 전체를 정렬한다.

## Details

### 개념 설명

Merge Sort는 다음 3단계를 반복하여 정렬을 수행한다.

1. **Divide** – 배열을 반으로 나눈다.
2. **Conquer** – 나눈 배열 각각을 재귀적으로 Merge Sort로 정렬한다.
3. **Combine** – 두 정렬된 배열을 병합(merge)하여 하나의 정렬된 배열로 만든다.

:::tip Merge Sort는 항상 O(n log n)의 시간복잡도를 보장하며, 안정 정렬(stable sort)이다. :::

### 알고리즘 동작 예시

예: `[38, 27, 43, 3, 9, 82, 10]`

1. 분할: `[38, 27, 43]` 와 `[3, 9, 82, 10]`
2. 다시 분할: `[38] [27, 43]` / `[3, 9] [82, 10]`
3. 정렬: `[27, 43] → [27, 43]`, `[82, 10] → [10, 82]`
4. 병합:
   - `[38] + [27, 43] → [27, 38, 43]`
   - `[3, 9] + [10, 82] → [3, 9, 10, 82]`
5. 최종 병합: `[27, 38, 43] + [3, 9, 10, 82] → [3, 9, 10, 27, 38, 43, 82]`

### 시간 및 공간 복잡도

| 경우         | 시간 복잡도 |
| ------------ | ----------- |
| 최선 (Best)  | O(n log n)  |
| 평균 (Avg)   | O(n log n)  |
| 최악 (Worst) | O(n log n)  |

- **공간 복잡도**: O(n) – 병합을 위한 임시 배열 필요

:::info Quick Sort와는 달리 Merge Sort는 항상 O(n log n)의 성능을 보장하지만, 추가적인 메모리가 필요하다. :::

### 구현 예시 (TypeScript)

```ts
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  // 양쪽 배열을 비교하여 더 작은 값을 결과에 추가
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // 남은 요소들을 결과에 추가
  return result.concat(left.slice(i)).concat(right.slice(j));
}
```

:::note 이 구현은 `number[]` 배열을 다루지만, 제네릭 타입 `<T>`과 비교 함수 `compareFn`을 활용하여 확장할 수 있다. :::

### 장단점 비교

| 장점                            | 단점                               |
| ------------------------------- | ---------------------------------- |
| 최악의 경우에도 O(n log n) 보장 | 추가 메모리 공간 필요              |
| 안정 정렬 (stable sort)         | 구현이 복잡할 수 있음              |
| Linked List 정렬에 적합         | 작은 데이터에선 비효율적일 수 있음 |

## Reference

**link:** External reference

- [Programiz - Merge Sort](https://www.programiz.com/dsa/merge-sort)
- [GeeksForGeeks - Merge Sort](https://www.geeksforgeeks.org/dsa/merge-sort/)
