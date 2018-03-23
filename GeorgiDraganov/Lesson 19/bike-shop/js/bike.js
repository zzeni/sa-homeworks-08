/* jslint esnext:true */
(function () {
  "use strict";

  var bikes = [
    {
      title: "Balkan",
      description: "The best bike ever",
      price: 1200,
      imgUrl: 'img/bikes/1.jpg',
      category: "city"
      },
    {
      title: "Her bike",
      description: "Lorem mentitum illustriora est ipsum a o ipsum senserit.",
      price: 300,
      imgUrl: 'img/bikes/2.jpg',
      category: "city"
      },
    {
      title: "Hardcore",
      description: "Ex ab firmissimum, officia minim voluptate voluptate.",
      price: 300,
      imgUrl: 'img/bikes/3.jpg',
      category: "MTB"
      },
    {
      title: "Fantastic",
      description: "Ex a cohaerescant ex e aut quis mandaremus.",
      price: 780,
      imgUrl: 'img/bikes/4.jpg',
      category: "other"
      },
    {
      title: "Drag city",
      description: "Ex a cohaerescant ex e aut quis mandaremus.",
      price: 450,
      imgUrl: 'img/bikes/5.jpg',
      category: "cross"
      },
    {
      title: "Special",
      description: "Ex a cohaerescant ex e aut quis mandaremus.",
      price: 950,
      imgUrl: 'img/bikes/6.jpg',
      category: "cross"
      },
    ];

  function Bike(title, imgUrl, price, description, category) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.price = price;
    this.description = description;
    this.category = category;
  }

  $(bikes).each(function () {
    let bike_Html = `\n<div class="col-lg-4 col-md-6 mb-4">\n
<div class=card h-100\>\n 
<a href=#\><img class=\"card-img-top\" src=\ ${this.imgUrl} alt=\\></a>\n
  <div class=card-body\>\n 
<h4 class="card-title\">\n
<a href=#\>${this.title}</a>\n 
</h4>\n 
  <h5>$${this.price}</h5>\n 
  <p class=\"card-text\">${this.description}</p>\n 
  </div>\n 
  <div class=\card-footer\>\n 
    <small class=\"text-muted\>&#9733; &#9733; &#9733; &#9733; &#9734;</small>\n 
      </div>
  </div>
  </div>`;
    $("#items-container").append(bike_Html);
  });


  Bike.prototype.toHTML = function () {

    let bikes_Html = `\n<div class="col-lg-4 col-md-6 mb-4">\n
<div class=card h-100\>\n 
<a href=#\><img class=\"card-img-top\" src=\ ${this.imgUrl} alt=\\></a>\n
  <div class=card-body\>\n 
<h4 class="card-title\">\n
<a href=#\>${this.title}</a>\n 
</h4>\n 
  <h5>$${this.price}</h5>\n 
  <p class=\"card-text\">${this.description}</p>\n 
  </div>\n 
  <div class=\card-footer\>\n 
    <small class=\"text-muted\>&#9733; &#9733; &#9733; &#9733; &#9734;</small>\n 
      </div>
  </div>
  </div>`;
    $("#items-container").append(bikes_Html);
  };


  var oneMoreBike = new Bike(
    'Yet another bike',
    'img/bikes/7.png',
    720,
    'This awesome bike will take you everywhere!!!',
    'mtb');


  $('#items-container').append(oneMoreBike.toHTML());



}());
