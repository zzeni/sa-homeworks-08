var input = $('#input'); 
var man = $('#man');
var wordDisplay = $('#wordDisplay');
var gameState = $('#gameState');
var keyboard = $('#keyboard'); 

var guesses = 0; 
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'x', 'z'];
var wordlist = ["wisper", "yodel", "whisky", "popcorn", "shogun", "easter", "brackets", "bluebird", "dynamic"];

var hangmanArt =
    [
        [" | \n"],
        ["(_)\n"],
        ["\\|/\n"],
        [" | \n"],
        ["/ \\\n"]
    ];



function createWord(phrase) {
  word = [];
  for (var i = 0; i < phrase.length; i++) {
    word.push([phrase[i], false])
  }
}

function createKeyboard(alphabet) {

  for (var i = 0; i < alphabet.length; i++) {
    var letter = alphabet[i];
    var key = $("<button type='button'></button>").addClass('key');
    key.html(letter);
    keyboard.append(key);
    if (i % 9 === 8) {
      keyboard.append("<br>");
    }
  }

  keyboard.click(function (e) {
    if (e.target.id != "keyboard") {
      var $target = $(e.target);
      $($target).attr("disabled", "disabled");
      $($target).css("background-color", "red");
      var targetLetter = $target.text(); 
      guess(targetLetter);
    } else {
      e.preventDefault();
    }
  });
}


function guess(letter) {
  letterFound = false;
  console.log(letter);
  for (var i = 0; i < word.length; i++) { 
    if (word[i][0] === letter) {
      letterFound = true;
      word[i][1] = true;
    }
  }

  if (!letterFound) { 
    guesses++;
  }
  drawMan();
  drawWord();
  if (guesses > hangmanArt.length) {
    document.write("<h1>game over</h1><br><br><button type='button' onclick='window.location.reload()'>Restart game </button>");
  } else if (isSolved()) {
    gameState.html("<h1>you win</h1><button type='button' onclick='window.location.reload()'>Restart game</button>");
  }

}

function drawMan() {
  var hangmanstate = "";
  for (var i = 0; i < guesses; i++) {
    hangmanstate += hangmanArt[i];
  }

  hangman = "<pre>" + hangmanstate + "</pre>";
  man.html(hangman);
}

function drawWord() { // display on screen
  wordDisplay.html(makeWordString());
}

function isSolved() {
  for (var i = 0; i < word.length; i++) {
    if (word[i][1] === false) {
      return false;
    }
  }
  return true;
}

function makeWordString() { // iterate word object, show letter if true, dash if false.
  var wordString = "";
  for (var i = 0; i < word.length; i++) {
    if (word[i][1]) {
      wordString = wordString + word[i][0];
    } else {
      wordString = wordString + "_";
    }
  }
  return wordString;
}

// Main
createKeyboard(alphabet);
createWord(wordlist[Math.floor(Math.random() * wordlist.length)]);
drawMan();
drawWord();
