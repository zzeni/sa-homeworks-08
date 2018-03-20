 function Beverage(name) {
   var all = {
     coffee: {
       recipe: {
         coffee: 20,
         water: 60,
         cup: 1
       },
       price: 0.5
     },
     coffeeWithMilk: {
       recipe: {
         coffee: 20,
         water: 50,
         milk: 20,
         cup: 1
       },
       price: 0.6
     },
     cappuccino: {
       recipe: {
         coffee: 20,
         water: 30,
         milk: 40,
         cup: 1
       },
       price: 0.8
     },
     latte: {
       recipe: {
         coffee: 20,
         water: 30,
         milk: 50,
         cup: 1
       },
       price: 0.8
     },
     americano: {
       recipe: {
         coffee: 20,
         water: 130,
         cup: 1
       },
       price: 0.8
     },

     doubleCoffee: {
       recipe: {
         coffee: 35,
         water: 80,
         cup: 1
       },
       price: 0.7
     }
   };
   var nameDrink = name;
   var drink = all[name].recipe;
   var drinkPrice = all[name].price;
   this.getName = function () {
     return nameDrink;
   };
   this.getRecipes = function () {
     return JSON.stringify(drink);
   };
   this.getPrice = function () {
     return drinkPrice;
   };
 }

 var my = new Beverage("latte");
 console.log(my.getName());
 console.log(my.getPrice());
 console.log(my.getRecipes());
