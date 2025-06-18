import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('main test', async ( {page} ) => {
    await page.waitForTimeout(5000);
});