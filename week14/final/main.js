let model_url = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/"
let pitch;
let audioContext;
let mic;
let freq = 0;
let threshold = 1;

let notes = [
    {note: "A", freq: 440},
    {note: "E", freq: 329.6276},
    {note: "C", freq: 261.6256},
    {note: "G", freq: 391.9954}
]


function setup() {
    createCanvas(windowWidth, windowHeight);
    audioContext = getAudioContext();
    mic = new p5.AudioIn();
    mic.start(listening);
}

//this function is used to see if the code is listening to the input sound (and is connected with the ml5 pitch detection)
function listening() {
    pitch = ml5.pitchDetection(
        model_url,
        audioContext,
        mic.stream,
        modelLoaded,
      );
}

//connecting pitch with freq
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

    pitch.getPitch(gotPitch);
}

function draw(){
    background(0);
    textAlign(CENTER,CENTER);
    fill(255);
    textSize(32);
    text(freq.toFixed(2), width/2, height - 150);

    //loops through all of the notes
    let closestNote = null;
    let recordDiff = Infinity;

    for(let i = 0; i < notes.length; i++){
        let diff = abs(freq - notes[i].freq);
        if (abs(diff) < abs(recordDiff)) {
            closestNote = notes[i];
            recordDiff = diff;
        }
    }

    textSize(64);
    text(closestNote.note, width/2, height - 50);


 //allows for the visual tuning of the array of notes
    let diff = recordDiff;
    let diam = map(abs(diff), 0, 100, 255, 0);

    ellipseMode(CENTER);
    fill(255, diam);
            if (abs(diff) < threshold) {
            fill(0, 255, 0);
        }
    ellipse(width/2, height/2, diam, diam);

}