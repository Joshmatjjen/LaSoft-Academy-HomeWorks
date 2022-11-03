const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

// Return your result as per the following rules:
// score <= 60:   "NOT TOO GOOD"
// 61 <= score <= 300:  "PRETTY GOOD"
// 301 <= score <= 599:  "VERY GOOD"
// score >= 600:  "THE BEST"

function getNameScore(name) {
  const score = name
    .toUpperCase()
    .split("")
    .reduce((acc, value) => {
      return (acc += scores[value]);
    }, 0);

  switch (true) {
    case score <= 60:
      return `Your score ${score}, which is NOT TOO GOOD`;
    case 61 <= score && score <= 300:
      return `Your score ${score}, which is PRETTY GOOD`;
    case 301 <= score && score <= 599:
      return `Your score ${score}, which is VERY GOOD`;
    case score >= 600:
      return `Your score ${score}, which is THE BEST`;
    default:
      return `Your score ${score}, which is NOT TOO GOOD`;
  }
}

console.log(getNameScore("robot")); //"Your score 979, which is THE BEST"
console.log(getNameScore("man")); // "Your score 575, which is VERY GOOD"
