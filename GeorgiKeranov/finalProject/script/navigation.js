/* jslint jquery: true */
/* jslint esnext: true */

(function (){
    "use strict";
    $("#main-nav a").on("click", function(event){
        event.preventDefault();
        
        var targetSelector = this.getAttribute("data-target");
        
        $("main").children().hide();
        $(targetSelector).show();
    });
    
//    $("#cardnavigation a").on("click", function(event){
//        event.preventDefault();
//        
////        $(this).tab("show");
//        
//        var targetSelector = this.getAttribute("data-target");
//        $("#wow").children().hide();
//        $(targetSelector).show();
//    });
    
    $('[data-target="#main-page"]').click();
    $("#tomorrow").load("templates/_tomorrow.html");
    $("#wind").load("templates/_wind.html");
    $("#nextdays").load("templates/_nextdays.html");
    $("#about").load("templates/_about.html");
  
})();