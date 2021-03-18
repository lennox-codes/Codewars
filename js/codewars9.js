//6kyu //Took longer than expected
//https://www.codewars.com/kata/55b3425df71c1201a800009c
function stat(strg) {
  if (strg === "") return strg;
  let resultInSeconds = strg
    .split(", ")
    .map((char) => char.split("|"))
    .map((char) =>
      Number(char[0] * 3600 + Number(char[1]) * 60 + Number(char[2]))
    );

  const range =
    Math.max.apply(null, resultInSeconds) -
    Math.min.apply(null, resultInSeconds);

  const average = Math.floor(
    resultInSeconds.reduce((a, b) => a + b, 0) / resultInSeconds.length
  );

  const length = resultInSeconds.length;
  const sortedResult = resultInSeconds.slice().sort((a, b) => a - b);

  const median =
    length % 2 !== 0
      ? sortedResult[Math.ceil(length / 2) - 1]
      : Math.floor(
          (sortedResult[length / 2 - 1] + sortedResult[length / 2]) / 2
        );

  return `Range: ${humanReadable(range)} Average: ${humanReadable(
    average
  )} Median: ${humanReadable(median)}`;
}

//Utility Function
function humanReadable(seconds) {
  let hour = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds % 3600) / 60);
  let second = Math.floor(((seconds % 3600) % 60) % 60);
  let result = [hour, minute, second];

  result = result
    .map((char) => {
      if (char.toString().length == 1) return "0" + char.toString();
      else return char.toString();
    })
    .join("|");
  return result;
}

console.log(stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"));
console.log(stat(""));

//Find the missing letter
//https://www.codewars.com/kata/5839edaa6754d6fec10000a2
function findMissingLetter(array) {
  let count = 0;
  let index;
  while (index === undefined) {
    if (array[count].charCodeAt() - array[count + 1].charCodeAt() <= -2)
      index = count;
    else count++;
  }
  return String.fromCharCode(array[index].charCodeAt() + 1);
}

findMissingLetter(["a", "b", "c", "d", "f"]);
console.log(findMissingLetter(["O", "Q", "R", "S"]));

//isPrime
//https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
function isPrime(num) {
  let sqrt = Math.sqrt(num);
  if (Number.isInteger(sqrt)) return false;
  for (let i = 2; i < sqrt; i++) {
    if (num % i == 0) return false;
  }
  return num > 1;
}

// function topThreeWords(text) {
//   let words = text
//     .toLowerCase()
//     .split(", ")
//     .map((char) => {
//       return char.replaceAll(".", "").replaceAll("?", "");
//     })
//     .join(" ")
//     .split(" ");
//   console.log(words);

//   let obj = {};
//   for (let i = 0; i < words.length; i++) {
//     if (obj[words[i]]) obj[words[i]]++;
//     else obj[words[i]] = 1;
//   }
//   console.log(obj);
// }

// let text = `In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`;

// topThreeWords(text);

function digPow(n, p) {
  let Increment = p;
  let numStr = n.toString();
  let result = 0;
  for (let i = 0; i < numStr.length; i++) {
    result += Number(numStr.slice(i, i + 1)) ** Increment;
    Increment++;
  }

  let k = 0;
  while (k <= Math.sqrt(result)) {
    if (result !== n * k) k++;
    else return k;
  }
  return -1;
}

//Try using recursion to solve this and you should be gucci
function digital_root(n) {
  return n.toString().length == 1
    ? n
    : digital_root(
        n
          .toString()
          .split("")
          .map((num) => Number(num))
          .reduce((a, b) => a + b, 0)
      );
}

function partsSums(arr) {
  let result = [];
  for (let i = arr.length; i >= 1; i--) {
    let expression = arr.slice(-i).reduce((a, b) => a + b, 0);
    console.log(arr.slice(-i));
    result.push(expression);
  }
  result.push(0);
  return result;
}

partsSums([0, 1, 3, 6, 10]);

//Duplicate Count
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript
function duplicateCount(text) {
  text = text.toLowerCase().split("");
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    if (obj[text[i]]) obj[text[i]]++;
    else obj[text[i]] = 1;
  }

  let count = 0;
  for (let key in obj) {
    if (obj[key] > 1) count++;
  }

  return count;
}

//Bit Counting
function countBits(num) {
  let count = 0;
  let result = [];
  while (num / 2 > 0) {
    result.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  result.forEach((num) => {
    if (num == 1) count++;
  });
  return count;
}

function firstDup(s) {
  s = s.toString().split("");
  dupArray = [];
  nonDupArray = [];
  s.forEach((char) => {
    if (!dupArray.includes(char)) dupArray.push(char);
    else nonDupArray.push(char);
  });
  console.log(dupArray);
  console.log(nonDupArray);

  for (let i = 0; i < dupArray.length; i++)
    if (nonDupArray.includes(dupArray[i])) return dupArray[i];
}

console.log(firstDup("tweet"));

function averageString(str) {
  let numData = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
  };

  let count = 0;
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "zero") continue;
    else if (!numData[str[i]]) return "n/a";
    else {
      count += numData[str[i]];
    }
  }

  let average = Math.floor(count / str.length);
  for (let key in numData) {
    if (numData[key] == average) return key;
  }
}

averageString("zero nine five two");

console.log([1, 2, 3, 5, 6, 6].includes(2 + 3));
