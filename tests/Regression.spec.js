import { expect, test } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
import { ProfilePage } from '../POM/ProfilePage';
const credentials = require("../utils/credentials");
const assertion = require("../utils/assertion");

let loginPage;
let profilePage;

test.beforeEach(async ({page})=>{
    await page.goto("/login");// goto should use direct url
    loginPage = new LoginPage(page);
})

test("Empty User Login attempt @LOGIN @SMOKE ", async ({page})=> {
    
    await loginPage.login(credentials.invalid.emptyUSer, credentials.valid.password);
    await expect(loginPage.userErrorText).toHaveText(assertion.textLogin.emptyUser);
})

test("Empty Password Login attempt @LOGIN @SMOKE  ", async ({page})=> {
    
    await loginPage.login(credentials.valid.username, credentials.invalid.emptyPassword);
    await expect(loginPage.passwordErrorText).toHaveText(assertion.textLogin.emptyPassword);
})

test("Empty User&Password Login attempt @LOGIN @SMOKE  ", async ({page})=>{
    
    await loginPage.login(credentials.invalid.emptyUSer, credentials.invalid.emptyPassword);
    await expect(loginPage.userErrorText).toHaveText(assertion.textLogin.emptyUser);
    await expect(loginPage.passwordErrorText).toHaveText(assertion.textLogin.emptyPassword);
})

test("Invalid user login attempt @LOGIN @SMOKE  ", async ({page})=>{
    
    await loginPage.login(credentials.invalid.wrongMail, credentials.valid.password);
    await expect(loginPage.invalidErrorText).toHaveText(assertion.textLogin.invalidUser);
})

test("Invalid Password login attempt @LOGIN  @SMOKE ", async ({page})=>{

    await loginPage.login(credentials.valid.username, credentials.invalid.password);
    await expect(loginPage.invalidErrorText).toHaveText(assertion.textLogin.invalidPassword)

})
test("Short Password login attempt  @LOGIN @SMOKE ", async ({page})=>{
  
    await loginPage.login(credentials.valid.username, credentials.invalid.shortPassword);
    await expect(loginPage.passwordErrorText).toHaveText(assertion.textLogin.shortPassword); 
})

test("Invalid User&Password login attempt @LOGIN @SMOKE ", async ({page})=>{
   
    await loginPage.login(credentials.invalid.wrongMail, credentials.invalid.password);
    await expect(loginPage.invalidErrorText).toHaveText(assertion.textLogin.InvalidUserPassword);
})

test("Valid Uer&Password Login @LOGIN ", async ({page})=>{

    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await expect(page).toHaveURL(assertion.url.homeUrl);
})

test(" Profile Manu validation @PROFILE @SMOKE ", async ({page})=>{

    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await expect(page).toHaveURL(assertion.url.homeUrl);
    profilePage = new ProfilePage(page);
    await profilePage.setLanguage();
    await expect(page.getByText('EN', { exact: true })).toBeVisible();
    await page.locator('svg').nth(1).click();
    await page.getByRole('menuitem', { name: 'My Profile' }).click();
    await expect(page.locator('h3')).toContainText('My Profile');
    await expect(page.getByRole('img', { name: 'Profile', exact: true })).toBeVisible();
    await expect(page.getByLabel('General info')).toContainText('asad.noor@yopmail.com');
    await expect(page.getByLabel('General info')).toContainText('Mobile No');
    await expect(page.getByLabel('General info')).toContainText('Joined on');
    await expect(page.getByLabel('General info')).toContainText('Last Logged in');
    await expect(page.getByLabel('General info')).toContainText('Organization');
    await expect(page.getByLabel('General info')).toContainText('Account security');
    await expect(page.getByLabel('General info')).toContainText('Two-factor authentication');
    await expect(page.getByLabel('General info')).toContainText('Enhance your security with an app or email-based authenticator.');
    await expect(page.getByRole('button', { name: 'Enable' })).toBeVisible();
    await expect(page.getByLabel('General info')).toContainText('Change password');
    await expect(page.getByLabel('General info')).toContainText('Update your password to keep your account safe.');
    await expect(page.getByRole('button', { name: 'Update Password' })).toBeVisible();
    await expect(page.getByLabel('General info')).toContainText('Delete account');
    await expect(page.getByLabel('General info')).toContainText('Delete your account.');
    await expect(page.getByRole('button', { name: 'Delete account' })).toBeVisible();

})

test("Edit profile @PROFILE @SMOKE ", async({page})=>{
    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await expect(page).toHaveURL(assertion.url.homeUrl);
    profilePage = new ProfilePage(page);
    await profilePage.setLanguage();
    await expect(page.getByText('EN', { exact: true })).toBeVisible();
    await page.locator('svg').nth(1).click();
    await page.getByRole('menuitem', { name: 'My Profile' }).click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await expect(page.getByLabel('Edit profile details').locator('h2')).toContainText('Edit profile details');
    await expect(page.getByLabel('Edit profile details')).toContainText('Keep your details accurate and up to date.');
    await expect(page.locator('form')).toContainText('*.png, *.jpeg files up to 2MB.');
    await expect(page.getByRole('img', { name: 'Profile' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload Image' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
    await expect(page.locator('form')).toContainText('Full Name*');
    //await page.getByRole('textbox', { name: 'Enter your full name' }).click();
    await page.getByRole('textbox', { name: 'Enter your full name' }).fill('Automation131');
    await expect(page.locator('form')).toContainText('Email');
    await expect(page.locator('input[name="email"]')).toHaveValue('asad.noor@yopmail.com');
    await expect(page.locator('input[name="email"]')).toHaveValue('asad.noor@yopmail.com');
    await expect(page.locator('form')).toContainText('Mobile No');
    await page.getByLabel('Phone number country').selectOption('TK');
   // await page.getByRole('textbox', { name: 'Enter your mobile number' }).click();
    await page.getByRole('textbox', { name: 'Enter your mobile number' }).fill('+690 123123123');
    await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('asad.noor@yopmail.com').click();
    await expect(page.getByLabel('General info')).toContainText('Automation131');
    await expect(page.getByLabel('General info')).toContainText('asad.noor@yopmail.com');
      
})

test("About page data validaiton test @PROFILE  @SMOKE ", async ({page})=>{
    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await expect(page).toHaveURL(assertion.url.homeUrl);
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
})

test("Theme change @PROFILE @SMOKE @Theme ", async ({page})=>{
    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await expect(page).toHaveURL(assertion.url.homeUrl);
    profilePage = new ProfilePage(page);
    await profilePage.setLanguage();
    await expect(page.getByText('EN', { exact: true })).toBeVisible();
    await page.locator('svg').nth(1).click();
    await page.getByRole('menuitem', { name: 'Theme' }).click();
    await expect(page.locator('html')).toHaveClass('dark'); //Dark theme class assertion
})