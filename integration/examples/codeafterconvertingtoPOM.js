/// <reference types="Cypress"/>
import homePage from "../Pageobjects/homePage";
import productPages from "../Pageobjects/productPages";

describe("My first Test Suite", function () ///test suite

{
  before(function () {
    //runs once before every tests
    cy.fixture("example").then(function (data) {
      //since the scope is only inside therefore for having scope outside we use this keyword
      this.data = data;
    });
  });

  it("My first Test Case", { defaultCommandTimeout: 8000 }, function () {
    ////spec file(test cases can be multiple)
    //Cypress.config('defaultCommandTimeout', 8000) // explicit wait spec level
    const PP = new productPages();
    const HP = new homePage();
    //using env variables
    //
    cy.visit(Cypress.env("url") + "/angularpractice/");
    //cy.visit('https://rahulshettyacademy.com/angularpractice/')

    HP.getEditBox().type(this.data.name);
    //cy.get("div[class='form-group'] input[name='name']").type(this.data.name)

    HP.getGender().select(this.data.gender);
    //cy.get('select').select(this.data.gender)

    HP.getTwoWayDataBinding().should("have.value", this.data.name);
    //cy.get("h4  input[name='name']").should('have.value',this.data.name)

    HP.getEditBox().should("have.attr", "minlength", "2");
    //cy.get('div[class="form-group"] input[name="name"]').should('have.attr','minlength','2')

    cy.get("input[value='option3']").should("be.disabled");

    HP.getshoptab().click();
    //cy.get(':nth-child(2) > .nav-link').click()

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    PP.getcheckout().click();
    //cy.get(".nav-link.btn.btn-primary").click()

    PP.pricesadded();

    PP.finalcheckout().click();
    //cy.contains('Checkout').click()

    //Cypress.config('defaultCommandTimeout', 8000)  //from this line it will be applied explicit
    PP.selectcountry();
  });
});
