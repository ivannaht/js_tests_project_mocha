const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const BasePage = require ('../pages/basepage');

class HomePage extends BasePage {
   
    async enter_url(theURL) {
        await this.go_to_url(theURL);
    }
    
    async clickSignInLink() {
        await driver.findElement(By.xpath('//a[@id="signin"]')).click();        
    }
}

module.exports = new HomePage();
