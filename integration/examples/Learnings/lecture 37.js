    /// <reference types="Cypress"/>
    describe('My Second Test Suite',function()

    {
        it('My Third Test Case',function(){
            //test step
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

            //handling web tables 
            cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
                const text=$el.text()
                if(text.includes("Python"))
                    {//next moves to next sibling method
                        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                        {//resolving promise using then
                            const priceText=price.text()
                            expect(priceText).to.equal('25')
                        })
                    }
        
                })
            //handling mouse hover
            //invoke method helps to show invisible options
            cy.get('.mouse-hover-content').invoke('show')
            cy.contains('Top').click()
            cy.url().should('include','top')

            //Alternativley just use {force:true} to handle hidden elements
            //cy.contains('Top').click({force:true})
            //cy.url().should('include','top')
        

        //handling child window
        cy.get('#opentab').then(function(el){
            const url=el.prop('href')
            cy.visit(url)

            
            cy.origin(url,()=>
                {
                    
                    cy.get("#navbarSupportedContent li:nth-child(4)").click();
                    cy.get('.container h2:nth-child(2)').should('contain','Welcome to QAClick Academy ');
                })
        })
    })
})