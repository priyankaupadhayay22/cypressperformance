const chai = require('chai');
import Login from "../../Pageobjects/Loginpage.JS";
import Notifications from "../../Pageobjects/Notifications.js";
import dailyrepo from "../../Pageobjects/Daily report.js";
import DAweeklyreport from "../../Pageobjects/DAweeklyreport.js";
import Workflow from "../../Pageobjects/Workflow";
import Settings from "../../Pageobjects/Setting.js";

import { it } from "mocha";
describe('Login page', () => {
  before(() => {
    Cypress.config('defaultCommandTimeout', 10000);
  }); 
 

//from POM
it('LoginTest', () => {
  cy.visit('https://staging.performance.lmdmax.com')

  //first create object of class
  const ln=new Login();
  ln.setUserName('lmdtest94@gmail.com');
  ln.setPassword('Abcd@1234');
  ln.Clickbutton();
  
  cy.get('input[id="search_all_driver"]')  // Select the search field
  .should('be.visible')                 // Ensure it is visible
  .click()                              // Click to focus (if necessary)
  .type('aa');                   // Type the value
  cy.contains('div','Aarron Anthony Williams').click();
   cy.log('Typing aarron into the search field');

   //notifications

   const notify = new Notifications();
   notify.BadgeNotification();

   const aar = new dailyrepo();
   aar.Allalert();

  const DAweekly = new DAweeklyreport();
  DAweekly.NewDAreport(reportError);

  const wf = new Workflow();
  wf.Newreport(reportError);

  const set = new Settings();
  set.Adminlist();
  set.Addadmin();
  set.Editadmin();
  set.Deleteadmin();
  //set.Setthreshold();
  set.netemailreport();
  set.scoreemailreport();

  const prof = new Profile();
    prof.prof();
    prof.TOSprof();
    prof.pripol();
  
  });
});

 