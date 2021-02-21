describe('Learning Environments',()=>{
    
    before(()=>{
        cy.fixture('automationContactus').as('login')
       
    })
    
                it('Reading the data from the first file',()=>{
                    cy.get('@login').then(data=>{
                        cy.log(Cypress.env('username'))
                        cy.log(data.email)
                        cy.log(data.enquiry)
    
                    })
           
            
    
    })
    
    
    })
    
    
        
    
    
    
    