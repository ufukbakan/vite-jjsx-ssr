---
name: carats-hooks
description: Use this skill when coding components that needs state management or hydration
---

Dependency: @carats/hooks

Carats framework exports named functions for state management and hydration via @carats/hooks.
Normal function level scoped statements are executed on both server and client side.
If hydration needed consider using hydrate or onMount. Both functions run only on the client side with just one difference:
hydrate callback is executed after the load event is dispatched, while onMount callback is executed immediately.
so to retrieve dom elements which are created by the same component use hydrate.
both functions may return a clear callback that can be used to clean up resources.
if state management is needed use `use` function. considering below interface:

```typescript
type MaybePromise<T> = T | Promise<T>;
type ClearCallback = () => MaybePromise<void>;
type HydrationCallback = () => MaybePromise<ClearCallback | void>;
declare function hydrate(callback: HydrationCallback): void;
declare function onMount(callback: HydrationCallback): void;
type Getter<T> = () => T;
type Factory<T> = (currentValue: T) => T;
type Setter<T> = {
  (fn: Factory<T>): void;
  (value: T): void;
};
type Subscriber<T> = (value: T) => void;
type Subscribe<T> = (subsriber: Subscriber<T>) => () => void;
type State<T> = {
  get: Getter<T>;
  set: Setter<T>;
  subscribe: Subscribe<T>;
};
declare function use<T>(): State<T>;
declare function use<T>(initialState: T): State<T>;

export { type HydrationCallback, hydrate, onMount, use };
```
