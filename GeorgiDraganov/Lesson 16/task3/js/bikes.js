/* jslint browser: true */
/* jslint esnext:true */
function display(text) {
  "use strict";
  var output = document.createElement("div");
  output.textContent = text;
  document.body.appendChild(output);
}

var bikes = [
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

function bikeTemplate(bikes) {

  return `

<div class="bicycle">
<h3>Bicycle type:<strong> ${bikes.name}</strong></h3></br><h4>Bicycle price:<strong> ${bikes.price}</strong> </h4>
</div>
`;
}
document.getElementById("output").innerHTML = `
<h2> Bikes available: ${bikes.length}</h2>
${bikes.map(bikeTemplate).join(' ')}

<p> These ${bikes.length} bikes were added recently.</br> Check back soon for new bikes!</p>
`;
