let width = 100;
let gap = 50;
let startX = 100
function setup() {
    createCanvas(800, 800);
    background("blue");
}
function draw() {
    for (let i = 0; i < 3; i++) {
        rect(startX, 400, width, 100);
        startX = startX + width + gap;
    }
    /*     for (let i = 100; i < 600; i += 150) {
        rect(i, 400, 100, 100); */ //more reliable 
}
