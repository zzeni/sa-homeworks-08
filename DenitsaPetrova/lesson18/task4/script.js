/* jslint esnext:true */
/* globals document, window */

(function () {
  "use strict";
  window.setTimeout(function () {
    document.querySelector("#showMe").style.display = "block";
  }, 30000);

  window.setTimeout(function () {
    document.querySelector("#triggerMe").style.display = "block";
    window.setInterval(function () {
      var toggle = document.querySelector("#triggerMe");
      if (toggle.style.display == "block") {
        toggle.style.display = "none";
      } else {
        toggle.style.display = "block";
      }
    }, 5000);
  }, 35000);

  window.setTimeout(function () {
    document.querySelector("div:last-of-type").style.display = "block";
    document.getElementById("hostname").innerHTML = document.location.hostname;
/*    В codepen и repl върви правилно, но като го копирам в brackets и отворя страницата в браузар не излиза нищо, защото е файл ли ?
      document.getElementById("hostname").innerHTML = document.location;*/
  }, 40000);
})();