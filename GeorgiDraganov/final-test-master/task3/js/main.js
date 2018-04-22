/*jslint jquery: true*/
/*jslint esnext: true*/
(function () {
  "use strict";



  // Kids JSON 
  var container = $('#kids');
  var kids = [];

  function kidsToHTML(kid) {
    return `<div class="kid col-md-6 mb-5">
          <div class="card">
            <div class="card-heading bg-info text-white">
              <h3 class="m-3">${kid.name}</h3>
            </div>
            <div class="card-body row">
              <div class="col-lg-4">
                <img class="img-fluid" src="${kid.image}">
              </div>
              <div class="col-lg-8">
                <ul class="my-4">
                  <li>
                    <h5>Години: ${kid.age}</h5>
                  </li>
                  <li>
                    <h5>Любим цвят: ${kid.color}</h5>
                  </li>
                  <li>
                    <h5>Любима игра: ${kid.game}</h5>
                  </li>
                  <li>
                    <h5>Любима храна: ${kid.food}</h5>
                  </li>
                </ul>
                <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#kidModal">Още</button>
              </div>
            </div>
          </div>
</div>`;
  }
  $.getJSON('js/kids.json', function (data) {
    kids = data;
    displayKids(kids);
  });


  function displayKids(list) {

    container.empty();
    list.forEach(function (kids) {

      var html = kidsToHTML(kids);
      container.append(html);
    });
  }
  // End of kids JSON
  // Filters

  $('#gameFilter').on('change', filterGameType);

  function filterGameType(event) {
    var inputElement = event.target;
    var value = inputElement.value;
    var filteredKids = kids.filter(function (kids) {
      return kids.game.includes(value);

    });
    displayKids(filteredKids);
  }



  $('#text-Filter').on('keyup', onSearchInput);

  function onSearchInput(event) {
    var inputElement = event.target;
    var value = inputElement.value;
    var filteredKids = kids.filter(function (kids) {
      return kids.name.toLowerCase().includes(value.toLowerCase());

    });
    displayKids(filteredKids);
  }
  $('#sortByName').on('click', sortByAscending);

  function sortByAscending() {
    var filteredKids = kids.sort(function (a, b) {
      return a.name.length - b.name.length;
    });
    displayKids(filteredKids);
  }
  $('#sortByAge').on('click', sortByAscendingAge);

  function sortByAscendingAge() {
    var filteredKids = kids.sort(function (a, b) {
      return a.age - b.age;
    });
    displayKids(filteredKids);
  }

  //End of Filters
  // Navigation 
  $("#a-about").on("click", function () {
    $('#about').load('./html/_about.html');
  });
  $("button").on("click", function () {
    $('#kidModal').load('./html/_kid-modal.html');
  });

  $("#a-contact").on("click", function () {
    $('#contact').load('./html/_contact.html');
  });
  // end of Navigation
}());
