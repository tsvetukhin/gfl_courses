const { I } = inject();

module.exports = {
  userGender: { css: '#id_gender1' },
  firstUserName: { css: '#customer_firstname' },
  lastUserName: { css: '#customer_lastname' },
  userPassword: { css: '#passwd' },
  userDate: { css: '#days' },
  userMonth: { css: '#months' },
  userYear: { css: '#years' },
  newsSubscribe: { css: '#newsletter' },
  offersSubscribe: { css: '#optin' },
  userJob: { css: '#company' },
  userAddress: { css: '#address1' },
  userAddress2: { css: '#address2' },
  userCity: { css: '#city' },
  userState: { css: '#id_state' },
  userPostalCode: { css: '#postcode' },
  userCountry: { css: '#id_country' },
  userAdditInfo: { css: '#other' },
  userHomePhoneNumb: { css: '#phone' },
  userMobPhoneNumb: { css: '#phone_mobile' },
  userAliasAddress: { css: '#alias' },
  submitRegBtn: { css: '#submitAccount' },

  fillNewUserForm(user) {
    this.waitForPageLoad();
    I.checkOption(this.userGender);
    I.fillField(this.firstUserName, user.firstName);
    I.fillField(this.lastUserName, user.lastName);
    I.fillField(this.userPassword, user.password);
    I.click(this.userDate);
    I.selectOption(this.userDate, user.birthDay);
    I.click(this.userMonth);
    I.selectOption(this.userMonth, user.birthMonth);
    I.click(this.userYear);
    I.selectOption(this.userYear, user.birthYear);
    I.click(this.newsSubscribe);
    I.click(this.offersSubscribe);
    I.fillField(this.userJob, user.company);
    I.fillField(this.userAddress, user.address);
    I.fillField(this.userAddress2, user.address2);
    I.fillField(this.userCity, user.city);
    I.click(this.userState);
    I.selectOption(this.userState, user.state);
    I.fillField(this.userPostalCode, user.postalCode);
    I.click(this.userCountry);
    I.selectOption(this.userCountry, user.country);
    I.fillField(this.userAdditInfo, user.info);
    I.fillField(this.userHomePhoneNumb, user.homePhone);
    I.fillField(this.userMobPhoneNumb, user.mobPhone);
    I.clearField(this.userAliasAddress);
    I.fillField(this.userAliasAddress, user.address);
    I.click(this.submitRegBtn);
  },

  waitForPageLoad() {
    I.waitForVisible(this.userGender);
  },

}
