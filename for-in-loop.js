// for in loop(Eadch iteration return a "Key" of object)

let car ={
    model:2023,
    color:"White",
    company:"TATA"
}

console.log(car)

let x =""

for(let key in car){
    x=x  + car[key]
}
console.log(x)