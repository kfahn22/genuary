class Arch {
  constructor(x,y,w, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.r = 0.25*width;
    this.img = img;
  }
  
  show() {
    
    stroke(0);
    
    
    //write central image to screen
     //rect(0,0, this.w*6, this.w*8, 20, 20);
   //image(good, 0, 0, this.w*8, this.w*12, 20,20);
    
    //draw pillars
    
    push();
    //translate(this.w * 0.10, 0.2*width);
    noStroke();
    fill(138,132,127);
    rect(0,0, this.w, this.w*8);
    ellipse(this.w* 0.5, this.w*8, this.w, this.w*0.25);
    pop();
    
    
    
    // draw arches
    push();
    let d = this.r * sin();
    translate(this.r  , this.w);
    angleMode(DEGREES);
    strokeWeight(4);
    stroke(181,178,172);
    fill(138,132,127);
    beginShape();
    for (let a = 202; a < 338; a += 0.1) {
    let x = this.r * cos(a);
    let y = this.r * sin(a);
    vertex(x,y);
    }
    for (let a = -24; a > -156; a -= 0.1) {
    let x = (this.r  - this.w * 0.40) * cos(a);
    let y = (this.r  - this.w * 0.40) * sin(a);
    vertex(x,y);
    }
    endShape(CLOSE);
    pop();
    
    
    //connector- draw after arches
    push();
    stroke(171,168,161);
    fill(138,132,127);
    
    translate(this.w * 0.25, -this.w*0.5);
    square(0,0,this.w * 0.48);
    strokeWeight(4);
    stroke(244,238,225);
    point(this.w*0.15, this.w*0.15);
    point(this.w*0.35, this.w*0.15);
     point(this.w*0.15, this.w*0.35);
    point(this.w*0.35, this.w*0.35);
    pop();
    
    
    // draw second pillar
    push();
    translate(this.r*2- this.w , 0);
    noStroke();
    fill(138,132,127);
     rect(0,0, this.w, this.w*8);
    ellipse(this.w * 0.5, this.w*8, this.w, this.w*0.25);
    pop();
    
    push();
     stroke(171,168,161);
    fill(171,168,161);
    translate(this.r*2 - this.w * 0.75,  -this.w*0.5);
    square(0,0,this.w * 0.48);
    strokeWeight(4);
     
    stroke(244,238,225);
    point(this.w*0.15, this.w*0.15);
    point(this.w*0.35, this.w*0.15);
     point(this.w*0.15, this.w*0.35);
    point(this.w*0.35, this.w*0.35);
    pop();
    
    //draw path
    stroke(162,77, 64);
    fill(226,109,90);
    translate(this.w, this.w*7.75);
    shearX(90);
    shearY(90);
      rect(0,0,this.w*0.48, this.w*0.25);
    for (let j = 0; j < 10; j ++) {
    
    // translate(this.w*0.24, 0);
    for (let i = 0; i < 13 ; i++) {
    rect(i*this.w*0.48,-j*this.w*0.25,this.w*0.48, this.w*0.25);
      rect(this.w*0.48,-j*this.w*0.25,this.w*0.48, this.w*0.25);
    
    }
    
    }
  }
    
    
  //   rect(0,0,this.w*0.48, this.w*0.25);
  //   for (let j = 0; j < 9; j ++) {
  //     if (j === 0) {
  //   // translate(this.w*0.24, 0);
  //   for (let i = 0; i < 13 ; i++) {
  //   rect(i*this.w*0.48,-j*this.w*0.25,this.w*0.48, this.w*0.25);
  //     rect(this.w*0.48,-j*this.w*0.25,this.w*0.48, this.w*0.25);
  //   }
  //   }
  //   else {
  //     translate(this.w*0.24, 0);
  //   for (let i = 0; i < 13 -j; i++) {
  //   rect(i*this.w*0.48,-j*this.w*0.25,this.w*0.48, this.w*0.25);
  //   }
  //   }
  // }
    
  //}
}