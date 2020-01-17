// let balance = 500.00;

class Account {

  constructor(username){
    this.username = username;
    this.transactions = [];
  }

  get balance(){
     let balance = 0;
    for (const transaction of this.transactions ) {
      balance += transaction;
    }
    return balance
  }

  set balance(balance){
    this._balance = balance;
  }

  addTransaction(transaction){
    this.transactions.push(transaction);
  }


}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.amount;

    this.time = new Date();

    this.account.addTransaction(this)
  }
}


class Withdrawal extends Transaction {

  get value(){
    return  -this.amount;
  }

}

class Deposit extends Transaction {

  get value(){
    return this.amount
  }

}






// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("Savings");


// let t1 = new Withdrawal(50.25, myAccount);

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);

// t1.commit();
// console.log('Transaction 1:', myAccount.balance);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Depoist(120.00);
// t3.commit();
// console.log('Transaction 3:', t3);

// console.log('Balance:', balance);
