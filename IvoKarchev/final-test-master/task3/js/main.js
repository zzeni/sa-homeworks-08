(function () {
    "use strict";
    var kids = [];
    var TEMPLATE = "" +
        "        <div id=\"%NAME%\" class=\"kid col-md-6 mb-5\">\n" +
        "          <div class=\"card\">\n" +
        "            <div class=\"card-heading bg-info text-white\">\n" +
        "              <h3 class=\"m-3\">%NAME%</h3>\n" +
        "            </div>\n" +
        "            <div class=\"card-body row\">\n" +
        "              <div class=\"col-lg-4\">\n" +
        "                <img class=\"img-fluid\" src=\"%IMG-URL%\">\n" +
        "              </div>\n" +
        "              <div class=\"col-lg-8\">\n" +
        "                <ul class=\"my-4\">\n" +
        "                  <li><h5>Години: %AGE%</h5></li>\n" +
        "                  <li><h5>Любим цвят: %COLOR%</h5></li>\n" +
        "                  <li><h5>Любима игра: %GAME%</h5></li>\n" +
        "                  <li><h5>Любима храна: %FOOD%</h5></li>\n" +
        "                </ul>\n" +
        "                <button type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"modal\" data-target=\"#kidModal\">Още</button>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>\n";

    $.getJSON("./js/kids.json", function (data) {
        kids = data;
        displayKids(kids);
    });

    function displayKids(children) {
        var container = $("#kids");

        container.empty();

        children.forEach(function (child) {
            var replaceValues = TEMPLATE
                .replace(/%NAME%/g, child.name)
                .replace("%AGE%", child.age)
                .replace("%COLOR%", child.color)
                .replace("%FOOD%", child.food)
                .replace("%GAME%", child.game)
                .replace("%IMG-URL%", child.image);

            container.append(replaceValues);

        });

    }

    $("#filters").on("keyup", searchKeyword);

    function searchKeyword(event) {
        var input = event.target;
        var value = input.value.toLowerCase();

        if (input.value.length < 2) {
            displayKids(kids);
            return;
        }

        var keywordFilter = kids.filter(function (kid) {
            var searchIn = kid.name + " " + kid.food + " " + kid.game;
            return searchIn.toLowerCase().includes(value);
        });
        displayKids(keywordFilter);
    }


    $("#age").on("click", function () {
        var sorted = kids.sort(function (a, b) {
            return a.age - b.age;
        });
        return displayKids(sorted);
    });

    $("#name").on("click", function () {
        var sorted = kids.sort(function (a, b) {
            return a.name - b.name;
        });

        return displayKids(sorted);
    });

    $("#about").load("./html/_about.html");

    $("#contact").load("./html/_contact.html");

    $("#kidModal").load("./html/_kid-modal.html");

})();
