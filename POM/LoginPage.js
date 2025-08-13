
const locator = require("../utils/locator");
export class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.locator(locator.loginPage.userName);
        this.password = page.locator(locator.loginPage.passWord);
        this.loginButton = page.locator(locator.loginPage.loginButton);
        this.userErrorText = page.locator(locator.loginPage.userErrorText);
        this.passwordErrorText = page.locator(locator.loginPage.passwordErrorText);
        this.invalidErrorText = page.locator(locator.loginPage.invalidErrorText);
    }

    async login(user, password){
        await this.username.fill(user);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}
