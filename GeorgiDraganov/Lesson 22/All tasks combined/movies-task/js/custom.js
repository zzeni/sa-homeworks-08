/*jslint esnext: true*/
/* jslint jquery: true*/
/* jslint browser: true */
(function () {
  "use strict";

  var films = [];



  // Flms: https://api.themoviedb.org/3/discover/movie?api_key=2e83cf763cae99f3a4b1d282402e63cb
  // Documentation: https://developers.themoviedb.org/3/discover/movie-discover
  // Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=2e83cf763cae99f3a4b1d282402e63cb&language=en-US
  // Documentation: https://developers.themoviedb.org/3/genres/get-movie-list
  $.getJSON("./db/movies.json", function (data) {
    films = data;
    displayFilms(films);
  });
  /*Filter by year function*/
  document.filtersForm.year.addEventListener("change", function () {
    var value = this.value;
    var filteredFilms = value ? filterByYear(films, value) : films;
    displayFilms(filteredFilms);

  });
  /*Filter by year function*/
  function filterByYear(filmsList, year) {
    return filmsList.filter(function (film) {
      return film.release_date.slice(0, 4) === year;

    });
  }

  /* On search input filter */
  $('#keywords').on('keyup', onSearchInput);

  function onSearchInput(event) {
    var inputElement = event.target;
    var value = inputElement.value;
    var filteredFilms = films.filter(function (film) {

      return film.title.toLowerCase().includes(value.toLowerCase());
    });
    displayFilms(filteredFilms);

  }

  /*
        console.log( $(this).find(":selected").val() );
  */
  /*console.log($(this).find(":selected").val() );*/
  $('#sort-by').on("change", sortBySelect);

  function sortBySelect() {


    if ($('#sort-by').val() == "title-asc") {
      sortByAscending();
    }
    if ($('#sort-by').val() == "title-desc") {
      sortByDescending();
    }
    if ($('#sort-by').val() == "date-asc") {
      sortByDateAscending();
    }
    if ($('#sort-by').val() == "date-desc") {
      sortByDateDescending();
    }
    if ($('#sort-by').val() == "rating-asc") {
      sortByRatingAscending();
    }
    if ($('#sort-by').val() == "rating-desc") {
      sortByRatingDescending();
    }
  }


  function sortByAscending() {
    var filteredFilms = films.sort(function (a, b) {
      return (b.original_title.split('').join('').length - a.original_title.split('').join('').length) * -1;
    });
    displayFilms(filteredFilms);
  }

  function sortByDescending() {
    var filteredFilms = films.sort(function (a, b) {
      return b.original_title.split('').join('').length - a.original_title.split('').join('').length;
    });
    displayFilms(filteredFilms);
  }

  function sortByDateAscending() {
    var filteredFilms = films.sort(function (a, b) {
      var dateA = new Date(a.release_date),
        dateB = new Date(b.release_date);
      return (dateB - dateA) * -1;
    });
    displayFilms(filteredFilms);
  }

  function sortByDateDescending() {
    var filteredFilms = films.sort(function (a, b) {
      var dateA = new Date(a.release_date),
        dateB = new Date(b.release_date);
      return dateB - dateA;
    });
    displayFilms(filteredFilms);
  }

  function sortByRatingAscending() {
    var filteredFilms = films.sort(function (a, b) {
      return (b.vote_average - a.vote_average) * -1;
    });
    displayFilms(filteredFilms);
  }

  function sortByRatingDescending() {
    var filteredFilms = films.sort(function (a, b) {
      return b.vote_average - a.vote_average;
    });
    displayFilms(filteredFilms);
  }


  /*  Display films function*/
  function displayFilms(list) {
    var collection = $("#collection");
    collection.empty();
    list.forEach(function (film) {

      var html = filmToHtml(film);
      collection.append(html);
    });
  }

  function filmToHtml(film) {
    return `<div class="col-lg-6">
          <article id="%FILM-ID%" class="card film-item">
            <div class="card-body d-flex p-0">
              <div class="col-4 p-0 film-poster">
                <a href="https://www.themoviedb.org/movie/%FILM-ID%" target="blank">
                  <img src="${film.poster_path}" title="${film.original_title}" alt="${film.original_title}">
                </a>
              </div>
              <div class="col-8 p-3 film-info">
                <h4 class="card-title">
                  <a href="#">${film.original_title}</a>
                </h4>
                <div class="year-genre">
                  <div>
                    <i class="fa fa-calendar"></i>
                    <span class="year">${film.release_date}</span>
                  </div>
                  <div class="genre elipsis">
                    ${film.genres}
                  </div>
                </div>
                <div class="description">
                  <p>${film.overview}</p>
                  <a class="read-more" href="https://www.themoviedb.org/movie/%FILM-ID%" target="blank">more</a>
                </div>
                <div class="rating">
                  <span class="rating-value">${film.vote_average}</span>
                  <i class="fa fa-star"></i>
                </div>
              </div>
            </div>
          </article>
        </div>`;
  }



  window.addEventListener("scroll", function () {
    var nav = document.querySelector('#navigation');
    if (this.pageYOffset > 200) {
      nav.classList.toggle('slim');
    }

  });
})();