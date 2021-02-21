const { expect } = require("chai")

describe('alerts using cypress',()=>{

    it('should able to work with alert one',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button1').click()
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('I am an alert box!')

        })
    })
})
it('vaildate confirm alerts in js ok',()=>{
    cy.visit('http://www.webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
            // expect(str).to.equal('Press a button!')
            return true;

        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
        it('vaildate confirm alerts in js ok',()=>{
            cy.visit('http://www.webdriveruniversity.com')
                cy.get('#popup-alerts').invoke('removeAttr','target').click()
                cy.get('#button4').click()
                cy.on('window:confirm',(str)=>{
                    // expect(str).to.equal('Press a button!')
                    return false;
        
                })
                cy.get('#confirm-alert-text').contains('You pressed Cancel!')
            })
            it('Modal pop cross button',()=>{
                cy.visit('http://www.webdriveruniversity.com')
                cy.get('#popup-alerts').invoke('removeAttr','target').click()
                cy.get('#button2').click()
                cy.get('.modal-body').contains('JavaScript')
                // cy.get('.close').click() //closes by cross button
                cy.get('#myModal > div > div > div.modal-header > button').click()//by close button
 
            })
            it('Modal pop cross button',()=>{
                cy.visit('http://www.webdriveruniversity.com')
                cy.get('#popup-alerts').invoke('removeAttr','target').click()
                cy.get('#button2').click()
                cy.get('.modal-body').contains('JavaScript')
        
                cy.get('button[type="button"][data-dismiss="modal"][class="btn btn-default"]').click()
            })
            it.only('Ajax Pop',()=>{
                cy.visit('http://www.webdriveruniversity.com')
                cy.get('#popup-alerts').invoke('removeAttr','target').click()
                cy.get('#button3').click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    
                    return false;
                })
                cy.wait(2000)
                cy.get('#button1').click()
                cy.get('.modal-title').contains('Well Done For Waiting....!!!')
                cy.get('button[type="button"][data-dismiss="modal"][class="btn btn-default"]').click()

            })