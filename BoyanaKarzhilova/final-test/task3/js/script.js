/* jslint esnext:true */
/* jslint jquery:true */
/* jslint browser:true */

(function () {
    "use strict";
    var kids = [];

    $.getJSON("js/kids.json", function (data) {
        kids = data;
        displayKids(kids);

        $('sortByName').click(function (event) {
            if (kids.name < kids.name) return -1;
            if (kids.name > kids.name) return 1;
            return 0;

        });

    });

    $('#about').load("html/_about.html");
    $('#contact').load("html/_contact.html");

    function displayKids(list) {
        var collection = $("#kids");
        collection.empty();

        list.forEach(function (kids) {
            var html = kidsToHtml(kids);
            collection.append(html);
        });
    }

    function kidsToHtml(kids) {

        return `<div class="kid col-md-6 mb-5">
<div class="card">
<div class="card-heading bg-info text-white">
<h3 class="m-3">"${kids.name}"</h3>
</div>
<div class="card-body row">
<div class="col-lg-4">
<img class="img-fluid" src="${kids.image}">
</div>
<div class="col-lg-8">
<ul class="my-4">
<li>
<h5>Години: "${kids.age}"</h5>
</li>
<li>
<h5>Любим цвят: "${kids.color}"</h5>
</li>
<li>
<h5>Любима игра: "${kids.game}"</h5>
</li>
<li>
<h5>Любима храна: "${kids.food}"</h5>
</li>
</ul>
<button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#kidModal">Още</button>
</div>
</div>
</div>
</div> `;
    }

    function showKid(kids) {

        var modal = $('#kid-modal');
        modal.modal();

        var imageUrl = "img/" + kids.name + ".jpg";

        modal.find('.kids-image').attr('src', imageUrl);
        modal.find('.kids-name').text(kids.name);
        modal.find('.kids-age').text(kids.age);
        modal.find('.kids-color').text(kids.color);
        modal.find('.kids-game').text(kids.game);
        modal.find('.kids-food').text(kids.food);

    }



})();
