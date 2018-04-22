/* jslint esnext: true */
/* jslint jquery: true */
/* jslint browser: true */
(function (){
    "use strict";
    
    var cities = [
        {
    "name": "София",
    "max": 27,
    "min": 8,
    "image": "img_1/articles-public-mineral-baths-sofia-bulgaria-dreamstime.jpg",
    "icon": "icons/2.gif",
    "max2": 27,
    "min2": 10,
    "icon2": "icons/3.gif",
      "category": "city"
  },
        {
    "name": "н.Шабла",
    "max": 22,
    "min": 13,
    "image": "img_1/1024px-Cape_Shabla_Lighthouse_3.jpg",
    "icon": "icons/3.gif",
    "max2": 20,
    "min2": 13,
    "icon2": "icons/2.gif",
      "category": "sea"
  },
  {
    "name": "н.Калиакра",
    "max": 22,
    "min": 13,
    "image": "img_1/1024px-Nos_Kaliakra.jpg",
    "icon": "icons/3.gif",
    "max2": 22,
    "min2": 14,
    "icon2": "icons/2.gif",
      "category": "sea"
  },
  
    {
    "name": "Варна",
    "max": 25,
    "min": 15,
    "image": "img_1/pochistvane-varna.jpg",
    "icon": "icons/5.gif",
    "max2": 24,
    "min2": 14,
    "icon2": "icons/2.gif",
      "category": "sea",
      "category2": "city"
  },
        {
    "name": "Пловдив",
    "max": 29,
    "min": 9,
    "image": "img_1/265px-Plovdiv_view.jpg",
    "icon": "icons/2.gif",
    "max2": 29,
    "min2": 10,
    "icon2": "icons/2.gif",
      "category": "city"
  },
         
  {
    "name": "н.Емине",
    "max": 23,
    "min": 15,
    "image": "img_1/cape emine.jpg",
    "icon": "icons/5.gif",
    "max2": 22,
    "min2": 13,
    "icon2": "icons/2.gif",
      "category": "sea"
  },
        {
    "name": "Бургас",
    "max": 27,
    "min": 13,
    "image": "img_1/burgasdron.jpg",
    "icon": "icons/2.gif",
    "max2": 27,
    "min2": 11,
    "icon2": "icons/2.gif",
      "category": "sea",
      "category2": "city"
  },
        
 
  
  {
    "name": "Царево",
    "max": 24,
    "min": 13,
    "image": "img_1/340_001_Carevo.jpg.jpg",
    "icon": "icons/2.gif",
    "max2": 23,
    "min2": 11,
    "icon2": "icons/2.gif",
      "category": "sea"
  },
        {
    "name": "Русе",
    "max": 29,
    "min": 13,
    "image": "img_1/ruse.jpg",
    "icon": "icons/3.gif",
    "max2": 30,
    "min2": 15,
    "icon2": "icons/3.gif",
      "category": "city"
  },
 {
    "name": "Стара Загора",
    "max": 28,
    "min": 11,
    "image": "img_1/Samarsko_Zname_Panorama.jpg",
    "icon": "icons/3.gif",
    "max2": 28,
    "min2": 13,
    "icon2": "icons/3.gif",
      "category": "city"
  },
     {
    "name": "Плевен",
    "max": 28,
    "min": 13,
    "image": "img_1/pleven.jpg",
    "icon": "icons/2.gif",
    "max2": 29,
    "min2": 14,
    "icon2": "icons/3.gif",
      "category": "province"
  },
         {
    "name": "Хасково",
    "max": 29,
    "min": 10,
    "image": "img_1/Хасково(1).jpg",
    "icon": "icons/2.gif",
    "max2": 29,
    "min2": 11,
    "icon2": "icons/2.gif",
      "category": "province"
  },
  {
    "name": "Сливен",
    "max": 28,
    "min": 12,
    "image": "img_1/sliven001.jpg",
    "icon": "icons/3.gif",
    "max2": 28,
    "min2": 13,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Ямбол",
    "max": 29,
    "min": 9,
    "image": "img_1/Yambol.jpg",
    "icon": "icons/2.gif",
    "max2": 29,
    "min2": 10,
    "icon2": "icons/2.gif",
      "category": "province"
  },
 
 
  {
    "name": "Кърджали",
    "max": 28,
    "min": 9,
    "image": "img_1/vdigat-visokotehnologichen-zavod-v-kyrdjali-470056.jpg",
    "icon": "icons/3.gif",
    "max2": 29,
    "min2": 12,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Смолян",
    "max": 23,
    "min": 7,
    "image": "img_1/3.jpg",
    "icon": "icons/5.gif",
    "max2": 23,
    "min2": 8,
    "icon2": "icons/5.gif",
      "category": "province"
  },
  
  {
    "name": "Ивайло",
    "max": 30,
    "min": 9,
    "image": "img_1/pz.jpg",
    "icon": "icons/2.gif",
    "max2": 29,
    "min2": 11,
    "icon2": "icons/2.gif",
      "category": "province"
  },
  {
    "name": "Сандански",
    "max": 30,
    "min": 12,
    "image": "img_1/download.jpg",
    "icon": "icons/3.gif",
    "max2": 31,
    "min2": 13,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Благоевград",
    "max": 28,
    "min": 8,
    "image": "img_1/Blagoevgrad.Downtown-1024x768.jpg",
    "icon": "icons/3.gif",
    "max2": 28,
    "min2": 10,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Кюстендил",
    "max": 27,
    "min": 8,
    "image": "img_1/DSC_0241.JPG",
    "icon": "icons/3.gif",
    "max2": 27,
    "min2": 10,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  
  {
    "name": "Враца",
    "max": 27,
    "min": 12,
    "image": "img_1/Vratsa.jpg",
    "icon": "icons/3.gif",
    "max2": 28,
    "min2": 15,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Монтана",
    "max": 30,
    "min": 12,
    "image": "img_1/Montana-Bulgaria-fountains.jpg",
    "icon": "icons/3.gif",
    "max2": 31,
    "min2": 15,
    "icon2": "icons/3.gif",
      "category": "province"
  }, 
  {
    "name": "Видин",
    "max": 30,
    "min": 10,
    "image": "img_1/130_grad_vidin.jpg",
    "icon": "icons/2.gif",
    "max2": 30,
    "min2": 10,
    "icon2": "icons/3.gif",
      "category": "province"
  },
 
  {
    "name": "Ловеч",
    "max": 29,
    "min": 12,
    "image": "img_1/lovech-1.jpg",
    "icon": "icons/3.gif",
    "max2": 29,
    "min2": 13,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Велико Търново",
    "max": 29,
    "min": 11,
    "image": "img_1/veliko-tarnovo-cover.jpg",
    "icon": "icons/3.gif",
    "max2": 30,
    "min2": 12,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  
  {
    "name": "Разград",
    "max": 27,
    "min": 12,
    "image": "img_1/rrz.jpg",
    "icon": "icons/3.gif",
    "max2": 28,
    "min2": 14,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Шумен",
    "max": 27,
    "min": 8,
    "image": "img_1/shumen-pametnik-414733-810x0.jpg",
    "icon": "icons/5.gif",
    "max2": 29,
    "min2": 8,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Добрич",
    "max": 27,
    "min": 7,
    "image": "img_1/dobrich.JPG",
    "icon": "icons/5.gif",
    "max2": 29,
    "min2": 9,
    "icon2": "icons/3.gif",
      "category": "province"
  },
  {
    "name": "Силистра",
    "max": 27,
    "min": 15,
    "image": "img_1/silistra.jpg",
    "icon": "icons/3.gif",
    "max2": 28,
    "min2": 16,
    "icon2": "icons/3.gif",
      "category": "province"
  }
    
];
   
    
//    var container = $("#city-container");
//    
//    $.getJSON("db/city.json", callback);
//    
//    function callback(data){
//        var cities = data;
//        cities.forEach(function(city){
//            container.append(toHtml(city));
//        });
//    }
//    
      function toHtml(city) {
        return `  
                <div class="city card mr-4 styleCard" style="width: 15rem;">
                <h5 class="card-title text-center">${city.name}</h5>
                <img class="img-container" src="${city.image}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">Макс. Температура: <span>${city.max}&deg;C</span> </p>
                    <p class="card-text">Мин. Температура: <span>${city.min}&deg;C</span></p>
                    <div class="container text-center"><img src="${city.icon}" alt="Sunny"></div>
                </div>
                `;
    }

    $("#category-filter a").on("click", function(event){
        event.preventDefault();
        
        var currLink = event.target;
        var category = currLink.getAttribute("data-category");
        
        var filterCity = filterByCity(cities, category);
            displayCities(filterCity);
        $("#article").hide();
        $("#todayHeading").show();
    });
    
     $("#clickArticle").click(function(){
       $("#article").show(); 
         $("#todayHeading").hide();
       });
   
    
    displayCities(cities);
    
    function filterByCity(citiesList, category){
        var filtered = citiesList.filter(function(city){
            return city.category === category || city.category2 === category || category === "all";
        });
        return filtered;
    }
    
    function displayCities(citiesList){
        var container = $("#city-container");
        container.empty();
        citiesList.forEach(function(city){
            var html = toHtml(city);
            $("#city-container").append(html);
        });
    }
    
    
})();