# JavaScript Map

## Summary
`Map` 객체는 키-값 쌍을 저장하고 관리하기 위해 사용하는 JavaScript의 내장 객체이다. 객체(Object)와 달리 키의 자료형에 제한이 없으며 삽입 순서를 유지한다.

## Details

### Map의 특징
- 키로 모든 값(객체, 원시값 등)을 사용할 수 있다.
- 삽입한 순서를 기억하여 순회한다.
- 크기를 쉽게 확인할 수 있다(`size` 프로퍼티).

:::note
`Object`는 키로 문자열과 심볼만 허용한다. 반면 `Map`은 객체를 포함한 모든 값을 키로 사용할 수 있다.
:::

### Map 생성과 초기화
`Map` 객체는 `new Map()`으로 생성한다. 생성 시 `[키, 값]` 쌍의 배열을 인자로 전달하여 초기화할 수 있다.

```javascript
const map = new Map([
  ['name', 'Luke'],
  ['age', 30]
]);

console.log(map.size); // 2
````

### 주요 메서드

#### `set(key, value)`

키와 값을 쌍으로 저장한다. 같은 키가 있으면 값을 덮어쓴다.

```javascript
map.set('job', 'developer');
```

#### `get(key)`

지정한 키의 값을 반환한다.

```javascript
console.log(map.get('name')); // 'Luke'
```

#### `has(key)`

해당 키가 존재하는지 확인한다.

```javascript
console.log(map.has('age')); // true
```

#### `delete(key)`

해당 키의 엔트리를 제거한다.

```javascript
map.delete('job');
```

#### `clear()`

모든 엔트리를 제거한다.

```javascript
map.clear();
```

### Map 순회

`Map`은 `for...of` 문이나 `forEach`로 순회할 수 있다.

```javascript
for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

:::tip
`Map`의 `keys()`, `values()`, `entries()` 메서드를 사용하여 각각 키, 값, 키-값 쌍의 반복자를 얻을 수 있다.
:::

### Object와 Map 비교

| 비교 항목 | Object                    | Map        |
| ----- | ------------------------- | ---------- |
| 키 자료형 | 문자열, 심볼만                  | 모든 자료형     |
| 키 순서  | 삽입 순서 보장 안됨               | 삽입 순서 유지   |
| 크기 확인 | `Object.keys(obj).length` | `map.size` |
| 성능    | 빈번한 추가/삭제에 비효율적           | 더 최적화됨     |

:::info
빈번한 키-값 쌍의 추가/삭제/순회가 필요한 경우 `Map`을 사용하는 것이 성능상 유리하다.
:::

## Reference

**link:** External reference

* [MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
* [JavaScript.info - Map](https://javascript.info/map-set#map)