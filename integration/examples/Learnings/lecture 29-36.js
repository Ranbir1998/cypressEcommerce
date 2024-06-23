/// <reference types="Cypress"/>
describe('My Second Test Suite',function()

{
    it('My Third Test Case',function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //check the checkbox
        //chai assertions libraries
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        // dynamic dropdowns
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==="India")
            {
                $el.click()
            }

        })
    
    cy.get('#autocomplete').should('have.value','India')

        //visible modes
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()

    //radio buttons

    cy.get("[value='radio2']").check().should('be.checked')

    //handle alerts
    cy.get('#alertbtn').click()
    //firing an event
    cy.on('window:alert',(str)=>
    {
        //Mocha framework
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    //handle confirm
    cy.get('#confirmbtn').click()
    cy.on('window:confirm',(str)=>
        {
            //Mocha framework
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    //handling child window
    //pages that opens in a new tab uses 'target' keyword
    //we use jquery to remove target attribute since cypress does not involve child window.The link should be on the same tab
    cy.get('#opentab').invoke('removeAttr','target').click();
    //we give the link with origin function and the code should be within the brackets
    cy.origin("https://www.qaclickacademy.com",()=>
        {
           cy.get("#navbarSupportedContent li:nth-child(4)").click();
           cy.get('.container h2:nth-child(2)').should('contain','Welcome to QAClick Academy ');
        })

        
        
         
    

        
    
    

    
})

})