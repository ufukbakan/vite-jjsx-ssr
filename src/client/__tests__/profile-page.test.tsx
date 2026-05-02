import { expect, test } from "vitest";
import { init, transpile } from "jjsx";
import Profile from "../pages/profile";

init();

test("Render profile page", async () => {
    const mockUser = {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        username: "johndoe",
        phone: "123-456-7890",
        website: "johndoe.com",
    };

    const page = transpile(await Profile.call(Profile, mockUser))

    expect(page).toContain('app-header');
    expect(page).toContain("John Doe");
    expect(page).toContain("john@example.com");
    expect(page).toContain("johndoe");
    expect(page).toContain("123-456-7890");
    expect(page).toContain("johndoe.com");
    expect(page).toContain("Vault Member");
    expect(page).toContain("Portfolio Value");
});
