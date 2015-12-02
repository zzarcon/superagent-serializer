var normalize = require('normalize-object');

/**
 * Docs...
 * @param  {Object} superagent 
 * @param  {String} type       
 * @return {void}
 */
function serializer(superagent, type) {
  //TODO: Check arguments size
  //TODO: Validate arguments

  var Request = superagent.Request;
  var end = Request.prototype.end;

  Request.prototype.end = function(cb) {
    console.log('mock end');
    return end.call(this, function(err, res) {
      if (typeof cb !== 'function') return;

      var serializedRes;

      try {
        serializedRes = JSON.parse(res.text);
        serializedRes = normalize(serializedRes, type);
      } catch (e) {
        serializedRes = res.text;
      }

      cb(err, serializedRes);
    });

    // return end.apply(this, arguments);
  };
}

module.exports = serializer;