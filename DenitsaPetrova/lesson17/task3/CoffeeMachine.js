/* JSHint esnext:tue */
/* global  Beverage */

var coffee = new Beverage("coffee");

function CoffeeMachine() {
  this.coffee = 0;
  this.water = 0;
  this.milk = 0;
  this.cup = 0;
  this.turnover = 0;
}

/*CoffeeMachine.prototype.turnover = function(){
  this.turnover += 
};*/

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
  return '<p class="well well-sm"> Coffee: ' + this.coffee + 'gr </p><p class="well well-sm"> Water: ' + this.water + 'ml </p><p class="well well-sm"> Milk: ' + this.milk + 'ml </p><p class="well well-sm"> Cup: ' + this.cup + '</p><p class="well well-sm">Turnover: ' + this.turnover.toFixed(2) + '</p>';
};


CoffeeMachine.prototype.order = function (drink) {
  if (!drink) {
    throw new Error("ERROR");
  }
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
  if (this.cup < 1) {
    throw new Error('Not enough cups!');
  }
  return (
    this.coffee -= prepare.coffee,
    this.water -= prepare.water,
    this.milk -= prepare.milk || 0,
    this.cup -= 1,
    this.turnover += drink.getPrice(),
    "<pre> serves one " + drink.getName() + "</pre>");
};