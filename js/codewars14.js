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

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function multiply(arr) {
  return arr.reduce((a, c) => a * c, 1);
}

console.log(multiply([1, 2, 3, 4]));

// Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
function ageStats(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max, max - min];
}

console.log(ageStats([1, 2, 3, 5]));

// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6
function sumExceptMinAndMax(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(1, arr.length - 1)
    .reduce((a, b) => a + b, 0);
}

console.log(ageStats([1, 2, 3, 5]));

console.log(sumExceptMinAndMax([6, 2, 1, 8, 10]));

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.lastIndexOf(arr[i]) === arr.indexOf(arr[i])) return arr[i];
  }
}

console.log(findUniq([1, 2, 1, 1, 1, 1]));
