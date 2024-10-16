import Login from "../../Pageobjects/Loginpage.JS";
import dailyrepo from "../../Pageobjects/Daily report.js";
import Settings from "../../Pageobjects/Setting.js";
import Profile from "../../Pageobjects/Profile.js";

import { it } from "mocha";
describe('Login page', () => {
  before(() => {
    Cypress.config('defaultCommandTimeout', 10000);
  }); 

it('LoginTest', () => {
  cy.visit('https://staging.performance.lmdmax.com')

  //first create object of class
  const ln=new Login();
  ln.setUserName('lmdtest94@gmail.com');
  ln.setPassword('Abcd@1234');
  ln.Clickbutton();

 
  const prof = new Profile()
    prof.prof()
  })
})