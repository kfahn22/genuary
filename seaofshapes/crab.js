class Crab {
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
        stroke(0);
        strokeWeight(3);
        rectMode(CORNERS);

        function drawHead(a) {
            push();
            square(0, 0, a);
            pop();
        }

        function drawBody(a) {
            push();
            translate(2 * a, 1 * a);
            triangle(0, 0, 0 * a, 2 * a, -2 * a, 0 * a);
            pop();

            push();
            translate(1 * a, 2 * a);
            triangle(0, 0, -2 * a, 0 * a, -2 * a, -2 * a);
            pop();

            push();
            translate(0 * a, 2 * a);
            triangle(0, 0, -1 * a, 0 * a, -1 * a, 1 * a);
            pop();
        }

        function leftPincher(a) {
            push();
            translate(-1 * a, 1 * a);
            triangle(0, 0, -1 * a, -1 * a, 0 * a, -2 * a);
            pop();
        }

        function rightPincher(a) {
            //parallogram
            push();
            translate(a, 1 * a);
            scale(1, -1);
            shearX(45);
            rect(0, 0, a, a);
            pop();
            push(2 * a, 0);
            translate(2 * a, 0);
            triangle(0, 0, a, 0, 0, -1 * a);
            pop();
        }

        //draw crab body
        push();
        translate(this.tx, this.ty);
        drawHead(this.x, this.y, this.a);
        drawBody(this.x, this.y, this.a);
        leftPincher(this.x, this.y, this.a);
        rightPincher(this.x, this.y, this.a);
        // draw eyes
        stroke(0);
        fill(0);
        // ellipse(1.25*this.a, -this.a/5, width*0.015, height*0.01);
        // ellipse(1.25*this.a, this.a/5, width*0.015, height*0.1);
        pop();
    }
}