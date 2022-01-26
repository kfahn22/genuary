class rainbowLayer {

    constructor(x, y, img) {
        this.x = 0;
        this.y = 0;
        this.sand = img;
    }


    show() {
        rect(this.x, this.y, 2 * w, w);
        image(img, this.x, this.y, 2 * w, w);
    }

    nwCorner(w, a) {
        //NW corner
        push();
        translate(-(0 - a) * w, -(1 + a) * w);
        rotate(0);
        // stroke(255,0,0);
        // circle(this.x, this.y, 10);
        rect(this.x, this.y, 2 * w, w);
        image(sand[int(random(5))], this.x, this.y, 2 * w, w);
        pop();
    }

    northConnector(w, tx, ty) {
        push();
        translate(tx, ty);
        rotate(0);
        rect(this.x, this.y, 2 * w, w);
        image(sand[int(random(5))], this.x, this.y, 2 * w, w);
        //  image(this.sand, this.x, this.y, 2*w, w);
        pop();
    }

    neCorner(w, a) {
        //NE corner

        push();
        translate((a + 2) * w, -a * w);
        rotate(90);
        rect(this.x, this.y, 2 * w, w);
        //this.works (kindof)
        //image(sand[0], this.x, this.y, 2*w, w);
        image(sand[int(random(5))], this.x, this.y, 2 * w, w);
        pop();
    }

    eastConnector(w, tx, ty) {
        push();
        translate(tx, ty);
        rotate(90);
        rect(this.x, this.y, 2 * w, w);
        image(sand[int(random(5))], this.x, this.y, 2 * w, w);
        pop();

    }


    seCorner(w, a) {
        //SE corner 
        push();
        translate((a + 1) * w, (a + 2) * w);
        rotate(180);
        //   stroke(255,0,0);
        // circle(this.x,this.y,10);
        rect(this.x, this.y, 2 * w, w);
        image(sand[int(random(5))], this.x, this.y, 2 * w, w);
        pop();
    }

    southConnector(w, tx, ty) {
        push();
        translate(tx, ty);
        rotate(180);

        rect(this.x, this.y, 2 * w, w);
        image(sand[int(random(5))], this.x, this.y, 2 * w, w);
        pop();
    }

    //these two blocks were not desplaying image correctly;
    //recreating images in long form as a work around
    swCorner(w, a) {
        //SW corner
        push();
        translate(-(a) * w, (a + 1) * w);
        rotate(180);
        //     stroke(255,0,0);
        // circle(this.x,this.y, 10);
        rect(this.x, this.y, w, 2 * w);
        image(sand[int(random(2, 7))], this.x, this.y, w, 2 * w);
        pop();
    }

    // west connector
    westConnector(w, tx, ty) {
        push();
        translate(tx, ty);
        rotate(180);
        //  stroke(255,0,0);
        // circle(this.x, this.y, 10);
        rect(this.x, this.y, w, 2 * w);
        image(sand[int(random(2, 7))], this.x, this.y, w, 2 * w);
        pop();
    }
}



//this code correctly adjusts the tiles but messes up the algorithm
// for placing the blocks???

// swCorner(w,a) {
//      //SW corner
//   push();
//   translate(-(a+1)*w,(a+1)*w);
//   rotate(-90);
//  //     stroke(255,0,0);
//  // circle(this.x,this.y, 10);
//   rect(this.x,this.y,2*w,w);
//      image(sand[int(random(6))], this.x, this.y, 2*w, w); 
//   pop();
//   }

//   // west connector
//   westConnector(w,tx,ty) {
//   push();
//   translate(tx,ty);
//   rotate(90) ;
//     //  stroke(255,0,0);
//    // circle(this.x, this.y, 10);
//   rect(this.x,this.y,2*w,w);
//       image(sand[int(random(6))], this.x, this.y, 2*w, w);
//   pop(); 
//   }
// }