function display(text) {
  var output = document.createElement("pre");
  output.textContent = text;
  document.body.appendChild(output);
}

/* TASK 1 */
function task1() {
  display("\n TASK 1");
  var a = 25 * 10 + 100;

  display(a);

  var b = a + 5 + 2;

  display(b);

  var text = "Hello!";

  display(text);

  display("ivan" > "ivon");

  var name = "Pesho";

  display("Hello," + name);

  display("50 na kwadrat e:" + Math.pow(50, 2));

  display("51 na treta stepen e:" + Math.pow(51, 3));

  display("Perimetura na kryg s radius = 8 e : " + 2 * Math.PI * 8);

  var P = 2 * Math.PI * 8;

  P = P.toFixed(2);

  display("P = " + P);

  var pi = 3.14;

  var r = 8;

  var result = 2 * r * pi;

  /*display("Параметъраа на кръг с радиус ", r, " е : ", result);*/

  display("Параметъраа на кръг с радиус " + r + " е : " + result);

  function FindArea(a, b, c) {
    var result;
    result = a + b + c;
    return result;
  }

  display("Периметър на триегълник е : " + FindArea(3, 4, 5));

  function Sqrt(a) {
    return a * a;
  }

  display("Квадрата на 16 е:" + Sqrt(16));

  function area(a, b, c) {
    var result, p, t;
    p = (a * b);
    t = (a * (c - b)) / 2;
    result = p + t;
    return result;
  }

  display("Площ - " + area(10, 6, 10));
  display("Площ - " + area(2, 1, 3));
  display("Площ - " + area(10, 6, 10));
  display("!!! END \n");
}

/* TASK 2 */

function task2() {
  display("\n TASK 2");

  function circle(radius) {
    var result;
    result = Math.PI * Math.pow(radius, 2);
    result = Math.round(result);
    return result;
  }

  display("Площ на кръг с радиус 2 : " + circle(5)); // => 79
  display("!!! END \n");
}

/* TASK 3 */

function task3() {
  display("\n TASK 3");

  function RGB(a, b, c) {
    a = a.toString(16);
    b = b.toString(16);
    c = c.toString(16);

    display("#" + a + b + c);
  }

  RGB(255, 192, 203);
  display("!!! END \n");
}
