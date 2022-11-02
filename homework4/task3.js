function arrayDivisionFactory(num) {
  return num;
}

const divide5 = (arr) => arr.map((it) => it / arrayDivisionFactory(5));
console.log(divide5([10, 20, 25])); // [2, 4, 5]
const divide3 = (arr) => arr.map((it) => it / arrayDivisionFactory(3));
console.log(divide3([6, 21, 27])); // [2, 7, 9]
