function getFactorial(num) {
  let fact = 1;
  if (typeof num === "number") {
    for (n = 2; n <= num; n++) {
      // e.g 1 * 2 * 3 * 4 * 5;
      // e.g process:  1 * 2, 2 * 3, 6 * 4, 24 * 5 = 120
      fact = fact * n;
    }
    return fact;
  } else {
    return "Value in the argument is not an number";
  }
}

console.log(getFactorial(5));
