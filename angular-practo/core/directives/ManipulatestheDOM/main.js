angular.module('myApp',[])
.controller('myController',["$scope",function($scope){
    $scope.format = 'M/d/yy h:mm:ss a';
}])
.directive('myCurrentTime',['$interval','dateFilter',function($interval,dateFilter){
    function link(scope,element,attrs){
        var format,timeoutId;
        
        function updateTime(){
            element.text(dateFilter(new Date(),format));
        }
        scope.$watch(attrs.myCurrentTime,function(value){
            format = value;
            updateTime();
        });
        element.on('$destroy',function(){
            $interval.cancel(timeoutId);
        });
        timeoutId = $interval(function(){
            updateTime();
        },1000);
    };
    return{
        link : link
    };
}]);