/* global $ */
(function () {

  $.getJSON("https://api.github.com/users/DenitsaPP", print);

  function print(data) {
    Object.entries(data).forEach(function ([key, value]) {
      $("#JSON > div").append(key + ": " + value + "<br>");
    });
  }

})();
