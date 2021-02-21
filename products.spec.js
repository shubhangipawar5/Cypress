/// <reference  types = "Cypress"/>
describe('Validating the hair products', () => {
    
    it('validate total and specific hair Conditioner product', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52_54"]').contains('Conditioner').click({force:true})
        cy.get('.fixed_wrapper .prdocutname').should('have.length',5)
        cy.get('.fixed_wrapper .prdocutname').contains('Seaweed Conditioner').should('have.text','Seaweed Conditioner')
        cy.get('.fixed_wrapper .prdocutname').first().should('have.text','Seaweed Conditioner')
    })
    it('validate total and specific hair Conditioner product', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52_53"]').contains('Shampoo').click({force:true})
        cy.get('.fixed_wrapper .prdocutname').should('have.length',2)
        cy.get('.fixed_wrapper .prdocutname').contains('Eau Parfumee au The Vert Shampoo').should('have.text','Eau Parfumee au The Vert Shampoo')
        cy.get('.fixed_wrapper .prdocutname').last().should('have.text','Curls to straight Shampoo')
    })
    it('validate the number of sales product', () => {

        cy.visit('https://automationteststore.com/')
       
        cy.get('.thumbnail').find('.sale').should('have.length',9)

    })
    it('Calulate the total sum of normal and sales product price ', () => {

        cy.visit('https://automationteststore.com/')
         cy.get('.thumbnail').as('products')
         cy.get('@products').find('.oneprice').each(($el)=>{    ///we vl get oneprice as array 
             cy.log($el.text())
         })
         cy.get('@products').find('.pricenew').each(($el)=>{
            cy.log($el.text())
        })
        cy.get('@products').find('.oneprice').invoke('text').as('itemprice')
        cy.get('@products').find('.pricenew').invoke('text').as('saleprice')

        var sum = 0
        cy.get('@itemprice').then( textP =>{
  
            var itemprice =textP.split('$');
            for( var i =0 ; i < itemprice.length; i++){
                cy.log(itemprice[i])
                sum += Number(itemprice[i])
            }

            
        })
        cy.get('@saleprice').then( textP =>{
  
            var salepriceS =textP.split('$');
            for( var i =0 ; i < salepriceS.length; i++){
                cy.log(salepriceS[i])
                sum += Number(salepriceS[i])
                cy.log(sum)
            }

        }).then(()=>{
            expect(sum).to.equal(572.45)
        })

     })
     it.only('Calulate the total discount on all sales product price ', () => {

        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('products')
        cy.get('@products').find('.pricenew').each(($el)=>{
            cy.log($el.text())
        })
        cy.get('@products').find('.priceold').each(($el)=>{
            cy.log($el.text())
        })
        cy.get('@products').find('.pricenew').invoke('text').as('newprice')
        cy.get('@products').find('.priceold').invoke('text').as('oldprice')
        var discount=0
        var newpsum=0
        var oldpsum=0
        cy.get('@newprice').then(textnp=>{
            var newprice = textnp.split('$')
            for(var i=0; i<newprice.length; i++){
                cy.log(newprice[i])
                newpsum += Number(newprice[i])
                cy.log(newpsum)
            }
        })
        cy.get('@oldprice').then(textnp=>{
            var oldprice = textnp.split('$')
            for(var i=0; i<oldprice.length; i++){
                cy.log(oldprice[i])
                oldpsum += Number(oldprice[i])
                cy.log(oldpsum)
                //discount = (newpsum/oldpsum)*100
                discount=((oldpsum-newpsum)/oldpsum)*100
                cy.log(discount)
            }
        }).then(()=>{
            expect(discount).to.equal(20.22346368715084)
           
        })

     })
    
    it('Discount on total number of all sale and without sale products_oneprice_pricenew_priceold',()=>{

        cy.visit('https://automationteststore.com/')
        cy.wait(6000)
            
        cy.get('.thumbnail').as('products')
        cy.get('@products').find('.oneprice').each($el => {
            cy.log($el.text())
        })
    
        cy.get('@products').find('.pricenew').each($el => {
            cy.log($el.text())
        })
    
        cy.get('@products').find('.priceold').each($el => {
            cy.log($el.text())
        })
    
        cy.get('@products').find('.pricenew').invoke('text').as('newprice')
        cy.get('@products').find('.priceold').invoke('text').as('oldprice')
        cy.get('@products').find('.oneprice').invoke('text').as('itemprice')
    
        var discount= 0
        var productprice=0
        var oldproductprice=0
        var discountpercentage=0
    
        var newsum = 0
        cy.get('@newprice').then( textPS=>{
            var itempriceS =textPS.split('$');
            for( var i =0 ; i < itempriceS.length; i++){
                cy.log(itempriceS[i])
                newsum += Number(itempriceS[i])
                cy.log(newsum)
    
            }
        }).then(()=>{
            expect(newsum).to.equal(357)
    
        })
    
        var oldsum = 0
        cy.get('@oldprice').then( textPS=>{
            var itempriceS =textPS.split('$');
            for( var i =0 ; i < itempriceS.length; i++){
                cy.log(itempriceS[i])
                oldsum += Number(itempriceS[i])
                cy.log(oldsum)
    
            }
        }).then(()=>{
            expect(oldsum).to.equal(447.5)
        })
    
        var itemsum = 0
        cy.get('@itemprice').then( textPS=>{
            var itempriceS =textPS.split('$');
            for( var i =0 ; i < itempriceS.length; i++){
                cy.log(itempriceS[i])
                itemsum += Number(itempriceS[i])
                cy.log(itemsum)
    
            }
        }).then(()=>{
            expect(itemsum).to.equal(215.45)
    
        }).then(()=>{
            productprice= itemsum + newsum
            oldproductprice= itemsum+ oldsum
            discount=oldproductprice-productprice
            discountpercentage=(discount/oldproductprice)*100
            cy.log(discountpercentage)
        }).then(()=>{
            expect(discountpercentage).to.equal(13.651104909872538)
    
        })
    })
    //  it.only('Calulate the discount on each sales product price ', () => {

    //     cy.visit('https://automationteststore.com/')
    //     cy.get('.thumbnail').as('products')
    //     cy.get('@products').find('.pricenew').each(($el)=>{
    //         cy.log($el.text())
    //     })
    //     cy.get('@products').find('.priceold').each(($el)=>{
    //         cy.log($el.text())
    //     })
    //     cy.get('@products').find('.pricenew').invoke('text').as('newprice')
    //     cy.get('@products').find('.priceold').invoke('text').as('oldprice')
    //     var discount=0
    //     var newpsum=0
    //     var oldpsum=0
    //     cy.get('@newprice').then(textnp=>{
    //         var newprice = textnp.split('$')
    //         for(var i=0; i<newprice.length; i++){
    //             cy.log(newprice[i])
    //             newpsum += Number(newprice[i])
    //             cy.log(newpsum)
    //         }
    //     })
        
  

    //  })
})
