function checkLastNumber(num1, num2) {
  if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    return num1 % 10 === num2 % 10;
  } else {
    return (
      false,
      "(Either of one of both argument is not a number or positive number)"
    );
  }
}

console.log(checkLastNumber(26, 6)); //true
console.log(checkLastNumber(26, 148)); //false
