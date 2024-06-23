/// <reference types="Cypress"/>

describe('My first Test Suite',function()      ///test suite

{
    before(function(){
       //runs once before every tests
       cy.fixture('example').then(function(data)
    {
        //since the scope is only inside therefore for having scope outside we use this keyword
    this.data=data
    })
       })

 it('My first Test Case',function(){////spec file(test cases can be multiple)
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //calling name with help of fixtures
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get("h4  input[name='name']").should('have.value',this.data.name)
        cy.get("div[class='form-group'] input[name='name']").should('have.attr','minlength','2')
        cy.get("input[value='option3']").should('be.disabled')
        //cy.pause()
       //shopping
        cy.get(':nth-child(2) > .nav-link').click()
        //from custom cypress commanda

        //1st method:
        //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')

        //2nd method
        //optimizing the code by parameterizing from json file
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        
      })




    

})































































































