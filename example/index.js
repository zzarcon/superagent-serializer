var request = require('superagent');
var serializer = require('../index');

serializer(request, 'camel');

var end = request.get('data.json').send().end(function(err, res) {
  console.log(err, res);
});

console.log('end', end);