//Introduction to objects in Javascript

//Define
let car ={
    color:"Black",
    model:"2022",
    company:"TATA"
}
// console.log(car)

// Acessing the Javascript Object Properties

// console.log(car["company"]);
// console.log(car.color) // use direct property

// "Modify" the Object
car.color ="Brown"

// console.log(car)


//Delete Properties of Object

let obj ={
    prop1:"value1",
    prop2:"value2",
}
let returnValue = delete obj.prop1

//It alwways retun true
// console.log(obj,returnValue)

//Function Vs Method

let ageCalculate = function(birthyear){
    let age = 2023 - birthyear
    console.log(`Current age is = ${age} `)
}
ageCalculate(2000)

// Method --> It is nothing but object property(Key) holding
// Function as "Value"

let person ={
    ageCalculate :function(birthyear){
        let age = 2023-birthyear;
        return age;
    }
}

console.log(`Current age is = ${person.ageCalculate(2000)} `)