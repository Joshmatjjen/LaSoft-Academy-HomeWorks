const a = {
  apples: 2,
  grapefruits: 4,
  pineapple: 1,
};

const proxy = new Proxy(a, {
  get: function (target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      return "I have no such fruits";
    }
  },
});

console.log(proxy.apples); // 2
console.log(proxy.oranges); // "I have no such fruits"
