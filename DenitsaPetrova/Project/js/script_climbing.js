/*globals $ */
/* jslint esnext: true */

(function () {
  "use strict";
  var cup = [];
  var articles = [];
  var blankArticle = `<article id="%ID%">
<h4>%TITLE%</h4>
<img src="%IMAGE%">
<p>%ARTICLE%</p>
</article><hr>`;

  $.getJSON("../db/medals.json", getMedals);
  $.getJSON("../db/article.json", getArticles);


  function getMedals(data) {
    cup = data;

    cup.forEach(function (medal) {
      displayYear(medal);
    });
  }

  function getArticles(data) {
    articles = data;
    displayArticle(articles);
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
  
  function displayArticle(list){
    list.forEach(function(article){
      $("#navigation").append(articleNavToHTML(article));
      $("#item-1").append(articleToHTML(article));
    });
  }


  function medalToHTML(medal) {
    return `    <p> Град: <strong>  ${medal.city}  </strong> 
 Място: <strong>  ${medal.place}  </strong> 
 Дисциплина: <strong>  ${medal.discipline} </strong> </p> </div>
`;
  }

  function articleNavToHTML(article) {
    return `   <a class="nav-link  ml-2" title="${article.title}" href="#${article.id}">
${article.title}</a>
`;
  }
  
  function articleToHTML(article) {
    return blankArticle
    .replace("%ID%", article.id)
    .replace("%TITLE%",article.title)
    .replace("%IMAGE%", article.urlImage)
    .replace("%ARTICLE%", article.article);
  }
})();