import { hydrate } from "../../infra/hydration";

export default function Counter() {
    hydrate(() => {
        const counter = document.getElementById("counter")!;
        const listener = () => {
            counter.textContent = (Number(counter.textContent) + 1).toString();
        };
        counter.addEventListener("click", listener);
        return () => {
            counter.removeEventListener("click", listener);
        };
    });
    return (
        <div class="card">
            <button id="counter" type="button">0</button>
        </div>
    )
}