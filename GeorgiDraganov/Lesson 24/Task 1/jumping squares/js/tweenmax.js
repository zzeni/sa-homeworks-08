/*jslint esnext: true*/
/*jslint jquery: true*/
/*jslint tween: true*/
(function () {
  'use strict';
  var i = 0;
  var square = $('.square');
  var h1 = $('h1');
  var red = $('#red');
  var blue = $('#blue');
  var green = $('#green');
  var yellow = $('#yellow');

  function animateSquare() {
    TweenMax.to(square, 1, {
      'opacity': '0.75',
      'border-radius': '50%',
      'transform': 'scale(2)'
    });
    TweenMax.to(h1, 1, {

      'color': "pink",
      'fontSize': '20',
      onStart: onStart,
      onUpdate: unUpdate,
      onComplete: onComplete
    });
    TweenMax.to(square, 0.5, {
      'opacity': '1',
      'border-radius': '0%',
      'transform': 'scale(1)',
      'delay': '1.5',

    });
    TweenMax.to(h1, 1.5, {

      'color': "black",
      'fontSize': '80',
      'delay': '1.5',

    });
  }


  function allfromTo() {
    TweenMax.from(red, 0.3, {
      x: -1050,
      y: 900,
      autoAlpha: 1,
      ease: Power3.easeInOut,
      delay: 0.3
    });
    TweenMax.from(green, 0.6, {
      x: 1050,
      y: -900,
      autoAlpha: 1,
      ease: Power3.easeInOut,
      delay: 0.6
    });
    TweenMax.from(yellow, 0.9, {
      x: -1050,
      y: -900,
      autoAlpha: 1,
      ease: Power3.easeInOut,
      delay: 0.9
    });
    TweenMax.from(blue, 1.2, {
      x: 1050,
      y: 900,
      autoAlpha: 1,
      ease: Power3.easeInOut,
      delay: 1.2
    });
  }

  function onStart() {
    square.text(i++);

  }

  function unUpdate() {

    h1.text('Подксачащи квадрати');

  }

  function onComplete() {
    h1.text(i++);
    square.text(i++);
    h1.text('Подксачащи квадрати');


  }
  window.setInterval(allfromTo, 3000);
  window.onload = function () {
    window.setInterval(animateSquare, 3000);
  };

})();