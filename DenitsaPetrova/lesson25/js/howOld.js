/* jslint esnext: true */
/* global $ */

(function () {

  function howOldAmI(data) {
    var today = new Date();
    data = data.split("-");
    var year = today.getUTCFullYear() - data[0];
    if ((today.getUTCMonth() + 1) == data[1]) {
      if (today.getUTCDate() == data[2]) {
        return "Happy birthday!\n You are " + year;
      }
    }
    return "You are " + year;
  }
  
  $("#go").click(function (event) {
    event.preventDefault();
    var age = $("#yourAge").val();


    $("#howOld").append(howOldAmI(age));
  });

})();