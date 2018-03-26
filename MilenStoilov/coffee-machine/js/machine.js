const RECIPES = {
    coffee:{
        coffee:20,
        water:60,
        milk:0,
    },
    coffeeWhitMilk:{
         coffee:20,
        water:50,
        milk:20,
    },
    capuchino:{
         coffee:20,
        water:30,
        milk:40,
    },
    latte:{
         coffee:20,
        water:30,
        milk:60,
    },
    americano:{
         coffee:20,
        water:130,
        milk:0,
},
    doubleCoffee:{
         coffee:35,
        water:80,
        milk:0,
    }
}


function CoffeeMachine() {
    this.coffee = 0;
    this.water = 0;
    this.milk = 0;
    this.cups = 0
}
CoffeeMachine.prototype.smallLoad = function smallLoad(){
    this.coffee += 200;
    this.water += 500;
    this.milk += 100;
    this.cups += 10;
    
};
CoffeeMachine.prototype.mediumLoad = function meduimLoad(){
    this.coffee += 500;
    this.water += 1000;
    this.milk += 300;
    this.cups += 30;
    
};
CoffeeMachine.prototype.bigLoad = function bigLoad(){
     this.coffee += 1000;
    this.water += 2000;
    this.milk += 500;
    this.cups += 60;
    

};
  

CoffeeMachine.prototype.status = function status(){
    return "coffee:" +this.coffee + "water:" + this.water + "milk:" + this.milk + "cups:" + this.cups;
};


CoffeeMachine.prototype.htmlStatus = function smallLoad(){
    return "<h1>This machine has " + this.coffee + "coffee</h1>";
};
CoffeeMachine.prototype.htmlStatus = function mediumLoad(){
    return "<h1>This machine has" + this.coffee + "coffee</h1>";
};
CoffeeMachine.prototype.htmlStatus = function bigLoad(){
    return "<h1>This machine has" + this.coffee + "coffee</h1>";
};

CoffeeMachine.prototype.order = function order() {
    return RECIPES.coffee;
     //не можах да направя бутоните да работят за всички поръчки//     
};
     




  var machine = new CoffeeMachine();
    
    
    