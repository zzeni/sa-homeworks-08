/* jslint esnext: true */
/* global $ */

(function () {
  var text = "The quick brown fox jumps over the lazy dog";

  function capitalize(text) {
    return text.replace(/\b\w/g, function (first) {
      return first.toUpperCase();
    });
  }

  $("#upper").click( function (event) {
    event.preventDefault();
    var cap = $("#cap").val();

    $("#capitalize").append(capitalize(cap || text));
  });

})();