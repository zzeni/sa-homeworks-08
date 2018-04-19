/* jslint esnext: true */
/* global $ */

(function () {
  var list = [3, 45, 2, 6, 18, 5];

  function sort(items) {
    items.sort(function (a, b) {
      return (a - b);
    });
    return items.toString();
  }

  function sortReverse(items) {
    items.sort(function (a, b) {
      return (b - a);
    });
    return items.toString();
  }
 
  $("#array").append(list.toString());
  $("#sort").append(sort(list) + "<br>");
  $("#sort").append(sortReverse(list));

})();