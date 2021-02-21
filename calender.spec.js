
/// <reference types = "Cypress"/>
describe('calender using cypress',()=>{

    it.skip('should able to select date ',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.wait(5000)
        cy.get('#datepicker').invoke('removeAttr','target').click()
        cy.get('#datepicker').click()
        cy.get('.next').eq(0).click()
        cy.get('td[class="day"]').each(($el)=>{
            if ($el.text() === '25') {
                $el.click()   
                // cy.wrap(el).as('el')
                // cy.get('@el').click()
            }
        })

    })
})
