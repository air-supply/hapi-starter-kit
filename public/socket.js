/* global io XMLHttpRequest riot */
'use strict';

var sockets = (function () {
  var itemStore = [];
  var socket;

  function request (method, path, payload, callback) {
    var xhttp = new XMLHttpRequest();
    var payloadString = JSON.stringify(payload);
    var postData = payloadString || '';
    var responseData;

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        responseData = JSON.parse(xhttp.responseText);

        return callback(null, responseData);
      }
    };
    xhttp.open(method, path, true);
    xhttp.send(postData);
  }

  function renderItem (item) {
    itemStore.push(item);
    riot.update();
  }

  function handleFormSubmit (event) {
    var title = event.target[0].value;
    var description = event.target[1].value;
    var item = {
      title: title,
      description: description
    };

    event.preventDefault();
    request('POST', '/', item, function (err, data) {
      if (err) {
        document.getElementById('error').innerHTML = err;
      } else {
        document.getElementById('itemForm').reset();
      }
    });
    event.preventDefault();

    return false;
  }


  document.onreadystatechange = function () {
    var form = document.getElementById('itemForm');

    if (document.readyState === 'complete') {
      socket = io();
      form.onsubmit = handleFormSubmit;
      socket.on('todo:item:latest', function (item) {
        renderItem(item);
      });
      riot.mount('todoList', { itemStore: itemStore });
    }
  };
})();
