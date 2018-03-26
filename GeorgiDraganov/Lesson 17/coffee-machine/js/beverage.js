const RECIPES = {
  coffee: {
    price: 0.50,
    coffee: 20,
    water: 60,
    cups: 1
  },
  coffee_with_milk: {
    price: 0.60,
    coffee: 20,
    water: 50,
    milk: 20,
    cups: 1
  },
  cappucino: {
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
    price: 0.70,
    coffee: 20,
    water: 130,
    cups: 1
  },
  double: {
    price: 0.60,
    coffee: 35,
    water: 80,
    cups: 1
  }
};

function Beverage(name) {
  var beverage = RECIPES[name];
  for (var prop in beverage) {
    this[prop] = beverage[prop];
  }
}
