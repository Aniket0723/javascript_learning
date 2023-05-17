// Create And remove the element
//Creating

const ul = document.querySelector('ul')

let button = document.querySelector('.clickMe')
// console.log(eventElement)

button.addEventListener('click',function(){
    let li = document.createElement('li')
    li.textContent="Something New Beta"
    ul.append(li)
})

//Removing 

let elements= document.querySelectorAll('li');

elements.forEach(function(element){

    element.addEventListener('click',e=>{
        e.target.remove()
    })
})