// import { test, expect } from '@playwright/test';

// import fs from 'node:fs';

// test.beforeAll(async ({ browser, baseURL }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   // Always hit the real origin (baseURL = https://devapp.eaglegpt.ai)
//   await page.goto('/login');

//   const loginPage = new LoginPage(page);
//   await loginPage.login(credentials.valid.username, credentials.valid.password);

//   // Make sure the app is fully logged in and the auth key exists
//   await page.waitForURL(/\/home/i);
//   await page.waitForFunction(() => !!window.localStorage.getItem('auth-storage'));

//   // (Optional) sanity check:
//   const auth = await page.evaluate(() => localStorage.getItem('auth-storage'));
//   console.log('auth-storage:', auth);

//   // Now it’s safe to persist
//   await context.storageState({ path: 'state.json' });

//   // Create a second context that will reuse auth
//   webContext = await browser.newContext({ storageState: 'state.json' });
// });

// test('Profile page', async () => {
//   const page = await webContext.newPage();
//   await page.goto('/');               // go to app root, not /login
//   const profilePage = new ProfilePage(page);

//   await profilePage.goProfileMenu();
//   await profilePage.selectProfile();
//   await expect(profilePage.profileMail.nth(1)).toHaveText(credentials.valid.username);
// });
