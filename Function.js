//Declaration

function nameOfFunction(){

    //Body of function
    console.log("Running")
}
//function call
// nameOfFunction();//Execution
//Reuse
// nameOfFunction();

//Function Expression

let fun = function(){// also called anonymus function
    // console.log("This is example of Function expression");
}
// //calling this function
// fun();

//Real Example of Function 

// let invitation = function(name="default value",time='night'){//parameter // default parameter
//     console.log(`Welcome ${name} Bro at today ${time}` );
// }
// invitation("Aniket");//arguments
// invitation("Ashutosh");//arguments
// invitation("Ashu","morning");//udefined

//Function has always return value

//Returning Values

// let ageCalaculation = function(birthYear,currentYear=2023){
//     let age = currentYear - birthYear;
//     return age;
//     // console.log(`Your current age is = ${age}`)
//     //After return statement no code of line will  execute
// }
// let funcResult = ageCalaculation(2000);
// console.log(`Your age is ${funcResult}`);

//Normal Function Expression

// let invitation = function (name){
//     console.log(`Welcome ${name}`)
// }
// invitation("Bhai")


//Arrow function 
let invitation = name =>`Welcome ${name}`
// console.log(invitation("Bhava"))  

//Passing function as an Argument (Higher order Function)
//Example 1
let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}

let transgormer = function(str,fun){
    return fun(str);
}
// console.log(transgormer("hello",upperCase))
// console.log(transgormer("HELLO",lowerCase))

//Function returning another function

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
        return true
    }
}
compliment("You are good CODER")("Aniket")

// 2nd Method

let c = compliment("You are good CODER")
c("Beta")
// console.log(c)
// compliment is higher order function


 