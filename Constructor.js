function BankAccount(customerName, balance = 0) {
  // naming convention while using constructor Capital
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  //method
  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
} 

// const MyAccount = new BankAccount("Aniket",1000);//Object
// const My2Account = new BankAccount("Aniket2",000);//Object

// console.log(MyAccount,My2Account)

// MyAccount.deposit(5000);
// My2Account.deposit(2000);

// console.log(MyAccount,My2Account)

// MyAccount.withdraw(2000);
// My2Account.withdraw(1000);

// console.log(MyAccount,My2Account)

//=======DOM MANIPULATION=====================

const accounts = [];

const acccountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

acccountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  account.deposit(+amount.value);
  console.log(accounts);
});
