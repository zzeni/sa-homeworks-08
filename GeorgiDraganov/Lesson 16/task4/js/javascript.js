/* jslint browser: true */
/* jslint esnext:true */
(function () {
  "use strict";

  function Hero(name, knownAs) {
    this.name = name;
    this.nickname = knownAs || name;
    this.alive = true;
  }


  function getSelectValue2() {
    var selectedValue2 = document.getElementById("list2").value;
    return selectedValue2;
  }
  var secondButton = document.getElementById("fighttheenemy");
  secondButton.onclick = Hero.prototype.kickAss = function fight() {
    if (document.getElementById('list2').options[document.getElementById('list2').selectedIndex].value == "citizen") {
      alert("THIS IS A CITIZEN YOU MANIAC!\n STOP HITTING HIM!");
    } else {
      document.getElementById("fightResult").innerHTML = (getSelectValue() + " just kicked " + getSelectValue2() + "\'s ass." + " Once again " + getSelectValue() + " saved the world!");
    }
  };

  function getSelectValue() {
    var selectedValue = document.getElementById("list").value;
    return selectedValue;
  }
  var button = document.getElementById("savetheworld");
  button.onclick = Hero.prototype.saveWorld = function save() {
    document.getElementById("fightResult").innerHTML = ("Once again " + getSelectValue() + " saved the world!");
  };
})();
