/* jslint browser: true */
(function () {
    "use strict";
    var form = document.filmGenerator;

    function Movie(title, year, url, imgUrl) {
        this.title = title,
            this.year = year,
            this.url = url,
            this.imgUrl = imgUrl
    }

    Movie.prototype.toHTML = function toHTML() {

        var div = document.createElement('div');
        div.innerHTML = `
          <div class="col-xs-6 col-sm-4 col-md-2">
                        <div class="thumbnail">
                    <img src="${this.imgUrl}" alt="...">
                    <div class="caption">
                        <h3>Movie: ${this.title}</h3>
                        <p>Year: ${this.year}</p>
                        <p><a href="${this.url}" target="_blank" class="btn btn-primary" role="button">More info...</a>
                    </div>
                </div>
            </div>
          </div>`;
        document.body.appendChild(div);

    }

    function onFormSubmit(event) {
        event.preventDefault();
        var form = document.filmGenerator;
        var title = form.title.value;
        var year = form.year.value;
        var url = form.url.value;
        var imageUrl = form.imageUrl.value;

        var newMovie = new Movie(title, year, url, imageUrl);
        var form = document.filmGenerator;
        newMovie.toHTML();

    }
    form.addEventListener("submit", onFormSubmit);

})();
