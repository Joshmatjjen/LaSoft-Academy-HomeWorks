let car = "audi";
let bike = "cannondale";

function log() {
  let bike = "specialized";
  car = "jeep";

  function inner() {
    let plane = "boeing";

    console.log(car); // jeep   // Reason: Because the variable "car" was set to a new value: "jeep"

    console.log(bike); // specialized  // Reason: Because the new variable "bike" override the variable outside the function

    console.log(plane); // boeing // Reason: Because the new variable "plane" was set to boeing inside the function
  }

  console.log(inner); // [Function: inner]  // Reason: Because it is returning a function called inner

  return inner;
}

console.log(car); // audi // Reason: Since the console.log is called outside the function is get the value of the variable "car" which was decleared outside the function

console.log(bike); // cannondale //  Reason: Since the console.log is called outside the function is get the value of the variable "bike" which was decleared outside the function

var logger = log();
logger();

console.log(car); // jeep // Reason: Since the function has being called before the console.log is it get the new value of the variable if there where changes inside the function

console.log(bike); // cannondale // Reason: Since the function has being called before the console.log is it get the new value of the variable if there where changes inside the function

inner();
