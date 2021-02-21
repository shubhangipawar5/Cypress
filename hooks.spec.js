/// <reference  types = "Cypress"/>
describe('concepts hooks in cypress', () => {
    beforeEach(() =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#data-table').invoke('removeAttr','target').click({force:true}) 
    })
    

    it('children () testcase to find children with specific properties', () => {
     
     cy.get('.breadcrumb.traversal-breadcrumb').children('.active').contains('Contact Us')  //here contains two cls names so we hv put . between two clsname in cy.get and then selected children
     cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')

})

it(' closest testcase to find the closest element with closest method with the current reference and validate the property', () => {

 cy.get('#sugar').closest('ul').should('have.class','traversal-drinks-list')
})

it('eq() to retrive any element based on the index', () => {

 cy.get('.traversal-food-list >li').eq(2).contains('Banana')
 cy.get('.traversal-food-list >li').eq(2).should('have.text','Banana')
})

it('find() to retrive any element present within the DOM', () => {
 cy.visit('http://www.webdriveruniversity.com')
 cy.get('#data-table').invoke('removeAttr', 'target').click()
 cy.get('.traversal-button-states').find('.disabled').contains('Warning')
 cy.get('div[data-toggle="buttons"]').find('.active').contains('Button-1')
// cy.get('div[data-toggle="buttons"]').find('.active')..should('have.text','Button-1')  ///or as below
cy.get('div[data-toggle ="buttons"]').find('button.active').should('have.text','Button-1')
})

it('first() to retrive the first element with the DOM', () => {

 cy.get('.traversal-drinks-list >li').first().should('have.text','Coffee')

})
it('last() to retrive the last element with the DOM', () => {
 
 cy.get('.menu >li').last().should('have.text','Sales')

})
it('last() to retrive the last element with the DOM', () => {

 cy.get('.traversal-drinks-list>li').last().should('have.text','Sugar')

})

it('filter() to retrive the specific element with the DOM', () => {

 cy.get('button').filter('.disabled').should('have.text','Warning')
 //below is tried by me
 cy.get('.traversal-button-other-states > div > button').filter('.btn.btn-primary.active').should('have.text','Button-1') 
})

it('nextAll() to retrive the siblings from the given specific elements', () => {
 
 cy.get('.traversal-drinks-list >li').contains('Coffee').nextAll().should('have.length',4)
 //below is tried by me
 cy.get('.traversal-drinks-list >li').contains('Tea').next().should('have.text','Milk')
 cy.get('.traversal-drinks-list >li').contains('Tea').nextAll().should('have.length',3)

})
it('nextUntil() to retrive specific sibling elements with the given range', () => {
 
 cy.get('#coffee').nextUntil('#espresso').should('have.length',2)

})

it('not() to remove the elements from the set of elements from the DOM', () => {

 cy.get('.traversal-button-states >button').not('.disabled').should('have.length',3)
  //below is tried by me
 cy.get('.traversal-button-other-states > div >button').not('.active').should('have.length',3)

})

it('parent()(only one parent) to give the parent of the DOM elements', () => {

 cy.get('.list-group-item.badge-text').eq(1).parent().should('have.class','list-group')
 //below is tried by me
 cy.get('#coffee').parent().should('have.class','traversal-drinks-list')
 cy.get('.list-header').eq(0).parent().should('have.class','traversal-food-list')  // fruit list
 cy.get('.list-header').eq(1).parent().should('have.class','traversal-food-list')  //vegetable list
 cy.get('.list-header').eq(2).parent().should('have.class','traversal-job-list')   //job list

})

it('parents()to give the (main parent i.e parent of parent )parents of the DOM elements (you can verify any properties)', () => {

 cy.get('.list-group-item.badge-text').eq(1).parents().should('have.class','thumbnail')
 //below is tried by me
 cy.get('.list-header').eq(0).parents().should('have.class','thumbnail') 
 cy.get('#coffee').parents().should('have.class','thumbnail') 
})

it('prev()to give previous element in the DOM from the given element', () => {

 cy.get('#sugar').prev().contains('Espresso')
 //below is tried by me
 cy.get('.sales').prev().should('have.text','Technology')
})

it('prevAll() to gives you the all previous elements from the given position)', () => {
 
 cy.get('#sugar').prevAll().contains('Coffee')
 cy.get('#sugar').prevAll().should('have.length',4)
})
it('prevUntil() gives elements with the specified elements (not including))', () => {

 cy.get('#sugar').prevUntil('#coffee').should('have.length',3)

})


it('sibling() gives elements with the specified elements)', () => {

 cy.get('#sugar').siblings().should('have.length','4')
 cy.get('#sugar').siblings().should('have.text','CoffeeTeaMilkEspresso')
})
})