/* JSHint esnext:tue */
/* jshint sub:true */



const ALL = {
    coffee: {
      recipe: {
        coffee: 20,
        water: 60
      },
      price: 0.5
    },
    coffeeWithMilk: {
      recipe: {
        coffee: 20,
        water: 50,
        milk: 20
      },
      price: 0.6
    },
    cappuccino: {
      recipe: {
        coffee: 20,
        water: 30,
        milk: 40
      },
      price: 0.8
    },
    latte: {
      recipe: {
        coffee: 20,
        water: 30,
        milk: 50
      },
      price: 0.8
    },
    americano: {
      recipe: {
        coffee: 20,
        water: 130
      },
      price: 0.8
    },

    doubleCoffee: {
      recipe: {
        coffee: 35,
        water: 80
      },
      price: 0.7
    }
  };
  function Beverage(name) {
    if(!name) {
      throw new Error("Here haven't this drink!");
    }
    this.recipe = ALL[name].recipe;
    this.coffee = this.recipe.coffee;
    this.water = this.recipe.water;
    this.milk = this.recipe.milk || 0;
    this.cup = 1;
    this.price = ALL[name].price;
      this.getName = function () {
    return name;
  };
  this.getRecipes = function () {
    return this.recipe;
  };
  this.getPrice = function () {
    return this.price;
  };
}