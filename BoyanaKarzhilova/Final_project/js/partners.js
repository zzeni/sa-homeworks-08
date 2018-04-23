/* jslint esnext:true */
/* jslint jquery:true */
/* jslint browser:true */

(function () {
    "use strict";

    function Partner(obj) {
        for (var prop in obj) {
            this[prop] = obj[prop];
        }
    }

    var partnersJson = [];

    $.getJSON("./partners.json", function (data) {
        partnersJson = data;
        displayPartners(partnersJson);
    });

    function displayPartners(list) {
        var collection = $("#partners");
        collection.empty();

        list.forEach(function (partnerJson) {
            var partner = new Partner(partnerJson);
            var html = partnersToHtml(partner);
            collection.append(html);
        });
    }

    function partnersToHtml(partner) {
        return `<h4 class="mt-5 text-center">${partner.name}</h4>
<div class="d-md">
<p class="fly-right post-meta text-center m-0">Recruited by us: ${partner.hired}</p>
<p class="fly-right post-meta text-center m-0">Team in Bulgaria: ${partner.team}</p>
</div>`;
    }

})();
