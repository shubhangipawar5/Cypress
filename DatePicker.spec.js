//this code is tried by me
/// <reference types = "Cypress"/>
describe('calender using cypress',()=>{
    it('should able to select date ',()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#datepicker').invoke('removeAttr','target').click()
        cy.get('.input-group-addon').click()

        function DatePicker(year,month,date){
        cy.get('.datepicker-switch').eq(0).click()
        function prevNextYear(){
            cy.get('.datepicker-switch').eq(1).then(($el)=>{
                if(year < Number($el.text())){
                    cy.get('.prev').eq(1).click()
                    prevNextYear()
                }
                else{
                    if(year > Number($el.text())){
                        cy.get('.next').eq(1).click()
                        prevNextYear()
                    }
                }
            })
        }             
            function selectYear(){
                cy.get('.datepicker-switch').eq(1).then(($el)=>{
                    if(year === Number($el.text())){
                        cy.get('.datepicker-switch').eq(1).click()
                        cy.get('.year').each(($el)=>{
                            if (year === Number($el.text())){
                                cy.wrap($el).as('el')
                                cy.get('@el').click()
                            } 
                        })
                    }
                    else{
                        prevNextYear()
                        
                    }
                })        
            }
            selectYear()
            function selmonth(){
                cy.get('.datepicker-months td[colspan="7"] >span').each(($el)=>{
                    if(month === $el.text()){
                        cy.wrap($el)
                        cy.get($el).click()
                    }
                })
            }
            selmonth()
            function seldate(){
                cy.get('.datepicker-days td[class="day"]').each(($el)=>{
                    if(date === Number($el.text())){
                        cy.wrap($el)
                        cy.get($el).click()   
                    }
                })
            }
            seldate()
        }
            DatePicker(2018,'Dec',20)
    })
})