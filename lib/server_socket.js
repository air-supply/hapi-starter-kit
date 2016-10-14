'use strict';

var SocketIO = require('socket.io');
var io, socket;

function init (server, listener, callback) {
  io = SocketIO.listen(listener);
  io.on('connection', function (newSocket) {
    socket = newSocket;
    callback(socket);
  });
  setTimeout(function () {
    callback();
  }, 300);
}

function getSocket () {
  return socket;
}

module.exports = { init: init, getSocket: getSocket };
