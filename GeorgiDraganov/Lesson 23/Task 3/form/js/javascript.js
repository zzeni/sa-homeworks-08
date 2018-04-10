/*jslint jquery: true*/
/*jslint esnext: true*/
(function () {
  "use strict";
  var username = $('#username');
  var password = $('#password');
  var passwordConf = $('#passwordConf');
  var email = $('#email');
  var photoUrl = $('#photoUrl');
  var date = $('#date');
  var regEx = /[0-9a-zA-Z_]{3}/;
  var passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{3,}$/;
  var emailRegEx = /\S+@\S+\.\S+/;
  var urlRegEx = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  var dateRegEx = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
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
  email.on('change', function () {
    if (email.val().match(emailRegEx)) {
      email.css("border-color", "green");
    }
    if (!(email.val().match(emailRegEx))) {
      email.css("border-color", "red");
    }
  });
  photoUrl.on('change', function () {
    if (photoUrl.val().match(urlRegEx)) {
      photoUrl.css("border-color", "green");
    }
    if (!(photoUrl.val().match(urlRegEx))) {
      photoUrl.css("border-color", "red");
    }
  });
  date.on('change', function () {
    if (date.val().match(dateRegEx)) {
      date.css("border-color", "green");
    }
    if (!(date.val().match(dateRegEx))) {
      date.css("border-color", "red");
    }
  });

  $('#showPhoto').click(function () {
    var photo = $('#photoUrl').val();
    $('#photo').html('<img src=' + photo + '>');
  });

})();