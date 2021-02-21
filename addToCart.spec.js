/// <reference  types = "Cypress"/>

const { add } = require("cypress/types/lodash")

describe('Checking the online store', () => {

    it.only('Add the specific element to the cart', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*="product/category&path"]').contains('Books').click()
        cy.selectProduct("Allegiant by Veronica Roth")
         cy.get('#product > fieldset > div:nth-child(4) > ul > li > a').click()
         cy.get('#main_menu_top > li:nth-child(3) > a > span').click({force:true})
         cy.get('table[class="table table-striped table-bordered"] tr td[class="align_left"] >a').should('have.text','Allegiant by Veronica Roth')
         cy.get('table > tbody > tr:nth-child(2) > td:nth-child(7) > a > i').click()
         //cy.get('div[class="contentpanel"]').should('have.text','Your shopping cart is empty!')
         cy.get('a[class="btn btn-default mr10"]').click()
   
        }) //here we can remove repetative code using commnads//
    it.skip('Add the specific element to the cart', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Books').click()
        cy.selectProduct("Paper Towns by John Green")

    })

    it.skip('Verify the login for the Recast',()=>{

        cy.login('amitchikte@gmail.com','9657363602')
        
        

    })

     
})
