let emitters = [];
let fishies = [];
let goldfishies = [];
let turtles = [];
let seahorses = [];
let crabs = [];
let shapes = [];


let button;
let c1, c2;

let colorOptions = [
  [255, 166, 43], //orange
  [88, 129, 87], //green
  [239, 214, 172], //sand
  [77, 161, 169], //turquoise
  [255, 46, 204], //fushia
  [165, 63, 43], // red
  [254, 208, 187] //seahorse

]

function setup() {
  createCanvas(600, 600);



  button = createButton("save frame");
  button.mousePressed(saveWork);


  function saveWork() {
    saveCanvas("sea.png");
  }

  //create bubbles
  emitters.push(new Emitter(width * 0.66, height));

  let x = 10;
  let y = -300;
  for (let i = 0; i < 5; i++) {
    let f = new Fish(x, y, 15, colorOptions[4]);
    fishies.push(f);
    if (i % 2 === 0) {
      x += 30;
      y -= 50;
    } else {
      x += 30;
      y += 50;
    }
  }

  let s1 = new Seahorse(0, 0, 10, colorOptions[6], 450, 150);
  seahorses.push(s1);
  let s2 = new Seahorse(0, 0, 10, colorOptions[6], 470, 160);
  seahorses.push(s2);

  gx = 260;
  gy = -250;
  for (let i = 0; i < 4; i++) {
    let g = new Goldfish(gx, gy, 15, colorOptions[0]);
    goldfishies.push(g);
    if (i % 2 === 0) {
      gx += 10;
      gy -= 30;
    } else {
      gx += 20;
      gy += 30;
    }
  }

  // first parameter is controlling size ??
  let tl = new Turtle(30, 0, 15, colorOptions[1], 10, 85);
  turtles.push(tl);
  let cr = new Crab(10, 0, 15, colorOptions[5], 60, 560);
  crabs.push(cr);
}


function draw() {
  // Background
  let c1 = color(102, 215, 209);
  let c2 = color(0, 78, 122);
  setGradient(0, 0, 600, 600, c1, c2, Y_AXIS);



  //translate(width*0.25, height*0.5);
  stroke(0);
  strokeWeight(1)
  fill(249, 0, 147);

  // create steam vent
  for (let emitter of emitters) {
    emitter.emit(25);
    emitter.show();
    emitter.update();
  }


  //fishes
  for (let i = 0; i < 5; i++) {
    fishies[i].show();
    fishies[i].move();

  }

  for (let i = 0; i < goldfishies.length; i++) {
    goldfishies[i].show();
    goldfishies[i].move();
  }
  turtles[0].show();
  seahorses[0].show();
  seahorses[1].show();
  crabs[0].show();

}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}