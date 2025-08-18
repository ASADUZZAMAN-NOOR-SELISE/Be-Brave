const locator = require("../utils/locator");
export class ProfilePage{
    constructor(page){
        this.page = page;
        this.languageChange = page.locator('div').filter({ hasText: /^DE$/ }).nth(1);
        this.selectLanguage = page.getByRole('menuitem', { name: 'English' });
       
    }

    async setLanguage(){

        await this.languageChange.click();
        await this.selectLanguage.click();
        
    }

    async editProfile(){
 
        
    }

    async profileValidation(){

    }

    


}
