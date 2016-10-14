'use strict';

var Hapi = require('hapi');
var hoek = require('hoek');
var Vision = require('vision');
var Inert = require('inert');
var HapiRiot = require('hapi-riot');
var routes = require('./routes.js');
var HapiError = require('hapi-error');
var socket = require('./server_socket.js');

var server = new Hapi.Server();

require('env2')('.env');

server.connection({ port: process.env.PORT });

server.register([Vision, HapiError, Inert],
  function (err) {
    hoek.assert(!err, err);

    server.views({
      engines: { tag: HapiRiot },
      relativeTo: __dirname,
      path: 'views'
    });

    server.route(routes);

    server.start(function (error) {
      hoek.assert(!error, error);
      socket.init(server, server.listener, function () {
        console.log('initialising socket on the server');
      });

      console.log('Visit: http://localhost:' + server.info.port + '/'); // eslint-disable-line
    });
  }
);

module.exports = server;
