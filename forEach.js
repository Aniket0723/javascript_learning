// forEach method of array

//Its another type of loop which we used to traverse over the array

let dishes =["Briyani","Paratha","Panner","Samosa","Wada"]
console.log(dishes)


//using loop
for(let i =0;i<dishes.length;i++){
    console.log(dishes[i]);
}

console.log("--------------------------")

// using forEach method

dishes.forEach(function(element){
    console.log(element)
})