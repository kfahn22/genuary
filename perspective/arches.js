l // Kathryn McGuiness 


// including ray casting code from Daniel Shiffman

let arches = [];
let img;
let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;
let button;

function preload() {
  good = loadImage("garden.png");
  bad = loadImage("smoke.png");
}


function setup() {
  createCanvas(800, 800);

  button = createButton("save frame");
  button.mousePressed(saveWork);


  function saveWork() {
    saveCanvas("day25.png");
  }

  // still need to figure out a way to cast to a arc !!!

  walls.push(new Boundary(width * 0.275, height * 0.55, width * 0.275, height * 0.975));
  walls.push(new Boundary(width * 0.775, height * 0.55, width * 0.775, height * 0.975));
  walls.push(new Boundary(width * 0.275, height * 0.975, width * 0.775, height * 0.975));
  walls.push(new Boundary(width * 0.275, height * 0.575, width * 0.325, height * 0.4055));
  walls.push(new Boundary(width * 0.325, height * 0.4055, width * 0.45, height * 0.345));
  walls.push(new Boundary(width * 0.45, height * 0.345, width * 0.55, height * 0.315));
  walls.push(new Boundary(width * 0.55, height * 0.315, width * 0.625, height * 0.355));
  walls.push(new Boundary(width * 0.625, height * 0.325, width * 0.71, height * 0.39));
  walls.push(new Boundary(width * 0.665, height * 0.39, width * 0.69, height * 0.405));
  walls.push(new Boundary(width * 0.69, height * 0.405, width * 0.775, height * 0.555));

  particle = new Particle();
}

function draw() {
  background(0);
  rectMode(CORNER);
  let w = width * 0.05;
  stroke(171, 168, 161);
  fill(171, 168, 161);

  scale(1.25);
  translate(-width * 0.115, -height * 0.225);
  push();
  for (let wall of walls) {
    wall.show();
    wall.arcShow();
  }
  particle.update(width * 0.52, height * 0.475);
  particle.show();
  particle.look(walls);

  xoff += 0.01;
  yoff += 0.01;


  //draw path
  push();
  stroke(162, 77, 64);
  fill(226, 109, 90);
  translate(width * 0.35, height * 0.965);

  pop();

  // draw destination
  push();

  push();
  translate(width * 0.4650, height * 0.445);
  scale(0.225);
  arches[0].show();
  pop();



  push();
  translate(width * 0.43, height * 0.455);
  scale(0.375);
  arches[0].show();
  pop();

  push();
  translate(width * 0.37, height * 0.475);
  scale(0.625);
  arches[0].show();
  pop();

  push();
  translate(width * 0.275, height * 0.5);
  arches[0].show();
  pop();

  pop;
}