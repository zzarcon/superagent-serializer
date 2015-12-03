# superagent-serializer
> Superagent plugin to serialize response data into different types

[superagent](https://github.com/visionmedia/superagent) plugin to serialize request responses using predefined types.

# Installation

`$ npm i superagent-serializer --save`

# Usage

Having the following response
```json
{
  "name": "Hector",
  "last_name": "Zarco",
  "full-name": "Hector Zarco"
}
```

```javascript
var request = require('superagent');
var serializer = require('superagent-serializer');

serializer(request, 'camel');

request.get('data.json').send().end(function(err, res) {
  console.log(res);
});

```

This will convert the output into

```json
{
  "name": "Hector",
  "lastName": "Zarco",
  "fullName": "Hector Zarco"
}

```
