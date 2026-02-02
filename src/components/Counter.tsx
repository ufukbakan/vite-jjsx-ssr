import { hydrate } from "../../infra/hydration";
import { use } from "../../infra/state";

export default function Counter() {
    const [count, setCount, subscribeToCount] = use(0);
    hydrate(() => {
        const counterElement = document.getElementById("counter")!;
        const unsubscribeCounter = subscribeToCount((newCount) => {
            counterElement.textContent = newCount.toString();
        });
        counterElement.addEventListener("click", () => {
            setCount((prev) => prev + 1);
        });
        return () => {
            // cleanups
            unsubscribeCounter();
        };
    });
    return (
        <div class="card">
            <button id="counter" type="button">{count}</button>
        </div>
    )
}
