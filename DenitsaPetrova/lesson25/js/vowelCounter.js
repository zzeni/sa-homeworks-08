/* jslint esnext: true */
/* global $ */

(function () {
  var text = "Напишете функция, която да преброява гласните букви в даден текст (а, ъ, о, у, е, и, ю, я)";

  function vowelCounter(text) {
    var vowel = ["а", "ъ", "о", "у", "е", "и", "ю", "я"];
    var couter = [0, 0, 0, 0, 0, 0, 0, 0],
      all = 0;
    text = text.toLowerCase().split("");
    text.forEach(function (l) {
      switch (l) {
        case vowel[0]:
          couter[0]++;
          break;
        case vowel[1]:
          couter[1]++;
          break;
        case vowel[2]:
          couter[2]++;
          break;
        case vowel[3]:
          couter[3]++;
          break;
        case vowel[4]:
          couter[4]++;
          break;
        case vowel[5]:
          couter[5]++;
          break;
        case vowel[6]:
          couter[6]++;
          break;
        case vowel[7]:
          couter[7]++;
          break;
      }
    });
    for (let i = 0; i < vowel.length; i++) {
      $("#vowel").append(vowel[i] + ": " + couter[i] + "<br>");
      all += couter[i];
    }
    return "All vowels are " + all;
  }

  $(".text2").append(text);

  $("#do").click(function (event) {
    event.preventDefault();
    var vowel = $("#wvow").val();

    $("#vowelCounter").append(vowelCounter(vowel || text));
  });

})();