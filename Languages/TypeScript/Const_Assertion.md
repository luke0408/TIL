# const assertion

## Summary
`const assertion`은 TypeScript 3.4에서 도입된 기능으로, 객체나 배열 리터럴의 타입 추론을 보다 구체적이고 변하지 않는 상수형으로 고정하기 위해 사용된다. `as const` 구문을 사용하면 모든 속성이 `readonly`로 처리되며, 가능한 한 좁은 리터럴 타입으로 추론된다.

## Details

### 리터럴 타입의 일반적인 추론 방식

기본적으로 TypeScript는 객체나 배열 리터럴을 선언할 때 다음과 같이 넓은 타입으로 추론한다.

```ts
const status = {
  success: true,
  code: 200
};
// status는 { success: boolean; code: number } 타입으로 추론됨
```

이는 `success`가 `true`가 아니라 `boolean`, `code`가 `200`이 아니라 `number`로 추론된다는 의미이다.

> [!NOTE]
> 이렇게 추론된 타입은 변경 가능성이 있는 일반 변수처럼 취급되므로, 타입 안전성이 떨어질 수 있다.

### const assertion이란?

`as const`를 사용하면 **해당 값의 모든 속성을 변경 불가능하게 고정**할 수 있다. 이때 TypeScript는 가능한 좁은 리터럴 타입으로 추론하며, 객체의 속성은 모두 `readonly`로 처리된다.

```ts
const status = {
  success: true,
  code: 200
} as const;
// status는 { readonly success: true; readonly code: 200 } 타입으로 추론됨
```

이러한 방식은 enum-like 구조나 switch-case 분기 등에 매우 유용하다.

> [!IMPORTANT]
> `as const`는 값 전체에 대한 const assertion이므로, 각각의 속성에 대해 일일이 `readonly`를 지정하지 않아도 된다.

### 배열에서의 const assertion 사용

배열의 경우도 `as const`를 사용하면 요소들이 모두 읽기 전용이고, 리터럴 타입으로 고정된다.

```ts
const directions = ["up", "down", "left", "right"] as const;
// 타입은 readonly ["up", "down", "left", "right"]
```

이 경우, 각 요소는 `"up" | "down" | "left" | "right"`와 같은 유니언 타입을 만들 때 유용하다.

```ts
type Direction = typeof directions[number];
// => "up" | "down" | "left" | "right"
```

> [!TIP]
> `as const`를 사용하면, `typeof ...[number]` 구문으로 손쉽게 유니언 타입을 생성할 수 있다.

### 객체에서 enum-like 구조 정의 시 유용함

```ts
const Colors = {
  Red: "RED",
  Green: "GREEN",
  Blue: "BLUE"
} as const;

type Color = typeof Colors[keyof typeof Colors];
// => "RED" | "GREEN" | "BLUE"
```

이런 패턴은 실제로 enum을 대체하거나 API 응답값을 고정할 때 자주 사용된다.

> [!CAUTION]
> `as const`는 변수 선언 시 `const`와는 다르다. `const`는 변수 재할당을 막고, `as const`는 리터럴 타입을 고정한다.

## Reference

**link:** External reference
- [TypeScript 3.4 Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html)
