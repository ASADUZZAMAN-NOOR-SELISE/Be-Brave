import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
import { LoginPage } from '../POM/ProfilePage';
import { ProfilePage } from '../utils/assertion';
let webContext;
let profilePage;
let loginPage;
let context;
let page;

test.beforeAll(async ({ browser, baseURL }) => {
   context = await browser.newContext();
   page = await context.newPage();

  // Always hit the real origin (baseURL = https://devapp.eaglegpt.ai)
  await page.goto('/login');

   loginPage = new LoginPage(page);
  await loginPage.login(credentials.valid.username, credentials.valid.password);

  // Make sure the app is fully logged in and the auth key exists
  await page.waitForURL(/\/home/i);
  await page.waitForFunction(() => !!window.localStorage.getItem('auth-storage'));

  // (Optional) sanity check:
  const auth = await page.evaluate(() => localStorage.getItem('auth-storage'));
  console.log('auth-storage:', auth);

  // Now it’s safe to persist
  await context.storageState({ path: 'state.json' });

  // Create a second context that will reuse auth
  webContext = await browser.newContext({ storageState: 'state.json' });
});

test('Profile page', async () => {
  const page = await webContext.newPage();
  await page.goto('/');               // go to app root, not /login
  profilePage = new ProfilePage(page);

  await profilePage.goProfileMenu();
  await profilePage.selectProfile();
  await expect(profilePage.profileMail.nth(1)).toHaveText(credentials.valid.username);
});


test("Edit profile", async ({})=>{
    const page = await webContext.newPage();
    profilePage = new ProfilePage(page);
    await profilePage.goProfileMenu();
    //await page.locator(locator.userDropdown.myProfile);
    await profilePage.selectProfile();
    await profilePage.editButton(); 
    const username = await page.locator("input[name='fullName']").inputValue();
    console.log(username);
})