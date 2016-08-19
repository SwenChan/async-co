"use strict";

const queue = require('./queue');

module.exports = function(thunk, limit){
  var q = queue(thunk, limit);

  return function () {
    return q.push([].slice.apply(arguments));
  };

}