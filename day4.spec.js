//********************************************************************************************
//*    Guru99 eCommerce Live Project    
//*                      
//*                                                                                                                                                        *
//********************************************************************************************
/*      
Test Steps:
1. Goto http://live.demoguru99.com/
2. Click on �MOBILE� menu
3. In mobile products list , click on �Add To Compare� for 2 mobiles (Sony Xperia & Iphone)
4. Click on �COMPARE� button. A popup window opens
5. Verify the pop-up window and check that the products are reflected in it
   Heading "COMPARE PRODUCTS" with selected products in it.
6. Close the Popup Windows
*/
/// <reference types="cypress" />
describe('My TestSuit For E-commerce', function () {
   it('Verify that you are able to compare two products', function () {
      const pop_url = 'http://live.demoguru99.com/index.php/catalog/product_compare/index/'
      var prod1 = 'Sony Xperia'
      var prod2 = 'IPhone'

      cy.visit('/', { timeout: 90000 })
      cy.get('.level0 ').eq(1).click()
      cy.get('ul > li:nth-child(2) > a').eq(1).click()
      cy.get('ul > li:nth-child(2) > a').eq(3).click()
      cy.get('button[title="Compare"]').click().should('have.attr', 'onclick')
      cy.window().then(win => {
         win.location.href = pop_url
         cy.get('body > div > div.page-title.title-buttons > h1').should('have.text', 'Compare Products')
         cy.get('.product-name > a').eq(0).should('have.text', prod1)
         cy.get('.product-name > a').eq(1).should('have.text', prod2)
      })


   })

})
