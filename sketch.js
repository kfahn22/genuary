let layers = [];

function setup() {
  createCanvas(600, 600);
  for (i=0; i < 10; i++) {
    let l = new Layer();
    layers.push(l);
  }
  noLoop();
}

function draw() {
  background(250);
  translate(width/2, height/2);
  angleMode(DEGREES);
  //colorMode(HSB);

  // const colorOptions = ["slateblue", "magenta", "navy", "midnightblue", "deepskyblue", "blue", "dodgerblue", "mediumslateblue", "royalblue", "blueviolet", "darkslateblue", "lightsteelblue", "lilac", "orchid", "deeppink", "aqua", "blue", "purple", "magenta", "paleturquoise", "plum",  "mediumaquamarine"];
   
  const colorOptions = ["orange", "red", "blue", "yellow", "purple", "green"];
  
  let w = width/30;
  
  stroke(0);
  fill(255,0,0);
  rect(0,0,w,w);
  
  let l = [];

  for (let i = 0; i<10; i++) {
  l.push(layers[i].neCorner(w, i, random(colorOptions)));
  for (j=0;j<i;j++) {
  l.push(layers[i].eastConnector(w,(2+i)*w,(i-2*j)*w,random(colorOptions)));
  }
  l.push(layers[i].seCorner(w, i, random(colorOptions)));
   for (j=1;j<2*i;j+=2) {
  l.push(layers[i].southConnector(w,(1*j-i)*w,(i+2)*w,random(colorOptions)));
  }
  l.push(layers[i].swCorner(w, i, random(colorOptions)));
  for (j=1;j<2*i;j+=2) {
  l.push(layers[i].westConnector(w,(-i)*w,(1*j-i)*w,random(colorOptions)));
  } 
  l.push(layers[i].nwCorner(w, i, random(colorOptions)));
   for (j=2;j<2*i+1;j+=2) {
  l.push(layers[i].northConnector(w,(i-j)*w,-(1+i)*w,random(colorOptions)));
  }
  }
}
