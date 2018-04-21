/*jslint jquery: true*/
(function () {
  "use strict";

  // задача 1 (4т.)
  // Сортирайте следния списък от числа във възходящ ред:
  var arr = [2, 5, 8, 4, 1, 12];

  function sort(arr) {
    arr.sort(function (a, b) {
      return a - b;
    });
    return arr;
  }
  console.log(sort(arr));
  //...

  // задача 2 (4т.)
  // Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
  var text = "The quick brown fox jumps over the lazy dog";

  function takeWords(text) {
    var array = [];
    text = text.split(' ');
    text.forEach(function (word) {
      if (word.length > 4) {
        array.push(word);
      }
    });
    return array;
  }
  console.log(takeWords(text));
  // ...

  // задача 3 (5т.)
  // Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`

  window.setInterval(addPara, 1000);


  function addPara() {
    var paragraph = $('<p>repetition is fun</p>');
    $('#container').append(paragraph);
  }
  // ...

  // задача 4 (6т.)
  // Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)
  function rotateImg() {
    $('img').css({
      'transition': 'all 1s ease-in-out',
      "transform": "rotateY(360deg)"
    });
  }

  window.setTimeout(rotateImg, 2000);

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

  function sortItems(items) {
    items.sort(function (a, b) {
      return a.price - b.price;
    });
    return console.log(items);
  }
  sortItems(items);
  // ...
})();
