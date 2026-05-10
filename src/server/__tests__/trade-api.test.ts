import { describe, expect, test } from "vitest";
import getTradeData from "../service/get-trade-data";

describe("Trade API", () => {
    test("GET /trade/btc", async () => {
        const mockRequest = {
            params: { symbol: "btc" },
            url: "/trade/btc",
            query: {},
            headers: {},
            cookies: {},
            method: "GET",
        };
        const result = await getTradeData(mockRequest);
        expect(result.symbol).toBe("BTC");
        expect(result.price).toBeDefined();
        expect(result.orderBook).toBeDefined();
        expect(result.orderBook.bids.length).toBeGreaterThan(0);
        expect(result.orderBook.asks.length).toBeGreaterThan(0);
    });
});
