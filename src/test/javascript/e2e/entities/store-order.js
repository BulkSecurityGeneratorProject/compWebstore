'use strict';

describe('StoreOrder e2e test', function () {

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

    it('should load StoreOrders', function () {
        entityMenu.click();
        element(by.css('[ui-sref="store-order"]')).click().then(function() {
            expect(element.all(by.css('h2')).first().getText()).toMatch(/Store Orders/);
        });
    });

    it('should load create StoreOrder dialog', function () {
        element(by.css('[ui-sref="store-order.new"]')).click().then(function() {
            expect(element(by.css('h4.modal-title')).getText()).toMatch(/Create or edit a Store Order/);
            element(by.css('button.close')).click();
        });
    });

    afterAll(function () {
        accountMenu.click();
        logout.click();
    });
});
