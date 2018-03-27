const RECIPES = {
    coffee: {
        coffee: 20,
        water: 60
    },
    coffeeWithMilk: {
        coffee: 20,
        water: 50,
        milk: 20
    },
    cappuccino: {
        coffee: 20,
        water: 30,
        milk: 40
    },
    latte: {
        coffee: 20,
        water: 30,
        milk: 60
    },
    americano: {
        coffee: 20,
        water: 130
    },
    doubleCoffee: {
        coffee: 35,
        water: 80
    }

};

function CoffeeMachine() {
    this.coffee = 0;
    this.water = 0;
    this.milk = 0;
    this.cups = 0;
    this.turnover = 0;
}

CoffeeMachine.prototype.smallLoad = function smallLoad() {
    this.coffee += 200;
    this.water += 500;
    this.milk += 100;
    this.cups += 10;
};

CoffeeMachine.prototype.mediumLoad = function mediumLoad() {
    this.coffee += 500;
    this.water += 1000;
    this.milk += 300;
    this.cups += 30;
};

CoffeeMachine.prototype.bigLoad = function bigLoad() {
    this.coffee += 1000;
    this.water += 2000;
    this.milk += 500;
    this.cups += 60;
};

CoffeeMachine.prototype.htmlStatus = function () {
    return "<div>Coffee - " + this.coffee + "</div>" + "<br>" + "<div>Water - " + this.water + "</div>" + "<br>" + "<div>Milk - " + this.milk + "</div>" + "<br>" + "<div>Cups - " + this.cups + "</div>" + "<br>" + "<div>Turnover - " + this.turnover + "лв.</div>";
};

CoffeeMachine.prototype.order = function order(product) {
    if (product.getName() === "coffee") {
        this.coffee -= product.recipe.coffee;
        this.water -= product.recipe.water;
        this.turnover += product.price;
    }

    if (product.getName() === "coffee_with_milk") {
        this.coffee -= product.recipe.coffee;
        this.water -= product.recipe.water;
        this.milk -= product.recipe.milk;
        this.turnover += product.price;
    }

    if (product.getName() === "cappuccino") {
        this.coffee -= product.recipe.coffee;
        this.water -= product.recipe.water;
        this.milk -= product.recipe.milk;
        this.turnover += product.price;
    }

    if (product.getName() === "latte") {
        this.coffee -= product.recipe.coffee;
        this.water -= product.recipe.water;
        this.milk -= product.recipe.milk;
        this.turnover += product.price;
    }

    if (product.getName() === "americano") {
        this.coffee -= product.recipe.coffee;
        this.water -= product.recipe.water;
        this.turnover += product.price;
    }

    if (product.getName() === "double") {
        this.coffee -= product.recipe.coffee;
        this.water -= product.recipe.water;
        this.turnover += product.price;
    }

    this.cups -= 1;

    if (this.coffee < 0 || this.water < 0 || this.milk < 0 || this.cups < 0) {
        throw new Error("Моля, заредете машината!");
    }
};

const PRICES = {
    coffee: {
        price: 0.5,
        recipe: RECIPES.coffee
    },

    coffeeWithMilk: {
        price: 0.6,
        recipe: RECIPES.coffeeWithMilk
    },
    cappuccino: {
        price: 0.8,
        recipe: RECIPES.cappuccino
    },

    latte: {
        price: 0.8,
        recipe: RECIPES.latte
    },

    americano: {
        price: 0.6,
        recipe: RECIPES.americano
    },

    doubleCoffee: {
        price: 0.7,
        recipe: RECIPES.doubleCoffee
    }
}

function Beverage(name) {
    if (name === "coffee") {
        this.name = "coffee";
        this.recipe = RECIPES.coffee;
        this.price = 0.5;
    }

    if (name === "coffee_with_milk") {
        this.name = "coffee_with_milk";
        this.recipe = RECIPES.coffeeWithMilk;
        this.price = 0.6;
    }

    if (name === "cappuccino") {
        this.name = "cappuccino";
        this.recipe = RECIPES.cappuccino;
        this.price = 0.8;
    }

    if (name === "latte") {
        this.name = "latte";
        this.recipe = RECIPES.latte;
        this.price = 0.8;
    }

    if (name === "americano") {
        this.name = "americano";
        this.recipe = RECIPES.americano;
        this.price = 0.6;
    }

    if (name === "double") {
        this.name = "double";
        this.recipe = RECIPES.doubleCoffee;
        this.price = 0.7;
    }
}

Beverage.prototype.getName = function getName() {
    return this.name;
};

var coffee = new Beverage("coffee");
coffee.getName();

var machine = new CoffeeMachine();
