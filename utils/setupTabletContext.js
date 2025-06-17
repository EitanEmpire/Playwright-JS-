// utils/setupTabletContext.js

const { devices, chromium } = require('@playwright/test');

const tabletViewport = {
    width: 768,
    height: 1024,
};

const tabletUserAgent =
    'Mozilla/5.0 (Linux; Android 9; Tablet) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';

async function setupTabletContext() {
    const browser = await chromium.launch({ headless: false }); // toggle headless as needed

    const context = await browser.newContext({
        viewport: tabletViewport,
        userAgent: tabletUserAgent,
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 2,
        baseURL: baseURL,
    });

    const page = await context.newPage();
    return { browser, context, page };
}

module.exports = { setupTabletContext };