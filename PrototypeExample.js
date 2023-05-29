let arr = [2, 3, 4, 5, 6, 8];
//[] is same as new array([])
// console.log(arr.__proto__, Array.prototype);
// console.log(arr.__proto__.__proto__); //Chaining of prototype
// console.log(Object.prototype);
// console.log(arr);

//ES6 classes (They still omplement prototypal inheritance
//behind the scene)

//class declaration


//Getters and Setters allow you to define Object Accessors


class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine(){
    console.log("This is start Engine method of Car class")
  }

  get _startEngine(){
    console.log("This is Getter Method")
  }

  get description(){
    return `Color of bike is ${this.color} and it model is ${this.model}`
  }
  
  set changeColor(color){
    console.log(this.color=color)
  }
}

Car.prototype.breakMethod = function(){
    console.log("Break Method of car")
}

let honda = new Car("Red", 2023);
let tata = new Car("Yellow",2022)
// console.log(tata)


// honda.startEngine() // Acessing as Function
//honda._startEngine; // Acessing as property

// honda.changeColor="Blue";
// honda._startEngine;
// honda.changeColor="Red"
// honda._startEngine
honda.description
console.log(honda.description)

// console.log(honda.__proto__);
// console.log(honda.__proto__.isPrototypeOf(honda));

// honda.breakMethod()

// Classes are not hoisted
// Classes are also first class citizens(pass as an arguments or returns)
// Classes are executed in strict mode

