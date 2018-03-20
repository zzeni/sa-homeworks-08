function Bike(items) {
  this.name = items.name;
  this.price = items.price;
}

Bike.prototype.toHtml = function () {
  return "<h2> " + this.name + "</h2> <p> - " + this.price + "$ </p>";
};

Bike.prototype.toString = function () {
  return "<h2> " + this.name + "</h2> <p> bike costs " + this.price + "$ </p>";
};