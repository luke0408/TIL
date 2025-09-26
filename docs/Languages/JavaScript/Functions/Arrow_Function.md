# Arrow Function

## Summary
자바스크립트에서 함수를 선언하는 방법 중 하나로 `화살표 함수(Arrow Function)`가 있다.  
기존 함수 표현식보다 간결한 문법을 제공하며, 특히 익명 함수나 단일 라인의 함수를 작성할 때 유용하다.  
하지만 `this`, `super`, `arguments`와 같은 키워드와의 작동 방식이 다르며, 생성자로 사용할 수 없다.

## Details

### 기본 문법
화살표 함수는 `=>` 기호를 사용하여 함수를 정의한다.

```js
const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(3, 4)); // 7
```
- `f`는 함수의 이름이다.
- `(a, b)`는 매개변수이다.
- 중괄호 `{}` 안에서 로직을 작성하고 `return`을 통해 값을 반환한다.

:::note
반환값이 없을 경우 `undefined`를 반환한다.
:::

### `return` 생략 가능
한 줄로 작성할 수 있는 경우 `return` 키워드를 생략할 수 있다.

```js
const f = (a, b) => a + b;
console.log(f(3, 4)); // 7
```

### 기존 함수 표현식과의 차이점
#### 1. 더 간결한 문법
익명 함수나 짧은 로직을 작성할 때 보다 간결하게 표현할 수 있다.

```js
// 기존 함수 표현식
const f = function(a, b) {
    return a + b;
};

// 화살표 함수
const f = (a, b) => a + b;
```

#### 2. **호이스팅(hoisting) 불가**
기존 함수 선언(`function`)은 호이스팅이 적용되어 선언 전에 호출이 가능하지만, 화살표 함수는 변수에 할당되는 형태이므로 선언 후에만 호출할 수 있다.

```js
console.log(f(3, 4)); // ReferenceError: Cannot access 'f' before initialization
const f = (a, b) => a + b;
```

#### 3. **`this`, `super`, `arguments`와의 차이**
화살표 함수는 기존 함수와 달리 **자신만의 `this`를 가지지 않는다.**  
즉, `this`는 외부 스코프의 값을 그대로 유지한다.

```js
function traditionalFunction() {
    console.log(this); // 호출 방식에 따라 달라짐
}

const arrowFunction = () => {
    console.log(this); // 외부 스코프의 this를 유지
};
```

:::info
화살표 함수는 생성자로 사용할 수 없다. `new` 키워드를 사용할 경우 오류가 발생한다.
:::

## Reference

**link:** External reference
- [MDN - Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

**authore note:** Related note in this repo
- [JavaScript: Function](./Function.md)