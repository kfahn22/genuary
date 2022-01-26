// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/145-2d-ray-casting.html
// https://youtu.be/TOEi6T2mtHo

// 2D Ray Casting
// https://editor.p5js.org/codingtrain/sketches/Nqsq3DFv-

class Boundary {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
  }

  show() {
    noStroke();
    //stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
  
  arcShow() {
    stroke(255);
     beginShape();
    for (let a = 202; a < 338; a += 0.1) {
    let x = this.r * cos(a);
    let y = this.r * sin(a);
      
      
    vertex(this.a, this.b);
    }
  }
}