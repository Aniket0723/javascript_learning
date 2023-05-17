//Function
"use strict"

//call-and-apply-method
//We can manually set the value of "this" keyword

let mainPlane = {
  airline: "Fly India",
  code: "IN",
  booking: [],
  book: function (flightNum, name) {
    console.log(`${name} Booked Flight on ${this.airline} with flight number ${this.code}${flightNum}`);
    this.booking.push({flight:`${this.airline}`,name:name,seatNumber:`${this.code}${flightNum}`})  // inserting values in Arrays
},
};

mainPlane.book(723,"Aniket")
mainPlane.book(722,"Ashutosh")
mainPlane.book(721,"Vinod")
console.log(mainPlane)
// console.log(mainPlane.booking)

//New airline launched of same group

let childPlane ={
    airline:"Fly India Child ",
    code:"INC",
    booking:[],
}
let book = mainPlane.book; 
// book(665,"Aniket")//book is now regular function but dont know it context 
//"this" value is undefined at least in strict mode

//solution Using "call" method

book.call(childPlane,665,"Dhaynu");
// console.log(childPlane)

//apply method
// accepts an arguments in array

book.apply(childPlane,[860,"Rajesh"])
console.log(childPlane)