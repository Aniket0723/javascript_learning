
// let form = document.querySelector('.signup')
// let email= document.querySelector('#email');
// let password = document.querySelector('#password');
// console.log(form);

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log("Succesfully");
//     console.log(form.email.value,form.password.value)
// })


//Regular Expression (REGEX)
//It is a pattern of Characters used to do pattern marchinng 
// or we can say for "Data Validation"

//Implementation of passsword validation

//Length At least = 8
//At least Contain one upper Case Letter
//At least Contain one Lower Case letter
//At least Contain one digit 0 to 9


// let form = document.querySelector('.signup')
// let email= document.querySelector('#email');
// let password = document.querySelector('#password');
// let passswordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let passswordValue = password.value;
//     console.log(passswordValue)
//     let result = passswordValue.match(passswordPattern);
//     console.log(result);
//     if(result){
//         console.log("STRONG")
//     }
//     else{
//         console.log("TRY AGAIN")
//     }
   
// })

//username can only consist of A-Z or a-z
//Length of username between 6 to 12

let form = document.querySelector('.signup');
let user = document.querySelector('#name');
let passsword = document.querySelector('#password')
let userNamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let username = user.value;
    let result = userNamePattern.test(username)
    if(result==true){
        console.log(username,"Username is Valid")
    }
    else{
        console.log("username is Invalid Try Again")
    }
})
 
user.addEventListener('keyup',(e)=>{
    if(userNamePattern.test(e.target.value)){
        console.log("Passed")
    }
    else{
        console.log("Failed")
    }
})

