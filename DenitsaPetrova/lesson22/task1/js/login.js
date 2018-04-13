/* global document, Cookies, $ */
(function () {
  "use strict";

  var displayGreeting = document.querySelector("#greeting");
  var currretnPage = document.querySelector("#log-page");

  $("#logOut").hide();

  $(currretnPage).on("submit", function (event) {
    event.preventDefault();
    var name = $("#username").val();
    Cookies.set("user", name);
    $("#home").show();
    $("#login").hide();
    $("#logOut").show();
    greet();
  });

  $("#logOut").on("click", function () {
    Cookies.remove("user");
    console.log("del");
    $("#home").show();
    $("#logOut").hide();
    $("#login").show();
    greet();
  });

  function greet() {
    var username = Cookies.get("user");
    if (username) {
      displayGreeting.innerHTML = "<h4>Hi " + username + "!</h4>";
    } else {
      displayGreeting.innerHTML = "<h6>Please login! -> <h6>";
    }

  }

})();