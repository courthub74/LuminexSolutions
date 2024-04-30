import { test } from "@playwright/test";

test("test browser", async ({page}) => {
    // point this to localhost or any host
    await page.goto("http://127.0.0.1:5505/");

    // keep browser open
    await page.pause();
})