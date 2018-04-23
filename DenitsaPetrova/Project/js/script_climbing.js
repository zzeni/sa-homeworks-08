/*globals $ */
/* jslint esnext: true */

(function () {
  "use strict";
  var cup = [];

  $.getJSON("../db/medals.json", getMedals);


  function getMedals(data) {
    cup = data;

    cup.forEach(function (medal) {
      displayYear(medal);
    });
  }


  function displayYear(list) {
    var collection = $("#item-2-1");

    let year = yearToHTML(list);
    let html = displayMedal(list);
    collection.append(year + html);
  }

  function yearToHTML(medal) {
    return `    <div>
      <h5> ${medal.year} </h5>`;
  }

  function displayMedal(list) {
    let medals = "";
    list.medal.forEach(function (medal) {
      medals += medalToHTML(medal);
    });
    return medals;

  }


  function medalToHTML(medal) {
    return `    <p> Град: <strong>  ${medal.city}  </strong> 
 Място: <strong>  ${medal.place}  </strong> 
 Дисциплина: <strong>  ${medal.discipline} </strong> </p> </div>
`;
  }



})();
