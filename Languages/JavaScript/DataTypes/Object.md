# JavaScript의 객체 (Object)

## Summary
JavaScript에서 객체(Object)는 키(key)와 값(value)로 구성된 데이터 구조로, 다양한 정보를 저장하고 조작할 수 있다. 객체는 프로퍼티를 가지며, 메서드를 포함할 수 있다. 객체를 다루는 방법과 관련된 주요 개념을 정리한다.

## Details

### 객체 (Object)
객체는 여러 값을 하나의 단위로 그룹화하여 저장할 수 있는 데이터 구조이다.

```javascript
let user = {
    name: "Alice",
    age: 25,
    isAdmin: false
};
```

> [!IMPORTANT]
> 상수 객체는 수정될 수 있다.
> 
>
> ```javascript
> const user = {
>   name: "John"
> };
> 
> user.name = "Pete"; // (*)
> 
> alert(user.name); // Pete
> ```
>
> (*) 로 표기된 줄이 오류를 이르키는 것 처럼 보일 수 있지만 그렇지 않다. `const`는 `user`의 값을 고정하지만, 그 내용을 고정하지 않는다.
> 
> 즉, `user=...` 처럼 user 전체를 수정하는 건 방지하지만, 예제처럼 내용의 수정은 방지하진 못한다.

#### 프로퍼티 값 변경 및 추가
```javascript
user.age = 26; // 기존 프로퍼티 값 변경
user.city = "Seoul"; // 새로운 프로퍼티 추가
```

#### 프로퍼티 삭제
```javascript
delete user.isAdmin;
console.log(user.isAdmin); // undefined
```

### 대괄호 표기법
- 프로퍼티 이름이 변수로 정해지는 경우 대괄호 표기법을 사용해야 한다.
- 동적인 키를 사용하거나 특수 문자, 공백이 포함된 키를 사용할 때 유용하다.

```javascript
let fruit = "apple";
let bag = { [fruit]: 5 }; 
console.log(bag.apple); // 5
```

### 계산된 프로퍼티 (Computed Property)
대괄호 표기법을 사용하면 프로퍼티 이름을 동적으로 설정할 수 있다.

```javascript
let fruit = "banana";
let bag = {
    [fruit + "Count"]: 10
};
console.log(bag.bananaCount); // 10
```

### 단축 프로퍼티 (Property Shorthand)
변수명을 그대로 객체 프로퍼티로 사용할 수 있다.

```javascript
function makeUser(name, age) {
    return { name, age }; // { name: name, age: age }의 단축 표현
}
let user = makeUser("Alice", 25);
console.log(user.name); // "Alice"
```

### 프로퍼티 이름의 제한
- 일반적으로 문자열 또는 심볼 값이 가능하다.
- 예약어도 프로퍼티 이름으로 사용할 수 있지만 권장되지 않는다.

```javascript
let obj = {
    "for": 1,
    "let": 2
};
console.log(obj.for); // 1
```

### ‘in’ 연산자
객체에 특정 프로퍼티가 존재하는지 확인하는 데 사용된다.

```javascript
console.log("name" in user); // true
console.log("height" in user); // false
```

### for...in 반복문
객체의 모든 열거 가능한 프로퍼티를 순회하는 데 사용된다.

```javascript
let user = { name: "Alice", age: 25, isAdmin: true };
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
// 출력:
// name: Alice
// age: 25
// isAdmin: true
```

### 객체 정렬 방식
객체의 키는 숫자형인 경우(정수 프로퍼티) 자동으로 정렬되며,
문자열 키는 입력 순서를 유지한다.

```javascript
let mixedKeys = {
    "50": "fifty",
    "2": "two",
    "apple": "fruit",
    "banana": "fruit"
};

console.log(Object.keys(mixedKeys)); // ["2", "50", "apple", "banana"]
```

## Reference

**link:** External reference
- [JavaScript.info - Object](https://ko.javascript.info/object)
- [MDN Web Docs - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN Web Docs - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
