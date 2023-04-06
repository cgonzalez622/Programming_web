let dim;

function setup() {
  createCanvas(800, 400);
  dim = width / 3;
  background(0);
  colorMode(HSB, 54, 35, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(10);
}

function draw() {
  background(0);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, random(54), random(90));
    ellipse(random(x), random(y), random(r), random(r));
    h = (h + 1) % 360;
  }
}
function mousePressed() {

    loop();
}
function mouseReleased() {
    noLoop();
}