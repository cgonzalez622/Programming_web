let img;

function preload() {
  img = loadImage('img/sakura.png');
}
function setup() {
  createCanvas(500, 500);
  img.resize(img.width / 4, img.height / 4);
  
  background(255);
}

function draw() {
  const scalar = .5; 
  const pg = colorize();
  image(pg,
        random(-pg.width, width),
        random(-pg.height, height),
        pg.width * scalar,
        pg.height * scalar);
  pg.remove();
}

function colorize(){
  const pg = createGraphics(img.width, img.height);
  const randomColor = color(random(255), 0, random(255));
  
  img.loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++){
      let i = (y * 4) * img.width + x * 4;

      if(img.pixels[i + 3] > 0){    
        pg.set(x, y, randomColor);
      }
    }
  }
  pg.updatePixels();
  return pg;
}

function mousePressed() {

    loop();
}
function mouseReleased() {
    noLoop();
}