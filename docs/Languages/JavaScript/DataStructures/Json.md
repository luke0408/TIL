# JSON in JavaScript

## Summary

JavaScript Object Notation(JSON)은 데이터를 저장하거나 전송할 때 사용하는 텍스트 기반 포맷이다. JavaScript의 객체 문법과 유사하지만, 언어에 독립적인 형식으로 다양한 환경에서 널리 사용된다.

## Details

### JSON의 정의와 특징

JSON은 JavaScript 객체에서 유래한 데이터 형식으로, 사람이 읽고 쓰기 쉽고 기계가 분석하고 생성하기 쉬운 포맷이다. 다음과 같은 특징을 가진다:

- **텍스트 기반 포맷**으로, 네트워크를 통해 데이터를 전송할 때 적합하다.
- **키-값 쌍**으로 구성된 데이터 구조를 가진다.
- JavaScript 문법과 유사하지만, JSON은 엄격한 규칙을 따른다.

:::info JSON의 key는 반드시 **큰따옴표("")로 감싸야 하며**, value로는 문자열, 숫자, 배열, 객체, boolean, null만 사용할 수 있다. :::

### JSON과 JavaScript 객체의 차이점

| 항목               | JavaScript Object     | JSON                     |
| ------------------ | --------------------- | ------------------------ |
| Key                | 따옴표 없이 사용 가능 | 반드시 큰따옴표("") 사용 |
| Function 포함 여부 | 함수 포함 가능        | 함수 포함 불가           |
| Date 표현          | Date 객체로 표현 가능 | 문자열로 표현 필요       |

### JSON 파일의 예시

실제 `.json` 파일은 다음과 같은 형태로 구성된다:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com",
      "isActive": true
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@example.com",
      "isActive": false
    }
  ]
}
```

:::tip .json 파일은 일반 텍스트 형식이며, data.json 같은 파일명으로 저장하여 사용할 수 있다. 많은 API에서 .json 포맷을 응답으로 사용한다. :::

### JSON.stringify()

JavaScript 객체를 JSON 문자열로 변환할 때 사용한다.

```js
const user = {
  name: 'Alice',
  age: 30,
  isMember: true,
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// 출력: {"name":"Alice","age":30,"isMember":true}
```

:::note `undefined`, 함수, 심볼 등은 JSON.stringify로 변환할 수 없으며, 해당 속성은 누락된다. :::

### JSON.parse()

JSON 문자열을 JavaScript 객체로 변환할 때 사용한다.

```js
const jsonStr = '{"name":"Alice","age":30,"isMember":true}';

const userObj = JSON.parse(jsonStr);
console.log(userObj.name);
// 출력: Alice
```

:::caution 잘못된 JSON 형식을 파싱하려고 하면 `SyntaxError`가 발생하므로, 외부 입력을 파싱할 때는 `try...catch` 문을 사용하는 것이 좋다. :::

### JSON의 실전 활용

- 서버에서 받아온 데이터를 처리할 때 API 응답(JSON 형식)을 파싱하여 사용한다.
- 로컬스토리지에 데이터를 저장할 때 객체를 JSON 문자열로 변환하여 저장한다.
- 다양한 프로그래밍 언어 간 데이터를 주고받을 때 공통 포맷으로 사용된다.

## Reference

**link:** External reference

- [MDN - JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
