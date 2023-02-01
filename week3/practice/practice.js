// a function is a action/verb, we have been learning variables. Your action could result in a new variable etc... method (fuction that belongs to an object or class) 

//desired Date is a parameter that is only local to this code bloack
//older method

/* 
function showDate(desiredDate) { //[parameter is being passed
    console.log("the date is");
    console.log(desiredDate);
}
//call it
showDate("jan 30"); //the argument is "jan 30" ---it will be used as the parameter
alert("running show date again");
showDate("jan 31");
//this is an example of reusing the function 

//why create a function...so you dont have to repeat the same action over and over again DRY (DONT REPEAT YOURSELF) 


const addNumbers = function (number1, number2) {
    console.log(typeof number2);
    //type of out put variable
    if (typeof number1 !== "number" || typeof number2) {
        alert("not a number");
        return; // exit out of the function
    }
    console.log("the result is", number1 + number2 !== "number"); 
}
addNumbers(3, 2);
addNumbers(5, 9);
addNumbers(13, "bob") */


/* //fat arrow function - diff is how this is used - will show another example later

const multiplyNumbers = (number1, number2) => {
    const result = number1 * number2;
    return result;
}

console.log("multiply 3 * 15", multiplyNumbers(3 * 15)); */