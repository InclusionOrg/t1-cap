const { setWorldConstructor } = require("cucumber");
var {defineSupportCode} = require('cucumber');
var {Builder, By, until} = require('selenium-webdriver');

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});

class CustomWorld {
  constructor() {
    this.variable = 0;
    this.driver = new Builder().forBrowser("chrome").build();
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

// setWorldConstructor(CustomWorld);
defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld);
});
