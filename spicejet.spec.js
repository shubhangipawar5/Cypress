/// <reference  types = "Cypress"/>

describe('Book Airticket on spicejet' ,() => {
      // var DC
    it('Select the typye of trip ',() =>{
        cy.visit('https://www.spicejet.com/',{setTimeout:80000})
       
        const a=cy.get('#ctl00_mainContent_ddl_originStation1_CTXT').type("Pune")
        cy.log(a)
        expect($a.)
       

        
                
                
            

    })






})