// Create And remove the element
//Creating

// const ul = document.querySelector('ul')
// ul.addEventListener("click",()=>{
//     console.log("Inside UL")
// })

let button = document.querySelector('.clickMe')
// console.log(eventElement)

button.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent="New Task"
    ul.prepend(li)
})

//Removing 

// let elements= document.querySelectorAll('li');

// elements.forEach(function(element){

//     element.addEventListener('click',e=>{
//         console.log("Inside LI")
//         e.target.remove()
//     })
// })

const ul = document.querySelector('ul')
ul.addEventListener("click",(e)=>{
    // console.log("Inside UL")
    console.log(e.target)
    if(e.target.nodeName=="LI"){
        e.target.remove()
    }
})

