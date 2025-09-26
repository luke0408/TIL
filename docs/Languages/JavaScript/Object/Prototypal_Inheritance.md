# Prototypal Inheritance

## Summary
JavaScript에서 상속은 클래스 기반이 아닌 프로토타입 기반으로 동작한다. 이를 **Prototypal Inheritance**라고 하며, 객체가 다른 객체를 참조(상속)하여 속성과 메서드를 공유하는 방식이다. 이 구조는 유연하고 동적인 객체 확장을 가능하게 한다.

## Details

### 프로토타입 체인
모든 객체는 숨겨진 `[[Prototype]]` 내부 슬롯을 가지며, 이는 일반적으로 `__proto__` 또는 `Object.getPrototypeOf(obj)`를 통해 접근할 수 있다. 객체가 특정 프로퍼티를 찾지 못하면 이 체인을 따라 상위 객체에서 검색하게 된다.

```js
const animal = { eats: true };
const rabbit = { jumps: true };

rabbit.__proto__ = animal;
console.log(rabbit.eats); // true
```

:::note
`__proto__`는 비표준이나 대부분의 환경에서 지원된다. 표준 메서드인 `Object.setPrototypeOf()`와 `Object.getPrototypeOf()` 사용이 권장된다.
:::

### Object.create를 이용한 상속
`Object.create(proto)`를 사용하면 지정한 프로토타입을 가진 새로운 객체를 생성할 수 있다.

```js
const animal = {
  eats: true
};

const rabbit = Object.create(animal);
console.log(rabbit.eats); // true
```

### 생성자 함수와 prototype
함수를 생성자로 사용할 때, `prototype` 프로퍼티를 통해 생성된 인스턴스의 프로토타입을 설정할 수 있다.

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.eats = true;

const rabbit = new Animal('Rabbit');
console.log(rabbit.eats); // true
```

:::info
`new` 키워드를 사용하면 객체는 해당 생성자의 `prototype`을 `[[Prototype]]`으로 갖는다.
:::

### 클래스와 프로토타입
ES6의 `class`는 문법적으로는 클래스지만 내부적으로는 프로토타입 기반 상속을 사용한다.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eats.`);
  }
}

class Rabbit extends Animal {
  jump() {
    console.log(`${this.name} jumps.`);
  }
}
```

:::caution
클래스는 `strict mode`에서만 동작하며, 호이스팅되지 않는다. 클래스 선언 이전에 사용할 수 없다.
:::

### 메서드 오버라이딩과 super
자식 객체에서 부모의 메서드를 오버라이드할 수 있으며, `super` 키워드를 사용해 부모 메서드에 접근할 수 있다.

```js
class Rabbit extends Animal {
  eat() {
    super.eat(); // 부모 메서드 호출
    console.log(`${this.name} nibbles.`);
  }
}
```

## Reference

**link:** External reference
- [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [JavaScript.info - Prototypal inheritance](https://javascript.info/prototype-inheritance)
