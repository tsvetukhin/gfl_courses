const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpractice.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle',
      waitForTimeout: 10000,
      timeout: 10000,
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    accountPage: './pages/account.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'gfl_courses'
}