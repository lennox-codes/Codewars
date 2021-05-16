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

function likes(names) {
  if (names.length === 0) return "no one likes this";
  else if (names.length === 1) return `${names[0]} likes this`;
  else if (names.length === 2) return `${names[0]} and ${names[1]} likes this`;
  else if (names.length === 3) return `${names[0]}, ${names[1]}, and ${names[2]} likes this`;
  else return `${names[0]}, ${names[1]} and ${names.length - 2} likes this`;
}

function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 5)}-${numbers.slice(5)}`;
}

function nthFibo(n) {
  let startSeq = [0, 1];
  for (let i = 0; i < n; i++) {
    startSeq.push(startSeq[i] + startSeq[i + 1]);
    if (startSeq.length === n) break;
  }
  return startSeq[n - 1];
}

console.log(nthFibo(140));

function splitString(str) {
  str = str.length % 2 === 0 ? str : str + "_";
  let len = str.length;
  let result = [];

  for (let i = 0; i < len / 2; i++) {
    if (str.length === 1) str + "_";
    result.push(str[0] + str[1]);
    str = str.slice(2);
    console.log(str);
  }
  return result;
}

console.log(splitString("a"));

function countSheeps(arrayOfSheep) {
  return `There are ${arrayOfSheep.join("").match(/true/g).join("").length / 4} sheeps in total`;
  // let count = 0;
  // arrayOfSheep.forEach((sheep) => (sheep ? count++ : count));
  console.log(eggs);
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(array1));

function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}

console.log(largestPairSum([10, 14, 2, 23, 19]));

function greetDevelopers(list) {
  return list.map((person) => ({
    person: person.firstName,
    lastName: person.lastName,
    country: person.country,
    continent: person.continent,
    age: person.age,
    language: person.language,
    greeting: `Hi, ${person.firstName}, what do you like the most about ${person.language}?`,
  }));
}

var list1 = [
  { firstName: "Sofia", lastName: "I.", country: "Argentina", continent: "Americas", age: 35, language: "Java" },
  { firstName: "Lukas", lastName: "X.", country: "Croatia", continent: "Europe", age: 35, language: "Python" },
  { firstName: "Madison", lastName: "U.", country: "United States", continent: "Americas", age: 32, language: "Ruby" },
];

console.log(greetDevelopers(list1));

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) return arr[i + 1];
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
function solve(arr) {
  let result = [];
  arr.reverse().forEach((num) => (!result.includes(num) ? result.push(num) : result));
  return result;
}

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i, j);
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
};

console.log(twoSum([3, 2, 3], 6));
