/// <reference types="Cypress"/>
import 'cypress-iframe'
describe('My Second Test Suite',function()

{
    it('My Third Test Case',function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
       
})

})