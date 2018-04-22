/*globals document, window, $ */
/*jslint esnext:true */

(function () {
    
    "use strict";


    var teams = [];


    $.getJSON("./db/project.json", function (data) {
        teams = data;
        displayTeams(teams);
    });
    
    
     function displayTeams(list) {

        var collection = $("#collection");
         collection.empty();
      
        list.forEach(function (team) {
            var html = teamToHtml(team);
            collection.append(html);
        });
         
    }
    

        
    
    
    
     document.filtersForm.keywords.addEventListener("keyup", function () {
    var keywords = this.value;
    if (keywords.length < 0) { return ;}
         
    var filtered = teams.filter(function(team) {
      var regEx = new RegExp(keywords, "i");
      return team.tittle.match(regEx);
        
            
        
    });
    
         
        displayTeams(filtered);
           });
    
    
    
      
    


    function teamToHtml(team) {
        return `
<div class="card col col-3 m-3 card border-secondary" id="team" style="width: 18rem;">
  <img class="card-img-top p-3" id= "snimka" src="${team.img}" alt="Card image cap">
  <div class="card-body row row-3">
    <h5 class="card-title">${team.tittle}</h5>
    <p class="card-text text-justify"id="content">${team.description}</p>
<div>
<div class="row row-6">
<div class="criteria mr-4">Appearances:</div>
<div class="criteria">${team.Appearances}</div>
</div>
<hr>
<div class="row row-6">
<div class="criteria mr-4">Titles:</div>
<div class="criteria">${team.Cups}</div>
</div>
<hr>
<div class="row row-6">
<div class="criteria mr-4">FIFA ranking:</div>
<div class="criteria">${team.FIFA_Ranking_position}</div>
</div>
</div>

<div id="button">
<a href=${team.profile} class="btn btn-primary " target="_blank">profile</a>
</div>
</div>
</div>`;
    }
    
    $('#main-nav a').on('click', function (event) {
    event.preventDefault();
        
        var targetSelector = this.getAttribute('data-target');
        
        $('#main-nav .nav-item').removeClass('active');
    $(this).parent().addClass('active');
        
        $('main').children().hide();
    $(targetSelector).show();
        });
    $('[data-target="#home"]').click();

  $('#stadiums').load('_stadims.html');
  $('#schedule').load('_schedule.html');
    
    
    
    var button = document.getElementById('sorting');
  button.addEventListener("click", function() {
    
        var sorted =  teams.sort(function (a,b) {
            return b.Cups-a.Cups;
        });
        displayTeams(sorted);
    });

    var button1 = document.getElementById('sorting1');
  button1.addEventListener("click", function() {
        var sorted =  teams.sort(function (a,b) {
            return b.Appearances-a.Appearances;
        });
        displayTeams(sorted);
    });
    
    var button2 = document.getElementById('sorting2');
  button2.addEventListener("click", function() {
        var sorted =  teams.sort(function (a,b) {
            return a.FIFA_Ranking_position-b.FIFA_Ranking_position;
        });
        displayTeams(sorted);
    });
    

    
   
})();

