'use strict';
var mocha = require('mocha')
var coMocha = require('co-mocha')

coMocha(mocha)
const should = require('should');
const Promise = require('bluebird');
const eachLimit = require('../lib/eachLimit');

describe('array => ', function () {
  it('each', function * () {
    function * thunk (value, key) {
      yield Promise.delay(1000);
      return value;
    }
    const result = yield eachLimit([1,2,3,4], 2, thunk);
    console.log(result);
  });
});