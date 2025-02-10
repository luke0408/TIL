# JavaScript Function  

## Summary  
JavaScript에서 함수(Function)는 특정 작업을 수행하는 독립적인 코드 블록이다. 함수를 사용하면 코드의 재사용성을 높이고 유지보수를 용이하게 할 수 있다. JavaScript의 함수는 일급 객체(First-Class Citizen)로 취급되며, 다양한 방식으로 선언하고 활용할 수 있다.  

## Details  

### 함수 선언 (Function Declaration)  
JavaScript에서 가장 기본적인 함수 선언 방법은 `function` 키워드를 사용하는 것이다.  

```javascript
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7
```

이 방식으로 선언된 함수는 **호이스팅(Hoisting)** 의 영향을 받아, 선언 이전에도 호출할 수 있다.  

### 함수 표현식 (Function Expression)  
함수를 변수에 할당하는 방식으로도 선언할 수 있다. 이를 **함수 표현식(Function Expression)** 이라고 한다.  

```javascript
const add = function(a, b) {
    return a + b;
};
console.log(add(3, 4)); // 7
```

이 경우 함수는 변수에 할당된 후에야 사용할 수 있다.  

### 즉시 실행 함수 표현식 (IIFE)  
함수를 선언하자마자 즉시 실행할 수도 있다. 이를 **즉시 실행 함수 표현식(IIFE, Immediately Invoked Function Expression)** 이라고 한다.  

```javascript
const result = (function(a, b) {
    return a + b;
})(3, 4);

console.log(result); // 7
```

이 방식은 변수의 범위를 제한하고, 전역 공간을 오염시키지 않도록 할 때 유용하다.  

### 화살표 함수 (Arrow Function)  
ES6에서 도입된 화살표 함수(Arrow Function)는 보다 간결한 함수 선언을 가능하게 한다.  

```javascript
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

**특징:**  
- `function` 키워드를 생략할 수 있다.  
- 중괄호 `{}` 없이 한 줄로 표현할 경우, `return`을 생략할 수 있다.  
- `this` 바인딩이 기존 함수와 다르게 동작한다.  

### 매개변수와 기본값 (Parameters & Default Values)  
함수의 매개변수에는 기본값을 설정할 수 있다.  

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet());       // Hello, Guest!
console.log(greet("John")); // Hello, John!
```

### 나머지 매개변수 (Rest Parameters)  
함수에 전달되는 인자의 개수가 동적일 경우, **나머지 매개변수(Rest Parameter)** 를 사용할 수 있다.  

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### 콜백 함수 (Callback Function)  
함수를 다른 함수의 매개변수로 전달하여 실행할 수도 있다. 이를 **콜백 함수(Callback Function)** 라고 한다.  

```javascript
function process(value, callback) {
    return callback(value);
}
const double = num => num * 2;
console.log(process(5, double)); // 10
```

콜백 함수는 비동기 처리에도 자주 사용된다.  

### 클로저 (Closure)  
**클로저(Closure)** 란 함수가 자신을 생성한 환경의 변수에 접근할 수 있는 개념을 의미한다.  

```javascript
function createAdder(a) {
    return function(b) {
        return a + b;
    };
}
const addThree = createAdder(3);
console.log(addThree(4)); // 7
```

내부 함수는 외부 함수의 변수 `a`에 접근할 수 있다. 클로저는 데이터 은닉 및 함수형 프로그래밍에서 중요한 개념이다.  

### 함수의 `this` 바인딩  
JavaScript에서 `this`는 호출 방식에 따라 다르게 동작한다.  

```javascript
const obj = {
    value: 10,
    getValue: function() {
        return this.value;
    }
};
console.log(obj.getValue()); // 10
```

**화살표 함수는 `this`를 변경하지 않는다.**  

```javascript
const obj = {
    value: 10,
    getValue: () => this.value
};
console.log(obj.getValue()); // undefined
```

이러한 특징 때문에, `this`를 명확하게 바인딩하려면 `bind()`를 사용할 수 있다.  

```javascript
const obj = {
    value: 10
};

function getValue() {
    return this.value;
}

const boundGetValue = getValue.bind(obj);
console.log(boundGetValue()); // 10
```

## Reference  

**link:** External reference  
- [Mdn Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions) 
- [Poiema Web](https://poiemaweb.com/js-function)