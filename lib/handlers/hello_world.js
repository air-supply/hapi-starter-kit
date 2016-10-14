'use strict';

var path = require('path');

module.exports = function helloWorld (request, reply) {
  reply.file(path.resolve(__dirname, '../../public/index.html'));
};
