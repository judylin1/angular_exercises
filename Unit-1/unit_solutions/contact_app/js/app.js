var app = angular.module("contactApp", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'ContactsController'
      })
      .when('/show/:id', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
      .otherwise({ redirectTo: "/" });
}]);
