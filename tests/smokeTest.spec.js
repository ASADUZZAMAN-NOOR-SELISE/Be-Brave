import { expect, test } from '@playwright/test';
import locator from '../utils/locator';
import assertion from '../utils/assertion';
const { LoginPage } = require("../POM/LoginPage");
const { ProfilePage } = require("../POM/ProfilePage");
const credentials = require("../utils/credentials");


let loginPage;
let profilePage;
let context;
let page;

test.beforeAll(async ({browser})=>{
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("/login");
    loginPage = new LoginPage(page);
    await loginPage.login(credentials.valid.username, credentials.valid.password);
    
})

test("Profile page", async ({})=>{
    profilePage = new ProfilePage(page);
    await profilePage.goProfileMenu();
    //await page.locator(locator.userDropdown.myProfile);
    await profilePage.selectProfile();
    await expect(profilePage.profileMail.nth(1)).toHaveText(credentials.valid.username);
})
test("Edit profile", async ({})=>{
    profilePage = new ProfilePage(page);
    await profilePage.goProfileMenu();
    //await page.locator(locator.userDropdown.myProfile);
    await profilePage.selectProfile();
    await profilePage.editButton(); 
    const username = await page.locator("input[name='fullName']").inputValue();
    console.log(username);
})