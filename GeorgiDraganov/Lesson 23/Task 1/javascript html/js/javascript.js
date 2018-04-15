/*jslint jquery: true*/
/*jslint esnext: true*/
(function () {
  "use strict";
  var username = $('#username');
  var password = $('#password');
  var passwordConf = $('#passwordConf');
  var regEx = /[0-9a-zA-Z_]{3}/;
  var passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{3,}$/;


  username.on('change', function () {
    if (username.val().match(regEx)) {
      username.css("border-color", "green");
    }
    if (!(username.val().match(regEx))) {
      username.css("border-color", "red");
    }
  });
  password.on('change', function () {
    if (password.val().match(passwordRegEx)) {
      password.css("border-color", "green");
    }
    if (!(password.val().match(passwordRegEx))) {
      password.css("border-color", "red");
    }
  });
  passwordConf.on('change', function () {
    if (passwordConf.val() == password.val()) {
      passwordConf.css("border-color", "green");
    }
    if (passwordConf.val() !== password.val()) {
      passwordConf.css("border-color", "red");
    }

  });


})();