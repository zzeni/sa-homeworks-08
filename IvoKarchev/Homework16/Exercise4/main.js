function display(html){
	var div = document.createElement('div');
	div.innerHTML = html;
	document.body.appendChild(div);
}

function Hero(name, knownAs) {
    this.name = name;
    this.nickname = knownAs || name;
    this.alive = true;
  }
  
  Hero.prototype.kickAss = function (enemy)  {
    if (!(enemy instanceof BadGuy)) {
      throw new Error("ma toi e dobar ma!");
    }
    
    enemy.die();
    
    display((this.nickname + " just kicked " + enemy.nickname +"\'s ass"));
    
    this.saveWorld();
  };
  
  Hero.prototype.saveWorld = function () {
    // actions to save the world
   display(("<p>Once again " + this.nickname + " saved the world!</p>"));
  };    
  
  function BadGuy(name, knownAs) {
    this.name = name;
    this.nickname = knownAs || name;
    this.alive = true;
  }
  
  BadGuy.prototype.isAlive = function () {
    return this.alive;
  };
  
  BadGuy.prototype.isDead = function () {
    return !this.alive;
  };
  
  BadGuy.prototype.die = function () {
    if (this.isDead()) {
      throw new Error("ma toi umrql ma!");
    }
    this.alive = false;
  };
  
  var superman = new Hero("Clark Kent", "Superman");
  var chuck = new Hero("Chuck Norris");
  var batman = new Hero("Bruce Wane", "Batman");
  
  
  var reverseFlash = new BadGuy('Eobard Thawne', 'Reverse Flash');
  
  
  var theFlash = new Hero('Barry Allen', 'The Flash');
  
  var kingPin = new BadGuy('King Pin');
  // batman.kickAss(joker);
  
  theFlash.kickAss(reverseFlash);
  
  chuck.kickAss(kingPin);
  
  // for (var x in kingPin){
  // 	console.log(x + ":", kingPin[x]);
  // }
  
  
  
  
  