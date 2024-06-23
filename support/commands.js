// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("selectProduct", (productname) => { 
cy.get('h4.card-title').each(($el, index, $list) => {

    if($el.text().includes(productname))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
})
})


// cypress/support/commands.js
Cypress.Commands.add("LoginAPI", () => {
    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {
        userEmail: "ranbirsingh4321@gmail.com",
        userPassword: "Abcd123$"
    }).then((response) => {
        expect(response.status).to.eq(200);
        // Getting the Response Body and the token
        // Creating an env variable called token from login API call
        Cypress.env("token", response.body.token);
    });
});


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
