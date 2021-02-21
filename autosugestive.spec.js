/// <reference  types = "Cypress"/>
describe('Validating the functionality of check box',()=>{
    it('verify whether the checkbox is checked',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get(' #autocomplete-textfield ').invoke('removeAttr','target').click({force:true})
        cy.get('#myInput').type('B')
        cy.get('#myInputautocomplete-list >*').each(el => {
             
            if (el.text() === 'bacon') {
                el.click();
            }
            
        })
        cy.get('#submit-button').click()
        cy.url().should('include', '').then(()=>{
            cy.get('#myInput').type('g')
        cy.get('#myInputautocomplete-list >*').each(el => {
             
            if (el.text() === 'Grapes') {
                el.click();
            }
            
        })
        cy.get('#submit-button').click()
        cy.url().should('include', 'Grapes')

        })
       
    })
})