const { By } = require('selenium-webdriver');

const logon = {
    signInForm: {
        container: By.css('form[action="/logon/"]'),
        email: By.id('signinemail'),
        password: By.id('signinpassword')
    }
}

module.exports = logon;
