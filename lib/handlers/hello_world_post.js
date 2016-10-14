'use strict';

var getSocket = require('../server_socket').getSocket;

module.exports = function helloWorldPost (request, reply) {
  var item = request.payload;

  getSocket().emit('todo:item:latest', item);
  reply(item);
};
