// // Utility Functions


// //Increment

class user {
    // static id = 1;
    static cache = {
        '1':'some value',
    }
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = user.id++;
  }
  static hasInCache(){
    console.log(this.cache);
    //static method se staic property access kar rahe tabhi this keyword kam karenga 
  }
}
// //   static compareByAge(user1, user2) {
// //     return user1.age - user2.age;
// //   } // static properties and methods khud class k uper store ho
// //   // // jati hai ,normal properties instance k under store ho jati hai

// //   static compareByIncome(user1, user2) {
// //     return user1.income - user2.income;
// //   }
// }

// const user1 = new user("Aniket", 18, 40000);
// const user2 = new user("Ashutosh", 33, 50000);
// const user3 = new user("Anshul", 24, 5000);
// const user4 = new user("Anshul2", 44, 66000);
// // console.log(user1, user2, user3, user4);

// const users = [user1, user2, user3, user4];
// // console.log(users.sort(user.compareByIncome));
// console.log(user1, user2, user3, user4);

user.hasInCache();

// Configuration 

// class Config{
//     static dbUser = 'username';
//     static dbPassword = 'secret';
//     static apiToken = 'abcd'
// }

// console.log(Config.dbPassword,Config.dbUser);