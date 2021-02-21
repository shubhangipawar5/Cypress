

/// <reference  types = "Cypress"/>const { expect } = require("chai")

describe('Check functionality for tables data', ()=>{
    it.only('sum up all the Age values to be equal to 322',()=>{

        var sum = 0
        //cy.visit('http://www.webdriveruniversity.com')
        cy.visit('/'+"Data-Table/index.html")   //baseUrl concept  used 
        //scy.get('#data-table').invoke('removeAttr','target').click()
        cy.get('#thumbnail-1 tr td:nth-child(3)').each($el =>{
            sum += Number($el.text())
            //cy.log(sum)
        }).then(()=>{
            expect(sum).to.eq(322)
        })

    })
    it.skip('to check the  age of Woods (using next method)  to be equal to 80',()=>{

        var sum = 0
        cy.visit('http://www.webdriveruniversity.com')
        
        cy.get('#data-table').invoke('removeAttr','target').click()
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el,index)=>{
            if($el.text().includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(($el)=>{
                    expect(Number($el.text())).to.eq(80)
                })
            }

        })   
     })
})