const { chromium } = require('@playwright/test');

const emulateToggleDeviceToolbar = async () => {
    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext({
        viewport: { width: 768, height: 1024 },
        userAgent: 'Mozilla/5.0 (Linux; Android 9; Tablet) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        isMobile: true,
        hasTouch: true,
        deviceScaleFactor: 3,
    });

    const page = await context.newPage();

    // Connect to CDP session
    const client = await context.newCDPSession(page);

    // Simulate exact device mode from DevTools
    await client.send('Emulation.setDeviceMetricsOverride', {
        width: 768,
        height: 1024,
        deviceScaleFactor: 3,
        mobile: true,
    });

    await client.send('Emulation.setTouchEmulationEnabled', {
        enabled: true,
        configuration: 'mobile',
        maxTouchPoints: 5,
    });

    return { browser, context, page };
};

module.exports = { emulateToggleDeviceToolbar };