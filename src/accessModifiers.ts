    /*
    public → everyone
    private → only me
    protected → me + my children 😄
    */

class BankAccount {
  readonly clientId: number;
  clientName: string;
  protected balance: number;

  constructor(clientId: number, clientName: string, balance: number) {
    this.clientId = clientId;
    this.clientName = clientName;
    this.balance = balance;
  }

  addBalance(amount: number) {
    this.balance = this.balance + amount;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.balance;
  }
}

const myAccount = new BankAccount(1001, "Jahirul", 20);

myAccount.addBalance(100);

console.log(myAccount);
