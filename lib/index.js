'use strict';

var Hapi = require('hapi');
var hoek = require('hoek');
var Vision = require('vision');
var HapiRiot = require('../node_modules/hapi-riot/lib/index.js');
var routes = require('./routes.js');

var server = new Hapi.Server();

require('env2')('.env');

server.connection({ port: process.env.PORT });

server.register(Vision,
  function (err) {
    hoek.assert(!err, err);

    server.views({ // initialise
      engines: { tag: HapiRiot }, // file should be .tag

      relativeTo: __dirname, // assuming your
      path: 'views' // by convention we put our tags in /views dir
    });

    server.route(routes);

    server.start(function (error) {
      hoek.assert(!error, error);

      console.log('Visit: http://localhost:' + server.info.port + '/'); // eslint-disable-line
    });
  }
);

module.exports = server;
