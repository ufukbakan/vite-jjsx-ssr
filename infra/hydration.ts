type ClearCallback = () => void | Promise<void>;
type HydrationCallback = () => ClearCallback | Promise<ClearCallback> | void;

const cleanUps: ClearCallback[] = [];

export function hydrate(callback: HydrationCallback) {
    if (typeof window !== "undefined") {
        async function CombinedCallback() {
            const cleaner = await callback();
            if (cleaner) {
                cleanUps.push(cleaner);
            }
            document.removeEventListener("load", CombinedCallback);
        }
        document.addEventListener("load", CombinedCallback);
    }
}

export async function clearHydrations() {
    await Promise.allSettled(cleanUps.map(cleanUp => cleanUp()));
    cleanUps.length = 0;
    return;
}