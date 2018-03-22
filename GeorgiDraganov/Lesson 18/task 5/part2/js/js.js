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



  function rotatePicture() {
    var picture = document.querySelector(".picture");
    picture.style.transform += "rotate(90deg)";
  }
  var intId3 = window.setInterval(rotatePicture, 2000);

  function stopRotatePicture() {
    window.clearInterval(intId3);

  }
  window.setTimeout(stopRotatePicture, 10000);


  /*  setInterval(function(){
      var picture = document.querySelector(".picture");
        picture.style.transform += "rotate(90deg)";
    },2000);
    */

})();
