let model_url = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/"
let pitch;
let audioContext;
let mic;
let freq = 0;


function setup() {
    createCanvas(400, 400);
    audioContext = getAudioContext();
    mic = new p5.AudioIn();
    mic.start(listening);
}

function listening() {
    console.log("listening");

    pitch = ml5.pitchDetection(
        model_url,
        audioContext,
        mic.stream,
        modelLoaded,
      );
}

function gotPitch(error, frequency) {
    if (error) {
        console.error(error);
    } else {
        if (frequency) {
            freq = frequency;
        }
    }
    pitch.getPitch(gotPitch);
}

function modelLoaded() {
    console.log("model loaded!");
    pitch.getPitch(gotPitch);
}

function draw(){
    background(0);
    textAlign(CENTER,CENTER);
    fill(255);
    textSize(64);
    text(freq.toFixed(2), width/2, height-100);

    //allows for tuning for A
    let diff = freq - 440;


    //let amt = map(abs(diff), 0, 100, 0, 1);
    //let r = color(255, 0, 0);
    //let g = color(0, 255, 0);
    //let col = lerpColor(g, r, amt);  
    //fill(col);
    //rect(200, 100, diff, 50); 

    let alpha = map(abs(diff), 0, 100, 255, 0);
    rectMode(CENTER);
    fill(255, alpha);
    stroke(255);
    strokeWeight(1);
        if (abs(diff) < 3) {
            fill(0, 255, 0);
        }
    rect(200, 100, 200, 50);

    stroke(255);
    strokeWeight(4);
    line(200, 0, 200, 200);

    noStroke();
    fill(255, 0, 0);
    if (abs(diff) < 3) {
        fill(0, 255, 0);
    }
    rect(200 + diff/10, 100, 10, 75); 



  
    

}