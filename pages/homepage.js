const {Key} = require('selenium-webdriver');
var BasePage = require ('../pages/basepage');

class HomePage extends BasePage {
   
    async enter_url(theURL){
        await this.go_to_url(theURL);
    }    
}

module.exports = new HomePage();
