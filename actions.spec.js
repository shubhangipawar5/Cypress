/// <reference  types = "Cypress"/>
const { expect } = require("chai")

describe('Test mouse',() =>{
    it.skip('double with cypress',() =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').invoke('removeAttr','target').click()
        //cy.get('#double-click').dblclick()
        cy.get('#double-click').dblclick().should('have.attr','class','div-double-click double')
        cy.get('#double-click').should('have.class','div-double-click double')
    //     cy.get('#double-click').then((el) =>{
    //         expect(el).to.have.class('div-double-click double')
    //     })

    })
    it.skip('drag and drop element with cypress',() =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').invoke('removeAttr','target').click()
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
          // mouse leave not working
          //**//first hold element by mousedown  then mouse move on droppable and yhen leave by mouseup
        // remember to move the mouse
        cy.get('#droppable').contains('Dropped!')

    })
    it.skip('drag and drop element with cypress',() =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').invoke('removeAttr','target').click()
       cy.get('#click-box').trigger('mousedown',{which:1}).should('have.css','background-color','rgb(0, 255, 0)')
        cy.get('#click-box').contains('Well done! keep holding that click now.....')
        
    })
    it.only('Display alert element on mouseover with cypress',() =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#actions').invoke('removeAttr','target').click()
       //cy.get('.dropbtn').eq(1).trigger('mouseover',{which:1})
       /////cy.get('.hover > .dropbtn').trigger('mouseover',{which:1})
       //cy.get('#div-hover > div.dropdown.hover > div > a').should('be.visible',{force:true}) --not working then used promise
    //   cy.get('#div-hover div >button').eq(1).trigger('mousemove')
    //   cy.get('#div-hover div >button').eq(1).then(($el)=>{
    //        ($el).text('Link 1')
    //    })
       
             cy.get('#div-hover div >button').eq(0).trigger('mousemove')
             cy.get('#div-hover div >button').eq(0).should('be.visible')
             cy.get('#div-hover div >button').eq(0).trigger('mousemove').then(($el)=>{
                 ($el).text('Link 1')
             })
            
       
       })
            
    })

