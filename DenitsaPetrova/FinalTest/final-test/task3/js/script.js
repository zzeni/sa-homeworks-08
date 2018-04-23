/* jslint esnext: true */
/* global $ */

(function () {
  "use strict";
  var kids = [];

  function Kids(name, age, color, game, food, image) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.game = game;
    this.food = food;
    this.image = image;
  }

  $.getJSON('js/kids.json', getKids);

  function getKids(data) {
    kids = data;
    displayKids(kids);
  }


  function displayKids(kids) {
    kids.forEach(function (oneKid) {
      var toDisplay = new Kids(oneKid.name, oneKid.age, oneKid.color, oneKid.game, oneKid.food, oneKid.image);
      $("#kids").append(toDisplay.kidToHTML());
      console.log(toDisplay);
    });
  }

  Kids.prototype.kidToHTML = function () {
    return `<div class="kid col-md-6 mb-5">
<div class="card">
<div class="card-heading bg-info text-white">
<h3 class="m-3">${this.name}</h3>
</div>
<div class="card-body row">
<div class="col-lg-4">
 <img class="img-fluid" src="${this.image}">
</div>
<div class="col-lg-8">
 <ul class="my-4">
 <li><h5>Години: ${this.age}</h5></li>
 <li><h5>Любим цвят: ${this.color}</h5></li>
 <li><h5>Любима игра: ${this.game}</h5></li>
 <li><h5>Любима храна: ${this.food}</h5></li>
 </ul>
 <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#kidModal">Още</button>
</div>
</div>
</div>
 </div>`;
  };

  function sortByAge(list) {
    return list.filter(function (a, b) {
      return a.age > b.age ? 1 : -1;
    });
  }

  $("[name=sortByAge]").click(function () {
    var ageSort = sortByAge(Kids);
    displayKids(ageSort);
  });

  function filterByGame(list, game) {
    return list.filter(function (kid) {
      return kid.game.includes(game);
    });
  }


})();
