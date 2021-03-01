/*  Verify user is able to purchase product using registered email id(USE CHROME BROWSER)     
Test Steps:
1. Go to http://live.demoguru99.com/
2. Click on my account link
3. Login in application using previously created credential
4. Click on MY WISHLIST link 
5. In next page, Click ADD TO CART link
6. Enter general shipping country, state/province and zip for the shipping cost estimate
7. Click Estimate 
8. Verify Shipping cost generated 
9. Select Shipping Cost, Update Total 
10. Verify shipping cost is added to total 
11. Click "Proceed to Checkout"
12a. Enter Billing Information, and click Continue
12b. Enter Shipping Information, and click Continue
13. In Shipping Method, Click Continue
14. In Payment Information select 'Check/Money Order' radio button. Click Continue
15. Click 'PLACE ORDER' button 
16. Verify Oder is generated. Note the order number

NOTE: PROCEED TO CHECKOUT (step 6 ) was taken out, so as to allow the Estimate button step to get processed. 
      Rest of the steps renumbered accordingly. 
*/
///<reference types="cypress" />


//this test case is integrated in day5 to use previous registered credentials

describe('My TestSuit For E-commerce', function () {
    var subtotal;
    var shippingPrise;
    var grandTotal;
    var delvprice;
    var delvtotal;
    var shipcharge;
    it('Verify user is able to purchase product using registered email id', function () {
        cy.visit('/', { timeout: 90000 })
        cy.get('#header > div > div.skip-links > div > a', { force: true }).click()
        cy.get('#header-account > div > ul >li').contains('Log In').click()
        cy.EcomLogin('shjsdjshdjad@minskole.com', '12345678')
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1', { timeout: 6000 })
            .should('have.text', 'My Dashboard')
        cy.get('.level0').contains('TV').click()  //temporarily added this code
        cy.wait(5000)
        cy.get('.link-wishlist').eq(0).click()    //temporarily added this code
        cy.get(' div > div.block-content > ul > li:nth-child(8) > a').click()
        cy.get(' td.wishlist-cell4.customer-wishlist-item-cart > div > button > span > span').click()
        cy.get('div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('contain', 'LG LCD was added to your shopping cart.')
        cy.get('.cart-price > span').should('be.visible').and('contain', '$615.00')
        cy.get('.cart-price > span').eq(1).then((el) => {
            subtotal = parseInt(el.text().split('$').join().replace(/,/g, ""))
            cy.log(subtotal)
        })
        cy.get('tr > td:nth-child(2) > strong > span').then((gtotal) => {
            grandTotal = parseInt(gtotal.text().split('$').join().replace(/,/g, ""))
            expect(grandTotal).to.equals(subtotal)

        })
        var country = cy.get('#country').select('United States')
        var city = cy.get('#region_id').select('California')
        var adrress = city + " , " + country + " , " + " 90001"
        cy.log(adrress)
        cy.get('#postcode').type('90001')
        cy.get('.button.btn-proceed-checkout.btn-checkout').eq(1).click()
        cy.get('input[type="radio"]').eq(0).should('be.checked')
        cy.get('#billing-buttons-container > button > span > span').click()
        cy.get('#checkout-shipping-method-load > dl > dd > ul > li > label > span').then((price) => {
            shippingPrise = parseInt(price.text().split('$').join().replace(/,/g, ""))
            cy.log(shippingPrise)
        })

        ///By Money Order
        cy.get('#shipping-method-buttons-container > button > span > span').click()
        cy.get('#p_method_checkmo').check().should('be.checked')
        cy.get('#payment-buttons-container > button > span > span').click()
        cy.get('.product-details > p > a').should('contain', 'LG LCD')
        cy.get('#checkout-review-table > tbody > tr > td.a-right.last > span > span').then((el) => {
            delvprice = parseInt(el.text().split('$').join().replace(/,/g, ""))
            expect(delvprice, 'Subtotal is matching').to.be.eq(subtotal)
        })
        cy.get('#checkout-review-table > tfoot > tr:nth-child(2) > td.a-right.last > span').then((shipcharges) => {
            shipcharge = parseInt(shipcharges.text().split('$').join().replace(/,/g, ""))
        })
        cy.get('#checkout-review-table > tfoot > tr.last > td.a-right.last > strong > span').then((shipTotal) => {
            delvtotal = parseInt(shipTotal.text().split('$').join().replace(/,/g, ""))
            const orderprice = parseInt(subtotal + shipcharge)
            expect(delvtotal, 'Verify Shiping prise is added in subtotal which is finally equal to Grandtotal')
                .to.eq(orderprice)
        })
        cy.get('#review-buttons-container > button > span > span').click()
        cy.get('div.main-container.col1-layout > div > div > div.page-title > h1').should('have.text', 'Your order has been received.')
        cy.get('div.main-container.col1-layout > div > div > p > a').then((order) => {
            const orderNo = order.text()
            cy.log('your orderNumber is ' + " :" + orderNo)

        })

    })
})







///By credit card
//cy.get('#shipping-method-buttons-container > button > span > span').click()
// cy.get('#p_method_ccsave').check().should('be.checked')
// cy.get('#ccsave_cc_owner').type('shubhangi Pawar')
// cy.get('#ccsave_cc_type').select('Visa')
// cy.get('#ccsave_cc_number').type('1234 45678 1256')
// cy.get('#ccsave_expiration').select('7')
// cy.get('#ccsave_expiration_yr').select('2026')
// cy.get('#ccsave_cc_cid').type('7890')
// cy.get('#payment-buttons-container > button > span > span').click()































