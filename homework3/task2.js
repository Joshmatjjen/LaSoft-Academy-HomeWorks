function sumOfArray(randomArr) {
  let result;

  if (randomArr instanceof Array && randomArr?.length > 0) {
    result = randomArr.reduce((acc, value) => {
      return (acc += value);
    }, 0);
    return result;
  } else {
    return "Value is the argument is not an array";
  }
}

const originalArray = [12, 34, 23, 56];

console.log(sumOfArray(originalArray));
