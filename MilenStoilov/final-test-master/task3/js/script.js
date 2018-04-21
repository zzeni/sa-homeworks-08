/*globals document, window, $ */
/*jslint esnext:true */

(function () {

    "use strict";


    var kids = [];


    $.getJSON("js/kids.json", function (data) {
        kids = data;
        displayKids(kids);
    });


    function displayKids(list) {

        var kids = $("#kids");
        kids.empty();


        list.forEach(function (kid) {
            var html = kidToHtml(kid);
            kids.append(html);
        });
    }




    document.filters.textFilter.addEventListener("keyup", function () {
        var keywords = this.value;
        if (keywords.length < 2) {
            return;
        }
        var filtered = kids.filter(function (kid) {
            var regEx = new RegExp(keywords, "i");
            return kid.name.match(regEx);
        });


        displayKids(filtered);
    });


    document.filters.sortByAge.addEventListener("click", function() {
        var sorted =  kids.sort(function (a,b) {
            return a.age-b.age;
        });
        displayKids(sorted);
    });
       

    function kidToHtml(kids) {
        return `<div class="kid col-md-6 mb-5">
          <div class="card">
            <div class="card-heading bg-info text-white">
              <h3 class="m-3">${kids.name}</h3>
            </div>
            <div class="card-body row">
              <div class="col-lg-4">
                <img class="img-fluid" src="${kids.image}">
              </div>
              <div class="col-lg-8">
                <ul class="my-4">
                  <li><h5>Години: ${kids.age}</h5></li>
                  <li><h5>Любим цвят: ${kids.color}</h5></li>
                  <li><h5>Любима игра: ${kids.game}</h5></li>
                  <li><h5>Любима храна: ${kids.food}</h5></li>
                </ul>
                <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#kidModal">Още</button>
              </div>
            </div>
          </div>
        </div>`;
    }




})();
