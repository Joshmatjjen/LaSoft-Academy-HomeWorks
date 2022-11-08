function quadraticEquation(a, b, c) {
  let result;
  try {
    if (
      typeof a === "number" &&
      typeof b === "number" &&
      typeof c === "number"
    ) {
      const quad1 = (
        (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) /
        (2 * a)
      ).toFixed(3);
      const quad2 = (
        (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) /
        (2 * a)
      ).toFixed(3);

      if (!isFinite(quad1) || !isFinite(quad1)) {
        result = "not a quadratic equation";
      } else {
        result = `x1=${Math.floor(quad1)}, x2=${Math.floor(quad2)}`;
      }
    } else {
      result = "missing parameter";
      throw new Error("Some parameter is missing");
    }
  } catch (error) {
    console.error(error);
  } finally {
    return result;
  }
}

console.log(quadraticEquation(1, 5, 4)); // x1=-1, x2=-4
console.log(quadraticEquation(1, 5)); //missing parameter
console.log(quadraticEquation(0, 1, 5)); //not a quadratic equation
