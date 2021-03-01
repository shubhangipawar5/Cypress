
/*     Verify can create an account in e-Commerce site and can share wishlist to other poeple using email.  
Test Steps:
1. Go to http://live.demoguru99.com/
2. Click on my account link
3. Click Create an Account link and fill New User information 
4. Click Register
5. Verify Registration is done. Expected account registration done.
6. Go to TV menu
7. Add product in your wish list - use product - LG LCD
8. Click SHARE WISHLIST 
9. In next page enter Email and a message and click SHARE WISHLIST
10.Check wishlist is shared. Expected wishlist shared successfully. 

*/

/// <reference types="cypress" />
describe('My TestSuit For E-commerce', function () {
    var name = Math.random().toString() + 'cypress'
    var sirname = Math.random().toString() + 'js'
    var email = Math.random().toString() + '@ABC.com'
    var password = Math.random().toString() + '@guru99'
    it('Verify can create an account in e-Commerce site and can share wishlist to other poeple using email.', function () {
        cy.visit('/', { timeout: 90000 })
        cy.get('#header > div > div.skip-links > div > a', { force: true }).click()
        cy.get('#header-account > div > ul >li').contains('My Account').click()
        cy.get('a[title="Create an Account"]').click()
        cy.get('#firstname').type(name)
        cy.get('#lastname').type(sirname)
        cy.get('#email_address').type(email)
        cy.get('#password').type(password)
        cy.get('#confirmation').type(password)
        cy.wait(5000)
        cy.get('.checkbox').check().should('be.checked')
        cy.get('#form-validate > div.buttons-set > button > span > span', { timeout: 9000 }).click()
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span')
            .should('contain', 'Thank you for registering with Main Website Store.')
        cy.get('.level0').contains('TV').click()
        cy.wait(5000)
        cy.get('.link-wishlist').eq(0).click()
        cy.get('button[title="Share Wishlist"]').click()
        cy.get('#email_address').type(email)
        cy.get('#message').type('i am sharing my wishlist !')
        cy.wait(5000)
        cy.get('#form-validate > div.buttons-set.form-buttons > button').click()
        cy.get('.my-wishlist').should('contain', 'Your Wishlist has been shared.').and('contain', 'LG LCD')

    })
    var subtotal;
    //below is day 6 code
    it('Verify user is able to purchase product using registered email id', function () {
        cy.visit('/', { timeout: 90000 })
        cy.get('#header > div > div.skip-links > div > a', { force: true }).click()
        cy.get('#header-account > div > ul >li').contains('Log In').click()
        cy.EcomLogin(email, password)
        cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1', { timeout: 6000 })
            .should('have.text', 'My Dashboard')
        cy.get(' div > div.block-content > ul > li:nth-child(8) > a').click()
        cy.get('button[title="Add to Cart"]').click()
        cy.get('div.main-container.col1-layout > div > div > div > ul > li > ul > li > span').should('contain', 'LG LCD was added to your shopping cart.')
        cy.get('.cart-price > span').should('be.visible').and('contain', '$615.00')
        cy.get('.cart-price > span').eq(1).then((el) => {
            subtotal = el.text()
            cy.log(subtotal)
        })
        cy.get('tr > td:nth-child(2) > strong > span').then((gtotal) => {

            expect(gtotal.text()).to.equals(subtotal)

        })



    })

})



























