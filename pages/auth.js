const { I } = inject();

module.exports = {
  newUserEmailInput: { css: '#email_create' },
  createAccountButton: { css: '#SubmitCreate' },

  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },

  fillNewUserEmail(email) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, email);
  },

  clickCreateAccountButton() {
    I.click(this.createAccountButton);
  },
}
