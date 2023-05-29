class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimt = 50000;
  constructor(customerName, balance = 0) {
    super(customerName, balance); //calling main super constructor
  }
  takeBusinessLoan(amount){
    console.log("Taking Business Loan "+ amount)
  }
}


class SavingAccount extends BankAccount {
  transactionLimt = 10000;
  constructor(customerName, balance = 0) {
    super(customerName, balance); //calling main super constructor
  }
  takePersonalLoan(amount){
    console.log("Taking Personal Loan "+ amount)
  }
}




const aniketAccount = new SavingAccount("Aniket", 5000);
aniketAccount.deposit(500)
aniketAccount.withdraw(2000)
aniketAccount.takePersonalLoan(8000);
console.log(aniketAccount);
// const aniket2Account = new CurrentAccount("Aniket2",2000);
// console.log(aniket2Account);







// //DRY = Do not repeat Yourself
// function BankAccount(customerName, balance = 0) {
//   // naming convention while using constructor Capital
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//   //Inheritance using static method
//   ;//Constructor Linking
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 5000;
// }
// //Prototype Linking
// CurrentAccount.prototype = Object.create(BankAccount.prototype)

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("Taking Businees Loan " + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//   //Constructor Linking
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 10000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype)

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//   console.log("Taking Personal Loan " + amount);
// };

// const aniketAccount = new SavingAccount("Aniket", 4000);
// console.log(aniketAccount);
// aniketAccount.takePersonalLoan(20000);
// // const aniket2Account = new CurrentAccount("Aniket2",2000);
// // console.log(aniket2Account);
