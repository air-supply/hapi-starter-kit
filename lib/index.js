'use strict';

var Hapi = require('hapi');
var hoek = require('hoek');
var Vision = require('vision');
var HapiRiot = require('hapi-riot');
var routes = require('./routes.js');

var server = new Hapi.Server();

require('env2')('.env');

server.connection({ port: process.env.PORT });

server.register(Vision,
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

      console.log('Visit: http://localhost:' + server.info.port + '/'); // eslint-disable-line
    });
  }
);

module.exports = server;
