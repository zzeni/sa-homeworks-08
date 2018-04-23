"use strict"

// задача 1 (4т.)
// Сортирайте следния списък от числа във възходящ ред:
var arr = [2, 5, 8, 4, 1, 12];

var sortArr = function (arr) {
    var result = arr.sort(function (a, b) { return a - b });
    return result;
};

// задача 2 (4т.)
// Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
var text = "The quick brown fox jumps over the lazy dog";

var textRemove = function (text) {
    var words = text.split(" ");

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 4) {
            text = text.replace(words[i], "");
        }
    }

    text = text.replace(/\s+/g, " ").trim();
    return text;
};

// задача 3 (5т.)
// Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`
var appendFunction = function () {
    window.setInterval(function () {
        document.getElementById("container").innerHTML += "<p>repetition is fun</p>";
    }, 1000);
};

// задача 4 (6т.)
// Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)

var loadedHandler = function () {
    setTimeout(function () {
        var images = document.getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
            images[i].style.transform = "rotate(-360deg)";
            images[i].style.transitionDuration = "2s";
        }
    }, 2000);
};

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

var sortItems = function (items) {
    var result = items.sort(function (a, b) { return a.price - b.price });
    return result;
};
