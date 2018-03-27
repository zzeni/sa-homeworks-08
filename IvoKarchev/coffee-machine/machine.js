const RECIPES = {
  coffee: {
    coffee: 20,
    water: 60,
    cups: 1
  },
  coffee_with_milk: {
    coffee: 20,
    water: 50,
    milk: 20,
    cups: 1
  },
  cappuccino: {
    coffee: 20,
    water: 30,
    milk: 40,
    cups: 1
  },
  latte: {
    coffee: 20,
    water: 30,
    milk: 60,
    cups: 1
  },
  americano: {
    coffee: 20,
    water: 130,
    cups: 1
  },
  double: {
    coffee: 35,
    water: 80,
    cups: 1
  }
};


function CoffeeMachine(coffee, water, milk, cups) {
    this.coffee = 0,
    this.water = 0,
    this.milk = 0,
    this.cups = 0;
}

(function () {
  "use strict"

  CoffeeMachine.prototype.smallLoad = function () {
    return 'Coffee: ' + (this.coffee += 200) + 'gr, ' + 'water: ' + (this.water += 500) + 'ml, ' + 'milk: ' + (this.milk += 100) + 'ml ' + 'cups: ' + (this.cups += 10);
  };


  CoffeeMachine.prototype.mediumLoad = function () {
    return 'Coffee: ' + (this.coffee += 500) + 'gr, ' + 'water: ' + (this.water += 1000) + 'ml, ' + 'milk: ' + (this.milk += 300) + 'ml ' + 'cups: ' + (this.cups += 30);
  };



  CoffeeMachine.prototype.bigLoad = function () {
    return 'Coffee: ' + (this.coffee += 1000) + 'gr, ' + 'water: ' + (this.water += 2000) + 'ml, ' + 'milk: ' + (this.milk += 500) + 'ml ' + 'cups: ' + (this.cups += 60);
  };



  CoffeeMachine.prototype.status = function () {
    return ('Coffee: ' + this.coffee + 'gr, ' + 'water: ' + this.water + 'ml, ' + 'milk: ' + this.milk + 'ml, ' + 'cups: ' + this.cups);
  };

  CoffeeMachine.prototype.htmlStatus = function () {
    return ('<h3>coffee: ' + this.coffee + 'gr</h3> ' + '<h3>water: ' + this.water + 'ml</h3> ' + '<h3>milk: ' + this.milk + 'ml</h3> ' + '<h3>cups: ' + this.cups + '</h3>');
  };


  CoffeeMachine.prototype.order = function (bevarage) {
    if (!RECIPES[bevarage].milk) {
      RECIPES[bevarage].milk = 0;
    }

    if (this.coffee < RECIPES[bevarage].coffee || this.water < RECIPES[bevarage].water || this.milk < RECIPES[bevarage].milk || this.cups < RECIPES[bevarage].cups) {
      throw new Error('We are out of service');
    }
    return (this.coffee -= RECIPES[bevarage].coffee) + 'gr ' + (this.water -= RECIPES[bevarage].water) + 'ml ' + (this.milk -= RECIPES[bevarage].milk) + 'ml ' + (this.cups -= RECIPES[bevarage].cups) + 'cups';

  }
})();