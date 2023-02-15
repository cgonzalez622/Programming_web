let startDotLocation = 50;

function setup() {
    createCanvas(1000, 800);
    background(0);
    
}
function draw() {
    const myDot = new Dot(startDotLocation, 500, "blue");
    myDot.show();
    startDotLocation++;

}
class Dot {
    constructor(startX, startY, color) {
        this.x = startX;
        this.y = startY;
        this.color = color;
    }
    show () {
        if(this.x >= 500) {
           fill("red");
        }
        else {
        fill(this.color);
        } 
        circle(this.x, this.y, 100);
    }
}