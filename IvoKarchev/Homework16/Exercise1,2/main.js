var shoppingCart = [
	{
		name: "apple",
		type: "fruit",
		quantity: 5,
		singlePrice: 2.2
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

function display(html){
	var div = document.createElement('div');
	div.innerHTML = html;
	document.body.appendChild(div);
}


// Overall quantity, should return 26

function quantity(shoppingCart) {
    var result = 0;
   shoppingCart.forEach(function (item){
       result += item.quantity;
   });
    return display('<h3> Overall quantity is ' + result + '</h3>');
}



// Vegan quantity, should return 17
function veganQuantity(shoppingCart) {
    var result = 0;
shoppingCart.forEach(function (item){
    if (item.type == 'fruit' || item.type == 'vegetable'){
    result += item.quantity;
    }
});
 return display('<h3> Vegan quantity is ' + result + '</h3>');
}

// Calc vegan quantity in a different way
// function isVegan(item) {
//     // item.type == 'fruit' || item.type == 'vegetable';
//     return ['fruit', 'vegetable'].includes(item.type);
//   }
 
//
// function veganQuantity(shoppingCart){
//     veganItems = shoppingCart.filter(isVegan);
  
// 	return display('<h3>Vegan quantity is ' + quantity(veganItems) + '</h3>');
// }

// Should return 56
function totalPrice(shoppingCart){
    var total = 0;
    shoppingCart.forEach(function (item){
        total = total + (item.quantity * item.singlePrice);
    });
    return display('<h3> The total price is of the items is ' + total + '$</h3>');
}

quantity(shoppingCart);
veganQuantity(shoppingCart);
totalPrice(shoppingCart);

