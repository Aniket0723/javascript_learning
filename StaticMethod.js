// Ye method wo hote jo object pe nhi hote side constructor k uper ya class level pe hote hai

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine(){
    console.log("Engine Started")
  }
}
//Static Method (Can never inherit to all objects )
Car.breakMethod = function(){
    console.log("This is break Method")
}

let honda = new Car("Grey",2000);
console.log(honda)
honda.startEngine()
Car.breakMethod()
