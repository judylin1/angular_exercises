app.controller('PokemonController', ['$scope', '$http', function ($scope, $http) {
  $http.get('http://pokeapi.co/api/v1/pokedex/1/').then(function (response) {
    $scope.allPokemon = [];
    var pokemon = response.data.pokemon;
    for (var i = 0; i < 5; i++) {
      var randomPokemon = Math.floor(Math.random() * pokemon.length);
      $http.get('http://pokeapi.co/' + pokemon[randomPokemon].resource_uri).then(function (onePokemon) {
        $http.get('http://pokeapi.co/'+onePokemon.data.sprites[0].resource_uri).then(function (sprite) {
          onePokemon.imgUrl = 'http://pokeapi.co' + sprite.data.image;
        $scope.allPokemon.push(onePokemon);
        });
      });
    }
  });
}]);
