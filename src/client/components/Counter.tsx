import { hydrate } from "../../infra/hydration";
import { use } from "../../infra/state";

export default function Counter() {
    const count = use(0);
    hydrate(() => {
        const counterElement = document.getElementById("counter")!;
        const unsubscribeCounter = count.subscribe((newCount) => {
            counterElement.textContent = newCount.toString();
        });
        counterElement.addEventListener("click", () => {
            count.set((prev) => prev + 1);
        });
        return () => {
            // cleanups
            unsubscribeCounter();
        };
    });
    return (
        <div class="card">
            <button id="counter" type="button">{count.get()}</button>
        </div>
    )
}
