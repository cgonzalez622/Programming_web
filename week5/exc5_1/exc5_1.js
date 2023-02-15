
let blockX = 0;
let blockY = 0;
let drawTimer;
let blockColor = 255;
const speed = 10;
const distance = 2;
function setup() {
    createCanvas(500, 500);
    background(0);

}
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

function keyTyped() {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log("conversted number", keyToNumber);
    blockColor = keyToNumber;
    console.log("key to number", keyToNumber);
}

window.setTimeout(() => {
drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;   
    } else{
        blockY = 0;
        blockX += 50;
    }
    if(blockY - 50 > height && blockX - 50 > width) {
        window.clearInterval(drawTimer);
        alert("all done!");
}

}, speed);
}, 1500);


