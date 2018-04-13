/* jslint esnext: true */
/* global $ */

(function () {
  var name = new RegExp("[A-Za-z0-9_]{3,}");
  var email = new RegExp("\w+@\w+\.\w+");
  var pass = new RegExp(".{6,}");
  var bdata = new RegExp("^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$");
  var picture = new RegExp("(https?:\/\/.*\.(?:png|jpg))", "i");

  function correct( place ){
    return $(place).css("box-shadow", "1px 1px 2px 2px green");
  }
    function incorrect( place ){
    return $(place).css("box-shadow", "1px 1px 2px 2px red");
  }
  
  $("#username").keyup(function () {
    var check = this.value;
    if (name.test(check)) {
     correct("#username");
    } else {
      incorrect("#username");
    }
  });

  $("#email").keyup(function () {
    var check = this.value;
    if (email.test(check)) {
      correct("#email");
    } else {
      incorrect("#email");
    }
  });

  $("#password").keyup(function () {
    var check = this.value;
    if (pass.test(check)) {
      correct("#password");
    } else {
      incorrect("#password");
    }
  });

  $("#passwordConf").keyup(function () {
    var check = this.value;
       if (pass.test(check)) {
      if ( $("#password").val().match(check)) {
        correct("#passwordConf");
      }}
     else {
      incorrect("#passwordConf");
    }
  });

  $("#bday").keyup(function () {
    var check = this.value;
    if (bdata.test(check)) {
      correct("#bday");
    } else {
      incorrect("#bday");
    }
  });

  $("#img").keyup(function () {
    var check = this.value;
    if (picture.test(check)) {
      correct("#img");
    } else {
      incorrect("#img");
    }
  });

})();