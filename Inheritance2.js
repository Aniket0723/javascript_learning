//PARENT CLASS
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("ENGINE STARTED");
  }
}

//CHILD CLASS
//using extends keywords
class Bike extends Car {
    //Add some new peoperties and 'method'
    constructor(color,model,engine){
        super(color,model)//parents k constructor ko call karta hai
        this.engine = engine;
    }
    bikeMethod(){
        console.log("BIKE ENGINE STARTED")
    }

}

let newBike = new Bike("BLACK",2022,"160CC");
let newBike2 = new Bike("RED",2023,"200CC");

let tata = new Car("BLUE",2022);

console.log(newBike,newBike2);