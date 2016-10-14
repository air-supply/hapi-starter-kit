/* global io */
'use strict';

var sockets = (function () {
  var socket;

  function renderItem (item) {
    var todoList, todoTitle;
    var listItem = document.createElement('li');

    todoTitle = item.title;
    listItem.innerHTML = todoTitle;
    todoList = document.getElementById('todo_list');
    todoList.appendChild(listItem);
  }
  function handleFormSubmit (event) {
    var title = event.target[0].value;
    var description = event.target[1].value;
    var item = {
      title: title,
      description: description
    };

    event.preventDefault();
    socket.emit('new:item', item);

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
    }
  };
})();
