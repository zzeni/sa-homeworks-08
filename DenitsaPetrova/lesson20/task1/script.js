/* jslint esnext: true */
/* global document */

(function () {
  "use strict";

  var button1 = document.querySelector("#first");
  button1.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
  });

  button1.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "white";
  });

  var button2 = document.querySelector("#second");
  button2.addEventListener("click", function () {
    if (document.body.style.backgroundColor == "blue") {
      document.body.style.backgroundColor = "red";
    }
    if (document.body.style.backgroundColor == "white") {
      document.body.style.backgroundColor = "orange";
    }
  });

})();