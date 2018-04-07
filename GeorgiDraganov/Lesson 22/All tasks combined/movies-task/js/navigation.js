/*jslint esnext: true*/
/* jslint jquery: true*/
/* jslint browser: true */
(function () {
  "use strict";

  $('#navigation a').on('click', function () {
    var targetSelector = this.getAttribute('data-target');
    $('main').children().hide();
    $(targetSelector).show();

  });

    $('[data-target="#home-page"]').click();

/*$('#about').on('click',function(){
  $('main-page').hide(); */ 
  $('#about-page').load('./templates/_about-us.html');

/*});*/


/*   $('#home').on('click', function(){
    $('#main-page').hide();
     $('#page-content').load('/index.html');
   });*/
    var films = [];
  
  
  $.getJSON("./db/private_movies.json", function (data) {
    films = data;
    displayFilms(films);
    console.log(data);
  });
  
  function displayFilms(list) {
    var collection = $("#private-collection");
    collection.empty();
    list.forEach(function (film) {

      var html = filmToHtml(film);
      collection.append(html);
    });
  }

  
  function filmToHtml(film) {
    return `<div class="col-lg-4">
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
})();