//bind method

function greet()
{
    console.log(`Welcome ${this.firstName} ${this.lastName} on coder Dost`)
}

let user =
 {
    firstName:"Aniket",
    lastName:"Nagrale"
}
let greets= greet.bind(user);

greets()