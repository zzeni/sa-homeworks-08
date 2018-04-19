/* jslint esnext: true */
/* global $ */

(function () {
  var text = "The quick brown fox jumps over the lazy dog";

  function wordCounter(text) {
    return text.split(" ").length;
  }

  $(".text").append(text);

  $("#counter").click( function (event) {
    event.preventDefault();
    var words = $("#words").val();

    $("#wordCounter").append(wordCounter(words || text));
  });

})();