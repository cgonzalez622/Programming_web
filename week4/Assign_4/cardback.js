function setup() {
    createCanvas(300, 200);
}
function createTile() {
    translate(0, 0);
    fill("#FF6551");
    rect(0, 0, 300, 200);
    noStroke();
    fill("#AFFFFF");
    circle(150, 50, 50);
    circle(100, 100, 50);
    circle(200, 100, 50);
    circle(150, 150, 50);
    fill("white");
    strokeWeight(5);
    circle(150, 100, 100);
    fill("white");
    strokeWeight(5);
    noFill();
    stroke("white");
    strokeWeight(5);
    line(200, 20, 100, 180);
    line(100, 20, 200, 180);
    line(50, 100, 250, 100);       
}
function draw() {
    createTile();
}