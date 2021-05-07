//Magnetic Particules in Boxes
function doubles(maxk, maxn) {
  // your code
}

function high(x) {
  scores = x.split(" ").map((word) => {
    return word
      .split("")
      .reduce((a, c) => c.toLowerCase().charCodeAt() - 96 + a, 0);
  });

  return x.split(" ")[scores.indexOf(Math.max(...scores))];
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("aaa b"));
console.log(high("d bb"));
