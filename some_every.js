// some method return "true" if "any" array element pass the test
// every method return "true" if "all" elements pass the test

let scores =[25,34,67,65,80,93];
let result = scores.some(score=>{
    return score > 50;
})
console.log(result);

let result1 = scores.every(score=>{
    return score > 100;
})
console.log(result1);


//flat method

//It creates a new array with the elements of the subarray s 
//"concatenated into it"

let arr = [1,2,3,4,[5,6,7,8],9,10];
console.log(arr);
console.log(arr.flat());// by default 1 value

//flatMap method

//It is the combination of the "map()" method
//followed by the "flat()" method of depth "1"

let cart =[{
    name:"Iphone",
    quantity:"1",
    price:500,
},
{    
    name:"Iphone 11",
    quantity:"2",
    price:1000,
    
}]
let newCart = cart.flatMap(item=>{
    if(item.name ==="Iphone"){
        return [item,{
            name:"ScreenProtector",
            quantity:"1",
            price:0
        }]
    }else{
        return[item]
    }
})

console.log(newCart);