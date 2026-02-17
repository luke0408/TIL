# TypeScript Coding Guidelines

## Core Principles

- Type safety first: forbid `any`. If unavoidable, prefer `unknown` and narrow with type guards
- Explicit types: always annotate function parameters and return types; variable types can be inferred when obvious
- Strict mode: set `"strict": true` in tsconfig.json
- Prefer immutability: write declarative, immutable code

## Type Definitions

```typescript
// ✅ Prefer interfaces when extensibility is needed
interface User {
  id: string;
  name: string;
}

// ✅ Discriminated union instead of optional fields
type Result =
  | {status: 'success'; data: string}
  | {status: 'error'; error: Error};

// ❌ Overusing optionals leads to ambiguity
interface Bad {
  data?: string;
  error?: Error;
}
```

## Functions

```typescript
// ✅ Explicit return type
function calculate(a: number, b: number): number {
  return a + b;
}

// ✅ Type narrowing
function handle(result: Result) {
  if (result.status === 'success') {
    console.log(result.data); // type is inferred
  }
}
```

## Error Handling

- Define custom error classes to ensure type safety
- In try/catch, always check error type

```typescript
if (error instanceof CustomError) {
  /* handle */
}
```

## Utility Types & Generics

- Use `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>` when appropriate
- Favor generics for reusability: `function identity<T>(arg: T): T`

## Best Practices

- Prefer const assertions over enums: `const STATUS = { ACTIVE: 'active' } as const`
- Provide type guard helpers: `function isUser(obj: unknown): obj is User`
- Use discriminated unions to model state clearly
- Use `readonly` to guarantee immutability when needed

## Anti-Patterns (Avoid)

- ❌ Using `@ts-ignore`
- ❌ Overusing type assertions (`as`), keep them minimal
- ❌ Excessive optional properties (prefer discriminated unions)
- ❌ Empty interfaces or duplicated types
- ❌ Double-casting like `value as unknown as T`
- ❌ Using `let` where `const` suffices (if mutation is absolutely required, consider an IIFE to limit scope)
