class Layer {
  
  constructor(x,y) {
    this.x = 0;
    this.y = 0;
  }
  
  addLayer(w,a,c) {
  
    //NW corner
    push();
    translate(-(0-a)*w,-(1+a)*w);
    rotate(0);
    fill(c);
    rect(this.x,this.y, 2*w, w);
    pop();

    // north connector blocks
    for (let j=2;j<2*a+1;j+=2) {
      push();
      translate((a-j)*w,-(1+a)*w);
      rotate(0);
      fill(c);
      rect(this.x,this.y,2*w,w);
      pop();
    }

    //NE corner
    push();
    translate((a+2)*w,-a*w);
    rotate(90);
    fill(c);
    rect(this.x,this.y,2*w,w);
    pop(); 


    // east connector blocks
    for (let j=0;j<a;j++) {
      push();
      translate((2+a)*w,(a-2*j)*w);
      rotate(90);
      fill(c);
      rect(this.x,this.y,2*w,w);
      pop();
      }

    //south east corner
    push();
    translate((a+1)*w,(a+2)*w);
    rotate(180); 
    fill(c);
    rect(this.x,this.y,2*w,w);
    pop(); 

    // south connector blocks
    for (let j=1;j<2*a;j+=2) {
      push();
      translate((1*j-a)*w,(a+2)*w);
      rotate(180);
      fill(c);
      rect(this.x,this.y,2*w,w);
      pop();
    }

    //SW corner
    push();
    translate(-(a)*w,(a+1)*w);
    rotate(180);
    fill(c);
    rect(this.x,this.y,w,2*w);
    pop();

    // west connector blocks
    for (let j=1;j<2*a;j+=2) {
      push();
      translate((-a)*w,(1*j-a)*w);
      rotate(180);
      fill(c);
      rect(this.x,this.y,w,2*w);
      pop(); 
    }
  }
} 