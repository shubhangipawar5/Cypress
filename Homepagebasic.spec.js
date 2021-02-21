import HomePage_PO from '../../../page/homepage_cls';
var hp = new HomePage_PO()         //object hp is created from homepage cls
describe('verfify the visit page' , () => {
    it('verrify the visit from the firstPage',()=>{
        hp.visitActionpage()
        hp.verifyTile()
    })
    it('verrify the Title',()=>{
        
        hp.verifyTile()
        
        })
    it.only('verify Contact-us page',()=>{
        hp.verifyContactPage()
    })
    })


    