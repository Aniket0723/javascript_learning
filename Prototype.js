//Each object created by "constructor" function have an access
// to all "methods" present inside that "constructor" prototype

let Car = function(color,model){
    //instance properties
    this.carColor = color;
    this.carModel = model;

}
// console.log(Car.prototype)
//Method
Car.prototype.startEngine = function(){
    console.log("This is start Engine Method")
}
//We can also set "properties" to prototype
Car.prototype.company = "TATA"


console.log(Car.prototype)
let instanceofCar = new Car("Red",2023);
let instance = new Car("White",2023);
instanceofCar.startEngine();


console.log(instance.__proto__)

console.log(instance.__proto__.isPrototypeOf(instance))
//this is same
// console.log(Car.prototype);
//Car.prototype is prototype of all objects created through
//the Car cronstructor
//Car.Prototype jo property hai wo prototype hai khud
//but wo car ka prototype nhi hai 
// console.log(instance)