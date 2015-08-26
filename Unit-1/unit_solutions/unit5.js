var app = angular.module("unit5", []);

app.controller("ngRepeat", function($scope){
	$scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
})

app.controller('symbols', function($scope) {
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
})

app.controller('numbers', function($scope) {
  $scope.numbers = [1,1,2,5,6,9,9,9];
})

app.controller('keys', function($scope) {
  $scope.keys = {First_Name: "Judy", Last_Name: "Lin", Age: 28}
})

app.controller('cameras', function($scope) {
  $scope.cameras = [
  {
    title: "Nikon D3100 DSLR",
    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: "Canon EOS 70D",
    image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: "Nikon D810A",
    image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
]
})
