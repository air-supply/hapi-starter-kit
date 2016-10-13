'use strict';

var path = require('path');
var helloWorldGet = require('./handlers/hello_world.js');
var helloWorldPost = require('./handlers/hello_world_post.js');
var Joi = require('joi');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: helloWorldGet
},
{
  method: 'POST',
  path: '/',
  handler: helloWorldPost,
  config: {
    validate: {
      payload: Joi.object().keys({
        title: Joi.string()
          .alphanum()
          .min(1)
          .max(80)
          .required(),
        description: Joi.string()
      })
    }
  }
},
{
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.resolve(__dirname, './js'),
      listing: true,
      index: false
    }
  }
}];
