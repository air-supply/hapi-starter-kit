'use strict';

var test = require('tape');
var server = require('../lib/index.js');

test('hello_world', function (t) {
  var options = {
    method: 'GET',
    url: '/'
  };

  server.inject(options, function (response) {
    t.equal(response.statusCode, 200, '✅  200 response code returned');
    t.end();
  });
});

test('stop server', function (t) {
  server.stop(t.end);
});
