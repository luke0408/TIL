# Function

## Summary
JavaScript에서 함수(Function)는 특정 작업을 수행하는 독립적인 코드 블록이다.  
코드의 재사용성을 높이고 유지보수를 용이하게 하며, JavaScript에서는 **일급 객체(First-Class Citizen)** 로 취급되어 다양한 방식으로 활용할 수 있다.  

## Details

### 함수 선언 (Function Declaration)
`function` 키워드를 사용하여 함수를 선언할 수 있다.  

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7
```

- 선언된 함수는 **호이스팅(Hoisting)** 되어, 선언 이전에도 호출할 수 있다.

### 함수 표현식 (Function Expression)
함수를 변수에 할당하는 방식으로, 선언 이후에만 사용할 수 있다.  

```javascript
const add = function(a, b) {
    return a + b;
};
console.log(add(3, 4)); // 7
```

### 즉시 실행 함수 표현식 (IIFE)
함수를 선언하자마자 실행할 수 있으며, **전역 공간을 오염시키지 않도록 할 때 유용하다.**  

```javascript
const result = (function(a, b) {
    return a + b;
})(3, 4);

console.log(result); // 7
```

### 화살표 함수 (Arrow Function)
ES6에서 도입된 문법으로 기존 함수보다 간결한 표현이 가능하다.  

```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

:::info
화살표 함수는 `this`의 바인딩 방식이 다르며, 생성자로 사용할 수 없다.
:::

### 매개변수와 기본값 (Parameters & Default Values)
매개변수에 기본값을 설정할 수 있다.  

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());       // Hello, Guest!
console.log(greet("John")); // Hello, John!
```

### 나머지 매개변수 (Rest Parameters)
전달된 인자의 개수가 가변적인 경우, `...` 연산자를 활용하여 배열로 받을 수 있다.  

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### 콜백 함수 (Callback Function)
함수를 매개변수로 전달하여 실행하는 방식이며, **비동기 처리** 에서 자주 사용된다.  

```javascript
function process(value, callback) {
    return callback(value);
}
const double = num => num * 2;
console.log(process(5, double)); // 10
```

### 클로저 (Closure)
클로저는 **함수가 생성될 당시의 외부 변수에 접근할 수 있는 개념** 을 의미한다.  

```javascript
function createAdder(a) {
    return function(b) {
        return a + b;
    };
}
const addThree = createAdder(3);
console.log(addThree(4)); // 7
```

:::tip
클로저는 데이터 은닉 및 함수형 프로그래밍에서 중요한 개념이다.
:::

### 함수의 `this` 바인딩
JavaScript에서 `this`는 **호출 방식에 따라 다르게 동작** 한다.  

```javascript
const obj = {
    value: 10,
    getValue: function() {
        return this.value;
    }
};
console.log(obj.getValue()); // 10
```

#### 화살표 함수와 `this`
화살표 함수는 **자신만의 `this`를 가지지 않고, 외부 스코프의 `this`를 유지한다.**  

```javascript
const obj = {
    value: 10,
    getValue: () => this.value
};
console.log(obj.getValue()); // undefined
```

이러한 특징으로 인해, `this`를 명확하게 바인딩하려면 `bind()`를 사용할 수 있다.  

```javascript
const obj = { value: 10 };

function getValue() {
    return this.value;
}

const boundGetValue = getValue.bind(obj);
console.log(boundGetValue()); // 10
```

## Reference

**link:** External reference  
- [MDN - JavaScript Functions](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions)  
- [Poiema Web - JavaScript 함수](https://poiemaweb.com/js-function)

**authore note:** Related note in this repo
- [JavaScript: Arrow Function](./Arrow_Function.md)