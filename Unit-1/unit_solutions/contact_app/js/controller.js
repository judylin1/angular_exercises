app.controller("ContactsController", ["$scope", "ContactList", "Giphyservice", function($scope, ContactList, Giphyservice){
   $scope.contactData = ContactList.contactList;
   $scope.newContact = {name: "", email: "", phone: ""};
   $scope.AddContact = ContactList.addContact;
   $scope.FindContact = ContactList.findContact;
   $scope.RemoveContact = ContactList.removeContact;
   $scope.findGiph = Giphyservice.search;
}]);

app.controller("ShowController", ['$scope', 'ContactList', '$route', '$routeParams', '$location', 'Giphyservice', function($scope, ContactList, $route, $routeParams, $location, Giphyservice){
   $scope.id = $routeParams.id;
   $scope.found = ContactList.foundContact;
   $scope.foundGiph = Giphyservice.foundGiph;
}]);
