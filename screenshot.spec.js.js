/// <reference types="cypress" />
describe('Screenshot in cypress', function () {
    it('screenshot ', function () {
        cy.visit('/', { timeout: 9000 })
        //cy.get('.level0 ').eq(1).click()
        //cy.screenshot()  // for entire page
        //expect(true).to.have(false)   //default setting can be changed in cypress.json from config folder// screenshot on failure
        //cy.get('.level0 ').screenshot()  //screenshot for perticular element
    })
})



 //1.screenshot for complete page
 //2.screenshot for perticular element
 //3. screenshot on failure
 //MEAN MERN