const { I } = inject();

module.exports = {
  storePage: '/',
  signIn: { css: 'a.login' },

  openStore() {
    I.amOnPage(this.storePage);
  },

  clickSignIn() {
    I.click(this.signIn);
  }

}
