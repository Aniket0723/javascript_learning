class bankAccount {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    this.movements = [];
  }

  getMovements() {
    return this.movements;
  }

  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
}

let aniket = new bankAccount("Aniket", 8605);
console.log(aniket);
aniket.deposit(2000);
aniket.withdraw(500);

console.log(aniket.getMovements());
