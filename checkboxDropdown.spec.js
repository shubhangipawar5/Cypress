/// <reference  types = "Cypress"/>
describe('Validating the functionality of check box',()=>{
    it.skip('verify whether the checkbox is checked',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        // cy.get('#checkboxes > label:nth-child(1) > input[type=checkbox]').click()
        cy.get('#checkboxes > label:nth-child(1) > input[type=checkbox]').check().should('be.checked')
     

         })
         
    it.skip('verify whether the checkbox is uchecked',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        // cy.get('#checkboxes > label:nth-child(1) > input[type=checkbox]').click()
        cy.get('#checkboxes > label:nth-child(1) > input[type=checkbox]').check().should('be.checked')
        cy.get('#checkboxes > label:nth-child(1) > input[type=checkbox]').as('option-1')
        cy.get('@option-1').uncheck().should('not.be.checked')

    })
    it.skip('verifying the multiple selection within the check box',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        //cy.get('#checkboxes > label:nth-child(1) > input[type=checkbox]').click()
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
    })
    it.skip('verifying the multiple deselection within the check box',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        //cy.get('#checkboxes > label:nth-child(1) > input[type=checkbox]').click()
        cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4']).should('not.be.checked')
    })
    it.skip('verify functionality for Dropdown1',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-1').select('c#').should('have.value','c#')
        cy.get('#dropdowm-menu-1').select('C#').contains('C#')
     
    })
    it.skip('verify functionality for Dropdown2',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#dropdowm-menu-2').select('TestNG')  // here we took text beetween option 
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value','testng') // here to verify value we need to select value of option tag
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    })
    it('verify functionality for Dropdown3',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
        cy.get('#dropdowm-menu-3').select('HTML')
        cy.get('#dropdowm-menu-3').select('HTML').should('have.value','html')
        cy.get('#dropdowm-menu-3').select('HTML')
    })
})