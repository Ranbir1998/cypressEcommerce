/// <reference types="Cypress"/>
const neatCSV = require('neat-csv')
let productName
describe("JWT Session", function () {
  it("is logged in through local storage", async function () {
    //we can manualy inject a token for login beacuse we placed a JWT session
    //Test to make a login
    //from cypress commanda
    cy.LoginAPI().then(function() 
    {
      cy.visit("https://rahulshettyacademy.com/client", 
        {
        onBeforeLoad: function(window) 
        {
        window.localStorage.setItem('token', Cypress.env('token'));
        }
      })
    })
    cy.get(".card-body b").eq(1).then(function(ele)
    {
    productName = ele.text();
    })
    cy.get('.card-body button:last-of-type').eq(1).click()
    cy.get("button[routerlink='/dashboard/cart']").click()
    cy.contains('Checkout').click()
    cy.get("input[placeholder='Select Country'").type("ind")
    cy.get('.ta-item.list-group-item.ng-star-inserted').each(($el,index,$list)=>
    {
      if($el.text() ===" India")
        {
          cy.wrap($el).click()
        }
    })
    cy.get(".btnn.action__submit.ng-star-inserted").click({force: true})
    cy.wait(2000)
    cy.contains('Click To Download Order Details in Excel').click()
    //Cypress.config("fileServerFolder")  hardcoding paths
    //converting text to js object
    //cy.readFile("C:\Users\ranbi\CypressAutomation\cypress\downloads\order-invoice_ranbirsingh4321.xlsx")
    cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_ranbirsingh4321.xlsx")
    .then(async (text)=>
    {
    const csv = await neatCSV(text)
    console.log(csv)
    const ACTUALpRODUCTcsv=csv[0]["Product Name"]
    expect(productName).to.equal(ACTUALpRODUCTcsv)
    })
    
    
  })
})
