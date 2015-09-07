app.controller('kebabController', function ($scope) {
  $scope.kebabeIt = function () {
    $scope.kebabText = $scope.kebabeInput
  }
  $scope.camelIt = function() {
    $scope.camelText = $scope.camelInput
  }
  $scope.pigIt = function() {
    $scope.pigText = $scope.pigInput
  }
  $scope.redactIt = function() {
    $scope.redactText = $scope.redactInput
  }
})
