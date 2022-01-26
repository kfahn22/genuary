let organicSquares = [];
let colorOptions = [
    [5,74,41],
    [19,117,71],
    [42,145,52],
    [63,163,77],
    [91,186,111]
]

function setup () {
    createCanvas(800,800);
    stroke(color(colorOptions[4]));
    let o = new Organic(width * 0.5, height * 0.5);
    organicSquares.push(o);
}

function draw() {
    stroke()
organicSquares.grow()
}