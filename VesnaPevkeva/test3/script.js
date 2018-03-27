/*global CoffeeMachine,document*/
(function () {
  "use strict";

  function CoffeeMachine(coffee, water, milk, cups, name) {
    this.coffee = coffee || 0;
    this.water = water || 0;
    this.milk = milk || 0;
    this.cups = cups || 0;
    this.name = name;
}

    CoffeeMachine.prototype.smallLoad = function() {
        this.coffee += 200;
        this.water += 500;
        this.milk += 100;
        this.cups += 10;
    };

    CoffeeMachine.prototype.meduimLoad = function() {
        this.coffee += 500;
        this.water += 1000;
        this.milk += 300;
        this.cups += 30;
    };

    CoffeeMachine.prototype.bigLoad = function() {
        this.coffee += 1000;
        this.water += 2000;
        this.milk += 500;
        this.cups += 60;
    };

    CoffeeMachine.prototype.order = function(typeOfCoffee) {

        console.log("serves one " + typeOfCoffee.name);

        this.coffee -= typeOfCoffee.coffee;  
        this.water -= typeOfCoffee.water;  
        this.milk -= typeOfCoffee.milk;  
        this.cups -= typeOfCoffee.cups;  

    };

    CoffeeMachine.prototype.status = function() {
        console.log("coffe: " + this.coffee + "gr, milk: " + this.milk + "ml, water: " + this.water + "ml, cups: " + this.cups);
    };

    var machine = new CoffeeMachine();


    var coffee = new CoffeeMachine(20, 60, 0, 1,"coffee");
    var coffeeWithMilk = new CoffeeMachine(20, 50, 20, 1,"coffee with milk");
    var cappuchino = new CoffeeMachine(20, 30, 40, 1,"cappuchino");
    var latte = new CoffeeMachine(20, 30, 60, 1,"latte");
    var longCoffee = new CoffeeMachine(20, 130, 0, 1,"long coffee");
    var doubleCoffee = new CoffeeMachine(35, 80, 0, 1,"double coffee");

    var RECEPIES = {
      coffee,
      coffeeWithMilk,
      cappuchino,
      latte,
      longCoffee,
      doubleCoffee
    };

  function displayStatus() {
    var statusContainer = document.getElementById("statusContainer");
    statusContainer.innerHTML = machine.htmlStatus();
  }

  document.getElementById("smallLoad").addEventListener("click", function () {
    machine.smallLoad();
    displayStatus();
  });
  document.getElementById("mediumLoad").addEventListener("click", function () {
    machine.mediumLoad();
    displayStatus();
  });
  document.getElementById("bigLoad").addEventListener("click", function () {
    machine.bigLoad();
    displayStatus();
  });

  var buttons = document.getElementsByClassName("order-btn");

  for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var beverage = this.getAttribute("data-beverage");
      var errorContainer = document.getElementById("error");

      errorContainer.classList.add("hidden"); // hide the error container

      try {
        machine.order(beverage);
        displayStatus();
      }
      catch (error) {
        errorContainer.classList.remove("hidden"); // show the error container
        errorContainer.querySelector(".panel-body").innerHTML = error.message;
      }
    });
  }
})();
