var webdriver = require('selenium-webdriver');
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{

    constructor(){
        global.driver = driver;
    }

    async goToUrl(theURL){
        await driver.get(theURL);
    }

    async closeBrowser(){
        await driver.quit();
    }
}

module.exports = BasePage;
