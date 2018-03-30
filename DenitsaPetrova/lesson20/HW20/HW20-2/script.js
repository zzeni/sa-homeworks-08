/*globals document, $ */
(function () {
  "use strict";

  var red = 0,
    yellow = 0,
    blue = 0;


  var garden = document.querySelector("#garden");
  var basket = document.querySelector("#basket");
  var colors = ["red", "yellow", "blue"];
  var i = 0;

  for (; i < 60; i++) {
    var color = colors[random(3)];
    var number = random(4) + 1;
    var img = document.createElement("img");

    img.src = "img/" + color + "-" + number + ".png";
    img.classList.add(color);
    img.addEventListener("click", pick, {
      once: true
    });

    garden.appendChild(img);
  }

  function pick(event) {
    var img = event.target;
    garden.removeChild(img);
    basket.appendChild(img);
    counter(img);
  }


  function counter(img) {
    var url = img.src;
    var isRed = url.slice(-7, -6),
      isYellow = url.slice(-7, -6),
      isBlue = url.slice(-7, -6);
    if (isRed == "d") {
      red++;
      $("#red").empty().append(red);
    }
    if (isYellow == "w") {
      yellow++;
      $("#yellow").empty().append(yellow);
    }
    if (isBlue == "e") {
      blue++;
      $("#blue").empty().append(blue);
    }
  }

  function random(limit) {
    return Math.floor(Math.random() * limit);
  }
})();
