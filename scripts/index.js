
import navbar from "/component/navbar.js"
let nav=document.getElementById("navbar")
// console.log(navbar)
nav.innerHTML=navbar()
let search=document.getElementById("query").value;
let input=document.getElementById("query");
input.addEventListener("keypress",function(){
    debounce(getData,2000)
})


let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
let getData=async()=>{
let res=await fetch(url)
let data=await res.json();
append(data.meals)
console.log(data.meals)

}
// getData()
let container=document.getElementById("container")

let append=(data)=>{
    container.innerHTML=null
    data.forEach(function(el){
        
        let image=document.createElement("img");
        image.src=el.strMealThumb
        let name=document.createElement("p")
        name.innerText=el.strMeal
        let div=document.createElement("div")
        div.setAttribute("class","div")
        div.append(image,name)
        container.append(div)

    })
}
let ids;
function debounce(func,delay){
    if(ids){
        clearTimeout(ids);
    }
      ids=setTimeout(function(){
        func();
    },delay);
}


