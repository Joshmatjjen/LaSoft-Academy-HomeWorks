function sumOfArray(randomArr) {
  if (randomArr instanceof Array && randomArr?.length > 0) {
    return randomArr.reduce((acc, value) => {
      return (acc += value);
    }, 0);
  } else {
    return "Value is the argument is not an array";
  }
}

const originalArray = [12, 34, 23, 56];

console.log(sumOfArray(originalArray));
