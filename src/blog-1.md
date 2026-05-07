# Why `any` is a Type Safety Hole and Why `unknown` is Safer in TypeScript

## Introduction

TypeScript is designed to make JavaScript safer by adding static typing. However, not all types provide the same level of safety. Among them, `any` is considered a **type safety hole** because it disables TypeScript's type checking completely.

On the other hand, `unknown` provides flexibility while still keeping your code safe. In this blog, we will explore:

- Why `any` is dangerous
- Why `unknown` is the safer alternative
- What type narrowing is
- How to safely work with unpredictable data

---

# Understanding `any`

The `any` type tells TypeScript:

> “Trust me, I know what I’m doing.”

When a variable is typed as `any`, TypeScript stops checking its type.

## Example of `any`

```ts
let value: any = "Hello TypeScript";

value = 100;
value.toUpperCase(); // No error during compile time