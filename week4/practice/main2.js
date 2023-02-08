
let startX = 100;
let diameter = 100;
function setup() {
    createCanvas(800, 800);
}
function draw() {
    background("blue");
    fill("white");
    circle(startX, 150, 100);
    startX++;
}
//mouse press function

function mousePressed() {
    console.log("checkin' the condition", dist(mouseX, mouseY, startX, 150));
    if (dist(mouseX, mouseY, startX, 150) <= 50) {
        console.log ("clicked the circle");
    }



    /* if(mouseX <= (startX + boxWidth) && mouseX >= startX && mouseY >= 100 && mouseY <= 300) {
        console.log("you are getting warm");
    } */// width + x is the right side 

    // this is using a function that is pausing life that is checking mouse x and y and checking the known variables that have been set
}

//dist()