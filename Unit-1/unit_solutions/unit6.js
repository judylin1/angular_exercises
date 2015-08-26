var app = angular.module("unit5", []);

app.controller("number", function($scope){
	$scope.number = 5;
  $scope.pickRandomNumber = function(){
	$scope.number = Math.floor(Math.random() * 10) + 1
}
})

app.controller('reverse', function($scope) {
  $scope.reverseWord = function (word) {
  var array = word.split('');
  array = array.reverse();
  $scope.word = array.join('')
}
})

app.controller('pingPong', function ($scope) {
  $scope.score1 = 0;
  $scope.score2 = 0;
  $scope.addScore1 = function (score) {
    $scope.score1 = score + 1
  };
  $scope.addScore2 = function (score) {
    $scope.score2 = score + 1
  };
  $scope.reset = function () {
    $scope.score1 = 0;
    $scope.score2 = 0;
  }
})

app.controller('contacts', function ($scope) {
  $scope.contacts = [{name: 'Bob', email: 'bob@bob.com', phone: '303-111-2222'}];
  $scope.addContact = function (name, email, phone) {
    $scope.contacts.push({name: name, email: email, phone: phone})
    $scope.name = '';
    $scope.email = '';
    $scope.phone = '';
  };
  $scope.show = function (){
    $scope.name = 'Howdy'
  };
})
