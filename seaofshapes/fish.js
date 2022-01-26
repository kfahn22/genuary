class Fish {
  constructor(x, y, a, color, tx, ty) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.color = color;
    // fish offset
    this.tx = tx;
    this.ty = ty;
  }

  move() {
    this.x -= 50;
    this.y += random(-1, 1);
  }


  show() {
    angleMode(DEGREES);
    fill(this.color);
    //rectMode(CENTER);

    function drawHead(x, y, a) {
      push();
      rotate(-45);
      triangle(0, 0, a, 0, 0, a);
      pop();
    }

    //draw body
    function drawBody(x, y, a, t) {
      push();
      translate(0.75 * a, 0 * a);
      rectMode(CORNER);
      rotate(-45);
      square(0, 0, a);
      pop();
      push();
      translate(0.75 * a, 0 * a);
      triangle(0, 0, 0, -1.5 * a, 1.5 * a, -1.5 * a);
      triangle(0, 0, 0, 1.5 * a, 1.5 * a, 1.5 * a);
      pop();
    }

    function drawTail(x, y, a) {
      push();
      let s = sqrt(2 * a * a);
      translate(1.5 * s, 0);
      triangle(0, 0, a, 0, a, a);
      translate(a, 0);
      triangle(0, 0, a, a, 0, a);
      pop();
      push();
      translate(1.5 * s, 0);
      triangle(0, 0, a, -a, a, 0);
      translate(a, -a);
      triangle(0, 0, a, 0, 0, a);
      pop();
    }
    // draw complete fish
    push()
    translate(this.tx, -this.ty);
    drawHead(this.x, this.y, this.a);
    drawBody(this.x, this.y, this.a);
    drawTail(this.x, this.y, this.a);
    //draw eye
    stroke(0);
    fill(0);
    circle(this.a / 2, -this.a / 4, width * 0.01);
    pop()

  }
}