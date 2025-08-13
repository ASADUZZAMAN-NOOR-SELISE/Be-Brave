module.exports = {
  loginPage: {
    userName: "[name='username']",
    passWord: "[name='password']",
    loginButton: "button[type='submit']",
    userErrorText: "p[id=':r0:-form-item-message']",
    passwordErrorText: "p[id=':r1:-form-item-message']",
    invalidErrorText: ".text-error.text-xs.font-normal"
  },
  userDropdown:{
    profileMenu: ".cursor-pointer h2",
    menu: "[role='menu']",
    myProfile: "[role*='menuitem']",
  },
  myprofile:{
    myProfileText: "div h3",
    profileImg: "img[alt='Profile']",
    profileName: ".items-center div h1",
    profileMail: ".items-center p", // user first child 
    profileOrganization : ".grid p", // user last child 
  },
  profileEdit:{
    goEditProfileButton:"button",
  }
};

//page.locator('div', { hasText: 'My Profile' });