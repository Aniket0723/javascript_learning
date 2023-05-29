//Local Storage

//Store and retrive data from database(local storage)



//set Item
//get Item
//update Item

// //Set Item in local Storage

// localStorage.setItem("passion","programming");
// localStorage.setItem('age',24);
// // console.log(localStorage);


//Get Item in local Storage

// console.log(localStorage.getItem('passion'));
// console.log(localStorage.getItem('age'));

//Update -> Overwrite the previous Value
// localStorage.setItem("age",23)
// // console.log(localStorage)

// //Remove Item
// localStorage.removeItem('passion');
// localStorage.clear();
// console.log(localStorage)


// Storing COmplex Data Structure like array of objects
// local storage store data in string formate

let vehicle = [
    {company:"Tata",model:"Altroz"},
    {company:"Tesla",model:"Elon"}
]
console.log(typeof vehicle,vehicle)
let stringofVehicles = JSON.stringify(vehicle)
//Convert a JavaScript object into a string
console.log( typeof stringofVehicles,stringofVehicles)

localStorage.setItem("vehicles",stringofVehicles);
console.log(localStorage)


//Get Stored item again in object formate

let storedData = localStorage.getItem("vehicles");
let objectFormate = JSON.parse(storedData)
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
console.log(typeof objectFormate,objectFormate)
