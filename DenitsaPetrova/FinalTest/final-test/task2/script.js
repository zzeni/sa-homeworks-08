/* jslint esnext: true */
/* global $, window */

(function () {
  "use strict";

  // задача 1 (4т.)
  // Сортирайте следния списък от числа във възходящ ред:
  var arr = [2, 5, 8, 4, 1, 12];
  arr.sort(function (a, b) {
    return a > b ? 1 : -1;
  });
  console.log(arr);

  //...

  // задача 2 (4т.)
  // Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
  var text = "The quick brown fox jumps over the lazy dog";
  var textToFilter = text.split(" ");
  textToFilter.filter(function (word) {
    if (word.length > 4) {
      console.log(word);
    }
  });
  // ...

  // задача 3 (5т.)
  // Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`
  window.setInterval(function () {
    $("#container").append("<p>repetition is fun</p>");
  }, 1000);

  // ...

  // задача 4 (6т.)
  // Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)
  window.setTimeout(function () {
    $("img").css({
      "transform": "rotate(+180deg)",
    });
  }, 2000);
  // ...

  // задача 5 (6т.)
  // Напишете функция, която да сортира следния списък от обекти по полето `price`:
  var items = [
    {
      id: 1,
      title: "Item 1",
      price: 4.3
  },
    {
      id: 2,
      title: "Item 2",
      price: 2.0
  },
    {
      id: 3,
      title: "Item 3",
      price: 6.5
  },
    {
      id: 4,
      title: "Item 4",
      price: 1.5
  }
];

  function sortByPrice(list) {
    list.sort(function (a, b) {
      return a.price > b.price ? 1 : -1;
    });
    console.log(list);
  }
  sortByPrice(items);

})(); // ...
