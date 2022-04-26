let user = {
    firstName: 'Axl',
    lastName: 'Rose',
    password: '12345678',
    birthDay: '2',
    birthMonth: '5',
    birthYear: '2019',
    company: 'Oracle',
    address: '801 Tom Martin Dr.',
    address2: '312, 74, 232b, 123, floor 7',
    city: 'Tuscaloosa',
    state: 'Alaska',
    postalCode: '99501',
    country: 'United States',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    mobPhone: '+14844731076',
    homePhone: '(555) 555-1234',
}

Feature('Store');

Scenario('test', ({ I, homePage, authPage, createAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(Date.now() + '@gmail.com');
    authPage.clickCreateAccountButton();
    createAccountPage.fillNewUserForm(user);
    pause();
});





