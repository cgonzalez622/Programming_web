const rectWidth = 300;
const rectHeight = 200;
let startingX = 100;
let startingY = 100;
let myRect = [];
function setup() {
    createCanvas(1400, 1800);
    background(0);
/*     rect(rectX, rectY, rectWidth, rectHeight); */
    for(let i = 0; i < 20; i++) {
        rect(startingX, startingY, rectWidth, rectHeight);
        startingX += 150;
    }
}
function mousePressed() {
    if(mouseX > rectX && mouseX < rectX + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
        console.log("square has been hit");
    }
}