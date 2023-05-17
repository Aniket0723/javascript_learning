//Event Baics (Click Event)
// let eventElement = document.querySelector('.clickMe')

// //console.log(eventElement)

// eventElement.addEventListener('click',function(){//function as a arguments
//     //callback function
//     console.log("Clicked")
// })

let elements = document.querySelectorAll('li');
console.log(elements)


elements.forEach(function(element){


    element.addEventListener('click',e=>{
        // console.log("Item Clicked")
        console.log(e.target)
        e.target.style.textDecoration="line-through"
    })
})