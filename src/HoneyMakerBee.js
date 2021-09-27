var HoneyMakerBee = function() {
  Bee.call(this, this.color, this.food);

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;


};

HoneyMakerBee.prototype.eat = function() {

};

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

