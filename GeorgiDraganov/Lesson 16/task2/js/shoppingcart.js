/* jslint browser: true */
/* jslint esnext:true */
function display(text) {
  "use strict";
  var output = document.createElement("div");
  output.textContent = text;
  document.body.appendChild(output);
}
var shoppingCart = [
  {
    name: "apple",
    type: "fruit",
    quantity: 15,
    singlePrice: 1.0
	},
  {
    name: "banana",
    type: "fruit",
    quantity: 2,
    singlePrice: 2.0
	},
  {
    name: "potato",
    type: "vegetable",
    quantity: 10,
    singlePrice: 1.0
	},
  {
    name: "cheese",
    type: "dairy",
    quantity: 1,
    singlePrice: 5.5
	},
  {
    name: "yogurt",
    type: "dairy",
    quantity: 3,
    singlePrice: 0.8
	},
  {
    name: "steak",
    type: "meat",
    quantity: 1,
    singlePrice: 17.0
	},
  {
    name: "ice cream",
    type: "sweet",
    quantity: 1,
    singlePrice: 2.5
	},
  {
    name: "bounty",
    type: "sweet",
    quantity: 3,
    singlePrice: 1.2
	}
];


// This function accepts a shopping cart list and returns the overall quantity of all the items in it
function quantity(shoppingCart) {
  var total = 0;
  shoppingCart.forEach(function (item) {
    total += item.quantity;
  });
  return total;
}
display("overall quantity is: " + quantity(shoppingCart));


// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
function veganQuantity(shoppingCart) {
  var newList = shoppingCart.filter(function (item) {
    return ["vegetable", "fruit"].includes(item.type);
  });

  return quantity(newList);
}
display("overall vegan quantity is: " + veganQuantity(shoppingCart));

function totalPrice(shoppingCart) {

  var fullPrice = shoppingCart.reduce(function (sum, shoppingCart) {
    return sum + shoppingCart.quantity * shoppingCart.singlePrice;
  }, 0);
  return fullPrice;
}
display("overall price is: " + totalPrice(shoppingCart));

document.getElementById("output").innerHTML = ` 
<h4 class ="app-title"> Shopping Cart (${shoppingCart.length}) items</h4>
${shoppingCart.map(function(cart){
  return `
<ul class="shopping-cart-list"><li>Item name: ${cart.name}<br/>Item type: ${cart.type}<br/>Item quantity: ${cart.quantity}<br/>Price per item: ${cart.singlePrice}</li></ul>
`;
}).join('')}
`;
