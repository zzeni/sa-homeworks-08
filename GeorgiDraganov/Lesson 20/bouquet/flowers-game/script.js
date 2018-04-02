/*globals document */
/* jslint esnext: true */

(function () {
  "use strict";

  var garden = document.querySelector("#garden");
  var basket = document.querySelector("#basket");
  var colors = ["red", "yellow", "blue"];

  for (let i = 0; i < 60; i++) {
    var color = colors[random(3)];
    var number = random(4) + 1;
    var img = document.createElement("img");
    img.src = "img/" + color + "-" + number + ".png";
    img.classList.add(color);
    img.addEventListener("click", pick, {
      once: true
    });
    img.addEventListener("click", addFlowers);
    garden.appendChild(img);
  }

  function pick(event) {
    var img = event.target;
    garden.removeChild(img);
    basket.appendChild(img);
  }

  function addFlowers(event) {
    var red = document.querySelector("#red");
    var blue = document.querySelector("#blue");
    var yellow = document.querySelector("#yellow");
    var img = event.target;
    if (img.classList.contains("red")) {
      let redValue = Number(red.textContent);
      red.textContent = redValue + 1;
    }
    if (img.classList.contains("blue")) {
      let blueValue = Number(blue.textContent);
      blue.textContent = blueValue + 1;
    }
    if (img.classList.contains("yellow")) {
      let yellowValue = Number(yellow.textContent);
      yellow.textContent = yellowValue + 1;
    }
  }

  function random(limit) {
    return Math.floor(Math.random() * limit);
  }
})();
