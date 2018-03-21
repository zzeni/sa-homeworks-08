/* jshint esnext: true */
(function () {
  'use strict';

  document.querySelector("h1").textContent = "I <3 JS!";

  document.querySelector('button').addEventListener("click", toggleColor);

  function toggleColor() {
    document.querySelector('h1').classList.toggle('red');
  }
})();
