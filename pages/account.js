const { I } = inject();

module.exports = {
  personalPageTitle: { css: '#center_column > h1' },

  titleCheck() {
    I.see('MY ACCOUNT', this.personalPageTitle);
  }
}
