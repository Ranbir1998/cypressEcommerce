class homePage
{

getEditBox()
{
    return cy.get('div[class="form-group"] input[name="name"]')
}

getTwoWayDataBinding()
{
    return cy.get("div[class='form-group'] input[name='name']")
}
getGender()
{
    return cy.get('select')
}
getshoptab()
{
   return cy.get(':nth-child(2) > .nav-link')
}

}





 // make available to other files of the framework
export default homePage