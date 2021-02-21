                    /// <reference  types = "Cypress"/>
// describe('veryfy the contact us form',()=>{
//     it('with all mandatory input',()=>{
//       cy.visit('https://automationteststore.com/')
//       cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').as('contactUs')   --here we have used .as is a aliase given name contact us for long css selector
//       cy.get('@contactUs').click()
//       cy.url().then(($curnturl)=>{   ---.then is promise in javascrit here used to get url and curnturl checks the contains or endswith  ethod,,in this console.log is written and outer to this cy.log is written
//           $curnturl.endsWith('contact')
//           cy.get('#ContactUsFrm > h3').should('have.text','Contact Us Form')  ---shpuld hv confirms the text given is available
//           cy.get('#ContactUsFrm_first_name').type('Aayush')
//           cy.get('#ContactUsFrm_email').type('aayushpawar@yahoo.com')
//           cy.get('#ContactUsFrm_email').should('have.attr','name','email')   --sould hv attribute checks the atttribut name and value in the selected element
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