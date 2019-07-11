const { Given, When, Then } = require("cucumber");
var {By, until, Key} = require('selenium-webdriver');
const { expect } = require("chai");

Given("a variable set to {int}", function(number) {
  this.setTo(number);
});

When("I increment the variable by {int}", function(number, next) {
    this.driver.get(`http://localhost:8080/addition/${this.variable}/${number}`);
    next();
});

Then("the variable should contain {int}", function(number, next) {
    this.driver.wait(until.elementLocated(By.tagName('pre')));
    this.driver.findElements(By.tagName('pre'))
    .then(function(elements) {
        expect(elements.length).to.equal(1);
        expect(elements[0].getText()).to.equal(number);
        next();
    }).catch(function(next){
        // next();
    });
});