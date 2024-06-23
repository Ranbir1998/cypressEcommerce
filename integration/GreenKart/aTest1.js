/// <reference types="Cypress"/>
describe('My first Test Suite',function()      ///test suite

{
    it('My first Test Case',function(){////spec file(test cases can be multiple)
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(4000)
        //get in cypress is findelement
        //should is use as an assertion
        //visible is used for visible elements
        //Here the scope is on the full page
        cy.get('.product:visible').should('have.length',4)
        
        //we cannot throw cypress command into a variable because promise is a headache
        //wso we'l use aliasing
        cy.get('.products').as('productLocator')


        //Here the scope is only inside .product
        cy.get('@productLocator').find('.product').should('have.length',4)
        //gets the second products with the help of eq
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('sf')
        })

        //console.log('sf') this will print in dev tools of the browser
    


        //loops
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
           const textVeg=$el.find('h4.product-name').text()
           if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click();
            }

        })
        //assert if logo text is displayed
        cy.get('.brand').should('have.text','GREENKART')

        //promise for running in sequence for non-cypress elements (text)
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
        //cy.log(logo.text())
    })




    

})