/* jshint browser: true */
function display(text) {
  var output = document.createElement("pre");
  output.textContent = text;
  document.body.appendChild(output);
}

function basicMath() {
  var result = 50 * 50;
  return result;
}
display("1) The result is: " + basicMath(50));

function basicMath1() {
  var result = 51 * 51 * 51;
  return result;
}
display("2) The result is: " + basicMath1(51));

function perimeter(r) {
  var result;
  result = 2 * Math.PI * r;
  return Math.round(result);
}

display("3) The result is: " + perimeter(8));

function varPiR(r) {
  var pi = Math.PI;
  var result = 2 * pi * r;
  console.log("Периметърът на кръг с радиус " + r + " е: " + result);
  return Math.round(result);
}
display("4 and 5) The result is: " + varPiR(8));

function area(a, b, c) {
  var result;
  return result = (a * b) + (a * (c - b) / 2);
}
display("Homework) The result is: " + area(10, 6, 10));

function changeRange() {
  var r = parseInt(document.getElementById("r").value);
  var g = parseInt(document.getElementById("g").value);
  var b = parseInt(document.getElementById("b").value);
  var color = "#" + hex(r) + hex(g) + hex(b);
  document.body.style.backgroundColor = color;
  document.getElementById("hex-label").innerText = color;
  document.getElementById("r-label").innerText = r;
  document.getElementById("g-label").innerText = g;
  document.getElementById("b-label").innerText = b;
  if (r < 100 && g < 100 && b < 100) {
    document.getElementById("container").style.color = "white";
  } else {
    document.getElementById("container").style.color = "black";
  }
}
var hex = function (v) {
  var hex = v.toString(16);
  if (v < 16) {
    hex = "0" + hex;
  }
  return hex;
};
