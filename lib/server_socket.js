'use strict';

var server = require('./index.js');
var SocketIO = require('socket.io');
var io;

function todoHandler (server) {
  return function (socket) {
    socket.on('new:item', function (item) {
      server.inject({
        method: 'POST',
        url: '/',
        payload: item
      }, function (response) {
        if (response.statusCode === 200) {
          socket.emit('todo:item:latest', item);
        }
      });
    });
  };
}

function init (server, listener, callback) {
  io = SocketIO.listen(listener);
  io.on('connection', todoHandler(server));
  setTimeout(function () {
    callback();
  }, 300);
}

module.exports = { init: init };
