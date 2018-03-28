/* jslint esnext: true */ 


function Bike(title, description, price, img, category){
  this.title = title;
  this.description = description;
  this.price = price;
  this.imgUrl = img;
  this.category = category;
}

  Bike.prototype.toHTML = function(){
    return ` <div class="col-lg-4 col-md-6 mb-4">
<div class="card h-100">
<a href="#"><img class="card-img-top" src="${this.imgUrl}" alt="${this.title}"></a>
<div class="card-body d-flex flex-column">
<h4 class="card-title">
<a href="#">${this.title}</a>
</h4>
<h5>$${this.price}</h5>
<p class="card-text">${this.description}</p>
</div>
<div class="text-muted small mt-auto mx-auto">Category: ${this.category}</div>
<div class="card-footer">
<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
</div>
</div>
</div>
`;
  };