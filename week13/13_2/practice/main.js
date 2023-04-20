let pos;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    pos = 0.0;
    inc = 3.0;

    pos2 = 0.0;
    inc2 = 9.0;
}

function draw() {

    fill("gold")
    translate(width/2, height/2);

    let mySinVal = sin(pos);
    let mySinVal2 = sin(pos2);

    amplified = mySinVal * 200;
    amplified2 = mySinVal2 * 1000;

    for (x = 0; x <= 360; x = x + 5) {
        curve(0, 5, 250, amplified2, amplified, 200, amplified, 200);
        rotate(x);
    }

    fill("blue");
    for(x = 0; x <= 360; x = x + 5) {
        curve(0, 10, 50, 20, amplified, 10, 10, 10);
        rotate(x);
    }

    pos = pos + inc;


}