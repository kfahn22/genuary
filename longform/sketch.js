// Marbles Kathy McGuiness
// Based on Circle Packing code by Daniel Shiffman


let circles;
let spots;
let img;
let m;
let colorchoices = ["#FFBE0B", "#FB5607", "#FF006E", "#8338ec", "#3A86FF"];
let button1;
let button2;
let finished=false;
var saver;
var counter = 0;

function preload() {
  img = loadImage("blackmarble.png");
}

function setup() {
  createCanvas(800, 80);

  captureFrame(saver);
  
  function captureFrame() {
  //var counter = 0;
  let fc = frameCount;
    //change to setTimeou()
  setInterval(saver, 1000);
  function saver() {
    saveCanvas("marbles" + ".png");
  }
 
}
 
  // load in pixels
  img.loadPixels();
  spots = [];
  circles = [];
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = x + y * img.width;
      let c = img.pixels[index * 4];
      let b = brightness([c]);
      if (b > 1) {
        xadj = map(x, 0, 1600, 0, 800);
        yadj = map(y, 0, 160, 0, 80);
        spots.push(createVector(xadj, yadj));
      }
    }
  }
  
  // console.log(img.width);
  // console.log(img.height);
}

function draw() {
  background(0);
  let m = millis();
  console.log(m);
  let total = 5;
  let count = 0;
  let attempts = 0;

  
  while (count < total) {
    let newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 30) {
      noLoop();
      console.log("finished");
      let finished = true;
      break;
    }
  }

  for (let i = 0; i < circles.length; i++) {
    let circl = circles[i];

    if (circl.growing) {
      if (circl.edges()) {
        circl.growing = false;
      } else {
        for (let j = 0; j < circles.length; j++) {
          let other = circles[j];
          if (circl !== other) {
            var d = dist(circl.x, circl.y, other.x, other.y);
            var distance = circl.r + other.r;
    
            if (d - 2 < distance) {
              circl.growing = false;
              break;
            }
          }
        }
      }
    }
    circl.show();
    circl.grow()
}
  
}

function newCircle() {
  var r = int(random(0, spots.length));
  var spot = spots[r];
  var x = spot.x;
  var y = spot.y;
  let c = random(colorchoices);
  
  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y, c);
  } else {
    return null;
  }
}