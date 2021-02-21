/// <reference  types = "Cypress"/>
describe('Navigation in cypres',()=>{
    it('going backward',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').as('contactUS')
        cy.get('@contactUS').then(($el) =>{
            $el.attr("target","_self")
        })
        cy.get('@contactUS').click()
        cy.go("back")
        cy.title('QA Uni Welcome Video from Salvatore Bruno on Vimeo')
        // cy.document().then(()=>{
        //     expect(document.title).to.equal('QA Uni Welcome Video from Salvatore Bruno on Vimeo')
    })
    it('going forward',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').as('contactUS')
        cy.get('@contactUS').then(($el) =>{
            $el.attr("target","_self")
        })
        cy.get('@contactUS').click()
        cy.go('back')
        cy.go('forward')
        cy.reload
        cy.title('QA Uni Welcome Video from Salvatore Bruno on Vimeo')
    })
    
    it('going backward with -1',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').as('contactUS')
        cy.get('@contactUS').then(($el) =>{
            $el.attr("target","_self")
        })
        cy.get('@contactUS').click()
        cy.go(-1)
        cy.reload()
        //cy.title()
        // verify the title

    })
    it.only('going forward with 1',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#contact-us').as('contactUS')
        cy.get('@contactUS').then(($el) =>{
            $el.attr("target","_self")
        })
        cy.get('@contactUS').click()
        cy.go(-1)
        cy.go(1)
        cy.reload()
        //cy.title()
        // verify the title

    })

})
