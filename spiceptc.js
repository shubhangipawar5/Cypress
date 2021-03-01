
describe('Book Airticket on spicejet',()=>{
    var TypeOfTripInput
    var MonthInput
    var DC
    var AC
    var DB
    var DT
    var Dpcity
    var Arcity
    var SelectMonth
    var NextMonthClick
    var SelectDate
    var DateCheck
    var AddTrip
    var Capitalise
    Capitalise = function(str){
        var r =str[0].toUpperCase()+str.slice(1)
        return r
    }

    it('select type of trip',() =>{
        cy.visit('https://www.spicejet.com/')
        cy.get('td label').then(($trips) =>{
            cy.wrap($trips)
            var T = false
            function TypeOfTrip(){
                TypeOfTripInput = prompt("Enter type of trip..(One Way/Round Trip/Multicity)")
                var i = 0
                for (i=0;i<$trips.length;i++){
                    if ($trips[i].textContent == TypeOfTripInput){
                        ($trips[i]).click()
                        cy.log($trips[i].textContent)
                        var q = i 
                        ////Check which button is selected (One Way/Round Trip/Multicity)                
                        cy.get('[id="ctl00_mainContent_rbtnl_Trip"] input').then(($s)=>{
                            cy.wrap($s)
                            cy.get($s[q]).should('be.checked')
                        })
                        if(TypeOfTripInput == 'Multicity'){
                            cy.wait(3000)
                           cy.get('#MultiCityModelAlert').click()
                        }
                        T = true
                    }    
                }
            }
            TypeOfTrip()
            while(T == false){
                    window.alert("give proper trip name as shown")
                    TypeOfTrip()
            }
                       
        })
    })

    it('select departure city',()=>{
        DC = 1
        Dpcity = function(){
            cy.get(`#ctl00_mainContent_ddl_originStation${DC}_CTXT`).click()
            cy.get(`[id="glsctl00_mainContent_ddl_originStation${DC}_CTNR"] li a`).then(($DepartCity)=>{
            cy.wrap($DepartCity)
            var DepartCityInput = ''
            var D = false
            function SelectDepartCity(){
                DepartCityInput = Capitalise(prompt('Enter Departure City').toLowerCase())
                if(DepartCityInput == ""){
                    DepartCityInput = Capitalise(prompt('Enter Departure City').toLowerCase())
                }
                for (var i=0;i<$DepartCity.length;i++){
                    if ($DepartCity[i].textContent.includes(DepartCityInput)){
                    $DepartCity[i].click()
                    // //DepartCityInput Assertion
                    cy.get(`#ctl00_mainContent_ddl_originStation${DC}_CTXT`).invoke('attr','value').should('contain',DepartCityInput)
                    D = true
                    }
                }
            }
            SelectDepartCity()
            while (D == false){
                window.alert('Departure City Not Available...')
                SelectDepartCity()
            }
            })
        }
        Dpcity()
    })

    it('select arrival city',()=>{
        AC = 1
        Arcity = function(){
            cy.get(`#ctl00_mainContent_ddl_destinationStation${AC}_CTXT`).click()
            cy.get(`[id="glsctl00_mainContent_ddl_destinationStation${AC}_CTNR"] li a`).then(($ArrivalCitys)=>{
            cy.wrap($ArrivalCitys)
            var ArrivalCityInput = 'Select Arrival City'
            var A = false
            function SelectArrivalCity(){
                ArrivalCityInput = Capitalise(prompt('Select Arrival City').toLowerCase())
                if(ArrivalCityInput == ""){
                    ArrivalCityInput = Capitalise(prompt('Enter Departure City').toLowerCase())
                }
                for (var i=0;i<$ArrivalCitys.length;i++){
                    if ($ArrivalCitys[i].textContent.includes(ArrivalCityInput)){
                        $ArrivalCitys[i].click()
                        // //ArrivalCityInput Assertion
                        cy.get(`#ctl00_mainContent_ddl_destinationStation${AC}_CTXT`).invoke('attr','value').should('contain',ArrivalCityInput)
                        A = true
                    }
                }
            }
            SelectArrivalCity()
            while (A == false){
                window.alert('Arrival City Not Available...')
                SelectArrivalCity()
            }
            })
        }
        Arcity()

    })

    it('select depart date',()=>{
        DB = 1
        var MonthArray
        SelectMonth = function(){
            cy.get(`#ctl00_mainContent_view_date${DB}`).then(($Datebtn)=>{
            cy.wrap($Datebtn)
            cy.get($Datebtn).click()
                function MonthSpellCheck(){
                    if(DB == 2){
                        MonthInput = Capitalise(prompt("Enter Return Month").slice(0,3).toLowerCase())
                    }
                    else{MonthInput = Capitalise(prompt("Enter Depart Month").slice(0,3).toLowerCase())}
                    MonthArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                    var Arr = MonthArray.includes(MonthInput)
                    if (Arr == false){
                        alert('You Entered Wrong Month Spell(Select Again)')
                       MonthSpellCheck()
                    }
                    if(DB > 1){
                        var M = new Date().getMonth()
                        cy.get(`span[id="view_fulldate_id_${DT}"]`).then(($fulldate)=>{
                            if(MonthArray.indexOf($fulldate[0].textContent.slice(5,8)) > M){
                                if((MonthArray.indexOf(MonthInput.slice(0,3)) >= M) && (MonthArray.indexOf(MonthInput.slice(0,3)) < MonthArray.indexOf($fulldate[0].textContent.slice(5,8)))){
                                alert("You Entered Previous Month(Select Again)")
                                MonthSpellCheck()
                                }
                            }
                            if(MonthArray.indexOf($fulldate[0].textContent.slice(5,8)) < M){
                                if((MonthArray.indexOf(MonthInput.slice(0,3)) >= M) || (MonthArray.indexOf(MonthInput.slice(0,3)) < MonthArray.indexOf($fulldate[0].textContent.slice(5,8)))){
                                    alert("You Entered Previous Month(Select Again)")
                                    MonthSpellCheck()
                                }
                            }
                        })
                    }
                }
                MonthSpellCheck()
            })
        }
        SelectMonth()
 
        NextMonthClick = function(){
            cy.get('[class ="ui-datepicker-title"] span').then(($Mon)=>{
                if ($Mon[0].textContent.slice(0,3) != MonthInput){
                    cy.get('[title="Next"]').click()
                    NextMonthClick()
                }
            })
        }
        NextMonthClick()

        SelectDate = function(){
            cy.get('[class ="ui-datepicker-calendar"] tbody tr td a').then(($date)=>{
            var D = false
            function DateNumber(){
                var DateInput = prompt("Enter Date Number")
                for (var i=0;i<$date.length;i++){
                    if ($date[i].textContent == DateInput){
                        ($date)[i].click()
                         D = true
                         return 
                    }
                }
            }
            DateNumber()
            while(D == false){
                alert('U have Entered Wrong Date Number(Select Again)')
                DateNumber()
            }
            })
        }
        SelectDate()
        //// check the date selected date element textcontent
        DateCheck = function(){
        cy.get(`span[id="view_fulldate_id_${DB}"]`).then(($fulldate)=>{
            if(DB < 3){
            cy.log('selcted date is'+($fulldate)[0].textContent)
            }
            if(TypeOfTripInput == 'Multicity'){
                if(DB >= 3){
                    cy.log('selcted date is'+($fulldate)[0].textContent)
                }
            AddTrip = Capitalise(prompt("You want to add Next Trip..(Y/N)"))
            }
        })
        }
        DateCheck()
    })

    it('select return date(Round Trip)',()=>{
        if(TypeOfTripInput == 'Round Trip'){
            cy.wait(5000)
            DB = 2
            DT = 1
            SelectMonth()
            NextMonthClick()
            SelectDate()
            DateCheck()
        }

    })

    it('select departure city(2nd trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                DC = 2
                Dpcity()
            }
        }
    })

    it('select arrival city(2nd trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                AC = 2
                Arcity()
            }
        }
    })

    it('select depart date(2nd trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                DB = 3
                DT = 1
                SelectMonth()
                NextMonthClick()
                SelectDate()
                DateCheck()
            }
        }
    })

    it('select departure city(3rd trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                DC = 3
                Dpcity()
            }
        }
    })

    it('select arrival city(3rd trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                AC = 3
                Arcity()
            }
        }
    })

    it('select depart date(3rd trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                DB = 4
                DT = 3
                SelectMonth()
                NextMonthClick()
                SelectDate()
                DateCheck()
                cy.get('#btnAddMore1').click()
            }
        }
    })

    it('select departure city(4th trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                DC = 4
                Dpcity()
            }
        }
    })

    it('select arrival city(4th trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                AC = 4
                Arcity()
            }
        }
    })

    it('select depart date(4th trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                DB = 5
                DT = 4
                SelectMonth()
                NextMonthClick()
                SelectDate()
                DateCheck()
                cy.get('#btnAddMore2').click()
            }
        }
    })

    it('select departure city(5th trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                DC = 5
                Dpcity()
            }
        }
    })

    it('select arrival city(5th trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                AC = 5
                Arcity()
            }
        }
    })

    it('select depart date(5th trip)',()=>{
        if(TypeOfTripInput == 'Multicity'){
            if(AddTrip == 'Y'){
                DB = 6
                DT = 5
                SelectMonth()
                NextMonthClick()
                SelectDate()
            }
        }
    })

    it('select passengers',()=>{
        cy.get('.paxinfo').then(($person)=>{
            cy.wrap($person)
            cy.get($person).click()
            var adult
            var child
            var infants
            function Passenger(){
            adult =prompt("enter no. of adults(1 to 9)")
            child = prompt("enter no. of childs(0 to 4)")
            infants = prompt("enter no. of infants(0 to 4)")
            var Num = ['0','1','2','3','4','5','6','7','8','9']
            var IN = (Num.includes(adult) && Num.includes(child) && Num.includes(infants))
            if( IN == false || adult == '0'){
                alert('U entered wrong params')
                Passenger()
            }
            if((parseInt(adult)+parseInt(child)) > 9){
                alert("U have selected more than 9 passengers(select again)")
                Passenger()
            }
            if((parseInt(infants) > 0) && (parseInt(infants) != parseInt(adult))){
                alert('Number of Infants and Adults should be equal(select again)')
                Passenger()
            }
            }
            Passenger()
            cy.get('#ctl00_mainContent_ddl_Adult').select(adult)
            cy.get('#ctl00_mainContent_ddl_Child').select(child)
            cy.get('#ctl00_mainContent_ddl_Infant').select(infants)
            cy.wait(5000)
            cy.get($person).click()
            var p = ""
            var i = 0
            function str(L) {
                 L.forEach((x)=>{
                 var list = [' Adult, ',' Child, ', ' Infant']
                 if(x > 0){
                    p = p+x+list[i]
                }
                i = i + 1
            })
            return p
            }
            str([adult,child,infants])
            if(p.length == 9){
                p = p.slice(0,7)
            }
            if(p.length == 18){
                p = p.slice(0,16)
            }
            cy.get($person).invoke('text').should('contain',p)
        })
    })

    it('select currency',()=>{
        cy.get('#ctl00_mainContent_DropDownListCurrency').then(($curr)=>{
            cy.wrap($curr)
            var selectcurr
            function CurrSelector(){
                selectcurr = (prompt("Enter the currency(INR/USD/AED/GBP)").toUpperCase())
                var curList = ['INR','USD','AED','GBP']
                var cur = curList.includes(selectcurr)
                if(cur==false){
                    alert("U have Entered Wrong Currency Type(Select Again)")
                    CurrSelector()
                }
            }
            CurrSelector()
            cy.get($curr).select(selectcurr)
            //// cy.contains('INR').should('be.visible')
            cy.get($curr[0]).should('be.visible')
            cy.get($curr[0]).invoke('text').should('contain',selectcurr)
        })
    })

    it('select search flight',()=>{
        cy.get('#ctl00_mainContent_btn_FindFlights').click()
        cy.wait(60000)
        cy.get('h2[class="clearboth"]').should('be.visible')
            
        })
}) 