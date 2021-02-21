                    /// <reference  types = "Cypress"/>
// describe('veryfy the contact us form',()=>{
//     it('with all mandatory input',()=>{
//       cy.visit('https://automationteststore.com/')
//       cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').as('contactUs')   
//       cy.get('@contactUs').click()
//       cy.url().then(($curnturl)=>{  
//           $curnturl.endsWith('contact')
//           cy.get('#ContactUsFrm > h3').should('have.text','Contact Us Form')  
//           cy.get('#ContactUsFrm_first_name').type('Aayush')
//           cy.get('#ContactUsFrm_email').type('aayushpawar@yahoo.com')
//           cy.get('#ContactUsFrm_email').should('have.attr','name','email')   
//           cy.get('#ContactUsFrm_email').should('have.attr','id','ContactUsFrm_email')
//           cy.get('#ContactUsFrm_enquiry').type('hello,give me info about cypress')
//           cy.get('#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button').click()
//       })

//     })
// })


// to check @ is missing then give error in email box

describe('validate contact us form',()=>{
it('with all mandatory inputs',()=>{
cy.visit('https://automationteststore.com/')
cy.get('#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a').click()
cy.get('#ContactUsFrm_first_name').type('aayush pawar')
cy.get('#ContactUsFrm_email').type("aayushpawaryahoo.com")
cy.get('#ContactUsFrm_enquiry').type("Hello , Give me info about cypress")
        cy.get('#ContactUsFrm > div.form-group > div.col-md-6.col-sm-6 > button').click()
        cy.get('#field_12 > span > div.element_error.has-error').should('have.text',' E-Mail Address does not appear to be valid!')
})
})
