import { test, expect } from '@playwright/test';
const { setupTabletContext } = require("../utils/setupTabletContext");


let browser, context, page;

test.describe('navigation', () => {
    test.beforeEach(async () => {
        ({ browser, context, page }  = await setupTabletContext());
        await page.goto('/');

    });

    test('main navigation', async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL('https://playwright.dev/');
        page.waitForTimeout(5000);
    });
});

test.afterEach(async () => {
    await browser?.close();
});
