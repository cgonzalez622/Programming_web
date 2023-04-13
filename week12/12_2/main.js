var song;

function setup() {
    createCanvas(200, 200);
    song = loadSound("Servu.mp3", loaded);

}

function loaded() {
    button = createButton("play");
    button.mousePressed(togglePlaying);
    console.log("loaded");
}

function draw() {
    background(0);
}