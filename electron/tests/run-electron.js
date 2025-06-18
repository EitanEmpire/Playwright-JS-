const { _electron: electron } = require('playwright');

(async () => {
    const electronApp = await electron.launch({ args: ['.'] });

    const window = await electronApp.firstWindow();
    console.log('Page title:', await window.title());

    // Example click
    await window.click('text=Start');

    await electronApp.close();
})();