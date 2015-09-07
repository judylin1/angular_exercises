app.controller('homeController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.movieSearch = function() {
    $http.get('http://www.omdbapi.com/?s='+$scope.movieTitle).then(function(movieData) {
      $scope.movies = movieData.data.Search;
      $location.path('/'+$scope.movieTitle);
    }, function(err) {
      $scope.movieData = ['Unable to find movie.'];
    })
  }
});

app.controller('movieController', function($scope, $http, $routeParams) {
  $http.get('http://www.omdbapi.com/?i='+$routeParams.id).then(function(movieData) {
    $scope.movieData = movieData.data;
  })
})
