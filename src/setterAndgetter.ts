// setter
// getter

class BankAccount {
  readonly clientId: number;
  clientName: string;
  protected balance: number;

  constructor(clientId: number, clientName: string, balance: number) {
    this.clientId = clientId;
    this.clientName = clientName;
    this.balance = balance;
  }
  //* setter
  set addBalance(amount: number) {
    if (amount < 0) {   //* 👉 setter >> validation করা যায়
      console.log("Invalid amount");
      return;
    }
    this.balance = this.balance + amount;
  }
  //* getter
  get getBalance() {
    return this.balance;
  }
}

const myAccount = new BankAccount(1001, "Jahirul", 20);

myAccount.addBalance = -25;

console.log(myAccount.getBalance);
