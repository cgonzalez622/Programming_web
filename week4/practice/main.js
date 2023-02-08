
//Document Object Model 
//If you are using chrome command+option+j opens the console

//selecting elements on the DOM
const myDivTarget = document.getElementById("target"); // no need for #
myDivTarget.style.color = "red";
myDivTarget.style.background = "yellow";
myDivTarget.innerHTML = "Bob"; //anything in the html will be replaced by "bob"
myDivTarget.addEventListener("click", () => {
    window.alert("clicked my div");
});
console.log("here", myDivTarget)

function clickHandler () {
    console.log("clicked");
}

//select, modify, a method 