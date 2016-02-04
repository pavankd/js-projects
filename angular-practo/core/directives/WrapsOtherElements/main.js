var myApp = angular.module('myApp', [])
    /*myApp.controller('myController',['$scope',function($scope){
        $scope.name = "pavan";
    }]);
    myApp.directive('myDialog',function(){
        return{
            restrict:'E',
            transclude : true,
            scope:{},
            templateUrl : 'my-dialog.html',
            link:function(scope){
                scope.name = "Dasari";
            }
        };
    });*/
myApp.controller('dialogController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.name = "Dasari";
    $scope.message = '';
    $scope.hideDialog = function (message) {
        $scope.message = message;
        $scope.dialogIsHidden = true;
        $timeout(function () {
            $scope.message = '';
            $scope.dialogIsHidden = false;
        }, 2000);
    };
}]);
myApp.directive('secDialog', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            'close': '&onClose'
        },
        templateUrl: 'my-dialog-close.html'
    };
});