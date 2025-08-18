export class EditProfile{
    constructor(page){
        this.page = page ;
        this.homeLanguageLocator = page.getByText('DE', { exact: true });
        this.englishLocator = page.getByRole('menuitem', { name: 'English' });
        this.selectEnglish = page.getByRole('menuitem', { name: 'English' });
        this.profileDropdown = page.getByRole('img', { name: 'profile' });
        this.selectProfile = page.getByRole('menuitem', { name: 'My Profile' });
        this.editButton = page.getByRole('button', { name: 'Edit' });
        this.nameInput = page.getByRole('textbox', { name: 'Enter your full name' });
        this.editSaveButton = page.getByRole('button', { name: 'Save' });
        this.mobileNumber = page.getByRole('textbox', { name: 'Enter your mobile number' });
        this.closeBtn = page.getByRole('button', { name: 'Close' });
        this.cancelBtn = page.getByRole('button', { name: 'Cancel' });

    }

    async languageChange(){
        await this.homeLanguageLocator.click();
        await this.englishLocator.click();

    }

    async profileMenu(){
        await this.profileDropdown.click();
        await this.selectProfile.click();  
    }

    async profileEdit(){
        await this.nameInput.fill("New Test Name2");
        await this.editSaveButton.click();

    }

    async crossButtonValidation(){
        await this.editButton.click();
        await this.closeBtn.click();
    }

    async cancelButtonValidation(){
        await this.editButton.click();
        await this.cancelBtn.click();
    }
 }
