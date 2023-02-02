function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, circleColor, triangleColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    noStroke();
    fill(secondaryColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    fill(circleColor);
    strokeWeight(5);
    circle(100, 100, 100);
    fill(triangleColor);
    strokeWeight(5);
    triangle(45, 65, 10, 20, 100, 50);
    triangle(100, 50, 190, 20, 155, 65)
    triangle(45, 135, 10, 180, 100, 150);
    triangle(155, 135, 190, 180, 100, 150);
    noFill();
    stroke("white");
    strokeWeight(5);
    line(100, 0, 100, 200);
}
function draw() {
    createTile(0, 0, "red", "cyan", "blue", "white");
    createTile(0, 200, "darkgreen", "yellow", "red", "white");
    createTile(0, 200, "darkblue", "magenta", "red", "white");
    createTile(200, -400, "orange", "yellow", "red", "white");
    createTile(0, 200, "green", "cyan", "blue", "white");
    createTile(0, 200, "blue", "yellow", "red", "white");
    createTile(200, -400, "yellow", "magenta", "red", "white");
    createTile(0, 200, "lightgreen", "yellow", "red", "white");
    createTile(0, 200, "lightblue", "cyan", "blue", "white");
}