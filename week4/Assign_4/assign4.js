let myCards = [];
const rectWidth = 300;
const rectHeight = 200;
let startingX = 100;
let startingY = 100;

function setup() {
  createCanvas(1800, 1400);
  background(0);
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i < 4; i++) {
      rect(startingX, startingY, rectWidth, rectHeight);
      myCards.push({
        x: startingX,
        y: startingY,
      });
      startingX += 350;
    }
    startingY += 350;
    startingX = 100;
  }
  console.log(myCards);
}
/* function mousePressed() {
  console.log(myCards);
  for (let k = 0; myCards.length; k++) {
    if (
      mouseX > myCards[k].x &&
      mouseX < myCards[k].x + rectWidth &&
      mouseY > myCards[k].y &&
      mouseY < myCards[k].y + rectHeight
    ) {
      console.log("square has been hit");
    }
  }
} */
// command shift and p prettier and command d selects everything below
