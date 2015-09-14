app.controller('CurrencyController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
  var bitcoinRef = new Firebase('https://publicdata-cryptocurrency.firebaseio.com');
  $scope.bitcoinData = $firebaseObject(bitcoinRef)
  $scope.convert = function (input) {
    if (!input) {
      $scope.BitCoin = false;
      $scope.DogeCoin = false;
      $scope.LiteCoin = false;
    }
    if (input === 'bitcoin') {
      $scope.selectedCurrency = 'BTC'
      $scope.BitCoin = true;
      $scope.DogeCoin = false;
      $scope.LiteCoin = false;
    }
    if (input === 'dogecoin') {
      $scope.selectedCurrency = 'XDG'
      $scope.BitCoin = false;
      $scope.DogeCoin = true;
      $scope.LiteCoin = false;
    }
    if (input === 'litecoin') {
      $scope.selectedCurrency = 'LTC'
      $scope.BitCoin = false;
      $scope.DogeCoin = false;
      $scope.LiteCoin = true;
    }
  }
}])
