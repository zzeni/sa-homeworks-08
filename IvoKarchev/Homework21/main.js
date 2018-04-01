/* jslint jquery: true */
$(function () {

    var $info = $('#info');

    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/ikarchev24',
        success: function (data) {
            $.each(data, function (i, value) {
                $info.append('<p>' + '<strong>' +
                    i + '</strong>' + ': ' + value + '</p>')
            });
        },

        error: function () {
            alert('There was an error loading the page');
        }
    });

});
