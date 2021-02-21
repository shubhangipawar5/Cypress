/// <reference  types = "Cypress"/>
describe('Check functionality for radio button', () => {

       it.skip('children () testcase to find children with specific properties', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#data-table').invoke('removeAttr','target').click({force:true})  
        cy.get('.breadcrumb.traversal-breadcrumb').children('.active').contains('Contact Us')  //here contains two cls names so we hv put . between two clsname in cy.get and then selected children
        cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')

})

it.skip(' closest testcase to find the closest element with closest method with the current reference and validate the property', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('#sugar').closest('ul').should('have.class','traversal-drinks-list')
})

it.skip('eq() to retrive any element based on the index', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.traversal-food-list >li').eq(2).contains('Banana')
    cy.get('.traversal-food-list >li').eq(2).should('have.text','Banana')
})

it.skip('find() to retrive any element present within the DOM', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.traversal-button-states').find('.disabled').contains('Warning')
    cy.get('div[data-toggle="buttons"]').find('.active').contains('Button-1')
   // cy.get('div[data-toggle="buttons"]').find('.active')..should('have.text','Button-1')  ///or as below
   cy.get('div[data-toggle ="buttons"]').find('button.active').should('have.text','Button-1')
})

it.skip('first() to retrive the first element with the DOM', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.traversal-drinks-list >li').first().should('have.text','Coffee')

})
it.skip('last() to retrive the last element with the DOM', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.menu >li').last().should('have.text','Sales')

})
it.skip('last() to retrive the last element with the DOM', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.traversal-drinks-list>li').last().should('have.text','Sugar')

})

it.skip('filter() to retrive the specific element with the DOM', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('button').filter('.disabled').should('have.text','Warning')
    //below is tried by me
    cy.get('.traversal-button-other-states > div > button').filter('.btn.btn-primary.active').should('have.text','Button-1') 
})

it.skip('nextAll() to retrive the siblings from the given specific elements', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.traversal-drinks-list >li').contains('Coffee').nextAll().should('have.length',4)
    //below is tried by me
    cy.get('.traversal-drinks-list >li').contains('Tea').next().should('have.text','Milk')
    cy.get('.traversal-drinks-list >li').contains('Tea').nextAll().should('have.length',3)

})
it.skip('nextUntil() to retrive specific sibling elements with the given range', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('#coffee').nextUntil('#espresso').should('have.length',2)
    


})

it.skip('not() to remove the elements from the set of elements from the DOM', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.traversal-button-states >button').not('.disabled').should('have.length',3)
     //below is tried by me
    cy.get('.traversal-button-other-states > div >button').not('.active').should('have.length',3)

})

it.skip('parent()(only one parent) to give the parent of the DOM elements', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.list-group-item.badge-text').eq(1).parent().should('have.class','list-group')
    //below is tried by me
    cy.get('#coffee').parent().should('have.class','traversal-drinks-list')
    cy.get('.list-header').eq(0).parent().should('have.class','traversal-food-list')  // fruit list
    cy.get('.list-header').eq(1).parent().should('have.class','traversal-food-list')  //vegetable list
    cy.get('.list-header').eq(2).parent().should('have.class','traversal-job-list')   //job list
 
})

it.skip('parents()to give the (main parent i.e parent of parent )parents of the DOM elements (you can verify any properties)', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('.list-group-item.badge-text').eq(1).parents().should('have.class','thumbnail')
    //below is tried by me
    cy.get('.list-header').eq(0).parents().should('have.class','thumbnail') 
    cy.get('#coffee').parents().should('have.class','thumbnail') 
})
//8888sir vl tell later below code
// it('prev()to give previous element in the DOM from the given element', () => {
//         cy.visit('http://www.webdriveruniversity.com')
//         cy.get('#data-table').invoke('removeAttr', 'target').click()
//         cy.wait(10000)
//         cy.get('a.page-link').eq(2).prev().contains('1')
//        // cy.get('a[class="page-link"]').eq(2).prev().contains('1')

//     })
it.skip('prev()to give previous element in the DOM from the given element', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    //cy.wait(10000)
    cy.get('#sugar').prev().contains('Espresso')
    //below is tried by me
    cy.get('.sales').prev().should('have.text','Technology')
})

it.skip('prevAll() to gives you the all previous elements from the given position)', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('#sugar').prevAll().contains('Coffee')
    cy.get('#sugar').prevAll().should('have.length',4)
})
it.skip('prevUntil() gives elements with the specified elements (not including))', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('#sugar').prevUntil('#coffee').should('have.length',3)

})


it.only('sibling() gives elements with the specified elements)', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#data-table').invoke('removeAttr', 'target').click()
    cy.get('#sugar').siblings().should('have.length','4')
    cy.get('#sugar').siblings().should('have.text','CoffeeTeaMilkEspresso')
})
})