// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Circle Morphing Part 1
// Edited Video: Coming Soon

let cirPath = [];
let sqPath = [];
let spacing = 10;
let theta = 0;

function polarToCartesian(r, angle) {
  return createVector(r * cos(angle), r * sin(angle));
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  let radius = 100;
  let startA = 0;
  let endA = 90;
  let start = polarToCartesian(radius, startA);
  let end = polarToCartesian(radius, endA);
  for (let a = startA; a < 360; a += spacing) {
    let cv = polarToCartesian(radius, a);
    cirPath.push(cv);
    let amt = (a % 120) / (endA - startA);
    let sv = p5.Vector.lerp(start, end, amt);
    triPath.push(tv);

    if ((a + spacing) % 90 === 0) {
      startA = startA + 90;
      endA = endA + 90;
      start = polarToCartesian(radius, startA);
      end = polarToCartesian(radius, endA);
    }
  }
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(30);
  stroke(0);
  strokeWeight(4);
  noFill();
  let amt = (sin(theta) + 1) / 2;
  theta += 5;
  for (i = 0; i < 2; i++) {
      push()
      beginShape();
      for (let j = 0; j < cirPath.length; j++) {
        let cv = cirPath[i];
        let sv = sqPath[i];
        let x = lerp(cv.x, sv.x, amt);
        let y = lerp(cv.y, sv.y, amt);
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
 
}
}