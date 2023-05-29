//Sortinf array using sort method

//By default sort method is used to sort strings
//It firstly converts everyting into string and then...

let letters =["e","b","c","x","f"]
console.log(letters.sort());

let nums =[2,3,4,5,-1,-13,-44,99];
console.log(nums.sort());

// if a-b < 0 => a < b => A,B (Keep order same)
// if a-b > 0 => a > b => B,A (Switch the order)

//Ascedning order
nums.sort((a,b)=>{
    // return a-b
    // if(a<b){
    //     return -1; //Any Num less than 0
    // }
    // if(a>b){
    //     return 1// Any Num greter than 0
    // }

    //Desecending order
    return b-a;
})
console.log(nums)