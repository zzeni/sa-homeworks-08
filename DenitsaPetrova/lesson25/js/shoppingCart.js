/* jslint esnext: true */
/* global $ */

(function () {

  var shoppingCart = [
    {
      name: "product 1",
      quantity: 2,
      price: 2.95
  },
    {
      name: "product 1",
      quantity: 3,
      price: 1.20
  },
    {
      name: "product 3",
      quantity: 1,
      price: 4.20
  }
];

  function total(shopping) {
    var totalprice = 0;
    shopping.forEach(function (item) {
      totalprice += (item.price * item.quantity);
    });
    return totalprice;
  }

  function toHTML(item) {
    return "<div> name: " + item.name + "\n quantity: " + item.quantity + "\n price: " + item.price + "</div>";
  }

  function display(items) {
    items.forEach(function (item) {
      var html = toHTML(item);
      $("#shoppingCart").append(html);
    });
  }
  display(shoppingCart);


  $("#total").append("Total price: " + total(shoppingCart));

})();