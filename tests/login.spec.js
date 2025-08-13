import { expect, test } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
const credentials = require("../utils/credentials");
const assertion = require("../utils/assertion");

let loginPage;

test.beforeEach(async ({page})=>{
    await page.goto("/login");
    loginPage = new LoginPage(page);
})

test("Empty User Login attempt ", async ({page})=> {
    
    await loginPage.login(credentials.invalid.emptyUSer, credentials.valid.password);
    await expect(loginPage.userErrorText).toHaveText(assertion.textLogin.emptyUser);
})

test("Empty Password Login attempt ", async ({page})=> {
    
    await loginPage.login(credentials.valid.username, credentials.invalid.emptyPassword);
    await expect(loginPage.passwordErrorText).toHaveText(assertion.textLogin.emptyPassword);
})

test("Empty User&Password Login attempt ", async ({page})=>{
    
    await loginPage.login(credentials.invalid.emptyUSer, credentials.invalid.emptyPassword);
    await expect(loginPage.userErrorText).toHaveText(assertion.textLogin.emptyUser);
    await expect(loginPage.passwordErrorText).toHaveText(assertion.textLogin.emptyPassword);
})

test("Invalid user login attempt  ", async ({page})=>{
    
    await loginPage.login(credentials.invalid.wrongMail, credentials.valid.password);
    await expect(loginPage.invalidErrorText).toHaveText(assertion.textLogin.invalidUser);
})

test("Invalid Password login attempt  ", async ({page})=>{

    await loginPage.login(credentials.valid.username, credentials.invalid.password);
    await expect(loginPage.invalidErrorText).toHaveText(assertion.textLogin.invalidPassword)

})
test("Short Password login attempt  ", async ({page})=>{
  
    await loginPage.login(credentials.valid.username, credentials.invalid.shortPassword);
    await expect(loginPage.passwordErrorText).toHaveText(assertion.textLogin.shortPassword); 
})

test("Invalid User&Password login attempt  ", async ({page})=>{
   
    await loginPage.login(credentials.invalid.wrongMail, credentials.invalid.password);
    await expect(loginPage.invalidErrorText).toHaveText(assertion.textLogin.InvalidUserPassword);
})

test("Valid Uer&Password Login ", async ({page})=>{

    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await expect(page).toHaveURL(assertion.url.homeUrl);
})