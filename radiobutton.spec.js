/// <reference  types = "Cypress"/>
describe('Validating the functionality of Radio button box',()=>{
    it.skip('verify whether the radio button pumpkin is already  is checked',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
        //cy.get('input[type = "radio"]').eq(1).check().should('be.checked')
        //cy.get('input[type = "radio"]').first().check().should('be.checked')
       cy.get("#radio-buttons").find('input[type = "radio"]').each(($el)=>{
           ($el).click()
       })
           
    })
    it.skip('check uncheck function for check box',()=>{

        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
        cy.get('input[value="pumpkin"]').check().should('be.checked')
        cy.get('input[value="lettuce"]').should('not.be.checked')
        cy.get('input[value="lettuce"]').check().should('be.checked')
        cy.get('input[value="pumpkin"]').should('not.be.checked')
        cy.get('input[value = "cabbage"]').should('be.disabled')
        cy.get('#fruit-selects').select('Grape')
        cy.get('#fruit-selects').select('Grape').should('have.value','grape')

    })
})