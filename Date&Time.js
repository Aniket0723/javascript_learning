//Date and Time
//Date Objet always carry Both "Date" and "Time"

// //Using Date method
// let currentDate = new Date(2023,4,7,11,54,32); //Months = 0 to 11 
// console.log(currentDate)


// //Using timeStamp(integer number represent in "ms" from 1-1-1970)
// let currDate = new Date(86400000);// 0 is time in ms
// // 1 day = 24 * 60 * 60 = 864000000ms 
// console.log(currDate)

// //To get in "ms"

// let cDate = new Date().getTime();
// console.log(cDate)


// Advanced Date and Time

let completeDateAndTime = new Date();
console.log(completeDateAndTime);

//Get Full Year
console.log(completeDateAndTime.getFullYear());

//Get Month 
console.log(completeDateAndTime.getMonth());

//Get Week Day
console.log(completeDateAndTime.getDay());

//Get Month Day
console.log(completeDateAndTime.getDate());

//Get Hours
console.log(completeDateAndTime.getHours());

//Get Minutes
console.log(completeDateAndTime.getMinutes());

//Get seconds
console.log(completeDateAndTime.getSeconds());
