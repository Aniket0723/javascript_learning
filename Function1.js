// Function 
// Immediately Invoked Function Expression
//Execuated Only Once


(function(name){
    // console.log("This function will never excectue again",name);
})("IFFE")
//<---- Invoked



// setTimeout and setInterval

// setTimeout -> Run Function "once" after "interval" of time

// setIntrval -> Run function repeatedly,starting after the
// interval of time,then repeating

//setTimeout 
// setTimeout(function|code,delay,arg1,arg2) Expression


setTimeout(
function greeting(name){
    // console.log(`Welcome ${name} Bhaiya`);
},3000,"Aniket")


//setInterval
// setInterval(function|code,delay,arg1,arg2)

setInterval(
    function welcome(name){
        console.log(`Welcome ${name} mitra`)
    },1000,"Aniket")  