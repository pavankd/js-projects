angular.module('invoice1', [])
    .controller('InvoiceController', function () {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = ['USD', 'EUR', 'INR'];
        this.usdToForeignRate = {
            'USD': 1,
            'EUR': 0.74,
            'INR': 56.0
        };
        this.total = function total(outCurr) {
            return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
            return amount * this.usdToForeignRate[outCurr] / this.usdToForeignRate[inCurr];
        };
        this.pay = function pay() {
            window.alert("Thanks!");
        }
    });