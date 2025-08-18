import { expect, test } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
import { ProfilePage } from '../POM/ProfilePage';
const credentials = require("../utils/credentials");
const assertion = require("../utils/assertion");

let loginPage;
let profilePage;

test.beforeEach(async ({page})=>{
    await page.goto("/login");
    loginPage = new LoginPage(page);
})

test('test', async ({ page }) => {
  await loginPage.login(credentials.valid.username, credentials.valid.password);

    //await expect(page).toHaveURL(assertion.url.homeUrl);
    profilePage = new ProfilePage(page);
    await profilePage.setLanguage();
    await expect(page.getByText('EN', { exact: true })).toBeVisible();
    await page.locator('svg').nth(1).click();
    await page.getByRole('menuitem', { name: 'About' }).click();
    await expect(page.getByLabel('About').locator('h2')).toContainText('About');
    await expect(page.getByRole('img', { name: 'BeBrave Logo' })).toBeVisible();
    await expect(page.locator('h3')).toContainText('EagleGPT');
    await expect(page.getByRole('paragraph')).toContainText('Version 1.4.0');
    await expect(page.locator('div').filter({ hasText: /^Close$/ }).getByRole('button')).toBeVisible();
    await page.locator('div').filter({ hasText: /^Close$/ }).getByRole('button').click();
});
    
  

