/*globals document, Movie, $ */

(function () {
  "use strict";

  /*  var MOVIE_PATTERN = "" +
        "<img src=\"%IMAGE-URL%\" alt=\"%TITLE%\" width=\"50\">" +
        "<a href=\"%URL%\">%TITLE%</a> (%YEAR%)";

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
    }*/

  $.getJSON('db/Movie.json', callBack);

  function callBack(data) {
    var movie = data;
    JSON.stringify(movie);
    movie.forEach(function () {
      var oneMovie = movie.pop();
      var toDisplay = new Movie(oneMovie.title, oneMovie.year, oneMovie.url, oneMovie.imgUrl);
      $("#collection").append(toDisplay.toHTML());
      console.log(toDisplay);
    });
  }



  function onFormSubmit(event) {
    event.preventDefault();
    var form = this;

    var title = form.title.value;
    var year = form.year.value;
    var url = form.url.value;
    var imageUrl = form.imageUrl.value;

    var newMovie = new Movie(title, year, url, imageUrl);
    $("#collection").append(newMovie.toHTML());
  }

  var form = document.filmGenerator;

  form.addEventListener("submit", onFormSubmit);
})();