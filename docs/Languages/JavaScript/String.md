# 문자열 (String)

## Summary

JavaScript에서 문자열은 글자 하나만 저장할 수 있는 별도의 자료형 없이, 텍스트 데이터 전체를 다룰 수 있다. 문자열은 항상 UTF-16 형식을 따르며, 다양한 따옴표 방식과 특수 문자를 활용할 수 있다.

## Details

### 따옴표의 종류

JavaScript에서 문자열을 정의할 때 사용할 수 있는 따옴표에는 세 가지 종류가 있다.

```javascript
let single = '작은따옴표';
let double = '큰따옴표';
let backticks = `백틱`;
```

:::tip 

백틱( `` )을 사용하면 템플릿 리터럴(template literal)을 활용하여 문자열 중간에 표현식을 삽입할 수 있다. 

:::

```javascript
function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}`); // "1 + 2 = 3"
```

백틱을 사용하면 여러 줄에 걸친 문자열도 쉽게 작성할 수 있다.

```javascript
let guestList = `손님:
 * John
 * Pete
 * Mary`;
console.log(guestList);
```

### 특수 문자

JavaScript에서는 줄 바꿈이나 따옴표 등을 문자열에 포함하기 위해 **이스케이프 문자(escape character)**를 사용할 수 있다.

| 특수 문자  | 설명                 |
| ---------- | -------------------- |
| `\n`       | 줄 바꿈              |
| `\r`       | 캐리지 리턴          |
| `\'`, `\"` | 따옴표               |
| `\\`       | 역슬래시             |
| `\t`       | 탭                   |
| `\uXXXX`   | UTF-16 유니코드 문자 |

```javascript
console.log("I'm a developer."); // I'm a developer.
console.log('Hello\nWorld'); // 줄 바꿈
```

:::note 

역슬래시 `\`는 문자열 내에서 **특수 문자**를 나타내기 위한 기호로 사용된다. 

:::

### 문자열 길이

문자열의 길이는 `.length` 속성을 사용하여 확인할 수 있다.

```javascript
console.log('Hello'.length); // 5
```

### 문자열 내 특정 문자 접근

문자열의 특정 위치에 있는 문자에 접근하려면 `[]` 또는 `charAt()`을 사용할 수 있다.

```javascript
let str = 'Hello';
console.log(str[0]); // "H"
console.log(str.charAt(0)); // "H"
```

:::info 

문자열은 **불변(immutable)** 이므로 중간의 글자를 직접 수정할 수 없다. 

:::

### 대·소문자 변경

```javascript
console.log('JavaScript'.toUpperCase()); // "JAVASCRIPT"
console.log('JavaScript'.toLowerCase()); // "javascript"
```

### 문자열 검색

| 메서드                  | 설명                                   |
| ----------------------- | -------------------------------------- |
| `indexOf(substr, pos)`  | 특정 문자열의 위치를 반환 (없으면 -1)  |
| `includes(substr, pos)` | 특정 문자열이 포함되었는지 여부를 반환 |
| `startsWith(substr)`    | 해당 문자열로 시작하는지 여부를 반환   |
| `endsWith(substr)`      | 해당 문자열로 끝나는지 여부를 반환     |

```javascript
let str = 'Widget with id';
console.log(str.includes('Widget')); // true
console.log(str.startsWith('Wid')); // true
console.log(str.endsWith('id')); // true
```

### 부분 문자열 추출

| 메서드                  | 설명                                       |
| ----------------------- | ------------------------------------------ |
| `slice(start, end)`     | `start`부터 `end`까지 추출 (음수 허용)     |
| `substring(start, end)` | `start`부터 `end`까지 추출 (음수는 0 처리) |
| `substr(start, length)` | `start`부터 `length`개의 문자 추출         |

```javascript
let str = 'stringify';
console.log(str.slice(0, 5)); // "strin"
console.log(str.substring(2, 6)); // "ring"
console.log(str.substr(2, 4)); // "ring"
```

:::warning 

`substr`는 최신 JavaScript 표준에서 비권장(Deprecated)으로 간주되므로 `slice`를 사용하는 것이 좋다. 

:::

### 문자열 비교

문자열 비교 시 기본적으로 **유니코드 코드 포인트** 기준으로 비교가 이루어진다.

```javascript
console.log('a' > 'Z'); // true
console.log('Österreich' > 'Zealand'); // true
```

**문자열을 언어에 맞게 비교하려면 `localeCompare()`를 사용한다.**

```javascript
console.log('Österreich'.localeCompare('Zealand')); // -1
```

### 기타 문자열 메서드

| 메서드      | 설명                             |
| ----------- | -------------------------------- |
| `trim()`    | 앞뒤 공백 제거                   |
| `repeat(n)` | 문자열을 `n`번 반복              |
| `replace()` | 특정 문자열을 다른 문자열로 교체 |

```javascript
let text = '   Hello World!   ';
console.log(text.trim()); // "Hello World!"
console.log('Hello '.repeat(3)); // "Hello Hello Hello "
```

## Reference

**link:** External reference

- [JavaScript Info - String](https://ko.javascript.info/string)
- [MDN - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
