function pickRandomNum(randomArr, numPick) {
  let result = [];

  if (
    randomArr instanceof Array &&
    randomArr?.length > 0 &&
    typeof numPick === "number"
  ) {
    for (i = 0; i < numPick; i++) {
      result.push(randomArr[Math.floor(Math.random() * randomArr.length)]);
    }

    return result;
  } else {
    return "Values in the argument is not correct";
  }
}

const originalArray = [12, 34, 23, 56];

console.log(pickRandomNum(originalArray, 2));
console.log(pickRandomNum(originalArray, 3));
