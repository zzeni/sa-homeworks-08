/* jslint jquery: true */

(function () {
  "use strict";

  $('#main-nav a').on('click', function (event) {
    event.preventDefault();

    var targetSelector = this.getAttribute('data-target');

    $('#main-nav .nav-item').removeClass('active');
    $(this).parent().addClass('active');


    $('main').children().hide();
    $(targetSelector).show();

  });

  $('[data-target="#home"]').click();

  $('#about-page').load('templates/_about.html');
  $('#contact-page').load('templates/_contact.html');
  $('#log-page').load('templates/_log.html');
})();
