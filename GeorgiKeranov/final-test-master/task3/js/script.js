/* jslint esnext: true */
/* jslint jquery: true */
/* jslint browser: true */
(function(){
    "use strict";
    
    var kids = [];
   
    var container = $("#kids");
    
    $.getJSON('js/kids.json', callback);
    
    function callback(data){
        var kids = data;
        kids.forEach(function(kid){
            container.append(toHTML(kid));
        });
    }
    
    function displayKids(list){
        var container = $("#kids");
        container.empty();
        
        list.forEach(function(kid){
            container.append(kid.html);
        });
    }
    
    function toHTML(kid){
        return `
                <div class="kid col-md-6 mb-5">
          <div class="card">
            <div class="card-heading bg-info text-white">
              <h3 class="m-3">${kid.name}</h3>
            </div>
            <div class="card-body row">
              <div class="col-lg-4">
                <img class="img-fluid" src="${kid.image}">
              </div>
              <div class="col-lg-8">
                <ul class="my-4">
                  <li><h5>Години: ${kid.age}</h5></li>
                  <li><h5>Любим цвят: ${kid.color}</h5></li>
                  <li><h5>Любима игра: ${kid.game}</h5></li>
                  <li><h5>Любима храна: ${kid.food}</h5></li>
                </ul>
                <button id="kidModal" type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#kidModal">Още</button>
              </div>
            </div>
          </div>
        </div>
                `;
    }
    document.filters.sortByName.addEventListener("click", function(){
        
        var sorted = kids.sort(function(nameOne, nameTwo){
            if(nameOne.kid > nameTwo.kid){
                return 1;
            }
            if(nameOne.kid < nameTwo.kid){
                return -1;
            }
            return 0;
        });
        displayKids(sorted);
    });
   
    
    document.filters.sortByAge.addEventListener("click", function(){
        
        var sorted = kids.sort(function(ageOne, ageTwo){
            if(ageOne.kid > ageTwo.kid){
                return 1;
            }
            if(ageOne.kid < ageTwo.kid){
                return -1;
            }
            return 0;
        });
        displayKids(sorted);
    });
    
    function searchByText(event){
        var inputText = event.target;
        var value = inputText.value.toLowerCase();
        var filterInfo = kids.filter(function(kid){
            var searchable = kid.name + ' ' + kid.age + ' ' + kid.color + ' ' + kid.game + ' ' + kid.food;
            return searchable.toLowerCase().includes(value);
        });
        displayKids(filterInfo);
    }
})();
