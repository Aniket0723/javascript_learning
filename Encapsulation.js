class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;//private field/property
  
    constructor(customerName, balance = 0) {
      this.customerName = customerName;
      this.accountNumber = Date.now();
      this.#balance = balance;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
    withdraw(amount) {
      this.#balance -= amount;
    }

    //Setters and Getters
    set balance(amount){
        if(isNaN(amount)){
            throw new Error('Amount is not Valid Input')
        }
        this.#balance = amount;
    }

    get balance(){
        return this.#balance;
    }
  }
  
  class CurrentAccount extends BankAccount {
    transactionLimt = 50000;
    constructor(customerName, balance = 0) {
      super(customerName, balance); //calling main super constructor
    }

    #calculateInterest(amount){//private method
        console.log("Calaculating interest")
    }

    takeBusinessLoan(amount){
        //Logic
        this.#calculateInterest(amount);
      console.log("Taking Business Loan "+ amount)
    }
  }

const aniketAccount = new CurrentAccount("Aniket",2000);
// aniketAccount.#balance = 4000//Without Encapsulation this can be access 
//and it is against privacy and safety
// console.log(
// aniketAccount,
// aniketAccount.getBalance())
aniketAccount.takeBusinessLoan(50000)
aniketAccount.get;

// console.log(aniketAccount.balance="2500")
// aniketAccount.setBalance("Hello");
// console.log(aniketAccount);