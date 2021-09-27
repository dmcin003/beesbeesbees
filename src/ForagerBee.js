var ForagerBee = function() {
  Bee.call(this, this.color, this.food);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];


};

ForagerBee.prototype.eat = function() {

};

ForagerBee.prototype.forage = function(treasure) {

  this.treasureChest.push(treasure);
};

