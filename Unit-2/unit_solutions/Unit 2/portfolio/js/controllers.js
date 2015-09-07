app.controller('NavController', function ($scope, $location) {
  var location = $location.path();
  $scope.setActive = function (route) {
    if (route === '/') {
      $scope.bio = 'not-active'
      $scope.resume = 'not-active'
      $scope.projects = 'not-active'
      $scope.home = 'active'
    }
    if (route === '/projects') {
      $scope.bio = 'not-active'
      $scope.resume = 'not-active'
      $scope.home = 'not-active'
      $scope.projects = 'active'
    }
    if (route === '/resume') {
      $scope.bio = 'not-active'
      $scope.home = 'not-active'
      $scope.projects = 'not-active'
      $scope.resume = 'active'
    }
    if (route === '/bio') {
      $scope.resume = 'not-active'
      $scope.projects = 'not-active'
      $scope.home = 'not-active'
      $scope.bio = 'active'
    }
  }
})

app.controller('HomeController', function ($scope, $location) {
  $scope.message = "Welcome!"
});

app.controller('ProjectsController', function ($scope, $location) {
  $scope.message = "I'm too lazy to put them here."
});

app.controller('BioController', function ($scope) {
  $scope.message = "I'm awesome."
});

app.controller('ResumeController', function ($scope) {
  $scope.message = "Something awesome goes here."
});
