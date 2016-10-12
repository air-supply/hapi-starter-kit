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

test('hello_world_post valid', function (t) {
  var options = {
    method: 'POST',
    url: '/',
    payload: {
      title: 'testTitle',
      description: 'testDescription'
    }
  };

  server.inject(options, function (response) {
    t.equal(response.statusCode, 200, '✅  200 response code returned');
    t.end();
  });
});

test('hello_world_post invalid', function (t) {
  var options = {
    method: 'POST',
    url: '/',
    payload: {
      title: '',
      description: ''
    }
  };

  server.inject(options, function (response) {
    t.equal(response.statusCode, 400, '✅  400 response code returned');
    t.end();
  });
});

test('stop server', function (t) {
  server.stop(t.end);
});
