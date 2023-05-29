function BankAccount(customerName, balance = 0) {
  // naming convention while using constructor Capital
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  //method
//   this.deposit = function (amount) {
//     this.balance += amount;
//   };

//   this.withdraw = (amount) => {
//     this.balance -= amount;
//   };
}

  const aniketAccount = new BankAccount("Aniket")
  const ashuAccount = new BankAccount("Ashu",2000)
//   console.log(aniketAccount,ashuAccount);

// Jabhi bhi koi bhi function banati hai js ky karta hai har ek function k uper
// ek propety add karta hai jiska name hota hai prototype
//  protype empty object{}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };
aniketAccount.deposit(2000);
aniketAccount.withdraw(1400);


ashuAccount.deposit(3000);
console.log(aniketAccount,ashuAccount)
 //Function khud ek object hoti hai
