/*global CoffeeMachine,document*/
/* jshint esnext:true  */

var RECIPES = {
  coffee: {
    price: 0.5,
    coffee: 20,
    water: 60,
    cups: 1
  },
  coffeeWithMilk: {
    price: 0.60,
    coffee: 20,
    water: 50,
    milk: 20,
    cups: 1
  },
  cappuchino: {
    price: 0.80,
    coffee: 20,
    water: 30,
    milk: 40,
    cups: 1
  },
  latte: {
    price: 0.80,
    coffee: 20,
    water: 30,
    milk: 60,
    cups: 1
  },
  americano: {
    price: 0.60,
    coffee: 20,
    water: 130,
    cups: 1
  },
  doubleCoffee: {
    price: 0.70,
    coffee: 35,
    water: 80,
    cups: 1
  }
};
(function () {
  "use strict";

  function CoffeeMachine(coffee, milk, water, cups, price) {
    this.coffee = coffee || 0;
    this.milk = milk || 0;
    this.water = water || 0;
    this.cups = cups || 0;
    this.price = price || 0;

  }
  var smallButton = document.getElementById("smallLoad");
  smallButton.onclick = CoffeeMachine.prototype.smallLoad = function () {
    document.getElementById("coffee").innerHTML = this.coffee += 200;
    document.getElementById("milk").innerHTML = this.milk += 100;
    document.getElementById("water").innerHTML = this.water += 500;
    document.getElementById("cups").innerHTML = this.cups += 15;

  };
  var mediumButton = document.getElementById("mediumLoad");
  mediumButton.onClick = CoffeeMachine.prototype.mediumLoad = function () {
    document.getElementById("coffee").innerHTML = this.coffee += 500;
    document.getElementById("milk").innerHTML = this.milk += 300;
    document.getElementById("water").innerHTML = this.water += 1000;
    document.getElementById("cups").innerHTML = this.cups += 30;
  };
  var bigButton = document.getElementById("bigLoad");
  bigButton.onClick =
    CoffeeMachine.prototype.bigLoad = function () {
      document.getElementById("coffee").innerHTML = this.coffee += 1000;
      document.getElementById("milk").innerHTML = this.milk += 500;
      document.getElementById("water").innerHTML = this.water += 2000;
      document.getElementById("cups").innerHTML = this.cups += 60;

    };

  CoffeeMachine.prototype.status = function () {
    return "coffee: " + this.coffee +
      "gr, milk: " + this.milk +
      "gr, water: " + this.water +
      "gr, cups: " + this.cups;
  };


  var machine = new CoffeeMachine();

  function displayStatus() {
    console.log(machine.status());


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
  var x = document.getElementById("error");


  var coffeeButton = document.getElementById("firstButton");
  coffeeButton.onclick = CoffeeMachine.prototype.order = function () {
    if (document.getElementById("coffee").innerText < RECIPES.coffee.coffee) {
      x.style.display = "block";
      throw new Error('not enough coffee');
    }
    if (document.getElementById("water").innerText < RECIPES.coffee.water) {
      x.style.display = "block";
      throw new Error('not enough water');
    }
    if (document.getElementById("cups").innerText < RECIPES.coffee.cups) {
      x.style.display = "block";
      throw new Error('not enough cups');

    } else {
      x.style.display = "none";
    }
    document.getElementById("coffee").innerHTML = document.getElementById("coffee").innerText - RECIPES.coffee.coffee;
    document.getElementById("water").innerHTML = document.getElementById("water").innerText - RECIPES.coffee.water;
    document.getElementById("cups").innerHTML = document.getElementById("cups").innerText - RECIPES.coffee.cups;

  };

  var coffeeWithMilk = document.getElementById("secondButton");
  coffeeWithMilk.onclick = CoffeeMachine.prototype.order = function () {
    if (document.getElementById("coffee").innerText < RECIPES.coffeeWithMilk.coffee) {
      x.style.display = "block";
      throw new Error('not enough coffee');
    }
    if (document.getElementById("water").innerText < RECIPES.coffeeWithMilk.water) {
      x.style.display = "block";
      throw new Error('not enough water');
    }
    if (document.getElementById("cups").innerText < RECIPES.coffeeWithMilk.cups) {
      x.style.display = "block";
      throw new Error('not enough cups');
    }
    if (document.getElementById("milk").innerText < RECIPES.coffeeWithMilk.milk) {
      x.style.display = "block";
      throw new Error('not enough milk');
    } else {
      x.style.display = "none";
    }
    document.getElementById("coffee").innerHTML = document.getElementById("coffee").innerText - RECIPES.coffeeWithMilk.coffee;
    document.getElementById("water").innerHTML = document.getElementById("water").innerText - RECIPES.coffeeWithMilk.water;
    document.getElementById("cups").innerHTML = document.getElementById("cups").innerText - RECIPES.coffeeWithMilk.cups;
    document.getElementById("milk").innerHTML = document.getElementById("milk").innerText - RECIPES.coffeeWithMilk.milk;

  };
  var cappuchino = document.getElementById("fourthButton");
  cappuchino.onclick = CoffeeMachine.prototype.order = function () {
    if (document.getElementById("coffee").innerText < RECIPES.cappuchino.coffee) {
      x.style.display = "block";
      throw new Error('not enough coffee');
    }
    if (document.getElementById("water").innerText < RECIPES.cappuchino.water) {
      x.style.display = "block";
      throw new Error('not enough water');
    }
    if (document.getElementById("cups").innerText < RECIPES.cappuchino.cups) {
      x.style.display = "block";
      throw new Error('not enough cups');
    }
    if (document.getElementById("milk").innerText < RECIPES.cappuchino.milk) {
      x.style.display = "block";
      throw new Error('not enough milk');
    } else {
      x.style.display = "none";
    }
    document.getElementById("coffee").innerHTML = document.getElementById("coffee").innerText - RECIPES.cappuchino.coffee;
    document.getElementById("water").innerHTML = document.getElementById("water").innerText - RECIPES.cappuchino.water;
    document.getElementById("cups").innerHTML = document.getElementById("cups").innerText - RECIPES.cappuchino.cups;
    document.getElementById("milk").innerHTML = document.getElementById("milk").innerText - RECIPES.cappuchino.milk;
    //document.getElementById("turnover").innerHTML = RECIPES.cappuchino.price += 0.8;
  };
  
  var latte = document.getElementById("fifthButton");
  latte.onclick = CoffeeMachine.prototype.order = function () {
   
    if (document.getElementById("coffee").innerText < RECIPES.latte.coffee) {
      x.style.display = "block";
      throw new Error('not enough coffee');
    }
    if (document.getElementById("water").innerText < RECIPES.latte.water) {
      x.style.display = "block";
      throw new Error('not enough water');
    }
    if (document.getElementById("cups").innerText < RECIPES.latte.cups) {
      x.style.display = "block";
      throw new Error('not enough cups');
    }
    if (document.getElementById("milk").innerText < RECIPES.latte.milk) {
      x.style.display = "block";
      document.createElement("P").document.getElementById("panel-heading").innerHTML = "not enough milk";
      throw new Error('not enough milk');
    } else {
      x.style.display = "none";
    }
    document.getElementById("coffee").innerHTML = document.getElementById("coffee").innerText - RECIPES.latte.coffee;
    document.getElementById("water").innerHTML = document.getElementById("water").innerText - RECIPES.latte.water;
    document.getElementById("cups").innerHTML = document.getElementById("cups").innerText - RECIPES.latte.cups;
    document.getElementById("milk").innerHTML = document.getElementById("milk").innerText - RECIPES.latte.milk;

  };
  var americano = document.getElementById("thirdButton");
  americano.onclick = CoffeeMachine.prototype.order = function () {
    if (document.getElementById("coffee").innerText < RECIPES.americano.coffee) {
      x.style.display = "block";
      throw new Error('not enough coffee');
    }
    if (document.getElementById("water").innerText < RECIPES.americano.water) {
      x.style.display = "block";
      throw new Error('not enough water');
    }
    if (document.getElementById("cups").innerText < 1) {
      x.style.display = "block";
      throw new Error('not enough cups');
    } else {
      x.style.display = "none";
    }

    document.getElementById("coffee").innerHTML = document.getElementById("coffee").innerText - RECIPES.americano.coffee;
    document.getElementById("water").innerHTML = document.getElementById("water").innerText - RECIPES.americano.water;
    document.getElementById("cups").innerHTML = document.getElementById("cups").innerText - RECIPES.americano.cups;
    //document.getElementById("turnover").innerHTML = RECIPES.americano.price += 0.6;

  };
  var doubleCoffee = document.getElementById("sixthButton");
  doubleCoffee.onclick = CoffeeMachine.prototype.order = function () {
    if (document.getElementById("coffee").innerText < RECIPES.doubleCoffee.coffee) {
      x.style.display = "block";
      throw new Error('not enough coffee');
    }
    if (document.getElementById("water").innerText < RECIPES.doubleCoffee.water) {
      x.style.display = "block";
      throw new Error('not enough water');
    }
    if (document.getElementById("cups").innerText < 1) {
      x.style.display = "block";
      throw new Error('not enough cups');
    } else {
      x.style.display = "none";
    }
    document.getElementById("coffee").innerHTML = document.getElementById("coffee").innerText - RECIPES.doubleCoffee.coffee;
    document.getElementById("water").innerHTML = document.getElementById("water").innerText - RECIPES.doubleCoffee.water;
    document.getElementById("cups").innerHTML = document.getElementById("cups").innerText - RECIPES.doubleCoffee.cups;
    //document.getElementById("turnover").innerHTML = RECIPES.doubleCoffee.price += 0.7;

  };

  var buttons = document.getElementsByClassName("order-btn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var beverage = this.getAttribute("data-beverage");
      var errorContainer = document.getElementById("error");

      errorContainer.classList.add("hidden"); // hide the error container

      try {
        machine.order(beverage);
        displayStatus();
      } catch (error) {
        errorContainer.classList.remove("hidden"); // show the error container
        errorContainer.querySelector(".orderButtons").innerHTML = error.message;
      }
    });
  }
})();
