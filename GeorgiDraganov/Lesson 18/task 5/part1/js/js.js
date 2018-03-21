/* jshint esnext:true  */

(function () {
  'use strict';
  var rabbit = document.querySelector(".hidden");

  function rabbitDisplay() {
    rabbit.classList.toggle("hidden");
  }

  var intId = window.setInterval(rabbitDisplay, 30000);

  function stopRabbit() {
    window.clearInterval(intId);
  }

  window.setTimeout(stopRabbit, 30000);

  var cat = document.getElementById("triggerMe");

  function catDisplay() {
    cat.classList.toggle("hidden");
  }

  setTimeout(function () {
    setInterval(catDisplay, 5000);
  }, 30000);

  var domain = document.getElementById("hidden");


  function domainDisplay() {
    document.getElementById("hostname").innerHTML = "Window.location: " + window.location + "</br>" + "Window.location.hostname: " + window.location.hostname;

    domain.classList.toggle("hidden");

  }

  var intId2 = window.setInterval(domainDisplay, 5000);

  function stopDomain() {
    window.clearInterval(intId2);
  }

  window.setTimeout(stopDomain, 5000);

  // 5 секунди след като се е заредила, зарежда друг уебсайт в същия прозорец.
    window.setTimeout(function () {
   window.location.replace("http://www.w3schools.com");
  }, 5000);

  


})();
