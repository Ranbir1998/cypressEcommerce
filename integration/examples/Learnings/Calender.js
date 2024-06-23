/// <reference types="Cypress"/>
import 'cypress-iframe'
describe('My Second Test Suite',function()

{
    it('My Third Test Case',function(){
        //test step
        const monthNumber="6";
        const date="15"
        const year="2027"
        const expectedList=[monthNumber,date,year];

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.wait(4000)
        cy.get('.react-date-picker__calendar-button__icon').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.contains("button",year).click()
        //for june eq(5)
        cy.get('.react-calendar__tile').eq(Number(monthNumber) -1).click()
        cy.contains("abbr",date).click();
        
        //Assertions
        cy.get('.react-date-picker__inputGroup__input').each(($el,index)=>
        {
          cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        })

       
    })

})