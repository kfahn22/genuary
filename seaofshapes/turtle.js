class Turtle {
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
    rectMode(CENTER);
    fill(this.color);
    // push();
    // rotate(-45);
    //   // create a right triangle template
    //   triangle(0, 0, this.a, 0, 0, this.a);
    // pop();

    function drawHead(a) {
      push();
      translate(0.75 * a, 0 * a);
      rectMode(CORNER);
      rotate(-45);
      square(0, 0, a);
      pop();
    }

    function drawBody(a) {
      push();
      let t = sqrt(2 * a * a);
      translate(1.5 * t, 0);
      rectMode(CORNER);
      rotate(-45);
      square(0, 0, 2 * a);
      pop();
    }

    function frontFins(a) {
      let t = sqrt(2 * a * a);
      push();
      translate(1.75 * t, -1.25 * a);
      rotate(75);
      shearX(45);
      rect(0, 0, a, a);
      pop();
      push();
      translate(1.75 * t, 1.25 * a);
      rotate(-75);
      shearX(-45);
      rect(0, 0, a, a);
      pop();
    }

    function backFins(a) {
      //draw  back fins
      push();
      let t = sqrt(2 * a * a);
      translate(3.25 * t, -0.35 * a);
      rotate(15);
      triangle(0, 0, 0, -a, a, -a);
      pop();
      push();
      translate(3.25 * t, 0.35 * a);
      rotate(-15);
      triangle(0, 0, 0, a, a, a);
      pop();
    }

    // draw turtle
    push();
    angleMode(DEGREES);
    shearX(15);
    shearY(15);
    translate(this.tx, this.ty);
    drawHead(this.x, this.y, this.a);
    drawBody(this.x, this.y, this.a);
    frontFins(this.x, this.y, this.a);
    backFins(this.x, this.y, this.a);

    //draw eyes
    stroke(0);
    fill(0);
    circle(this.x + width * 0.01, this.y + height * 0.01, width * 0.008);
    circle(this.x + width * 0.01, this.y - height * 0.01, width * 0.008);
    pop();
  }
}