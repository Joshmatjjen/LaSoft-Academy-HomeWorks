function checkNumberValues(digit) {
  let sum, hasSameDigit, areHalvesEqual;
  // Finds a sum of digits in the number

  const newDigit = digit.toString().split("");
  sum = newDigit.reduce((acc, value) => {
    return acc + parseInt(value);
  }, 0);

  // checks whether the number contains the same number twice
  hasSameDigit = newDigit.length !== new Set(newDigit).size;

  // checks whether the sum of first two(2) digits equals the sum of second two digits
  let digitPair = [];
  const numPair = 2;

  if (newDigit.length > numPair) {
    for (let i = 0; i < newDigit.length; i += numPair) {
      digitPair.push(
        newDigit.slice(i, i + numPair).reduce((acc, value) => {
          return acc + parseInt(value);
        }, 0)
      );
    }
    areHalvesEqual = digitPair[0] === digitPair[1];
  } else {
    areHalvesEqual = false;
  }

  return {
    sum,
    hasSameDigit,
    areHalvesEqual,
  };
}

console.log(checkNumberValues(5154));
