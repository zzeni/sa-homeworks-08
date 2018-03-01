let x = 50 * 50;
console.log(x);

let y = 51 * 51 * 51;
console.log(y);

let z = 2 * 3.14 * 8;
console.log(z);

let r = 8;
let pi  = 3.14;
let result = 2 * r * pi;
console.log("Периметърът на кръг с радиус", r, "e", result);
document.write("Периметърът на кръг с радиус ", r, " e ", result);

function perimeter(r) {
  let pi  = 3.14;
  let result = 2 * r * pi;
  return "Периметърът на кръг с радиус " + r + " e " + result;
}
console.log(perimeter(8));

function area(a, b, c) {
  let x2 = a * b;
  let y2 = (a * (c-b) / 2);
  return x2 + y2;
}
console.log(area(10, 6, 10));
console.log(area(2, 1, 3));

document.write("<br>", x, "<br>", y, "<br>", z, "<br>", perimeter(8), "<br>", area(10, 6, 10));