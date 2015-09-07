app.factory('ContactList', function() {
  var ContactList = {};
  ContactList.contactList = [];
  ContactList.foundContact = [];

  ContactList.addContact = function(obj) {
    ContactList.contactList.push(obj);
    this.newContact = {name: "", email: "", phone: ""};
  };

  ContactList.findContact = function(index) {
    ContactList.foundContact.splice(0, 1, ContactList.contactList[index]);
  };

  ContactList.removeContact = function(index) {
    ContactList.contactList.splice(index, 1);
  };
  return ContactList;
});

//------GIPHY API-------//
app.factory('Giphyservice', ["$http", "$q", function($http, $q) {
  var Giphyservice = {};
  Giphyservice.foundGiph = [];
  var baseUrl = "http://api.giphy.com/v1/gifs/search?q=";
  var key = "&api_key=dc6zaTOxFJmzC";
  var searchTerm = '';

  Giphyservice.setSearchTerm = function(term) {
    searchTerm = encodeURIComponent(term);
  };

  Giphyservice.getSearchTerm = function() {
    return decodeURIComponent(searchTerm);
  };

  Giphyservice.search = function(term) {
    if (term !== undefined) {
      Giphyservice.setSearchTerm(term);
    }
    var url = baseUrl + searchTerm + key;
    var deferred = $q.defer();
    $http.get(url).success(function(data) {
      Giphyservice.foundGiph.splice(0, 1, data.data);
      deferred.resolve(data);
    }).error(function() {
      deferred.reject("Error!");
    });
    return deferred.promise;
  };
  return Giphyservice;
}]);
