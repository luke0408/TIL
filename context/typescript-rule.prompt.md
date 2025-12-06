## TypeScript 코딩 지침

### 핵심 원칙

- **타입 안정성 최우선**: `any` 사용 금지. 불가피한 경우 `unknown` 사용 후 타입 가드로 좁히기
- **명시적 타입 선언**: 함수 매개변수, 반환값은 반드시 타입 명시. 추론 가능한 변수는 생략 가능
- **strict 모드**: `tsconfig.json`에서 `"strict": true` 필수
- **immutable 지키기**: 선언형 코드를 통해 immutable 하게 만들기

### 타입 정의

```typescript
// ✅ 인터페이스 우선 (확장 가능한 경우)
interface User {
  id: string;
  name: string;
}

// ✅ 판별 유니온 (Discriminated Union) - 옵셔널 대신 사용
type Result =
  | {status: 'success'; data: string}
  | {status: 'error'; error: Error};

// ❌ 옵셔널 남발
interface Bad {
  data?: string;
  error?: Error;
}
```

### 함수 작성

```typescript
// ✅ 명시적 반환 타입
function calculate(a: number, b: number): number {
  return a + b;
}

// ✅ 타입 좁히기 (Type Narrowing)
function handle(result: Result) {
  if (result.status === 'success') {
    console.log(result.data); // 타입 자동 추론
  }
}
```

### 에러 처리

- 커스텀 에러 클래스 정의하여 타입 안정성 확보
- `try-catch`에서 에러 타입 체크 필수

```typescript
if (error instanceof CustomError) {
  /* 처리 */
}
```

### 유틸리티 타입 활용

- `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>` 적극 활용
- 제네릭으로 재사용성 극대화: `function identity<T>(arg: T): T`

### 모범 사례

- **Enum 대신 const assertion**: `const STATUS = { ACTIVE: 'active' } as const`
- **타입 가드 함수**: `function isUser(obj: unknown): obj is User`
- **판별 유니온 패턴**: 옵셔널 프로퍼티 대신 명확한 상태 분리
- **readonly 활용**: 불변성 보장이 필요한 곳에 `readonly` 키워드 사용

### 피해야 할 패턴

- :x: `@ts-ignore` 사용 금지
- :x: 타입 단언 남용 (`as` 최소화)
- :x: 옵셔널 프로퍼티 과다 사용 (판별 유니온으로 대체)
- :x: 빈 인터페이스나 중복 타입 정의
- :x: `as unknoen as T` 금지
- :x: `let` 사용 금지(꼭 필요하다면 `iife`를 사용할 것)
