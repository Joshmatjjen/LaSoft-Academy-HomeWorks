const matrixArr = [
  [1, 2, 3, 4], // → → → ↴
  [12, 13, 14, 5], // ↱ → ↴   ↓
  [11, 16, 15, 6], // ↑   ↑  ↲   ↓
  [10, 9, 8, 7], // ↑ ←  ← ↲
];

function unravelArr(arr) {
  return [
    ...arr
      .toString()
      .split(",")
      .sort((a, b) => a - b),
  ].map((it) => parseInt(it, 10));
}

console.log(unravelArr(matrixArr)); //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// NOTE: initial array should stay the same
