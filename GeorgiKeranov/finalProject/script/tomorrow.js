/* jslint esnext: true */
/* jslint jquery: true */
(function (){
    "use strict";
    
    var container = $("div.cities");
    
    $.getJSON('db/city.json', function(data){
        var cities = data;
        cities.forEach(function(city){
            container.append(toHtml(city));
        });
    });
    
    
    function toHtml(city){
        return `
                <div class="city card mr-4 styleCard" style="width: 15rem;">
                <h5 class="card-title text-center">${city.name}</h5>
                <img class="img-container" src="${city.image}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Макс. Температура: <span>${city.max2}&deg;C</span> </p>
                    <p class="card-text">Мин. Температура: <span>${city.min2}&deg;C</span></p>
                    <div class="container text-center"><img src="${city.icon2}" alt="Sunny"></div>
                </div>
                `;      
    }
    
})();