function plusFactory(num) {
  return num;
}
const plusFive = (value) => plusFactory(value + 5);
console.log(plusFive(2)); // ➞ 7
const plusTen = (value) => plusFactory(value + 10);

console.log(plusTen(188)); // ➞ 198
console.log(plusFive(plusTen(0))); // ➞ 15
