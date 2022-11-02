function infiniteSum(num) {
  function sum(n) {
    num += n;
    return sum;
  }
  sum.get = function () {
    return num;
  };
  return sum;
}

console.log(infiniteSum(5)(3)(4).get()); // 12
console.log(infiniteSum(6)(2)(4)(12).get()); // 24
