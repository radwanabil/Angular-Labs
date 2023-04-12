class Account{
    constructor(acc_no: number=0, balance: number=0) {}
    debitAmount() {};
    creditAmount() {};
    getBalance() {};
}
interface IAccount{
    DataOfOpenings:Date;
    addCustomer():any;
    removeCustomer():any;
}

class savingAccount extends Account implements IAccount{
      
    constructor(acc_no: number, balance: number,private minBalance: number,public DataOfOpenings:Date) {
        super(acc_no, balance);
    }
    addCustomer() {
        throw new Error ("Method not implemented");
    }
    removeCustomer() {
        throw new Error ("Method not implemented");
    }
    override debitAmount() {
        throw new Error ("Method not implemented");
    }
    override creditAmount() {
        throw new Error ("Method not implemented");
    }
    override getBalance() {
        throw new Error ("Method not implemented");
    }
}
class currentAccount extends Account implements IAccount{;  
    constructor(acc_no: number=1000, balance: number,private InterestRate: number,public DataOfOpenings:Date) {
        super(acc_no, balance);
    }
    addCustomer() {
        throw new Error ("Method not implemented");
    }
    removeCustomer() {
        throw new Error ("Method not implemented");
    }
    override debitAmount() {
        throw new Error ("Method not implemented");
    }
    override creditAmount() {
        throw new Error ("Method not implemented");
    }
    override getBalance() {
        throw new Error ("Method not implemented");
    }
}