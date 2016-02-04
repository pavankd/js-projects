var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope', function ($scope) {
    $scope.spice = "very";
    $scope.chiliSpicy = function () {
        $scope.spice = "chili";
    };
    $scope.jalapenoSpicy = function () {
        $scope.spice = "jalapeno";
    }
}]);