//Working with Arrays(Simple Methods)

let letters = ["a","b","c","d","e"];
//Reverse (Mutate the original array)
// let reverse = letters.reverse();
// console.log(reverse);
// console.log(letters);


//Concat
let num = [1,2,3,4,5]
let concated = num.concat(letters);
// console.log(concated);
// console.log(num);

//Join
let joined = letters.join(' ');
// console.log(typeof joined,joined)


//Slice
//Used to Extract part of Array
//Array.slice(startIndex,lastIndex(excluded))
//Returns new Array of extracted elements
let num1= [9,5,2,7,1];
let extractedArray = num1.slice(1,3);//1 to 2 
// console.log(extractedArray);
// console.log(num1);


//Splice
//Mutating Method
//used to add new elements into the array
//Array.splice(index,deleteValue,valueToBeAdded)
//Return deleted items in the form of array

let num2=[8,6,0,5,3,1]
let updated = num2.splice(0,2,1);
// console.log(updated); 
// console.log(num2); 


// at Method

let nums =[23,54,77,85];
// console.log(nums[0]);
// console.log(nums.at(0));

//Getting last element of the array
// console.log(nums[nums.length-1]);
//or
// console.log(nums.slice(-1)[0]);
//using at
// console.log(nums.at(-1));

// at method can also work on strings

let name = "Aniket";
console.log(name.at(-1));