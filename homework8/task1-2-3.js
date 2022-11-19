let range = {
  from: 1,
  to: 10,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

const oddNumbers = [],
  evenNumbers = [];
for (let num of range) {
  // Task 1
  console.log(num); // 1, then 2, 3, 4, 5

  if (num % 2 !== 0) {
    // Task 2
    oddNumbers.push(num);
  } else {
    // Task 3
    evenNumbers.push(num);
  }
}

console.log(oddNumbers); // Task 2 result =  [1, 3, 5, 7, 9];
console.log(evenNumbers); // Task 3 result =  [2, 4, 6, 8, 10];
