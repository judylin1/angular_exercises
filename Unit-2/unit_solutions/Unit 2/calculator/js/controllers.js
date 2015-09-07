app.controller('HomeController', function ($scope) {
})

app.controller('AddController', function ($scope, $routeParams, $location) {
  $scope.firstNumb = $routeParams.numone;
  $scope.secondNumb = $routeParams.numtwo;
  $scope.addedNums = Number($routeParams.numone) + Number($routeParams.numtwo)
})

app.controller('DivController', function ($scope, $routeParams, $location) {
  $scope.firstNumb = $routeParams.numone;
  $scope.secondNumb = $routeParams.numtwo;
  $scope.addedNums = Number($routeParams.numone) / Number($routeParams.numtwo)
})
