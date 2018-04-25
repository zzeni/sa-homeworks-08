/* jslint esnext: true */
/* jslint jquery: true */
/* jslint browser: true */
(function () {
    "use strict";

//    var rectangle = document.getElementById("rectangle");
    var square = document.getElementById("square");
    var currentPositionX = 0;
    var currentPositionY = 0;
//    var width = rectangle.style.width - square.style.width;
//    var height = rectangle.style.height - square.style.height;

    function moveSquare(event) {
        if (event.keyCode == 37) {
            if (currentPositionX > 0) {
                currentPositionX -= 40;
                square.style.left = currentPositionX + 'px';
            }
        }
        if (event.keyCode == 38) {
            if (currentPositionY > 0) {
                currentPositionY -= 40;
                square.style.top = currentPositionY + 'px';
            }
        }
        if (event.keyCode == 39) {
            if (currentPositionX < 320) {
                currentPositionX += 40;
                square.style.left = currentPositionX + 'px';
            }
        }
        if (event.keyCode == 40) {
            if (currentPositionY < 200) {
                currentPositionY += 40;
                square.style.top = currentPositionY + 'px';
            }
        }
    }
    document.onkeydown = moveSquare;

})();
