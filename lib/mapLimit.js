'use strict';
const isArray = Array.isArray;

module.exports = function * (coll, limit, iteratee) {
  const isArr = isArray(coll);
  const ent = isArr ? coll.entries() : makeEntries(coll);
  let results=  isArr ? [] : {};
  let workers = [];
  while(limit--) { // setup workers
    workers.push(nextJob());
  }
  yield workers;
  return results;

  function * nextJob () {
    const i = ent.next();
    if (i.done) return null;
    const key = i.value[0];
    const value = i.value[1];
    results[key] = yield iteratee(value, key);
    yield nextJob();
  }
};

function makeEntries (obj) {
  let map = new Map();
  for (let key of Object.keys(obj)) {
    map.set(key, obj[key]);
  }
  return map.entries();
}
