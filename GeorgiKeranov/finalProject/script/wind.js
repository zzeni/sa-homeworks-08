/* jslint esnext: true */
/* jslint jquery: true */
(function (){
    "use strict";
    
    var container = $("div.kaliakra");
    
    $.getJSON('db/wind.json', function(data){
        var values = data;
        values.forEach(function(value){
            container.append(toHtml(value));
        });
    });
    
    
    function toHtml(value){
        return `
               <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Hour</th>
                  <th scope="col">Speed at 24.04</th>
                  <th scope="col">Speed at 25.04</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">00h</th>
                  <td>${value.value1} m/s</td>
                  <td>${value.value25} m/s</td>
                </tr>
                <tr>
                  <th scope="row">01h</th>
                  <td>${value.value2} m/s</td>
                  <td>${value.value26} m/s</td>
                </tr>
                <tr>
                  <th scope="row">02h</th>
                  <td>${value.value3} m/s</td>
                  <td>${value.value27} m/s</td>
                </tr>
                <tr>
                  <th scope="row">03h</th>
                  <td>${value.value4} m/s</td>
                  <td>${value.value28} m/s</td>
                </tr>
                <tr>
                  <th scope="row">04h</th>
                  <td>${value.value5} m/s</td>
                  <td>${value.value29} m/s</td>
                </tr>
                <tr>
                  <th scope="row">05h</th>
                  <td>${value.value6} m/s</td>
                  <td>${value.value30} m/s</td>
                </tr>
                <tr>
                  <th scope="row">06h</th>
                  <td>${value.value7} m/s</td>
                  <td>${value.value31} m/s</td>
                </tr>
                <tr>
                  <th scope="row">07h</th>
                  <td>${value.value8} m/s</td>
                  <td>${value.value32} m/s</td>
                </tr>
                <tr>
                  <th scope="row">08h</th>
                  <td>${value.value9} m/s</td>
                  <td>${value.value33} m/s</td>
                </tr>
                <tr>
                  <th scope="row">09h</th>
                  <td>${value.value10} m/s</td>
                  <td>${value.value34} m/s</td>
                </tr>
                <tr>
                  <th scope="row">10h</th>
                  <td>${value.value11} m/s</td>
                  <td>${value.value35} m/s</td>
                </tr>
                <tr>
                  <th scope="row">11h</th>
                  <td>${value.value12} m/s</td>
                  <td>${value.value36} m/s</td>
                </tr>
                <tr>
                  <th scope="row">12h</th>
                  <td>${value.value13} m/s</td>
                  <td>${value.value37} m/s</td>
                </tr><tr>
                  <th scope="row">13h</th>
                  <td>${value.value14} m/s</td>
                  <td>${value.value38} m/s</td>
                </tr>
                <tr>
                  <th scope="row">14h</th>
                  <td>${value.value15} m/s</td>
                  <td>${value.value39} m/s</td>
                </tr>
                <tr>
                  <th scope="row">15h</th>
                  <td>${value.value16} m/s</td>
                  <td>${value.value40} m/s</td>
                </tr>
                <tr>
                  <th scope="row">16h</th>
                  <td>${value.value17} m/s</td>
                  <td>${value.value41} m/s</td>
                </tr>
                <tr>
                  <th scope="row">17h</th>
                  <td>${value.value18} m/s</td>
                  <td>${value.value42} m/s</td>
                </tr>
                <tr>
                  <th scope="row">18h</th>
                  <td>${value.value19} m/s</td>
                  <td>${value.value43} m/s</td>
                </tr>
                <tr>
                  <th scope="row">19h</th>
                  <td>${value.value20} m/s</td>
                  <td>${value.value44} m/s</td>
                </tr>
                <tr>
                  <th scope="row">20h</th>
                  <td>${value.value21} m/s</td>
                  <td>${value.value45} m/s</td>
                </tr>
                <tr>
                  <th scope="row">21h</th>
                  <td>${value.value22} m/s</td>
                  <td>${value.value46} m/s</td>
                </tr>
                <tr>
                  <th scope="row">22h</th>
                  <td>${value.value23} m/s</td>
                  <td>${value.value47} m/s</td>
                </tr>
                <tr>
                  <th scope="row">23h</th>
                  <td>${value.value24} m/s</td>
                  <td>${value.value48} m/s</td>
                </tr>
              </tbody>
            </table>
                `;      
    }
    
})();