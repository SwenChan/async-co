'use strict';
const mapLimit = require('./mapLimit');

module.exports = function * (coll, iteratee) {
  return yield mapLimit(coll, Object.keys(coll).length, iteratee);
};