//Object Oriented Programming
// Constructor function and the "new" Operator
//We can not use "arrow function" as constuctor
//Call "constructor" function using new keyWord

//1 new {object} Create empty initially
//2 "this" ={object}
//3 object linked to prototype
//4 function automatically return {object}\

let Car = function(color,model){
// console.log(this)
         //instance properties
         this.color =color;
         this.model =model;
         //methods
         // Not a good Practice
         this.login =function(){
            console.log("login method")
         }
}
let instanceofCar = new Car("Red",2023)
let instance = new Car("Blue",2000)
console.log(instance);
console.log(instanceofCar);


