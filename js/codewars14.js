//Magnetic Particules in Boxes
function doubles(maxk, maxn) {
  // your code
}

function high(x) {
  scores = x.split(" ").map((word) => {
    return word.split("").reduce((a, c) => c.toLowerCase().charCodeAt() - 96 + a, 0);
  });

  return x.split(" ")[scores.indexOf(Math.max(...scores))];
}

// console.log(high("man i need a taxi up to ubud"));
// console.log(high("aaa b"));
// console.log(high("d bb"));

function longest(str) {
  let max = "";
  let current = "";
  str += " ";

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] <= str[i + 1]) {
      current += str[i];
    } else {
      current += str[i];
      if (current.length > max.length) max = current;
      current = "";
    }
  }
}

// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function multiply(arr) {
  return arr.reduce((a, c) => a * c, 1);
}

console.log(multiply([1, 2, 3, 4]));
