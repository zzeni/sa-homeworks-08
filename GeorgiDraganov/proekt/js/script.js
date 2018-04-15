/*jslint jquery: true*/
/*jslint esnext: true*/
(function () {
  'use strict';


  // json team
  var container = $('div.teamHtml');

  function teamToHTML(team) {
    return ` <div class="col-9 col-sm-6 col-lg-4 mx-auto my-4">
          <div class="card">
            <img src="img/${team.photoID}.jpeg" alt="" class="card-img-top">
            <div class="card-body">
              <div class="card-title">
                <h1 class="text-capitalize">team member</h1>
              </div>
              <h3 class="primary-color text-capitalize">${team.job}</h3>
              <h6 class="primary-color text-uppercase">
        ${team.description}</h6>
            </div>
            <div class="card-footer team-icons d-flex justify-content-between">
              <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
              <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
              <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
              <a href="#"><i class="fab fa-yelp fa-2x"></i></a>
            </div>
          </div>
        </div>`;
  }
  $.getJSON('db/team.json', callback);

  function callback(data) {
    var team = data;
    team.forEach(function (team) {
      container.append(teamToHTML(team));
    });
  }




  //toggler button
  $('.navbar-toggler').on('click', function () {
    $('.navbar-toggler').toggleClass('change');
  });





  //navbar
  $(window).on('scroll', function () {
    let position = $(this).scrollTop();
    if (position >= 925) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  });





  //scroll
  $('.nav-item a, .header-link, #back-to-top').on('click', function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 26
    }, 3000);
  });



  //back to top
  $(window).on('scroll', function () {
    let position = $(this).scrollTop();

    if (position >= 1050) {
      $('#back-to-top').addClass('scrollTop');

    } else {
      $('#back-to-top').removeClass('scrollTop');
    }
  });


  //ripples script
  $('#header, .info').ripples({
    dropRadius: 10,
    perturbance: 0.006,
  });



  //magnific popup
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
})();
