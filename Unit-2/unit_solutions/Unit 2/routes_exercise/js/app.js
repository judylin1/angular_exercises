var app = angular.module("unit1", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
      	templateUrl: 'partials/dogs.html',
      	controller: 'DogsController'
      })
      .otherwise({redirectTo: '/'})
});
