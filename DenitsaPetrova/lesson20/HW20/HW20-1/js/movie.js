/* jslint esnext: true */

function Movie(title, year, url, imageUrl) {
  this.title = title;
  this.year = year;
  this.url = url;
  this.imgUrl = imageUrl;
}

Movie.prototype.toHTML = function () {
  return ` <div class="col-xs-6 col-sm-4 col-md-2">
<div class="thumbnail">
<img src=" ${this.imgUrl}" alt="...">
<div class="caption">
<h4><a href="${this.url}">${this.title}</a></h4>
<p class="">${this.year}г.</p>
`;
};