//timer you may want a timer to surpise end user 
// set timeout - only happens once
/* function alertUser(name) {
    window.alert("surprise " + name + "!");
} */
//window.setTimeout(alertUser, 5000); // arguement 1 is a function and the 2nd is a delay in mil seconds

//set interval - happens 5ever
/* const mysetInterval = setInterval(alertUser,5000, "Jimmy"); //jimmy is the argument


newButton.addEventListener("click", () => {
    console.log("clearing timeout");
    clearInterval(myInterval);
}) */
//time out is an idea or refernce
//clear timeout - "garbage collection"

// classed and OOP Object Orient Programming 

/* class Mouse {
    constructor (weight, color, surface, finish, connection) {
        this.weight = weight; 
        this.color = color;
        this.surface = surface;
        this.finish = finish;
        this.connection = connection;
    }
    click () {
        console.log("mouse clicked");
    }
}

const myWhiteMouse = new Mouse(0.25, "white", "tactile", "glossy", "bluetooth");

console.log(myWhiteMouse);
myWhiteMouse.click(); */
//constructor 
//properties
//classes vs instances

let startDotLocation = 50;

function setup() {
    createCanvas(1000, 800);
    background(0);
    
}
function draw() {
    const myDot = new Dot(startDotLocation, 500, "blue");
    myDot.show();
    startDotLocation++;

}
class Dot {
    constructor(startX, startY, color) {
        this.x = startX;
        this.y = startY;
        this.color = color;
    }
    show () {
        if(this.x >= 500) {
           fill("red");
        }
        else {
        fill(this.color);
        } 
        circle(this.x, this.y, 100);
    }
}


// quiz info
// variables 
    //what type of var are passing a true or false - boolean
    //what would be the best way to create a list of cars 

//find kens car for(let i = 0; i < cars.length; i++) {
    //if(cars[i].owner ==="ken") [references the index number]

// age = 16 , assignment operator
//age === 16, equality operators (if, for, else, conditional statements)
//need to know how push works as well 



//placing your cards in diff formatt 

