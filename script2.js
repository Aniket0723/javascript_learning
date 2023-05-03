// Control Flow

//For Loop

for(let i=1;i<=10;i++){
    // console.log("Baba I love You",i)
}

// Uscase of for loop

let dishes = ['Briyani','Sandwich','Pizza','Sev-bhaji','Pulav','Kadi-Bhatt'];

// Access the array values

for(let i=0;i<dishes.length;i++){

    // console.log(dishes[i]);
}

// While loop

for (let i=1;i<=5;i++){
    // console.log("For Loop",i)
}
// console.log("*****************");

let j=0;
while(j<dishes.length){
    // console.log("My Boo Fav dishes = ",dishes[j],j);
    j++;
}


// Do While loop

let a=1;

do{
    // console.log(a);
    a++;
}
while(a<=1) // Condition false already

///////////////////////////////////////////////////

// if else if statement 

// let budget  = 5000;
// if(budget>=6000){
//     console.log("Ammer Log")
// }
// else if(budget>=5000){
//     console.log("Middle Log")
// }
// else if(budget>=3000){
//     console.log("Street Log")
// }
// else{
//     console.log("Gareeb Log")
// }


// nested if statement

// let num =23;
// if(num>22){
//     console.log("1st condition true")
//     if(num>2){
//         console.log("Both condition true")
//         if(num>20){
//             console.log("num > 20 condition passed")
//         }
//     }

// }

// Break and Continue Statement

// Also called Jump Statement 
//Continue Statement

// used to skip some values of loop

// for(let i=1;i<=10;i++){
//     if(i==5){
//         break;
//     }
//     console.log("value of i is = " ,i);
// }


//Logical Operator

// AND OPERATOR
let password = "qwerty"

if(password.length > 5 && password.includes('@')){
    // console.log("Password is Strong")
}
else{
    // console.log("Change your password")
}

//OR OPERATOR

if(password.length > 3 || password.includes('@')){
    // console.log("Password is Strong")
}
else{
    // console.log("Change your password")
}

//NOT OPERATOR ! true to false And false to true

let status = false;
if(!status){
    console.log("Your status is = ",status)
}


//Priorities
//Not
//And ,OR , From left to right

//Example

let result = true && true || false && !false
console.log(result)