var app = angular.module("calc", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/add/:numone/:numtwo', {
      templateUrl: 'partials/add.html',
      controller: 'AddController'
    })
    .when('/divide/:numone/:numtwo', {
      templateUrl: 'partials/divide.html',
      controller: 'DivController'
    })
    $locationProvider.html5Mode(true);
})
