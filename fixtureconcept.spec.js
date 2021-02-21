describe('Learning Fixtures',()=>{
//     before(function(){
//         cy.fixture('automationContactus').then(function(data){
//             this.data=data
//              cy.log(data.first_name)
//              cy.log(data.email)
//              cy.log(data.enquiry)
//         })
//     })
    
//                 it('Reading the data from the first file',function(){
            
//                 cy.visit('https://automationteststore.com/')
//                 cy.get('#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a').click()
//                 cy.get('#ContactUsFrm_first_name').type(this.data.first_name)
//                 cy.get('#ContactUsFrm_email').type(this.data.email)
//                 cy.get('#ContactUsFrm_enquiry').type(this.data.enquiry)
            
    
// })
// ----using arrow function----------
before(()=>{
    cy.fixture('automationContactus').then((data)=>{
        globalThis.data=data   // global used due to this data can be accessed everywhere outside the before block globaly
         cy.log(data.first_name)
         cy.log(data.email)
         cy.log(data.enquiry)
    })
})

            it('Reading the data from the first file',()=>{
        
            cy.visit('https://automationteststore.com/')
            cy.get('#footer > footer > section.footerlinks > div > div.pull-left > div > ul > li:nth-child(5) > a').click()
            cy.get('#ContactUsFrm_first_name').type(data.first_name)
            cy.get('#ContactUsFrm_email').type(data.email)
            cy.get('#ContactUsFrm_enquiry').type(data.enquiry)
        

})


})


    



H78