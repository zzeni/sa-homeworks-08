"use strict"

// задача 1 (4т.)
// Сортирайте следния списък от числа във възходящ ред:
var arr = [2, 5, 8, 4, 1, 12];

function compare(a, b) {
 if (a > b) { return 1; }
 if (a < b) { return -1; }
 return 0;
}

console.log(arr.sort(compare));

//...

// задача 2 (4т.)
// Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
var text = "The quick brown fox jumps over the lazy dog";
var strToArray = text.split(" ");
var resoult = strToArray.filter(strToArray => strToArray.length > 4);

console.log(resoult);

// ...

// задача 3 (5т.)
// Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`

function myFunction() {
    setInterval(function(){ 
    var para = document.createElement("p");
    var node = document.createTextNode("repetition is fun");
    para.appendChild(node);
    var element = document.getElementById("container");
    element.appendChild(para); }, 1000);
}

myFunction()

// ...

// задача 4 (6т.)
// Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)

function imgRotate() {
    setInterval(function(){ 
    var img = document.getElementsByTagName("img");
    img.style.transform = "rotateY(180deg)";;
    }, 2000);
}

imgRotate()

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

function compare(a, b) {
 if (a.price > b.price) { return 1; }
 if (a.price < b.price) { return -1; }
 return 0;
}

console.log(items.sort(compare));

// ...
