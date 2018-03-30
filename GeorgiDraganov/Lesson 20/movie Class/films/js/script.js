/*globals document */
/* jslint esnext: true */
(function () {
  "use strict";

  var MOVIE_PATTERN = `<div class="row">
      <div class="col-sm-3">
     <div class="card" style="width: 14rem; ">
  <img class="card-img-top" src=\"%IMAGE-URL%\">
  <div class="card-body" >
    <h5 class="card-title">%TITLE%</h5>
    <p class="card-text">Year: %YEAR%</p>
    <a href=\"%URL%\" class="btn btn-primary">Go to IMDB</a>
  </div>
</div>
      </div>
    </div>`;

  function addMovie(title, year, url, imageUrl) {
    var container = document.querySelector('#collection');
    var listItem = document.createElement('li');

    listItem.innerHTML =
      MOVIE_PATTERN
      .replace(/%TITLE%/g, title)
      .replace('%YEAR%', year)
      .replace('%IMAGE-URL%', imageUrl)
      .replace('%URL%', url);

    container.appendChild(listItem);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    var form = this;

    var title = form.title.value;
    var year = form.year.value;
    var url = form.url.value;
    var imageUrl = form.imageUrl.value;

    addMovie(title, year, url, imageUrl);
  }

  var form = document.filmGenerator;

  form.addEventListener("submit", onFormSubmit);
})();