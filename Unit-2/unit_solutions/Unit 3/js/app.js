var app = angular.module("unit3", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'kebabController',
    })

  $locationProvider.html5Mode(true);

    // .otherwise({redirectTo: '/'})
})
