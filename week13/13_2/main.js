let horizontal = 50; // distance between each circle
let horizontal2 = 20; // distance between each circle
let horizontal3 = 10; // distance between each circle
let horizontal4 = 5; // distance between each circle
let waveWidth;
let angle = 0.0;
let amplitude = 100.0;
let pixelRepeats = 1500.0;
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  createCanvas(windowWidth, windowHeight);
  waveWidth = width + 1500;
  dx = (TWO_PI / pixelRepeats) * horizontal;
  yvalues = new Array(floor(waveWidth / horizontal));
}

function draw() {
  background("blue");
  calcWave();
  renderWave();
}

function calcWave() {
  // speed
  angle += 0.06;

  // For every x value, calculate a y value with sine function
  let x = angle;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(0);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {

    ellipse(x * horizontal2, height / 2 + yvalues[x], 16, 16);
    ellipse(x * horizontal3, height / 2 + yvalues[x], 16, 16);
    ellipse(x * horizontal4, height / 2 + yvalues[x], 16, 16);
    

    
  }
}