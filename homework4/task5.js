function specialReverse(string, letter) {
  return string
    .split(" ")
    .map((it) =>
      it.charAt(0) === letter
        ? it.split("").reverse().toString().replaceAll(",", "")
        : it
    )
    .toString()
    .replaceAll(",", " ");
}

console.log(specialReverse("word searches are super fun", "s")); //"word sehcraes are repus fun"
console.log(specialReverse("first man to walk on the moon", "m")); //"first nam to walk on the noom"
