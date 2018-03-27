/* jshint  esnext: true */
const RECIPES = {
	coffee: {
		type: 'Coffee',
		cafe: -20,
		water: -60,
		milk: 0,
		cups: -1,
	},
	coffee_with_milk: {
		type: 'Coffee with milk',
		cafe: -20,
		water: -50,
		milk: -20,
		cups: -1,
	},
	cappuccino: {
		type: 'Cappuccino',
		cafe: -20,
		water: -30,
		milk: -60,
		cups: -1,
	},
	latte: {
		type: 'Latte',
		cafe: -20,
		water: -30,
		milk: -40,
		cups: -1,
	},
	americano: {
		type: 'Americano',
		cafe: -20,
		water: -130,
		milk: -0,
		cups: -1,
	},
	double_coffee: {
		type: 'Double coffee',
		cafe: -35,
		water: -80,
		milk: 0,
		cups: -1,
	},
};

function CoffeeMachine() {
	this.cafe = 0;
	this.water = 0;
	this.milk = 0;
	this.cups = 0;
}

var machine = new CoffeeMachine();

CoffeeMachine.prototype.smallLoad = function() {
	this.cafe += 200;
	this.water += 500;
	this.milk += 100;
	this.cups += 10;
};

CoffeeMachine.prototype.mediumLoad = function() {
	this.cafe += 500;
	this.water += 1000;
	this.milk += 300;
	this.cups += 30;
};

CoffeeMachine.prototype.bigLoad = function() {
	this.cafe += 1000;
	this.water += 2000;
	this.milk += 500;
	this.cups += 60;
};

 CoffeeMachine.prototype.htmlStatus = function(){
       return "<h1> This machine has: " + this.coffee + " coffee</h1>";
   };

CoffeeMachine.prototype.status = function() {
	// console.log("Current status is:\n Cafe: " + machine.cafe +  "\n Water: " + machine.water + "\nMilk: " + machine.milk + "\nCups: " + machine.cups);
	return (
		'Cafe: ' +
		this.cafe +
		', Water: ' +
		this.water +
		', Milk: ' +
		this.milk +
		', Cups: ' +
		this.cups
	);
};

CoffeeMachine.prototype.order = function(typeOfBeverage) {
	if (
		machine.cafe < 35 ||
		machine.water < 130 ||
		machine.milk < 60 ||
		machine.cups < 1
	) {
		throw new Error('There is no enough products! :(');
	}

  var beverage = RECIPES[typeOfBeverage];

	if (!beverage) {
		throw new Error('Invalid type of beverage! :(');
	}

	this.cafe += beverage.cafe;
	this.water += beverage.water;
	this.milk += beverage.milk;
	this.cups += beverage.cups;
};

machine.bigLoad();
console.log(machine.status());
machine.order('latte');
machine.status();
