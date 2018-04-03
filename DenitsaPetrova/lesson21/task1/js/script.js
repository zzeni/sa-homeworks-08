/* jslint esnext: true */
/* global $ */

(function () {
  "use strict";

  function bikeToHTML(bike) {
    return `<div class="bike col-lg-4 col-md-6 mb-4">
<div class="card h-100">
<a class="bike-image-link" href="#"><img class="card-img-top" src="img/${bike.imgID}.jpg" alt=""></a>
<div class="card-body">
<h4 class="card-title">
<a class="bike-title-link" href="#"> ${bike.title} </a>
</h4>
<h5 class="bike-price">${bike.price}</h5>
<p class="card-text bike-description">${bike.description}</p>
</div>
<div class="card-footer">
<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
</div>
</div>
</div>
`;
  }

  /*  $("#bike").append(bikeToHTML());*/
  $.getJSON('db/bikes.json', callBack);
  
  function callBack(data){
    var bike = data;
    bike.forEach(function(bike){
      $("#bike").append(bikeToHTML(bike));
    });
    
  }

})();
