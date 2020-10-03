document.querySelector('p').addEventListener('click',()=>{
    document.querySelector('p').style.backgroundColor='aqua'
})
var person={
    name:"shubhangi",
    age:27,
    cook:function(){
        console.log(this.name +"likes to cook")
    }
}