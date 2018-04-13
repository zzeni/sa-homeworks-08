/*globals document, window, $ */
/* jslint esnext: true */

(function () {
  "use strict";

  var films = [];

  const TEMPLATE = "";

  // Flms: https://api.themoviedb.org/3/discover/movie?api_key=2e83cf763cae99f3a4b1d282402e63cb
  // Documentation: https://developers.themoviedb.org/3/discover/movie-discover
  // Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=2e83cf763cae99f3a4b1d282402e63cb&language=en-US
  // Documentation: https://developers.themoviedb.org/3/genres/get-movie-list
  $.getJSON("./db/movies.json", getFilms);

  function getFilms(data) {
    films = data;
    displayFilms(films);
  }

  $("#year").on("change", function () {
    var valueYear = this.value;
    var filteredFilms = valueYear ? filterByYear(films, valueYear) : films;
    displayFilms(filteredFilms);
  });

  function filterByYear(list, year) {
    return list.filter(function (film) {
      return film.release_date.includes(year);
    });
  }
  
    $("#genre").on("change", function () {
    var valueGenre = this.value;
    var filteredFilms = valueGenre ? filterByGenre(films, valueGenre) : films;
    displayFilms(filteredFilms);
  });
  
    function filterByGenre(list, genre) {
    return list.filter(function (film) {
      return film.genres.split(", ").includes(genre);
    });
  }
  
  $("#keywords").on("keyup", function(){
    var valueKeywords = this.value;
    if(valueKeywords.length < 3 ) {return }
    var filteredFilms = films.filter(function(film){
      var regExp = new RegExp(valueKeywords, "i");
      return film.title.match(regExp) || film.overview.match(regExp);
    });
    displayFilms(filteredFilms);
  });
  
  $("#sortBy").on("change", function(){
    var value = this.value.split("-");
    var property = value[0];
    var direction = value[1];
    var sortFilms = films.sort(function(filmFirst, filmSecond){
     if (filmFirst[property] > filmSecond[property]) {return 1;}
     if (filmFirst[property] < filmSecond[property]) {return -1;}
     return 0;
    });
    
    if ( direction != "asc"){
      sortFilms = sortFilms.reverse();
    }
    
    displayFilms(sortFilms);
  });

  function displayFilms(list) {
    var collection = $("#collection");
    collection.empty();

    list.forEach(function (film) {
      var html = filmToHTML(film);
      collection.append(html);
    });
  }

  function filmToHTML(film) {
    return ` <div class="col-lg-6">
          <article id=${film.id} class="card film-item">
            <div class="card-body d-flex p-0">
              <div class="col-4 p-0 film-poster">
                <a href="https://www.themoviedb.org/movie/${film.id}" target="blank">
                  <img src=${film.poster_path || "./img/missing.gif"} title=${film.title} alt=${film.title}>
                </a>
              </div>
              <div class="col-8 p-3 film-info">
                <h4 class="card-title">
                  <a href="#">${film.title}</a>
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
                <div class="description" >
                  <p>${film.overview}</p>
                  <a class="read-more" href="https://www.themoviedb.org/movie/${film.id}" target="blank">more</a>
                </div>
                <div class="rating">
                  <span class="rating-value">${film.vote_average}</span>
                  <i class="fa fa-star"></i>
                </div>
              </div>
            </div>
          </article>
        </div> `;
  }

  window.addEventListener("scroll", function () {
    if (this.pageYOffset > 200) {
      $("#header nav").addClass("slim");
    } else {
      $("#header nav").removeClass("slim");
    }
  });
})();