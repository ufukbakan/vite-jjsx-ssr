import fetchMock from "@fetch-mock/vitest";
import { describe, expect, test } from "vitest";
import { User } from "../../dto/user";
import getUserProfile from "../api/Profile.cara";


describe("Profile API", () => {
    test("GET /api/profile/10", async () => {
        const mockRequest = {
            params: { id: "10" },
            url: "/api/profile/10",
            query: {},
            headers: {},
            cookies: {},
            method: "GET",
            data: null
        };
        const mockResponse: User = {
            id: "10",
            name: "John Doe",
            username: "johndoe",
            email: "john.doe@example.com",
            phone: "123-456-7890",
            website: "https://johndoe.com"
        };
        fetchMock
            .mockGlobal()
            .get("https://jsonplaceholder.typicode.com/users/10", mockResponse);
        const result = await getUserProfile(mockRequest);
        expect(result).toEqual(mockResponse);
    });
});
