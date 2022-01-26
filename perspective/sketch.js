let arches = [];
let img;

function preload() {
  good = loadImage("garden.png");
  bad = loadImage("smoke.png");
}


function setup() {
  createCanvas(800, 800);
   let w = width*0.06;
  
 
  let a = new Arch(0,0,  w);
  arches.push(a);
}

function draw() {
  background(55);
  rectMode(CENTER);
  let w = width*0.06;
   translate(width*0.45, height*0.5);
  
  // draw destination
  push();
   
   scale(0.2);
   //rect(0,0, w*6, w*8, 20, 20);
   //image(good, 0, 0, w*6, w*9, 20,20);
  //translate(0, height*0.2);
  rectMode(CORNER);
  arches[0].show();
  pop();
  
//   push();
//   scale(0.3);
//   arches[0].show();
//   pop();
  
//   push();
//   scale(0.4);
//   arches[0].show();
//   pop();
  
//   push();
//   scale(0.5);
//   arches[0].show();
//   pop();
  
//    push();
//   scale(0.6);
//   arches[0].show();
//   pop();
  
//   push();
//   scale(0.7);
//   arches[0].show();
//   pop();
  
}