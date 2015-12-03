# superagent-serializer
> Superagent plugin to convert server payload into different cases

[superagent](https://github.com/visionmedia/superagent) plugin that brings you the hability of convert your server payload into different cases

# Installation

`$ npm i superagent-serializer --save`

# Usage

Having the following response
```json
{
  "first_name": "Hector",
  "last-name": "Zarco"
}
```

```javascript
var request = require('superagent');
var serializer = require('superagent-serializer');

serializer(request, 'camel');

request.get('data.json').send().end(function(err, res) {
  console.log(res.firstName + ' ' + res.lastName);
});

```

This will convert the output into

```json
{
  "firstName": "Zarco",
  "lastName": "Hector Zarco"
}

```

# Cases
  - **upper** : `foo_bar` -> `FOO BAR`
  - **lower** : `fooBar` -> `foo bar`
  - **snake** : `Foo bar!` -> `foo_bar`
  - **pascal** : `foo.bar` -> `FooBar`
  - **camel** : `foo, bar` -> `fooBar`
  - **kebab** : `Foo? Bar.` -> `foo-bar`
  - **constant** : `Foo-Bar` -> `FOO_BAR`
  - **title** : `foo v. bar` -> `Foo v. Bar`
  - **capital** : `foo_v_bar` -> `Foo V Bar`