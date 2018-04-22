"use strict"

// задача 1 (4т.)
// Сортирайте следния списък от числа във възходящ ред:
var arr = [2, 5, 8, 4, 1, 12];

function ascendingOrder(arr) {
    var sorted = arr.sort(function (a, b) {
        return a - b;
    });
    return sorted;
}

ascendingOrder(arr);

//...

// задача 2 (4т.)
// Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
var text = "The quick brown fox jumps over the lazy dog";

function sortText(text) {
    var sortedWords = text.split(" ");
    for (let i = 0; i < sortedWords.length; i++) {
        if (sortedWords[i].length > 4) {
            console.log(sortedWords[i]);
        }
    }
}
// ...

// задача 3 (5т.)
// Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`

window.setInterval(function () {
    var p = document.createElement("p");
    p.textContent = "repetition is fun";
    document.getElementById("container").appendChild(p);
}, 3000);

// ...

// задача 4 (6т.)
// Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)

setTimeout(function () {
    var images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].style.transform = "rotateY(360deg)";
        images[i].style.transition = "1s";
    }
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


function compare(a, b) {
    if (a.price < b.price) {
        return -1;
    } else if (a.price > b.price) {
        return 1;
    }
    return 0;
}

items.sort(compare);

// ...
