'use strict';

module.exports = function helloWorld (request, reply) {
  reply.view('hello_world');
};
