

class EditProfile{
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

    languageChange(){
        this.homeLanguageLocator.click();
        this.englishLocator.click();

    }

    profileMenu(){
        this.profileDropdown.click();
        this.selectProfile.click();  
    }

    editProfile(){
        this.editButton.click();
        this.nameInput.fill("New Test Name2");
        this.editSaveButton.click();

    }

    crossButtonValidation(){
        his.editButton.click();
        this.closeBtn.click();
    }

    cancelButtonValidation(){
        his.editButton.click();
        this.cancelBtn.click();
    }




}