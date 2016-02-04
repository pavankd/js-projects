angular.module('myApp',[])
.controller('myController',['$scope',function($scope){
    $scope.naomi = {name : 'Naomi',address:'1600 Amphitheatre'};
    $scope.igor = {name : 'Igor',address:'123 somewhere'};
}])
.directive('myCustomer',function(){
    return{
        restrict:'E',
        scope:{
            customerInfo:"="
        },
        templateUrl : 'my-customer-iso.html'
    };
});