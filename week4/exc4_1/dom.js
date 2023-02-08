//slect empty div and assign to a variable 
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// put a h1 inside
//create a new element 
const heading = document.createElement("h1");
heading.innerHTML = "Llamas can grow as much as 6 feet tall!";
 heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    document.body.style.backgroundColor = "magenta";
} 