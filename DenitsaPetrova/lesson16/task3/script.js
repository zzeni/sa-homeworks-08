/* JSlint esnext: true */
/* globals Bike, document */
(function () {
  "use strict";

  function display(html) {
    var div = document.createElement("div");
    div.classList.add("bike");
    div.innerHTML = html;
    document.body.appendChild(div);
  }


  var list = [
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

  var bike = new Bike(list[0]);
  display(bike.toHtml());

  var bikes = list.map(function (list) {
    return new Bike(list);
  });

  display("<hr>");

  bikes.forEach(function (bike) {
    display(bike.toHtml());
  });
})();