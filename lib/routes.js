'use strict';

var helloWorld = require('./handlers/hello_world.js');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: helloWorld
}];
