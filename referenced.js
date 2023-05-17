// "object/arrays" how "reference" are passed to variable

let arr = [1,2,3,4,5];

let getRef =  arr;
// getRef[5]=6;
// getRef.shift();
// getRef.pop();

// console.log("Original array ",arr);
// console.log("getRef array",getRef)


// pass by value

let getValue =[...arr];//spread operator
getValue[5]=6;
getValue.shift();
console.log("Originsl array",arr)
console.log("getValue",getValue)
