angular.module('finance2', [])
    .factory('currencyConverter', function () {
        var currencies = ['USD', 'EUR', 'INR'];
        var usdToForeignRate = {
            'USD': 1,
            'EUR': 0.74,
            'INR': 56.0
        };
        var convert = function (amount, inCurr, outCurr) {
            return amount * usdToForeignRate[outCurr] / usdToForeignRate[inCurr];
        };
        return {
            currencies: currencies,
            convert: convert
        };
    });