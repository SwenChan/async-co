'use strict';
var mocha = require('mocha')
const should = require('should');
const Promise = require('bluebird');
const eachLimit = require('../lib/eachLimit');
const eachOfLimit = require('../lib/eachOfLimit');

describe('array => ', function () {
  it('each', function * () {
    function * thunk (value, key) {
      yield Promise.delay(1000);
      console.log('key value', key, value)
      return value;
    }
    const result = yield eachLimit([1,2,3,4], 2, thunk);
    console.log(result);
  });
  it('eachOf', function * () {
    function * thunk (value, key) {
      yield Promise.delay(1000);
      console.log(key, value);
      return [key, value];
    }
    const result = yield eachOfLimit([1,2,3,4], 2, thunk);
    console.log(result);
  })
});