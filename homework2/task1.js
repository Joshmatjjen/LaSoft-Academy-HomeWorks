function copyString(str, copyCount) {
  if (
    typeof copyCount === "number" &&
    copyCount > 0 &&
    typeof str === "string"
  ) {
    let newStr = str;
    for (let i = 0; i < copyCount - 1; i++) {
      newStr += str;
    }
    return newStr;
  }
  return "Sorry, either the first argument is not a string Or the second argument is not a positive number, Or both are wrong";
}

console.log(copyString("a", 1)); //’a’
console.log(copyString("a", 2)); //’aa’
console.log(copyString("a", 5)); //’aaaaa
