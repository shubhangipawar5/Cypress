//Writing unit test Cases

///<reference  types = "Cypress"/>
describe('contact us page',()=>{
    it('should submit with all mandatory fields',()=>{
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').then(($el)=>{
           // $el.removeAttr('target')
           $el.attr("target","_self")

        })
        cy.get('#contact-us').click()
        cy.get('#contact_form > input:nth-child(1)')
        cy.get('input[name="first_name"]').type('Aayush')
        cy.get('input[name="last_name"]').type("Pawar")
        cy.get('input[name="email"]').type("shubhangi5693@gmail.com")
        cy.get('textarea.feedback-input').type('welcome to cypress!')
        cy.get('#form_buttons > input:nth-child(2)').click()
        cy.get('#contact_reply > h1').contains('Thank You for your Message!')
        




    })
    ///reset field
    it.skip('should submit with all mandatory fields',()=>{
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').then(($el)=>{
           // $el.removeAttr('target')
           $el.attr("target","_self")

        })
        cy.get('#contact-us').click()
        cy.get('#contact_form > input:nth-child(1)')
        cy.get('input[name="first_name"]').type('Aayush')
        cy.get('input[name="last_name"]').type("Pawar")
        cy.get('input[name="email"]').type("shubhangi5693@gmail.com")
        cy.get('textarea.feedback-input').type('welcome to cypress!')
        // cy.get('#form_buttons > input:nth-child(2)').click()
        // cy.get('#contact_reply > h1').contains('Thank You for your Message!')
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('be.empty')
        // // cy.get('input[name="first_name"]').should('have.text'," ")
        // cy.get('button[type="reset"]').click().then(()=> {
        //     cy.get('input[name="first_name"]').contains(' ')
        //     document.querySelector('input[name="first_name"').textContent = " ";
        //     if($('input[name="first_name"').text() === " "){
        //         console.log('Test case pass')
        //     }

    })

//     it('Using variables is the incorrect way of saving', () => {

//         cy.visit('http://www.webdriveruniversity.com')
//         // It basically breaks the cypress synchronus nature
//         let contactUs = cy.get('#contact-us')
//         contactUs.then(($el) =>{
//             //$el.removeAttr('target')
//             $el.attr("target","_self")
//         })
//         contactUs.click()
//         //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type('Chinmay')
//         cy.get('input[name="last_name"]').type('Deshpande')
//         cy.get('input[name="email"]').type('chinmaydeshpande010@gmai.com')
//         cy.get('textarea.feedback-input').type("Welcome to Cypress!")
//         cy.get('#form_buttons > input:nth-child(2)').click()
//         cy.get('#contact_reply > h1').contains('Thank You for your Message!')

//     })

//     it('Using variables is the incorrect way of saving', () => {

//         cy.visit('http://www.webdriveruniversity.com')
//         // It basically breaks the cypress synchronus nature
//         let contactUs = cy.get('#contact-us')
//         contactUs.then(($el) =>{
//             //$el.removeAttr('target')
//             $el.attr("target","_self")
//         })
//         contactUs.click()
//         //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')


//         //HTML ELEMENTS

//         //#css seelector

//         // tagName[attr = 'value']

//         // xpath 

//         //tagName[@att = 'value']


//         //<h1 id = "chinmay" class = "red">Heading<h1>

//         //h1[@id= 'chinmay']

//         //Css  selector

//         // shortcuts

//         //#chinmay --id
//         //.red  --class
        
//         //h1[id='chinmay']

//         // h1[class='red']




//         cy.get('input[name="first_name"]').type('Chinmay')
//         cy.get('input[name="last_name"]').type('Deshpande')
//         cy.get('input[name="email"]').type('chinmaydeshpande010@gmai.com')
//         cy.get('textarea.feedback-input').type("Welcome to Cypress!")
//         cy.get('#form_buttons > input:nth-child(2)').click()
//         cy.get('#contact_reply > h1').contains('Thank You for your Message!')

//     })









    
