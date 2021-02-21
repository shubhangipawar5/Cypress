/// <reference types = "Cypress"/>


describe('validate reqress Api',()=>{
    //first block is chinmay ch code
    it.skip("Get list of users Request",()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).to.equals(200)
            expect(response.body).to.have.property('page',2)
        })
    })

    it.skip("Get single user Request",()=>{
        // var result = cy.request('GET','https://reqres.in/api/users/2')
        // result.its('status').should('eq',200)
        cy.request('GET','https://reqres.in/api/users/2').then((response)=>{
            cy.log(response)
        expect(response.body.data).to.have.property('id',2)
        
        })
        })
    
        it("Get single user Request",()=>{
           cy.request({
               method:'GET',
               url:'https://reqres.in/api/users/2',
               headers:{
                   accept:'application.json'
               }
           }).then((response)=>{
               expect(response.status).to.equals(200)
               var body = JSON.parse(JSON.stringify(response.body.data))
               cy.log(typeof(body))
               cy.log(body)
               
            
            for(var i in body){
                cy.log(i)
                
            }
           
          

           })
            
            })
        })
    

