const { Given, When, Then,} = require("@badeball/cypress-cucumber-preprocessor");
import homePage from '../../../Pageobjects/homePage'
import productPages from '../../../Pageobjects/productPages'

const PP= new productPages()
const HP= new homePage()
let name
let gender

before(function()  
{
   //runs once before every tests
   cy.fixture('example').then(function(data)
{
    //since the scope is only inside therefore for having scope outside we use this keyword
this.data=data
})  

})

Given('I open ecommerce Page',function()
{
    cy.visit(Cypress.env('url')+"/angularpractice/");
});

When('I add items to cart',function()
{
    HP.getshoptab().click()
    //cy.get(':nth-child(2) > .nav-link').click()
    
    this.data.productName.forEach(function(element)
    {
        cy.selectProduct(element)
    })
})

When('Validate the total prices',function()
{
    PP.getcheckout().click();       
    PP.pricesadded();
})

Then('select the country submit and verify Thankyou',function()
{
    
    PP.finalcheckout().click()
})

When('I fill the form details',function(dataTable)  //calling from .feature file
      //0th index is [name,Gender]
{     //1st index is [Apurva,Female]
    let name=dataTable.rawTable[1][0]
    let gender=dataTable.rawTable[1][1]
    HP.getEditBox().type(dataTable.rawTable[1][0])
    HP.getGender().select(dataTable.rawTable[1][1])
    
})

Then('I validate the form behaviour',function()
{
    
    // HP.getTwoWayDataBinding().should('have.value',name)
    // HP.getEditBox().should('have.attr','minlength','2')
    //cy.get("input[value='option3']").should('be.disabled')
})

When('select the Shop Page',function()
{
    HP.getshoptab().click()
})