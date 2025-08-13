import { expect, test } from '@playwright/test';

test("Alert test", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#alertbtn").click();
    page.on("dialog", dialog=>{dialog.accept()});
    await page.locator("#confirmbtn").click();
    page.on("dialog", async dialog=>{
        await dialog.dismiss();
    });

})