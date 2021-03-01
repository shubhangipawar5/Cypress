/// <reference types="cypress" />
//********************************************************************************************
//*    Guru99 eCommerce Live Project    
//*                     
//*                                                                                                                                                       *
//********************************************************************************************
/*      
Test Steps:
1. Goto http://live.demoguru99.com/
2. Click on �MOBILE� menu
3. In the list of all mobile , click on �ADD TO CART� for Sony Xperia mobile
4. Change �QTY� value to 1000 and click �UPDATE� button. Expected that an error is displayed 
   "The requested quantity for "Sony Xperia" is not available.
5. Verify the error message
6. Then click on �EMPTY CART� link in the footer of list of all mobiles. A message "SHOPPING CART IS EMPTY" is shown.
7. Verify cart is empty
*/


describe('My TestSuit For E-commerce', function () {
    it('Verify that you can not add more than one the ProductName available in cart', function () {
        cy.visit('/', { timeout: 90000 })
        cy.get('.level0 ').eq(1).click()
        cy.get('ul > li:nth-child(1) > div > div.actions > button > span > span').click()
        cy.get('#shopping-cart-table > tbody > tr > td.product-cart-actions > input').click().clear().type(1000)
        cy.get('#shopping-cart-table > tbody > tr > td.product-cart-actions > button > span > span').click()
        cy.get('p[class="item-msg error"]')
            .should('contain', '* The maximum quantity allowed for purchase is 500.')
        cy.get('#empty_cart_button > span > span').click()
        cy.get('body > div > div > div.main-container.col1-layout > div > div > div.page-title > h1')
            .should('have.text', 'Shopping Cart is Empty')
    })
})
