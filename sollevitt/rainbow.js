class rainbowLayer {
  
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
    rect(this.x,this.y,2*w,w);
    pop();
    }
    
    northConnector(w,tx,ty,c) {
    push();
    translate(tx,ty);
    rotate(0);
    fill(c);
    rect(this.x,this.y, 2*w, w);
    pop();
    }
    
    neCorner(w,a,c) {
     //NE corner
    push();
    translate((a+2)*w,-a*w);
    rotate(90);
    fill(c);
    rect(this.x,this.y, 2*w,w);
    pop(); 
    }
    
    eastConnector(w,tx,ty,c) {
    push();
    translate(tx,ty);
    rotate(90);
    fill(c);
    rect(this.x,this.y, 2*w,w);
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
  }