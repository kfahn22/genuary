class Organic {
    constructor() {
        this.x = x;
        this.y = y;
        this.w = w;
    }

    grow() {

        let r1 = int(random(10));
        let r2 = int(random(4));
        if (r2 === 0) {
            for (i = 0; i < r1; i++) {
                square(this.x + this.w, this.y, this.w);
            }
        } else if (r2 === 1) {
            rotate(90);
            for (i = 0; i < r1; i++) {
                square(this.x + this.w, this.y, this.w);
            }
        } else if (r2 === 2) {
            rotate(-90);
            for (i = 0; i < r1; i++) {
                square(this.x + this.w, this.y, this.w);
            }
        }

    }
}