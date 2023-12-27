const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const BasePage = require ('../pages/basepage');

class HomePage extends BasePage {
   
    async enter_url(theURL) {
        await this.go_to_url(theURL);
    }
    
    async clickSignInLink() {
        await driver.findElement(By.id('signin')).click();
    }

    async findOptions() {
       await driver.findElement(By.xpath('//div[@class="sort"]/select/option'));
    }

    async selectSecondDropdownOption() {
        const dropdown = await driver.findElement(By.xpath('//div[@class="sort"]/select'));
        dropdown.click();
        const secondOption = await driver.findElement(By.xpath('//option[@value="highestprice"]'));
        secondOption.click();         
    }
}

module.exports = new HomePage();
