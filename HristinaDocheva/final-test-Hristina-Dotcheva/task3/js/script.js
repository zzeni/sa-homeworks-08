/*globals document, window, $ */
/*jslint esnext: true*/
/*jslint browser: true*/
/*jslint jquery: true*/

(function () {
    "use strict";

    var kids = [];

    $.getJSON("js/Kids.json", function (data) {
        kids = data;
        displayKids(kids);
    });
    
     function displayKids(list) {
        var collection = $("#kids");
        collection.empty();

        list.forEach(function (kid) {
            var html = kidToHtml(kid);
            collection.append(html);
        });
    }
    
    document.filters.gameFilter.addEventListener("change", function () {
        var value = this.value;
        var filteredKids = filterByGame(kids, value);
        displayKids(filteredKids);
    });

    function filterByGame(kids, game) {
        return kids.filter(function (kid) {
            return kid.game === game || game === "";
        });
    }

    function kidToHtml(kid) {
        return `<div class="kid col-md-6 mb-5">
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
                <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#modal${kid.name}">Още</button>
              </div>
            </div>
          </div>
        </div>

 <div class="modal fade" id="modal${kid.name}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><strong>${kid.name}</strong></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <table> 
             <tr>
              <td>Снимка:</td>
              <td><img src="${kid.image}" alt="${kid.name}photo"></td>
            </tr> 
             <tr>
              <td>Години: </td>
              <td>${kid.age}</td>
            </tr>  
            <tr>
              <td>Любим цвят: </td>
              <td>${kid.color}</td>
            </tr>  
            <tr>
              <td>Любима игра: </td>
              <td>${kid.game}</td>
            </tr> 
            <tr>
              <td>Любима храна: </td>
              <td>${kid.food}</td>
            </tr> 
    </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>        
      </div>
    </div>
  </div>
</div>`;}
    })();