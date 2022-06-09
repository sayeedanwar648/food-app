import navbar from "/component/navbar.js"
let nav=document.getElementById("navbar")
// console.log(navbar)
nav.innerHTML=navbar()
  
// let url="themealdb.com/api/json/v1/1/random.php"
// let getData=async()=>{
//     let res=await fetch(url);
//     let data=res.json()
//     console.log(data)

// }
// getData()
fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err)
})