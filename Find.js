//"Find" Method
//It return the "first" elemt we are looking for...

let students =[{id:1,name:"Aniket"},
               {id:2,name:"Ashutosh"}];

let result = students.find(student =>{
    return student.id ==1;
})
console.log(result);

//findIndex Method
//Execute function for each array element
//It return "index" of that array element who "first" pass the
//test "Otherswise"

let ages = [17,18,19,20,21,22];
let result1 = ages.findIndex(age=>{
    return age > 20;
})
console.log(result1)



