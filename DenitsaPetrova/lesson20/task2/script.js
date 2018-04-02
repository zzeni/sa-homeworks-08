/* jslint esnext: true */
/* global document, window, $ */

(function () {
  "use strict";

  document.addEventListener('DOMContentLoaded', function () {
    $(".first").append("PAGE DOM LOADED");
  });

  window.onload = function () {
    $(".second").append("PAGE BOM LOADED");
  };

  $("body").click(function () {
    $("body").css({
      backgroundColor: "blue"
    });
    $("body").append("<h2>click captured</h2>");
  });

})();