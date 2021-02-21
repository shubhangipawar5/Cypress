
describe('Learning Fixtures',()=>{


    
    before(()=>{
        cy.fixture('aliaseConcept').as('login')
         
    })
    it('Reading the data from  file',()=>{
        cy.get('@login').then((data) =>{
            cy.log(data.first_name)
            cy.log(data.email)
            cy.log(data.enquiry)
            
        // })
          cy.visit('https://automationteststore.com/')
                cy.get('#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a').click()
                cy.get('#ContactUsFrm_first_name').type(data.first_name)
                cy.get('#ContactUsFrm_email').type(data.email)
                cy.get('#ContactUsFrm_enquiry').type(data.enquiry)
            
    

              
})
})
})
