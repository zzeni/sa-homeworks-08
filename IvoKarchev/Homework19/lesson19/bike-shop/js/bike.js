(function () {
    "use strict"

    function Bike(title, description, price, imgUrl, category) {
        this.title = title,
            this.description = description,
            this.price = price,
            this.imgUrl = imgUrl,
            this.category = category
    }
    var anotherBike = new Bike(
        'Yet another bike',
        'This awesome bike will take you everywhere!!!',
        720,
        'img/bikes/1.jpg',
        'mtb'
    );


    Bike.prototype.toHTML = function (bike) {
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

    $('#bikes-container').append(anotherBike.toHTML(anotherBike))

})();