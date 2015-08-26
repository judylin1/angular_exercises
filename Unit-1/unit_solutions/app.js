// controller that tells Angular to create a module named 'firstApp'
// angular.module('firstApp', []) returns a new module which we use on the next line when we call '.controller' on 'app'
var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope){
	$scope.name = "Severus Snape";
})

app.controller('ExercisesController', function($scope) {
  $scope.FavColor = 'blue';
	$scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
	$scope.rightNow = new Date();
})
