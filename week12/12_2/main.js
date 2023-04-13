let song;


function preload() {
    song = loadSound("Servu.mp3");
}

function setup() {
    createCanvas(200, 200);
    song.play();
}

function draw() {
    background(0);
}