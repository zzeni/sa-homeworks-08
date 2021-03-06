/* jslint esnext: true */
/* globals $ */

(function () {
  "use strict";

  var bikes = [
    {
      title: "Balkan",
      description: "The best bike ever",
      price: 1200,
      imgUrl: "img/bikes/1.jpg",
      category: "city"
    },
    {
      title: "Her bike",
      description: "Lorem mentitum illustriora est ipsum a o ipsum senserit.",
      price: 300,
      imgUrl: "img/bikes/2.jpg",
      category: "city"
    },
    {
      title: "Hardcore",
      description: "Ex ab firmissimum, officia minim voluptate voluptate.",
      price: 300,
      imgUrl: "img/bikes/3.jpg",
      category: "mtb"
    },
    {
      title: "Fantastic",
      description: "Ex a cohaerescant ex e aut quis mandaremus.",
      price: 780,
      imgUrl: "img/bikes/4.jpg",
      category: "other"
    },
    {
      title: "Drag city",
      description: "Ex a cohaerescant ex e aut quis mandaremus.",
      price: 450,
      imgUrl: "img/bikes/5.jpg",
      category: "cross"
    },
    {
      title: "Special",
      description: "Ex a cohaerescant ex e aut quis mandaremus.",
      price: 950,
      imgUrl: "img/bikes/6.jpg",
      category: "cross"
    },
  ];

  displayBikes(bikes);

  $('#category-filter a').on("click", onCategoryFilterClick);

  function displayBikes(bikesList) {
    var container = $('#bikes-container');
    container.empty();
    bikesList.forEach(function (bike) {
      var html = bikeToHTML(bike);
      container.append(html);
    });
  }

  function bikeToHTML(bike) {
    return `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
      <a href="#"><img class="card-img-top" src="${bike.imgUrl}" alt="${bike.title}"></a>
      <div class="card-body d-flex flex-column">
      <h4 class="card-title"><a href="#">${bike.title}</a></h4>
      <h5>$${bike.price}</h5>
      <p class="card-text">${bike.description}</p>
      <div class="text-muted small mt-auto">Category: ${bike.category}</div>
      </div>
      <div class="card-footer">
      <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
      </div>
      </div>`;
  }

  function filterByCategory(bikesList, category) {
    return bikesList.filter(function (bike) {
      return bike.category === category || category === 'all';
    });
  }

  function onCategoryFilterClick(event) {
    event.preventDefault();

    var currentLink = event.target;
    var category = currentLink.getAttribute('data-category');

    var filteredBikes = filterByCategory(bikes, category);
    displayBikes(filteredBikes);
  }
})();
