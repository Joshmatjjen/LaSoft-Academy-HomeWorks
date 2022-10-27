const strStartWith = "if";

function checkIfStart(str) {
  if (typeof str === "string") {
    if (str.indexOf(strStartWith) === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(checkIfStart("if I could fly")); //true
console.log(checkIfStart("iffy stuff")); //true
console.log(checkIfStart("hello world")); //false
