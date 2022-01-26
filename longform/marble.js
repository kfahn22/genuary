
// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

 

  function Vehicle(x, y, color) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    //this.vel = velocity;
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 2;
    this.maxspeed = (frameCount*4)%360
    //this.maxspeed = 10;
    this.maxforce = 1;
    this.color = color;
  }
  
  Vehicle.prototype.behaviors = function() {
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);
  
    arrive.mult(1);
    flee.mult(5);
  
    this.applyForce(arrive);
    this.applyForce(flee);
  };
  
  Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f);
  };
  
  Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  };
  
  Vehicle.prototype.show = function() {
    //fill(this.color);
    strokeWeight(this.r);
    stroke(this.color);
    point(this.pos.x, this.pos.y);
  };
  
  Vehicle.prototype.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  };
  
  Vehicle.prototype.flee = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  };