/* jslint jquery: true */
/* jslint esnext: true */
(function () {
    "use strict";

    var container = $("div.sth");
    var url = 'profile.json';
    var profile;

    function success(data) {
        profile = data;

        var dataToHTML = `
        <div class="card sth" style="width: 18rem;">
            <h5 class="card-title text-center">${profile.login}</h5>
          <img class="card-img-top" src="${profile.avatar_url}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">My name is: ${profile.name}</p>
            <p class="card-text">Location: ${profile.location}</p>
            <p class="card-text">Profile is created at: ${profile.created_at}</p>
            <p class="card-text">Last update is at: ${profile.updated_at}</p>
            <a href="https://github.com/georgikeranov97" class="btn btn-primary" target="blank">My profile</a>
      </div>
    </div>
        `;
        container.html(dataToHTML);
    }

    function error() {
        container.text("Sorry, something went wrong");
    }

    $.getJSON(url, success, error);

    console.log("profile", profile);


})();
