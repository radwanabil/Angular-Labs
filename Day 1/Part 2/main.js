var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(acc_no, balance) {
        if (acc_no === void 0) { acc_no = 0; }
        if (balance === void 0) { balance = 0; }
    }
    Account.prototype.debitAmount = function () { };
    ;
    Account.prototype.creditAmount = function () { };
    ;
    Account.prototype.getBalance = function () { };
    ;
    return Account;
}());
var savingAccount = /** @class */ (function (_super) {
    __extends(savingAccount, _super);
    function savingAccount(acc_no, balance, minBalance, DataOfOpenings) {
        var _this = _super.call(this, acc_no, balance) || this;
        _this.minBalance = minBalance;
        _this.DataOfOpenings = DataOfOpenings;
        return _this;
    }
    savingAccount.prototype.addCustomer = function () {
        throw new Error("Method not implemented");
    };
    savingAccount.prototype.removeCustomer = function () {
        throw new Error("Method not implemented");
    };
    savingAccount.prototype.debitAmount = function () {
        throw new Error("Method not implemented");
    };
    savingAccount.prototype.creditAmount = function () {
        throw new Error("Method not implemented");
    };
    savingAccount.prototype.getBalance = function () {
        throw new Error("Method not implemented");
    };
    return savingAccount;
}(Account));
var currentAccount = /** @class */ (function (_super) {
    __extends(currentAccount, _super);
    function currentAccount(acc_no, balance, InterestRate, DataOfOpenings) {
        if (acc_no === void 0) { acc_no = 1000; }
        var _this = _super.call(this, acc_no, balance) || this;
        _this.InterestRate = InterestRate;
        _this.DataOfOpenings = DataOfOpenings;
        return _this;
    }
    ;
    currentAccount.prototype.addCustomer = function () {
        throw new Error("Method not implemented");
    };
    currentAccount.prototype.removeCustomer = function () {
        throw new Error("Method not implemented");
    };
    currentAccount.prototype.debitAmount = function () {
        throw new Error("Method not implemented");
    };
    currentAccount.prototype.creditAmount = function () {
        throw new Error("Method not implemented");
    };
    currentAccount.prototype.getBalance = function () {
        throw new Error("Method not implemented");
    };
    return currentAccount;
}(Account));
