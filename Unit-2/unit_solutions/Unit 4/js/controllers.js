app.controller('zenController', function ($scope, $http) {

  $http.get('https://api.github.com/zen').then(function (data) {
    $scope.zenData = data.data;
  });

  $http.get('/itunes.json').then(function (data) {
    var titles = [];
    console.log(data.data.results);
    for (var i = 0; i < data.data.results.length; i++) {
      titles.push(data.data.results[i].collectionName)
    }
    $scope.titles = titles;
  })

  $http.get('https://shielded-peak-6345.herokuapp.com/messages').then(function(data) {
    $scope.posts = data.data;
  });

  $scope.addMessage = function () {
    $http.post('https://shielded-peak-6345.herokuapp.com/messages',
    {name: $scope.messageName,
    content: $scope.messageContent
  }).then(function (response) {
  });
};

});
