const DOWN = "down";
const UP = "up";
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatches: 0,
    attempts: 0,
    waiting: false
};
let cardFaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage("cardback/cardback.jpg");
    cardFaceArray = [
        loadImage("imgs/eagel.jpg"),
        loadImage("imgs/flam.jpg"),
        loadImage("imgs/hawk.jpg"),
        loadImage("imgs/hum.jpg"),
        loadImage("imgs/kiwi.jpg"),
        loadImage("imgs/owl.jpg"),
        loadImage("imgs/macaw.jpg"),
        loadImage("imgs/sparrow.jpg")
    ]
}
function setup() {
    createCanvas(1600, 1100);
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it dosent get randomly selected again
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 350;
        }
        startingY += 250;
        startingX = 100;
    }

}
function draw() {
    background("black");
    if (gameState.numMatches === gameState.totalPairs) {
        fill("yellow");
        textSize(66);
        text("you win!", 1000, 57);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }

    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill("white");
    textSize(36);
    text("attempts " + gameState.attempts, 550, 75);
    text("matches " + gameState.numMatches, 550, 40);
}

function mousePressed () {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        //first check flipped cards length, and then we can trigger the filp
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log("flipped", cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        //cards match time to score
        // mark cards as mathced so they dont flip back
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            //increment the score
            gameState.numMatches++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x; //properties specific to your class
        this.y = y;
        this.width = 300;
        this.height = 200;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show () { //like functions that are specific to your class
        if (this.face === UP || this.isMatch) {
            fill("gray");
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y); 
        } else {
            fill("red");
            rect(this.x, this.y, this.width, this.height, 10); 
            image(cardBack, this.x, this.y);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }

    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face =DOWN;
        }
        this.show();
    }

}
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it 
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}