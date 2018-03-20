/* JSHint esnext:tue */

function CoffeeMachine() {
  this.coffee = 0,
    this.water = 0,
    this.milk = 0,
    this.cup = 0;
}


const recipes = {
  coffee: {
    coffee: 20,
    water: 60,
    cup: 1
  },
  coffeeWithMilk: {
    coffee: 20,
    water: 50,
    milk: 20,
    cup: 1
  },
  cappuccino: {
    coffee: 20,
    water: 30,
    milk: 40,
    cup: 1
  },
  latte: {
    coffee: 20,
    water: 30,
    milk: 50,
    cup: 1
  },
  americano: {
    coffee: 20,
    water: 130,
    cup: 1
  },
  doubleCoffee: {
    coffee: 35,
    water: 80,
    cup: 1
  }
};

this.getRecipes = function () {
  return JSON.stringify(recipes);
}


CoffeeMachine.prototype.smallLoad = function () {
  this.coffee += 200;
  this.water += 500;
  this.milk += 100;
  this.cup += 10;
};

CoffeeMachine.prototype.mediumLoad = function () {
  this.coffee += 500;
  this.water += 1000;
  this.milk += 300;
  this.cup += 30;
};

CoffeeMachine.prototype.bigLoad = function () {
  this.coffee += 1000;
  this.water += 2000;
  this.milk += 500;
  this.cup += 60;
};

CoffeeMachine.prototype.status = function () {
  return "coffee: " + this.coffee + "gr, water: " + this.water + "ml, milk: " + this.milk + "ml, cup: " + this.cup;
};

CoffeeMachine.prototype.htmlStatus = function () {
  return '<div class="bg-warning h3 p-4"><p> coffee: ' + this.coffee + 'gr </p><p> water: ' + this.water + 'ml </p><p> milk: ' + this.milk + 'ml </p><p> cup: ' + this.cup + '</p></div>';

};



CoffeeMachine.prototype.order = function (drink) {
  // if(drink doesn't excist) throw new Error("ERROR");
  var prepare = drink.getRecipes();
  if (this.coffee < prepare.coffee) {
    throw new Error('Not enough coffee!');
  }
  if (this.water < prepare.water) {
    throw new Error('Not enough water!');
  }
  if (this.milk < prepare.milk) {
    throw new Error('Not enough milk!');
  }
  if (this.cups < 1) {
    throw new Error('Not enough cups!');
  }
  return ("serves one " + drink,
    this.coffee -= prepare.coffee,
    this.water -= prepare.water,
    this.milk -= prepare.milk || 0,
    this.cups -= 1);
};
