var kidsList = [];
var gamesList = [];
var sortedByName = false;
var sortedByAge = false;
const searchedVals = ["age", "name", "color", "food", "game"];

$(function () {
  $.getJSON('https://api.myjson.com/bins/13oh2j', function (data) {
    $.each(data, function (i, elem) {
      var obj = new Kid(elem, i);
      addKidSection(obj);
      kidsList.push(obj);
      addGame(obj.game);
    });

    $.each(gamesList, function (i, elem) {
      var newOption = $('<option readonly value="' + elem.key + '">' + elem.value + '</option>');
      $('#gameFilter').append(newOption);
    });
  });
});

$("#gameFilter").change(function () {
  if ($("#gameFilter :selected").val() == "") {
    showRecords(kidsList);
  } else {
    var filterValue = $("#gameFilter :selected").text();
    var matchRecords = findRecords("game", filterValue, true);
    showRecords(matchRecords);
    var notMatchRecords = findRecords("game", filterValue, false);
    hideRecords(notMatchRecords);
  }
});

var showRecords = function (records) {
  $.each(records, function (i, elem) {
    var elemID = elem.id;
    $("#" + elemID).removeAttr("hidden");
  });
};

var hideRecords = function (records) {
  $.each(records, function (i, elem) {
    var elemID = elem.id;
    $("#" + elemID).attr("hidden", "hidden");
  });
};

var getGameFilter = function () {
  return $("#gameFilter :selected").text();
};

var addGame = function (game) {
  var isGameAlreadyAdded = false;
  for (var item in gamesList) {
    if (item == game) {
      isGameAlreadyAdded = true;
    }
  }

  if (!isGameAlreadyAdded) {
    var game = new Game(gamesList.length, game);
    gamesList.push(game);
  }
};

var addKidSection = function (kid) {
  var kidsSection = $("#kids");
  var string = "<div id='" + kid.id + "'class='kid col-md-6 mb-5'><div class='card'><div class='card-heading bg-info text-white'><h3 class='m-3'>" + kid.name +
    "</h3></div><div class='card-body row'><div class='col-lg-4'><img class='img-fluid' src='" + kid.image + "'></div>" +
    "<div class='col-lg-8'><ul class='my-4'><li><h5>Години: " + kid.age + "</h5></li><li><h5>Любим цвят: " + kid.color + "</h5></li><li><h5>Любима игра: " + kid.game + "</h5></li><li><h5>Любима храна: " + kid.food +
    "</h5></li></ul><button type='button' class='btn btn-outline-info' data-toggle='modal' data-target='#kidModal'>Още</button></div></div></div></div>";

  var html = $.parseHTML(string);
  $(kidsSection).append(html);
};

var findRecords = function (key, value, match) {
  var result = [];

  $.each(kidsList, function (i, obj) {
    for (var propertyName in obj) {
      if (propertyName == key) {
        if (match) {
          if (obj[propertyName] == value) {
            result.push(obj);
          }
        } else {
          if (obj[propertyName] != value) {
            result.push(obj);
          }
        }
      }
    }
  });

  return result;
};

$("button[name=sortByName]").on("click", function () {
  var items = $('#kids').children();
  items.sort(function (a, b) {
    return a.getAttribute("id").toLowerCase().localeCompare(b.getAttribute("id").toLowerCase());
  });

  if (sortedByName) {
    sortedByName = false;
    for (var i = items.length; i >= 0; i--) {
      $(items[i]).parent().append(items[i]);
    }

  } else {
    for (var i = 0; i < items.length; i++) {
      $(items[i]).parent().append(items[i]);
    }
    sortedByName = true;
  }
});

$("button[name=sortByAge]").on("click", function () {
  var items = $('#kids').children();
  items.sort(function (a, b) {
    var age1 = findRecords("id", a.getAttribute("id"), true)[0].age;
    var age2 = findRecords("id", b.getAttribute("id"), true)[0].age;
    return age1 - age2;
  });

  if (sortedByAge) {
    sortedByAge = false;
    for (var i = items.length; i >= 0; i--) {
      $(items[i]).parent().append(items[i]);
    }

  } else {
    for (var i = 0; i < items.length; i++) {
      $(items[i]).parent().append(items[i]);
    }
    sortedByAge = true;
  }
});

$("#search").on("click", function () {
  var searchedVal = $("#filterInput").val().toLowerCase();
  var items = $('#kids').children();
  $.each(items, function (i, elem) {
    var text = elem.innerText.toLowerCase();
    var result = text.search(searchedVal);
    if (result < 0) {
      $(elem).attr("hidden", "hidden");
    } else {
      $(elem).removeAttr("hidden");
    }
  });
});

var Game = function (key, value) {
  this.key = key;
  this.value = value;
};

var Kid = function (data, id) {
  this.id = data.name + id;
  this.age = +data.age;
  this.color = data.color;
  this.food = data.food;
  this.game = data.game;
  this.image = data.image;
  this.name = data.name;
};


//$(function () {
//    $("#kidModal").load("html/_kid-modal.html");
//});
