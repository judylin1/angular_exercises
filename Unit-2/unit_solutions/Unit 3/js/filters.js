app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g , "-");
  };
});

app.filter('camel', function() {
  return function(input) {
    return input.toLowerCase().replace(/(_|-)([a-z])/g, function(input) {
    return input[1].toUpperCase();
  });
};
});

app.filter('pig', function() {
  return function(input) {
    return input.replace(/\w+/g, function(word) {
     var chars = word.split('');
     return chars.slice(1).join('') + chars[0] + 'ay';
  });
};
});

app.filter('redact', function() {
  return function(input) {
    return input.replace(/Rusty/g, 'REDACTED')
  }
})
