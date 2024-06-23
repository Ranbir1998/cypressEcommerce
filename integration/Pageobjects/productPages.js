class productPages
{
getcheckout()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

finalcheckout()
{
    return cy.contains('Checkout')
}

pricesadded()
{
    var sum=0
    var vars=0
     return cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>
        {
        //cy.log($el.text());
        //spliting RS. 40000
        //res[0]=Rs.
        //res[1]=40000
        const actualText=$el.text()
        var res=actualText.split(" ")
        //trim removes extra spaces
        res=res[1].trim()
        sum=Number(sum)+Number(res)
        
        }).then(function()
        {
        cy.log(sum)
       
            
     return cy.get('h3 strong').then(function(element)
     {
     const AC=element.text()
     var BC=AC.split(".")
     vars=BC[1].trim()
     
     
     expect(Number(vars)).to.equal(sum)
    })
    })
}

selectcountry()
{
    cy.get('#country').type('India')
    cy.get('.suggestions ul li').click()
    cy.get('#checkbox2').click({force:true})
    cy.get("input[type='submit']").click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element)
    {
    const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true
    })

}
}

export default productPages