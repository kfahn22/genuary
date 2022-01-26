class Seahorse {
    constructor(x, y, a, color, tx, ty) {
        this.x = x;
        this.y = y;
        this.a = a;
      this.color = color;
      this.tx = tx;
      this.ty = ty;
    }

   
     
     show() {
        angleMode(DEGREES);
      fill(this.color);
      rectMode(CENTER);
       
       function drawHead(x,y,a) {
      push();
       translate(0.75*a, -3*a);
      rotate(-45);
        // create a right triangle template
        triangle(0, 0, a, 0, 0, a);
      pop();
      push();
       translate(1.5*a, -3.75*a);
       //rotate(-180);
       triangle(0, 0,a, a, 0, a);
      pop();
       }
       
       
       function drawBody(x,y,a) {
      push();
      translate(0.75*a, 0*a);
      triangle(0, 0, 0, -1.5*a, 1.5*a, -1.5*a );
      //triangle(0,0, 0, 1.5*a, 1.5*a, 1.5*a);
      pop();
       push();
       translate(0.75*a, -1.5*a);
       triangle(0, 0, 0, -1.5*a, 1.5*a, 0);
       pop();
       }
       
      // draw tail
       function drawTail(x,y,a) {
       push();
      translate(0.75*a,0*a);
      rectMode(CORNER);
      rotate(-45);
      square(0,0, a);
      pop();
       
       push();
      translate(1.5*a, 0.75*a);
       triangle(0,0,0.75*a, -0.75*a, 1.5*a, 0);
      translate(0.75*a, -0.75*a);
      pop();
       }
       // draw seahorse
       push();
       translate(this.tx,this.ty);
       drawHead(this.x, this.y, this.a);
       drawBody(this.x, this.y, this.a);
       drawTail(this.x, this.y, this.a);
       //draw eye
       stroke(0);
      fill(0);
      circle(1.75*this.a, -3.15*this.a, width*0.01);
      pop();
    }
}