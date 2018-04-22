/* jslint esnext: true */
/* jslint browser: true */
"use strict"

// задача 1 (4т.)
// Сортирайте следния списък от числа във възходящ ред:
var arr = [2, 5, 8, 4, 1, 12];

function sort(array){
  return array.sort(function (a, b){
    if(a > b){
      return 1;
    }
    if(a < b){
      return -1;
    }
    return 0;
  });
}

console.log(sort(arr));

// задача 2 (4т.)
// Напишете функция, която да изважда всички думи, с дължина над 4 символа от следния текст:
var text = "The quick brown fox jumps over the lazy dog";

function filterWords(str){
  var result = "";
  var words = str.split(" ");
  return result = words.filter(word => word.length > 4); 
}

console.log(filterWords(text));

// задача 3 (5т.)
// Напишете код, който на всяка секунда закача към `#container` елемента следния html елемент: `<p>repetition is fun</p>`

var container = document.querySelector("#container");
var paragraph = document.createElement("p");
var text = paragraph.innerHTML = "repetition is fun";
window.setInterval(appendSomething, 1000);

function appendSomething(){
    container.appendChild(text);
}

// задача 4 (6т.)
// Направете така, че 2 секунди след зареждането на дадена страница, всички картинки в нея да се завъртят по вертикалната си ос (по Y)

var image = document.querySelector("ul li");
window.setTimeout(reverseImage, 2000);

function reverseImage(){
    image.transform
}

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

function sort(list){
  return list.sort(function (a, b){
    if(a.price > b.price){
      return 1;
    }
    if(a.price < b.price){
      return -1;
    }
    return 0;
  });
}

console.log(sort(items));
