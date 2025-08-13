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

test.only("iFrame test", async ({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  const framePage =  page.locator("#courses-iframe");
  await framePage.locator("li [href*='lifetime-access']:visible").click();
  const getStringWhole = await framePage.locator(".text h2").textContent();
  const getUserNumber = getStringWhole.split(" ")[1];
  console.log(getUserNumber);

})