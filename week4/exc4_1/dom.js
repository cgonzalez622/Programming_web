//slect empty div and assign to a variable 
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// put a h1 inside
//create a new element 
const heading = document.createElement("h1");
heading.innerHTML = "hello class! it is a snowy day";
 heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    document.body.style.backgroundColor = "magenta";
} 