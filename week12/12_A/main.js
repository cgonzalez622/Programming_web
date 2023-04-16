//let pad1;

let freqs = [100, 200, 300, 400]; //frequencies 
let keys = [65, 83, 68, 70] // keys trigger the sounds
let pads = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

    for(let i = 0; i < freqs.length; i++) {
        pads.push(new Pad(10 + (160 * i), 10, freqs[i]));
        // this specific code will create all of the 4 pads
    }


/*  test pad   pad1 = new Pad(10, 10, 130); */

}

function draw() {
    //ensure that the draw() function only tries to access the elements of the pads array after they have been properly initialized in the setup() function
    if (pads.length > 0) {
        for(let i = 0; i < freqs.length; i++) {
            pads[i].draw();
        }
    }

}

function keyPressed() {
    //sequential search 
    for(let i = 0; i < keys.length; i++){
        if(keyCode === keys[i]) {
            pads[i].play();
        }
    }
}

class Pad {
    constructor(x, y, freq) {
        //can set up the input squares here

        this.x = x;
        this.y = y;
        this.freq = freq;

        //oscillator, envelope, amplitude objects 

        this.osc = new p5.Oscillator();
        this.osc.amp(0);
        this.osc.setType("sine");
        this.osc.start();

        //envelope 
        this.env = new p5.Env();
        this.env.setADSR(0.001, .1, .2, .1);
        this.env.setRange(3, 0);

        this.analyzer = new p5.Amplitude();
        this.analyzer.setInput(this.env);

    }
    draw() {     
        let level = this.analyzer.getLevel();
        let levelHeight = map(level, 0, 1, 0, 150);

        fill ("orange");
        rect(this.x, this.y, 150, 150);

        //was unable to get the levels to show, not sure why....
        fill ("yellow");
        rect(this.x, this.y + 150 - levelHeight, 150, levelHeight);
    }

    play(){
        this.osc.start();
        this.osc.freq(this.freq);
        this.env.play(this.osc);
    }


}