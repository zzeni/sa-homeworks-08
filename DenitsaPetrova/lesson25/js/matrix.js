/* jslint esnext: true */
/* global $ */

(function () {

  var matrix = [
  [2, 4, 5, 7],
  [3, 14, 2, 4],
  [8, 7, 15, 1],
  [3, 2, 0, 9]
];

  function diagonals(matrix) {
    var left = 0,
      right = 0;
    for (let i = 0; i < matrix.length; i++) {
      left += matrix[i][i];
      right += matrix[i][matrix.length - i - 1];
    }
    return "Left diagonal - " + left +
      "<br> Right diagonal - " + right +
      "<br> Sum of diagonals - " + (right + left);
  }

  $("#matrix").append(diagonals(matrix));
})();