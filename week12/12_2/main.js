let song;
let slider;
let amp;

function setup() {
    createCanvas(500, 500, WEBGL);
    song = loadSound("Servu.mp3", loaded);
    amp = new p5.Amplitude();
    slider = createSlider(0, 1, 0.5, 0.01);
    describe('a white box rotating in 3D space');
}

function loaded() {
    button = createButton("play");
    button.mousePressed(togglePlaying);
    console.log("loaded");
}

function togglePlaying() {
    if (!song.isPlaying()) {
    song.play();
    button.html("pause");
    } else {
        song.pause();
        button.html("play");
    }
}

function draw() {
    background(255);
    let vol = amp.getLevel();
    let diam = map(vol, 0, 0.3, 10, 200);
    song.setVolume(slider.value());
    fill(255, 0, 0)
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(diam);
}