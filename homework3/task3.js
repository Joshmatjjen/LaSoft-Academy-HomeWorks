function splitDelimitedString(delimitedString) {
  if (typeof delimitedString === "string") {
    const newArray = delimitedString.split(",");
    const numArray = [];
    const strArray = [];
    for (let i = 0; i < newArray.length; i++) {
      if (isNaN(newArray[i]) === true) {
        strArray.push(newArray[i]);
      } else {
        numArray.push(newArray[i]);
      }
    }
    return [strArray, numArray];
  } else {
    return "Value is the argument is not a string";
  }
}

const delimitedString = "Red, Green, Blue, 1, White, 3, 4, 5, 7";

console.log(splitDelimitedString(delimitedString));
