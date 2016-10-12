'use strict';

var helloWorld = require('./handlers/hello-world.js');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: helloWorld
}];
