app.controller('ChatController', function($scope, $firebaseArray) {
  //create ref
  var messsagesRef = new Firebase('https://jlin-firebase-chat.firebaseio.com/chat');
  //use ref to create synchronized array
  $scope.messages = $firebaseArray(messsagesRef);
  $scope.newMessage = {name: "", url: "", message: ""}
  //hard coded test
  // $scope.messages.$add({name: 'test', url: 'http://static.tumblr.com/b21b06c085de30e486c6a426305e6d12/e6lc7yi/syImv37wl/tumblr_static_dog-avatar2.jpg', message: 'hello world!'})
  $scope.addMessage = function() {
    $scope.messages.$add($scope.newMessage).then(function(data) {
      $scope.newMessage.name = ""
      $scope.newMessage.url = ""
      $scope.newMessage.message = ""
    })
  }
  $scope.removeMessage = function(message) {
    $scope.messages.$remove(message);
  }
  $scope.editMessage = function() {
    this.editForm = !this.editForm;
  }
  $scope.updateMessage = function(message) {
    $scope.messages.$save(this.message);
    this.editForm = false;
  }
})
