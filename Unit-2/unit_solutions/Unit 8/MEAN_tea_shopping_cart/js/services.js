app.factory('CheckoutBag', function () {
  var bag = [];
  var subTotal = 0;
  var obj = {
    bagArray: function (input) {
      bag.push(input)
      return bag
    },
    bag: bag
  }
  return obj
})
