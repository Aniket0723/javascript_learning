//Array Methods
//Map Method

// Create New Array from Original array By applying transformation func

let salaries =[2000,3000,4000,5000,6000];
let newSalaries = salaries.map(salary =>{
    let i = salary/2;
    return salary+i; // Final 
})
console.log("After 50% Increment",newSalaries);

//Map is creating copy of original araay with some transformation on each element
//Length of new array always "equal" to original Array



//Filter Method
//(used to Perform Filteration on Arrary)
let filterArray = newSalaries.filter(salary=>{
    if(salary > 4500){
        return true
    }
})
console.log(filterArray);


//Reduce Method
//Run reducer function for each Array element
//Array.reduce(function(total,currentValue),initialValue)
//It return single value

//Sum of all elements using reduce method

let num = [1,2,3,4,5];
let sum = num.reduce(function(total,currentValue){
    return total+currentValue;
},0)
console.log(sum)

//Does not mutate Original Array