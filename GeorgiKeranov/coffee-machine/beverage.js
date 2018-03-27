/* jshint  esnext: true */

const PRICES = {
  coffee:{
    type: "Coffee",
    price: 0.5,
    cafe: 20,
    water: 60,
  }, 
  coffee_with_milk:{
    type: "Coffee with milk",
    price: 0.6,
    cafe: 20,
    water: 50,
    milk: 20,
  },
  cappuccino:{
    type: "Cappuccino",
    price: 0.8,
    cafe: 20,
    water: 30,
    milk: 40,
  },
  latte:{
    type: "Latte",
    price: 0.8,
    cafe: 20,
    water: 30,
    milk: 60,
  },
  americano:{
    type: "Americano",
    price: 0.6,
    cafe: 20,
    water: 130,
  },
  double_coffee:{
    type: "Double coffee",
    price: 0.7,
    cafe: 35,
    water: 80,
  },
};

function Beverage(name){
  this.name = name;
  this.getName = function(){
    return name;
  };
  this.price = 0;
  this.getPrice = function(){
    return price;
  };
  this.recipe = 0;
  this.getRecipe = function(){
    return recipe;
  };
}

Object.defineProperty(PRICES, "description", {
  get: function() {
    return type + " " + price;
  },
  set: function(name){
    var word = name.split(" ");
    this.type = word[0] || "";
    this.price = word[1] || "";
  }
});

var coffee = new Beverage("coffee");
