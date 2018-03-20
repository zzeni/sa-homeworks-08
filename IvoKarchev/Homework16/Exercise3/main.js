function Bike(obj) {
  this.name = obj.name;
  this.price = obj.price;
}
  
  Bike.prototype.toHTML = function () {
    return '<p>Bike ' + this.name + ' costs ' + this.price + '$</p>';
  };

  function display(html){
  var div = document.createElement('div');
  div.classList.add('bike');
	div.innerHTML = html;
	document.body.appendChild(div);
}
  
  var objectsList = [
    {
      name: "Drag",
      price: 200
    },
    {
      name: "RAM",
      price: 500
    },
    {
      name: "Scott",
      price: 1200
    },
    {
      name: "Balkan",
      price: "800"
    }
  ];
  
  var bikes = objectsList.map(function (bike){
    return new Bike(bike);
  });
    
  bikes.forEach(function(bike){
    return display(bike.toHTML());
  });
  
  
  
  
  
  
  
  