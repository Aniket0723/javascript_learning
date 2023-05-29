class BankAccount{
    customerName;
    accountNumber ;
    balance = 0;

    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=  Date.now();
        this.balance=balance;
        this.movements=[]
    }
    getMovements() {
        return this.movements;
    }

    deposit(amount){
        this.balance+=amount
        this.movements.push(amount);
    }
    withdraw(amount){
        this.deposit(-amount);
    }
}

const aniketAccount =  new BankAccount("Aniket",2000)
console.log(aniketAccount);
aniketAccount.deposit(100);
aniketAccount.withdraw(100);
aniketAccount.deposit(100);
aniketAccount.withdraw(500);
console.log(aniketAccount.getMovements());



//Hoisting .....not work in classes 


// hello();
// function hello(){
//     console.log("Hello")
// }

//const hello = function(){
//}