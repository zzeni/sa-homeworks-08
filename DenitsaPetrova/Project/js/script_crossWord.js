/*globals $ */
/* jslint esnext: true */

(function () {
  "use strict";

  $("input").val("");

  var questions = [];

  $.getJSON("../db/question.json", function (data) {
    questions = data;
    console.log(questions);
  });

  function choiceQuestion(data) {
    var choiceCell = Object.values(data.cell).toString().replace(/,/g, "");
    console.log(choiceCell);
    return choiceCell;
  }

  $("span").click(function (event) {
    event.preventDefault();
    $("span").removeClass("setected").addClass("original");
    var cellId = event.target.id;
    $("#" + cellId).removeClass("original").addClass("setected");

    questions.forEach(function (question) {
      var checkCell = choiceQuestion(question);
      if (cellId == checkCell) {
        displayQuestion(question);
        console.log(question);
      }
    });

  });

  function displayQuestion(list) {
    var collection = $("#question");
    collection.empty();
    console.log(list);
    var html = questionsToHTML(list);
    collection.append(html);
  }

  function questionsToHTML(question) {
    return `    <div>
      <i class="fa fa-arrow-right fa-lg"></i>
      <p> ${question.right} </p>
    </div>
    <div>
      <i class="fa fa-arrow-down fa-lg"></i>
      <p> ${question.down}</p>
    </div>`;
  }


})();
