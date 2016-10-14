'use strict';

module.exports = function helloWorldPost (request, reply) {
  var item = request.payload;

  console.log('ITEM', item);
  reply().code(200);
};
