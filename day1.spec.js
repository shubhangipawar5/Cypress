/// <reference types="cypress" />
//********************************************************************************************
//*                                                                                          *
//*    Guru99 eCommerce Live Project                                                         *
//*    Day 1 - TestCase 1                                                                    *
//*                                                                   *                                                                                      *

//********************************************************************************************
/*  

Test Steps
Step 1. Goto http://live.demoguru99.com/
Step 2. Verify Title of the page
Step 3. Click on �MOBILE� menu
Step 4. Verify Title of the page
Step 5. In the list of all mobile , select �SORT BY� dropdown as �name�
Step 6. Verify all products are sorted by name
*/



describe('My TestSuit For E-commerce', function () {
    var sortedarr = ['Sony Xperia', 'Samsung Galaxy', 'IPhone'].sort()
    var arr = []
    var string
    var i = 0;
    it('Verify that the ProductName is Sorted By Name', function () {

        cy.visit("http://live.demoguru99.com/index.php/", { timeout: 90000 })
        cy.title().should('eq', 'Home page')
        cy.get('.level0 ').eq(1).click()
        cy.title().should('contain', 'Mobile')
        cy.get('select[title="Sort By"]').first().select('Name')
        cy.get('div.category-products > ul > li div > h2 > a').each((el, i) => {
            //cy.log(el.text())

            string = el.text()
            arr.push(string)
            // expect(el.text()).to.equal(sortedarr[i])   //or
            expect(sortedarr[i], 'COMPARE WITH SORTED NAME LIST').to.equal(arr[i])

        })
        cy.log(arr)
    })
    //same testCase
    it.skip('visit the page', () => {

        cy.visit('http://live.demoguru99.com/')
        cy.title().should('eq', 'Home page')
        // cy.xpath('//a[contains(text(),"Mobile")]').click()
        //cy.get('h1').should('contain', 'Mobile')
        // cy.title().should('eq', 'Mobile')
        let beforesort = []
        let aftersort = []
        let aftersort2 = []
        let sortedarray = ['Sony Xperia', 'IPhone', 'Samsung Galaxy'].sort()
        cy.log(sortedarray)

        cy.get('div.category-products > ul > li div > h2 > a').each($value => {
            beforesort.push($value.text())
        })
        cy.get('.category-products > :nth-child(1) > .sorter > .sort-by > select').select('Name')
        cy.get('div.category-products > ul > li div > h2 > a').each(($value, i) => {
            aftersort.push($value.text())
            expect(beforesort[i], 'COMPARE WITH SORTED NAME LIST').to.not.equal(aftersort[i])
        })

        cy.log('LIST NOT SORTED YET, PLEASE TRY TO SORT AND THEN COMPARE')

        cy.get('div.category-products > ul > li div > h2 > a').each(($value, i) => {
            aftersort2.push($value.text())
            expect(sortedarray[i], 'COMPARE WITH MANUALLY SORTED LIST').to.be.equal(aftersort2[i])
        })

    })

})
