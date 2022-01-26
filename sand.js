// Create a capturer that exports an animated GIF
// Notices you have to specify the path to the gif.worker.js 
// var capturer = new CCapture( { format: 'gif', workersPath: 'js/' } );

// var capturer = new CCapture( {
// 	framerate: 60,
// 	verbose: true
// } );

let layers = [];
let rainbowLayers = [];
let sel;
let del;
let w;
let fr = 5;

//primary colors
let c1 = ["#D00000", "#FFBA08", "#58355E", "#345995", "#018E42"];
//sunset colors
let c2 = ["#713E5A", "#FCAB10", "#031D44", "#F4845F", "#C41E3D"];

let c3 = ["#FFBE0B", "#080708", "#E0E2DB", "#04E762", "#3A86FF"];

// let defaultColor1 = [224,226,219];
// let colors1 = [
//   [8,7,8],
//   [4,231,98],
//   [255,190,11],
//   [58, 134, 255]
// ];
function setup() {
    createCanvas(800, 800);
    frameRate(fr);
    addSelect();
    delSelect();

    for (let i = 0; i < 20; i++) {
        let rl = new rainbowLayer();
        rainbowLayers.push(rl);
        let l = new Layer();
        layers.push(l);
    }
    sel.changed(addonelayer);
    del.changed(delLayer);
    noLoop();
}

// function render(){
// 	requestAnimationFrame(render);
// 	// rendering stuff ...
// 	capturer.capture( canvas );
// }

// render()

function draw() {
    background(10);
    translate(width / 2, height / 2);
    angleMode(DEGREES);
    // capturer.start();
    //saveFrames('/kathy/output', 'png', 1, 1);

    // let colorpicker = int(random(color1.length));
    // fill(c1[colorpicker]);

    fill(random(c3));

    w = width / 40;

    noStroke(0);

    rect(0, 0, w, w);

    // figure out how to capture gif!! 
    //   capturer.stop();

    // // default save, will download automatically a file called {name}.extension (webm/gif/tar)
    // capturer.save();

}

// function keyPressed() {
//   saveFrames('two', 'png', 1, 1)
//   });

// alternate method
//  saveCanvas('', 'png');
// }


function addonelayer() {

    w = width / 40;
    let s = int(sel.value());
    for (let i = 0; i < s; i++) {

        rainbowLayers[i].neCorner(w, i, random(c3));
        for (j = 0; j < i; j++) {
            rainbowLayers[i].eastConnector(w, (2 + i) * w, (i - 2 * j) * w, random(c3));
        }
        rainbowLayers[i].seCorner(w, i, random(c3));
        for (j = 1; j < 2 * i; j += 2) {
            rainbowLayers[i].southConnector(w, (1 * j - i) * w, (i + 2) * w, random(c3));
        }
        rainbowLayers[i].swCorner(w, i, random(c3));
        for (j = 1; j < 2 * i; j += 2) {
            rainbowLayers[i].westConnector(w, (-i) * w, (1 * j - i) * w, random(c3));
        }
        rainbowLayers[i].nwCorner(w, i, random(c3));
        for (j = 2; j < 2 * i + 1; j += 2) {
            rainbowLayers[i].northConnector(w, (i - j) * w, -(1 + i) * w, random(c3));
        }
    }

}


function delLayer() {
    w = width / 40;
    let d = int(del.value());
    layers[d].addLayer(w, d, 0);
}

// add feature to add layers
function addSelect() {
    sel = createSelect();
    sel.position(10, 10);
    sel.option('0');
    sel.option('1');
    sel.option('2');
    sel.option('3');
    sel.option('4');
    sel.option('5');
    sel.option('6');
    sel.option('7');
    sel.option('8');
    sel.option('9');
    sel.option('10');
    sel.option('11');
    sel.option('12');
    sel.option('13');
    sel.option('14');
    sel.option('15');
    // sel.option('16');
    // sel.option('17');
    // sel.option('18');
    // sel.option('19');
    // sel.option('20');
    return sel;
}

function delSelect() {
    del = createSelect();
    del.position(60, 10);
    del.option('0');
    del.option('1');
    del.option('2');
    del.option('3');
    del.option('4');
    del.option('5');
    del.option('6');
    del.option('7');
    del.option('8');
    del.option('9');
    del.option('10');
    del.option('11');
    del.option('12');
    del.option('13');
    del.option('14');
    del.option('15');
    // del.option('16');
    // del.option('17');
    // del.option('18');
    // del.option('19');
    // del.option('20');
    return del;
}