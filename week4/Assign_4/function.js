function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill("#FF6551");
    rect(0, 0, 200, 200);
    noStroke();
    fill("#AFFFFF");
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    fill("white");
    strokeWeight(5);
    circle(100, 100, 100);
    fill("white");
    strokeWeight(5);
    triangle(45, 65, 10, 20, 100, 50);
    triangle(100, 50, 190, 20, 155, 65)
    triangle(45, 135, 10, 180, 100, 150);
    triangle(155, 135, 190, 180, 100, 150);
    noFill();
    stroke("white");
    strokeWeight(5);
    line(100, 20, 100, 180);



    
}
function draw() {
    createTile();
}