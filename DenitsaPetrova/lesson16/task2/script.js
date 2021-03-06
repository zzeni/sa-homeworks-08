/* JSlint esnext: true */
(function () {
  "use strict";

  function display(html) {
    var div = document.createElement("div");
    div.classList.add("shoppingCart");
    div.innerHTML = html;
    document.body.appendChild(div);
  }
  var shoppingCart = [
    {
      name: "apple",
      type: "fruit",
      quantity: 5
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
      type: "diry",
      quantity: 1,
      singlePrice: 5.5
	},
    {
      name: "yogurt",
      type: "diry",
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

function totalPrice(cart){
  var result = 0;
  cart.forEach(function(all){
    result += all.quantity * (all.singlePrice || 0);
  });
  return result;
}


  function quantity(shoppingCart) {
    var result = 0;
    shoppingCart.forEach(function (all) {
      result += all.quantity;
    });
    display('<h1> Your bill is: ' + totalPrice(shoppingCart) + '$</h1>');
    return result;
  }

  function isVegan(vegan) {
    return vegan.type == "fruit" || vegan.type == "vegetable";
  }

  function veganQuantity(shoppingCart) {
    var result = shoppingCart.filter(isVegan);
    return quantity(result);
  }
  
  display('<h2>The overall quantity of all the items: ' + '<em>' + quantity(shoppingCart) + '</em></h2>'); // should return 26
  display('<h2> The quantity of the fruit and vegetable items: ' + '<em>' + veganQuantity(shoppingCart) + '</em></h2>'); // should return 17
})();
