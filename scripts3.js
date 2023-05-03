//Variable and Block Scope

// Scope = Area where variable is defined or accessible

// let score = 90; //Global Scope

// if(true){
//     let score =50;//Block Scope
//     score=60;
// }
// console.log(score);//Nearest Value

//Ternary operator(?:) = single line if else

// let age=20;
let weight = 60;
// if(age>18){
//     console.log("Able to Vote")
// }
// else{
//     console.log("Not Able")
// }

// let result = age > 18 ?weight>55?"Able to vote":"weight issue":"age issue";
// // console.log(result)


//Switch Statements
//It is used in compatitive of "Conditonal statements"

let age = 15;
switch(age){
    case 15:
    case 16:
    case 17:
        result = "These agea are allowed to sit in exam";
        break;
    default :
    result="Not allowed"
    break;
}
//If there is no break statment than "next" case will be executed
console.log(result)