# 객체 프로토타입

## Summary

JavaScript에서 객체 프로토타입은 객체 간 상속 및 속성 공유를 가능하게 하는 핵심적인 메커니즘이다. 모든 객체는 내부적으로 **Prototype** 슬롯을 가지며, 이를 통해 다른 객체를 참조하고, 프로토타입 체인을 형성하여 속성 검색을 수행한다.

## Details

### Prototype과 프로토타입 체인

JavaScript의 모든 객체는 **Prototype** 이라 불리는 내부 슬롯을 가지며, 이는 다른 객체(프로토타입)를 참조한다. 이러한 참조 관계는 계층적인 구조를 가지며, 이를 **프로토타입 체인**이라고 한다.

- 객체에서 속성에 접근하면, 엔진은 객체 자체에서 먼저 속성을 찾는다.
- 없을 경우, **Prototype** 이 가리키는 프로토타입 객체로 이동하여 검색을 이어간다.
- 이 과정을 반복하여 최종적으로 **null**에 도달하면 검색이 종료되며, 속성이 없을 경우 `undefined`가 반환된다.

:::note 

프로토타입 체인은 런타임에 동적으로 이어지며, 각 객체는 단 하나의 프로토타입만을 가질 수 있다. 

:::

### Object.prototype의 역할

- 프로토타입 체인의 최상위에는 **Object.prototype**이 위치한다.
- 이는 모든 객체의 조상으로서, JavaScript의 모든 객체는 기본적으로 Object.prototype을 상속한다.
- 이 객체에는 `toString()`, `hasOwnProperty()` 등의 메서드가 정의되어 있다.

:::info 

Object.prototype은 모든 객체의 공통 조상이므로, 여기에 정의된 메서드는 모든 객체에서 접근 가능하다. 

:::

### 생성자 함수와 prototype 속성

- 생성자 함수는 `prototype` 속성을 가지며, 이 속성은 `new` 연산자를 통해 생성된 객체의 프로토타입이 된다.
- 예:
  ```js
  function Person() {}
  const p = new Person();
  Object.getPrototypeOf(p) === Person.prototype; // true
  ```

:::tip 

생성자 함수의 prototype은 인스턴스 간 공유되는 메서드를 정의하기에 적합한 위치이다. 

:::

### Object.create(proto)

- `Object.create(proto)`를 사용하면 `proto`를 프로토타입으로 가지는 새 객체를 명시적으로 생성할 수 있다.
- 이를 통해 명확하게 프로토타입 상속 구조를 설정할 수 있다.

```js
const parent = {greet: () => 'hello'};
const child = Object.create(parent);
console.log(child.greet()); // hello
```

### **proto**와 [[Prototype]]의 차이

- `__proto__`는 대부분의 환경에서 객체의 **Prototype** 에 접근하는 비표준 접근자이다.
- `Object.getPrototypeOf(obj)`와 `Object.setPrototypeOf(obj, proto)`는 Prototype에 접근하는 **표준 메서드**이다.

:::caution 

`__proto__`는 여전히 널리 쓰이지만, **표준이 아니므로** 코드의 이식성과 명확성을 위해 공식 메서드 사용을 권장한다. 

:::

### hasOwnProperty()와 프로토타입 구분

- `obj.hasOwnProperty(prop)`는 해당 속성이 객체 자체에 있는 것인지, 프로토타입 체인에 있는 것인지를 구분하는 데 사용된다.

```js
const parent = {shared: true};
const child = Object.create(parent);
child.own = true;

console.log('shared' in child); // true
console.log(child.hasOwnProperty('shared')); // false
console.log(child.hasOwnProperty('own')); // true
```

:::tip 

객체의 고유 속성만 순회하려면 `hasOwnProperty()`를 활용한 필터링이 필요하다. 

:::

### 프로토타입 오염 (Prototype Pollution)

- 잘못된 객체 병합이나 동적 속성 할당으로 인해 **Object.prototype**을 오염시키는 일이 발생할 수 있다.
- 이는 모든 객체에 영향을 줄 수 있으므로, 외부 입력으로부터 생성된 객체에 `__proto__`, `constructor` 등의 키를 직접 할당하는 것은 **보안상 위험**하다.

:::warning 

사용자 입력을 기반으로 객체를 생성할 때는, 프로토타입 오염을 막기 위해 `Object.create(null)`을 사용하는 것이 안전하다. 

:::

## Reference

**link:** External reference

- [CodeGuage - JavaScript Prototypes](https://www.codeguage.com/courses/js/objects-prototypes)
- [MDN - Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
