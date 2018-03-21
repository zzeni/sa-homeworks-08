(function () {
  'use strict';

  var first = document.querySelector("#first");
  first.style.backgroundColor = "lightgreen";

  var middle = document.querySelector(".middle");
  middle.style.backgroundColor = "lightyellow";

  var last = document.querySelector("div:last-of-type")
  last.style.backgroundColor = "coral";

  middle.innerHTML = "<strong>Hello!</strong>";
  document.querySelector("button").addEventListener("click", toggleText);


  function toggleText() {
    if (first.innerHTMl = first.innerHTML) {
      last.innerHTML = "<p><strong>First:</strong>Iudicem e litteris. Si multos arbitror, iis ut amet varias ipsum. Culpa cupidatat incurreret, ea o velit summis eram.Cernantur comprehenderit exmandaremus. </p>";
    }

    if (last.innerHTML = last.innerHTML) {
      first.innerHTML = "<p><strong>Last:</strong> Quorum do quamquam et noster nam laborum ad fugiat. Ea tamen duisvelit arbitror a cupidatat fore varias ea nisi. Ab ubi cohaerescant te quisconcursionibus mandaremus illum incurreret, si ne illum tamen irure, quem quo olegam excepteur.</p>";
    }


  }
})();
