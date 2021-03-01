//********************************************************************************************
//*    Guru99 eCommerce Live Project    
//*      Day-2 Tc               
//********************************************************************************************
/*      
Test Steps:
1. Goto http://live.demoguru99.com/
2. Click on �MOBILE� menu
3. In the list of all mobile , read the cost of Sony Xperia mobile (which is $100)
4. Click on Sony Xperia mobile
5. Read the Sony Xperia mobile from detail page. Product value in list and details page should be equal ($100). 
*/

describe('My TestSuit For E-commerce', function () {

    it('Verify that cost of product in list page and details page are equal', function () {
        var Prise
        var cmpPrise
        cy.visit("http://live.demoguru99.com/index.php/mobile.html", { timeout: 90000 })
        // cy.get('.item last',{timeout:10000})
        cy.get('.product-info').find('.product-name').each(el => {
            //cy.log(el.text())
            if (el.text() == 'Sony Xperia') {
                cy.get('.price').then(el => {
                    Prise = el.eq(0).text()
                    // cy.log(el.eq(0).text())
                    // var itemPrice = el.eq(0).text().split('$')
                    // cy.log(itemPrice)
                })
                cy.wrap(el).click()
                cy.get('.price').each(el => {
                    cmpPrise = el.text()
                    //cy.log(cmpPrise)
                })

            }
        }).then(() => {
            expect(Prise).to.equals(cmpPrise)
        })


    })
})
