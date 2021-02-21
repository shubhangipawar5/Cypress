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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



//cypress and commands below are the OBJECTS    
Cypress.Commands.add("selectProduct",productName =>{
    cy.get(".thumbnail .prdocutname").each($el => {
        if ($el.text().includes(productName)) {  
            cy.wrap($el).click({ force: true })
        }
    })

})
Cypress.Commands.add("login",(email,password) =>{
    cy.visit('https://app.recast.studio/auth/login/?ref=header-login')
    cy.get('#login-form_email').type(email)
    cy.get('#login-form_password').type(password)
    cy.get("button[type ='submit']").click()


})

// selectproduct is the command name and productName is an event on which we are calling call back function 
//also product name used as parameter to call function
