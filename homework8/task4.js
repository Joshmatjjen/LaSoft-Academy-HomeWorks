function argumentsLogger() {
  const result = [];
  for (let i = 0; i < arguments.length; i++) {
    result.push(`argument ${i}: ${arguments[i]}`);
  }
  return result.toString().replaceAll(",", "; ");
}

console.log(argumentsLogger(3, 6, 55, "some string")); // logs out "argument 0: 3; argument 1: 6; argument 2: 55; argument 3: some string;"
console.log(argumentsLogger([1, 2], "xyz", 365)); // logs out "argument 0: 1,2; argument 1: xyz; argument 2: 365;"
console.log(argumentsLogger()); // logs out ""
