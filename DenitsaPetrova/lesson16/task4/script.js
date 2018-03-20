/* JSlint esnext: true */
/* global document */
(function () {
  "use strict";

  function display(html) {
    var div = document.createElement("div");
    div.classList.add("Guy");
    div.innerHTML = html;
    document.body.appendChild(div);
  }


  function Guy(name, knownAs, good) {
    this.name = name;
    this.nickname = knownAs || name;
    this.alive = true;
    this.isGood = good || true;
  }


  Guy.prototype.kickAss = function (enemy) {
    if (!enemy.isGood) {
      throw new Error(alert(this.name + " is GOOD!"));
    }
    if(!this.isGood){
      throw new Error(alert(this.name + " is Bad!"));
    }
    enemy.die();
    display(this.nickname + " just kicked " + enemy.nickname + "\'s ass");
    this.saveWorld();
  };

  Guy.prototype.saveWorld = function () {
    display("<em>Once again " + this.nickname + " saved the world!</em>");
  };

  Guy.prototype.die = function () {
    if (!this.alive) {
      throw new Error(alert(this.name + " is DIE!"));
    }
    this.alive = false;
  };

  Guy.prototype.toDisplay = function () {
    display("<pre>\n Name: " + this.name + "\n Nickname: " + this.nickname + "\n Is alive: " + this.alive + "\n Is good: " + this.isGood + "</pre>");
  };


  var superman = new Guy("Clark Kent", "Superman");
  var chuck = new Guy("Chuck Norris");
  var batman = new Guy("Bruce Wane", "Batman");
  var joker = new Guy("Joker","" , "false");
  var catWoman = new Guy("Selina Kyle", "Catwoman", "false");
  var penguin = new Guy("Oswald Cobblepot", "The Penguin", "false");

  superman.saveWorld();
  chuck.saveWorld();
  batman.kickAss(penguin);
  catWoman.kickAss(joker);

  display("<hr>");
  display("<h2> Starring </h2>");

  superman.toDisplay();
  chuck.toDisplay();
  batman.toDisplay();
  joker.toDisplay();
  catWoman.toDisplay();
  penguin.toDisplay();

})();
