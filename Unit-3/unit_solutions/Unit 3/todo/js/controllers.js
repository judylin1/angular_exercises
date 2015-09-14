app.controller('TodosController', function($scope, $firebaseArray) {
  //create ref
  var todosRef = new Firebase('https://crackling-inferno-4145.firebaseio.com/list')
  //use ref to create synchronized array
  $scope.todos = $firebaseArray(todosRef);
  $scope.newTodo = {text: "", completed: false}
  //hard coded
  // $scope.todos.$add({text:"Walk Charlie & Sid", completed: false})
  $scope.addTodo = function() {
    $scope.todos.$add($scope.newTodo).then(function(data) {
      $scope.newTodo.text = ""
    })
  }
  $scope.removeTodo = function(todo) {
    $scope.todos.$remove(todo);
  }
  $scope.updateTodo = function(todo) {
    if (todo.completed) {
      todo.completed = false
    }
    else {
      todo.completed = true;
    }
    $scope.todos.$save(todo)
  }
})
