// Javascript DOM (Document Object Model)

// in document Object there is model of complete html in tree like structure

// console.log(document)

// querySelector

// let resultedElement = document.querySelectorAll('p');

// console.log(resultedElement);

// let resultedElement = document.querySelector('.codeme')
// console.log(resultedElement);

// let resultedElement = document.querySelector('#codes')
// console.log(resultedElement);

//Other Ways to get HTML elements

let querySelectorELement = document.querySelectorAll('p')
// console.log(querySelectorELement)

// Get ELements by tagName
let tagNameElements = document.getElementsByTagName('p');
// console.log(tagNameElements);

// Get Elements By className
let classNameELements = document.getElementsByClassName('codeme');
// console.log(classNameELements)

// Get Elements By Id

let elementsById = document.getElementById('codes')
// console.log(elementsById)


// Updating and Changing the Content

//innerText
//Ignores spaces
//Retrieve and set content in Plain formats

let content = document.querySelector('.content')
// content.innerText="<p>SAGAD KAHI THIK</p>"
// console.log(content.innerText)



// innerHtml 
//It does not ignore spaces
//Retrieve and set content in HTML formats
// content.innerHTML +="<p>=SAGAD KAHI THIK</p>"
// console.log(content.innerHTML)


//Getting and Setting attribute of elements

//https://www.youtube.com

let link = document.querySelector('a');
// console.log(link.getAttribute('href'));


//Set attribute 
link.setAttribute('href',"https://www.youtbe.com/watch=aniket")
// console.log(link.getAttribute('href'));
link.innerText="Aniket Youtube"


//Adding the style css

let heading  = document.querySelector('h1')
heading.style.color="Blue"
heading.style.backgroundColor="Green"


//Add,Remove and Replace the class
// heading.classList.add('newClass')

//Remove the class
// heading.classList.remove("newClass")

//Replace the class
// heading.classList.replace("main","newClass")

//Parent Children and Siblings Elements

let parentElements = document.querySelector('.content')
//All Children of Parent
console.log(parentElements.children);

// We can not run forEach Method on HTML collection so 
//First convert it into array

// console.log(Array.from(parentElements.children))

// Array.from(parentElements.children).forEach(function(element){
//     element.classList.add("coders")
// })



//Child Element

let childElement = document.querySelector('h2')
// console.log(childElement.parentElement);


//Sibiling Elemensts
console.log(childElement.previousElementSibling);