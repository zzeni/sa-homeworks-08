/* jslint esnext: true */
/* jslint jquery: true */
/* jslint jquery: true */
(function(){
    "use strict";
    $("#main-nav a").on("click", function(event){
        event.preventDefault();
        
           var targetSelector = this.getAttribute("data-target");
        
        $("main").children().hide();
        $(targetSelector).show();
    });
    $("#kidModal").on("click", function(event){
        event.preventDefault();
        var targetSelector = this.getAttribute("data-target");
        $("main").children().hide();
        $(targetSelector).show();
    });
    
     $('[data-target="#main-page"]').click();
     $("#about").load("html/_about.html");
     $("#contact").load("html/_contact.html");
     $("#kidModal").load("html/_kid-modal.html");
    
})();