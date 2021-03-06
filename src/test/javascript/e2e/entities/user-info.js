'use strict';

describe('UserInfo e2e test', function () {

    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var entityMenu = element(by.id('entity-menu'));
    var accountMenu = element(by.id('account-menu'));
    var login = element(by.id('login'));
    var logout = element(by.id('logout'));

    beforeAll(function () {
        browser.get('/');

        accountMenu.click();
        login.click();

        username.sendKeys('admin');
        password.sendKeys('admin');
        element(by.css('button[type=submit]')).click();
    });

    it('should load UserInfos', function () {
        entityMenu.click();
        element(by.css('[ui-sref="user-info"]')).click().then(function() {
            expect(element.all(by.css('h2')).first().getText()).toMatch(/User Infos/);
        });
    });

    it('should load create UserInfo dialog', function () {
        element(by.css('[ui-sref="user-info.new"]')).click().then(function() {
            expect(element(by.css('h4.modal-title')).getText()).toMatch(/Create or edit a User Info/);
            element(by.css('button.close')).click();
        });
    });

    afterAll(function () {
        accountMenu.click();
        logout.click();
    });
});
