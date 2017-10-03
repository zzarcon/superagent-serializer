var normalize = require('normalize-object');
var validTypes = ['upper', 'lower', 'snake', 'pascal', 'camel', 'kebab', 'constant', 'title', 'capital', 'sentence'];

/**
 * Wrapps Superagent and returns a serialized response
 * @param  {Object} superagent 
 * @param  {String} type       
 * @return {void}
 */
function serializer(superagent, type) {
  if (arguments.length < 2) {
    throw new Error("superagent-serializer: expects 2 params");
  }
  if (validTypes.indexOf(type) === -1) {
    throw new Error("superagent-serializer: the passed type don't exist");
  }

  var Request = superagent.Request;
  var end = Request.prototype.end;

  Request.prototype.end = function(cb) {
    return end.call(this, function(err, res) {
      if (typeof cb !== 'function') return;

      var serializedRes;

      try {
        serializedRes = JSON.parse(res.text);
        serializedRes = normalize(serializedRes, type);
      } catch (e) {
        if (typeof res !== 'undefined') {
          serializedRes = res.text;
        }
      }

      cb(err, serializedRes);
    });
  };
}

module.exports = serializer;