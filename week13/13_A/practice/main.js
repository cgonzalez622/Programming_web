const squareSize = 25;
const squareLife = 125;
const fireSquares = [];
let redColor;
let yellowColor;
let stars;

function setup() {
    createCanvas(windowWidth, windowHeight);
    redColor = color(255, 0, 0);
    yellowColor = color(255, 255, 0);
    stars = createGraphics(width, height);
    stars.background(32, 0, 64);
    for (let i = 0; i < 100; i++){
        stars.stroke(255);
        stars.point(random(width), random(height));
    }

}

function draw() {
    image(stars, 0, 0);
    //ground
    noStroke();
    fill(1, 50, 32);
    rect(0, height * .65, width, height * .35);

    //log 
    stroke(0); 
    fill(160, 82, 45);

    //width and height reffering to x and y axsis/values
    rect(width * .25, height * .75, width * .5, height * .09)
    rect(width * .3, height * .7, width * .4, height * .06)

    //number of squares concentrated
    if (random(1) < .9){

        const x = randomGaussian(width / 2, 50);

        fireSquares.push(new FireSquares (x, height * .75));
    }

    for(let i = fireSquares.length - 1; i >= 0; i--) {
        const fireSquare = fireSquares[i];
        fireSquare.draw();
    
        if(fireSquare.y < squareSize || fireSquare.life < 0){
            fireSquares.splice(i, 1);
        }
    }
}

class FireSquares {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speed = map(abs(width/2 - this.x), 200, 0, 1, 3.5);
        this.color = lerpColor(redColor, yellowColor, random(1));
        this.life = squareLife;
    }
    draw() {

        this.y -= this.speed;
        this.life--;
        const alpha = map(this.life, 0, 25, 0, 255);

        fill(red(this.color), 
            green(this.color), 
            blue(this.color), 
            alpha);
        noStroke();
        square(this.x, this.y, squareSize);
    }
}

