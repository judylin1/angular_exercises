var app = angular.module('tea', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'homeController',
  })
  $locationProvider.html5Mode(true);
})
