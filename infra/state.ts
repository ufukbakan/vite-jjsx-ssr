export function use<T>(initialState: T) {
    let state = initialState;
    type Listener = (newState: T) => void;
    const subscribers = new Set<Listener>();

    type Factory = (currentValue: T) => T;
    function isFactory(fn: Factory | T): fn is Factory {
        return typeof fn === "function";
    }

    function setter(fn: Factory): void;
    function setter(newState: T): void;
    function setter(newStateOrFn: Factory | T) {
        if (isFactory(newStateOrFn)) {
            state = newStateOrFn(state);
        } else {
            state = newStateOrFn;
        }
        subscribers.forEach(subscriber => subscriber(state));
    }

    const subscribe = (fn: (newState: T) => void) => {
        subscribers.add(fn);
        return () => {
            subscribers.delete(fn);
        }
    }
    return [state, setter, subscribe] as const;
}
