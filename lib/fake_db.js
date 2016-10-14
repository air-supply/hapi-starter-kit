'use strict';

var db = [];

module.exports = {
  get: function (cb) {
    return cb(null, db);
  },
  push: function (todo, cb) {
    db.push(todo);

    return cb(null);
  }
};
