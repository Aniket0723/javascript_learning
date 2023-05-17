// this keyword

// In Each Method we have an access of special keyword called
//"this"

//"this" keyword represent the object."Calling" the "method"
// in which "this" is "present"

//Example

let person ={
    firstName:"Harry",
    lastName:"Bhai",
    city:"Dubai",
    Education:"Electronics",
    birthYear:2000,
    getSummary:function(){
        return this
        //  return `${this.firstName} ${this.lastName} lives in ${this.city}. Worked as ${this.Education} and Birth Year is ${this.birthYear}`
    }

}
console.log(person.getSummary())

// Step 1 Check in whioch method we use "this" keyword= getSummary
// Step 2 Owner of that method(who is calling those method) = person