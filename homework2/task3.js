function checkLastNumber(num1, num2) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    if (num1 - Math.floor(num1) !== 0 || num2 - Math.floor(num2) !== 0) {
      // If number contains a decimal
      return num1.toString().slice(-1) === num2.toString().slice(-1);
    } else {
      return num1 % 10 === num2 % 10;
    }
  } else {
    return (
      false,
      "(Either of one of both argument is not a number or positive number)"
    );
  }
}

console.log(checkLastNumber(26, 6)); //true
console.log(checkLastNumber(26, 148)); //false

console.log(checkLastNumber(2.67, 4027)); // true

console.log(checkLastNumber(2.67, 3020.1)); // false

// console.log(checkLastNumber(26, -146)); //false
