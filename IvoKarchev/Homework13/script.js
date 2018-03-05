var output = document.createElement("pre");
output.textContent = document.write("50 на квадрат е: ", (50 * 50));
document.body.appendChild(output);

var output = document.createElement("pre");
output.textContent = document.write("51 на трета степен е: ", (Math.pow(51, 3)));
document.body.appendChild(output);

var output = document.createElement("pre");
output.textContent = document.write("Периметърът на кръг с радиус 8 е: ", (2 * Math.PI * 8) + " used Math.PI"); // 2 * p * r
document.body.appendChild(output);

var pi = 3.14;
var r = 8;
var result = 2 * pi * r;

var output = document.createElement("pre");
output.textContent = document.write("Периметърът на кръг с радиус " + r + " е: ", (result));
document.body.appendChild(output);

var output = document.createElement("pre");
output.textContent = document.write("Площта на петоъгълник със стойности 2, 1, 3 е: " + area(2, 1, 3) + " <strong> Called function area(); in script.js file </strong>");
document.body.appendChild(output);

function area(a, b, c) {
    var result = a * (c - b) / 2;
    return result + a * b;
}

var output = document.createElement("pre");
output.textContent = document.write("Площта на петоъгълник със стойности 10, 6, 10 е: " + area(10, 6, 10) + " <strong> function area(); with different parameters </strong>");
document.body.appendChild(output);
