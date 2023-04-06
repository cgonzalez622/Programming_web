// first arm
let rotateBy = 10;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}
function makeArm(rotateBy, primaryColor) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(primaryColor);
    strokeWeight(5);
    bezier(alt - 20, alt + 20, 20, 20, 320, 180, 100, 160)
}
// second arm
function makeArmTwo(rotateBy, primaryColor) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(primaryColor);
    strokeWeight(5);
    ellipse(350, 350 + alt, 350 - alt);
}
function draw(originX, originY) {
    translate(originX, originY);
    rotate(rotateBy);
    makeArm(rotateBy, "yellow");
    makeArmTwo(rotateBy, "white");
    rotateBy += 5;
}
function mousePressed() {
    loop();
}
function mouseReleased() {
    noLoop();
}