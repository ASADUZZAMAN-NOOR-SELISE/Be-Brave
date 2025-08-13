const locator = require("../utils/locator");
export class ProfilePage{
    constructor(page){
        this.page = page;
        this.usermenu  = page.locator(locator.userDropdown.profileMenu);
        this.menu = page.locator(locator.userDropdown.menu);
        //click my profile 
        this.userProfile = page.locator(locator.userDropdown.myProfile);
        this.profileImage = page.locator(locator.myprofile.profileImg);
        this.profilePageTitle = page.locator(locator.myprofile.myProfileText);
        this.profileName = page.locator(locator.myprofile.profileName);
        //use first child 
        this.profileMail = page.locator(locator.myprofile.profileMail);
        //use last child
        this.profileOrganization = page.locator(locator.myprofile.profileOrganization);
        this.goEditProfileButton = page.locator(locator.profileEdit.goEditProfileButton);

    }
    async goProfileMenu(){
        await this.usermenu.click();
    }
    async selectProfile(){
        await this.userProfile.first().click()
        
    }
    async editButton(){
        await this.goEditProfileButton.filter({hasText:"Bearbeiten"}).click();
    }


}
