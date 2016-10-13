/* global io document XHRHttpRequest */
'use strict';

var websocket = (function () {

  function renderItem (item) {
    var html, todoList, todoItem;

    todoItem = JSON.parse(item);
    html = '<li>';
    html += '<span>' + todoItem + '</span>';
    html += '</li>';
    todoList = document.getElementById('todo_list');
    todoList.insertBefore(html, todoList.firstChild);
  }

  // function loadTodoItems () {
  //   var xhttp = new XHRHttpRequest();
  //   var todoListItems;
  //
  //   xhttp.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       todoListItems = JSON.parse(xhttp.responseText);
  //       todoListItems.map(function (todoListItem) {
  //         return renderItem(todoListItem);
  //       });
  //     }
  //   };
  //   xhttp.open('GET', '/load', true);
  //   xhttp.send();
  // }
  function init () {
    var socket;

    console.log('socket opened');
    // loadTodoItems();
    socket = io();
    socket.on('todo:items:latest', function (item) {
      renderItem(item);
    });
  }
  function logWindowAndDoc () {
    console.log('window', window);
    console.log('document', document.readyState);
  }

  document.onreadystatechange = function () {
    if (!document.readyState === 'complete') {
      init();
    }
  };


//   document.onreadystatechange = function () {
//     if (document.readyState == "interactive") {
//         initApplication();
//     }
// }

  // window.addEventListener('load', function (event) {
  //   console.log(event);
  //   console.log("DOM fully loaded and parsed");
  // });
  // window.onload = function () {
  //   init();
  // };

  return {
    logWindowAndDoc: logWindowAndDoc,
    init: init
  };
})();
