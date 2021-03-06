var app = angular.module('myApp', []);
app.controller('TodoCtrl', ['$scope', function ($scope) {
	
    $scope.todos = [{text:"Learn AngularJS",done:false},
                    {text:'Build an app',done:false}];
   $scope.getTotalTodos = function(){
   	return $scope.todos.length;
   };

   $scope.trash = function(){
  
      $scope.todos= $scope.todos.filter(function(todo){
        return !todo.done;
      });
   };

    $scope.addTodo = function(){
    	
    	$scope.todos.push({text:$scope.formTodoText,done:false});
    	$scope.formTodoText='';
    	
    };
}])