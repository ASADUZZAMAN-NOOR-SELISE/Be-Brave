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
    
});
    
  

