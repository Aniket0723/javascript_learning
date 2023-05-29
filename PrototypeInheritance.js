//Parent Class
let Car = function(color,model){
    this.color = color;
    this.model = model;
}
Car.prototype.startEngine = function(){
    console.log("ENGINE STARTED")
}
let tata = new Car("BLUE",2022);
console.log(tata);

//Child Class

let Bike = function(color,model,engine){
    Car.call(this,color,model)
    this.engine=engine
}
//Inherited from parent
Bike.prototype = Object.create(Car.prototype)//nay aobject banata hai lekin ye additionaly 

//Not Inherited 
Bike.prototype.ownBike = function(){
    console.log("OWN BIKE")
}
let newBike = new Bike("Green",2023,"300CC");
let newBike2 = new Bike("Neela",2123,"350CC");
console.log(newBike,newBike2);