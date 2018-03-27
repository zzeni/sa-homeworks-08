/* jshint esnext:true  */

function CoffeeMachine() {
  this.coffee = 0;
  this.water = 0;
  this.milk = 0;
  this.cups = 0;
  this.turnover = 0;
}
CoffeeMachine.prototype.smallLoad = function () {
  this.coffee += 200;
  this.milk += 100;
  this.water += 500;
  this.cups += 15;

};
CoffeeMachine.prototype.mediumLoad = function () {
  this.coffee += 500;
  this.milk += 300;
  this.water += 1000;
  this.cups += 30;
};
CoffeeMachine.prototype.bigLoad = function () {
  this.coffee += 1000;
  this.milk += 500;
  this.water += 2000;
  this.cups += 60;
};
CoffeeMachine.prototype.htmlStatus = function () {
  return `<p>This machine has ${this.coffee} grams of coffee.</p><p>This machine has ${this.milk} ml of milk.</p><p>This machine has  ${this.water} ml of water.</p><p>This machine has ${this.cups} cups left.</p> <p>Turnover ${this.turnover} лв.</p>`;
};

CoffeeMachine.prototype.order = function (beverage) {


  var insufficientResource = '';

  for (let prop in beverage) {
    if ((this[prop] - beverage[prop]) < 0) {
      insufficientResource = prop;
    }
  }

  if (insufficientResource.length) {
    throw new Error('not enough ' + insufficientResource);
  } else {
    this['turnover'] = (beverage['price'] + parseFloat(this['turnover'])).toFixed(2);
    // Namalq machine resursi
    for (let prop in beverage) {
      this[prop] -= beverage[prop];
    }
  }
};
