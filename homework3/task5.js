function getFibonacci(num) {
  const sequence = [0, 1];
  if (typeof num === "number") {
    for (let i = 2; i <= num; i++) {
      // e.g getFibonacci(10)
      // e.g process: 0 + 1, 1 + 1, 2 + 1 , 3 + 5, 8 + 5, 13 + 8, 21 + 13, 34 + 21 = 55
      sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[num];
  } else {
    return "Value in the argument is not an number";
  }
}

console.log(getFibonacci(10));
