class Layer {
  
  constructor(x,y) {
    this.x = 0;
    this.y = 0;
   
  }
  
  nwCorner(w,a,c) {
    //NW corner
  push();
  translate(-(0-a)*w,-(1+a)*w);
  rotate(0);
  fill(c);
  rect(this.x,this.y, 2*w, w);
  pop();
  }
  
  northConnector(w,tx,ty,c) {
  push();
  translate(tx,ty);
  rotate(0);
  fill(c);
  rect(this.x,this.y,2*w,w);
  pop();
  }
  
  neCorner(w,a,c) {
   //NE corner
  push();
  translate((a+2)*w,-a*w);
  rotate(90);
  
  fill(c);
  rect(this.x,this.y,2*w,w);
  pop(); 
  }
  
  eastConnector(w,tx,ty,c) {
  push();
  translate(tx,ty);
  rotate(90);
  fill(c);
  rect(this.x,this.y,2*w,w);
  pop();
  }
  
  
  seCorner(w,a,c) {
    //SE corner 
  push();
  translate((a+1)*w,(a+2)*w);
  rotate(180); 
  fill(c);
  rect(this.x,this.y,2*w,w);
  pop(); 
  }
  
  southConnector(w,tx,ty,c) {
  push();
  translate(tx,ty);
  rotate(180);
  fill(c);
  rect(this.x,this.y,2*w,w);
  
  //rect(this.x,this.y,w,w); 
  pop();
  }
  
  swCorner(w,a,c) {
     //SW corner
  push();
  translate(-(a)*w,(a+1)*w);
  rotate(180);
  fill(c);
  rect(this.x,this.y,w,2*w);
  
  pop();
  }
  
  // west connector
  westConnector(w,tx,ty,c) {
  push();
  translate(tx,ty);
  rotate(180);
  fill(c);
  rect(this.x,this.y,w,2*w);
  pop(); 
  }

  
  addLayer(w,a,b) {
 
  
  let fc = random(colorOptions); 
    
  //NW corner
  push();
  translate(0,0);
  rotate(0);
  fill(fc);
  rect(this.x,this.y, 2*w, w);
  pop();
  
  //NE corner
  push();
  translate((3+a)*w,0)
  rotate(90);
  fc = random(colorOptions);
  fill(fc);
  rect(this.x,this.y,2*w,w);
  pop();
  
  //SE corner (need to rotate in opposite direction)
  push();
  translate((2+a)*w,(2+a)*w);
  rotate(180);
  fc = random(colorOptions);
  fill(fc);
  rect(this.x,this.y,3*w,w);
  pop();
  
  //SW corner
  push();
  translate((0-a)*w,w);
  rotate(180);
  fc = random(colorOptions);
  fill(fc);
  rect(this.x,this.y,w,2*w);
  pop();
  
  //NW corner
  push();
  translate((0-a)*w,(0-a)*w);
  rotate(0);
  fill(fc);
  rect(this.x,this.y, 2*w, w);
  pop();
 
  }
  
  show(w, h, color) {
      stroke(color);
      fill(color);
      rect(this.x, this.y, w, h);
      
      
  }
}
