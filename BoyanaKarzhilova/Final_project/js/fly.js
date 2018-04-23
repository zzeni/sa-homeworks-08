/* jslint esnext:true */
/* jslint jquery:true */
/* jslint browser:true */

var timer = 0;

function fly(el) {
    var block = el;
    var block_top = block.offset().top;
    var block_height = block.height();
    var window_top = $(this).scrollTop();
    var window_height = $(this).height();
    var view_port_s = window_top;
    var view_port_e = window_top + window_height;


    if (block_top < view_port_e) {
        timer = setTimeout(function () {
            block.addClass('show-block');
        }, 50);
    } else {
        timer = setTimeout(function () {
            block.removeClass('show-block');
        }, 50);
    }
}

function recheck() {

    if (timer) {
        clearTimeout(timer);
    }

    $('.fly-left').each(function () {
        fly($(this));
    });


    $('.fly-right').each(function () {
        fly($(this));
    });
}

$(function () {
    $(window).scroll(function () {

        recheck();
    });
    recheck();
});
