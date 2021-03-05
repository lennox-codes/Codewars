function incrementString(string) {
  if (!Number.isInteger(Number(string.slice(string.length - 1))))
    return string + "1";

  stringArray = string.split("");
  let numberArray = [];
  let index = string.length - 1;

  while (Number.isInteger(Number(stringArray[index]))) {
    numberArray.unshift(string[index]);
    index--;
  }

  function addAndPreserveZeros(arr) {
    let length = arr.length;
    let str = arr.join("");
    let sum = Number(str) + 1;
    if (length > sum.toString().length) {
      return "0".repeat(length - sum.toString().length) + sum.toString();
    } else return sum.toString();
  }

  let nonNumber = stringArray.slice(0, index + 1);
  return nonNumber.join("") + addAndPreserveZeros(numberArray);
}

let nextQuestion =
  "https://www.codewars.com/kata/566b490c8b164e03f8000002/train/javascript";
function MakeRobot(name, health, speeds, tactics) {
  this.name = name;
  this.health = health;
  this.speeds = speeds;
  this.tactics = tactics;
}
//Using a constructor
function fight(robot1, robot2, tactics) {}

function findAll(n, k) {
  let list = [];
  let i = 0;
  while (i.toString().length <= k) {
    let length = i.toString().length;
    if (digitSum(i) == n && length == k && checkDigitIncrease(i)) list.push(i);
    i++;
  }
  list.sort((a, b) => a - b);
  return list.length == 0
    ? list
    : [list.length, list[0].toString(), list[list.length - 1].toString()];
}
//utility function
function digitSum(n) {
  var sum = 0;
  var string = n.toString();
  for (i = 0; i < string.length; i++) {
    sum = sum + Number(string.substring(i, i + 1));
  }
  return sum;
}
function checkDigitIncrease(num) {
  arr = num.toString().split("");
  let answer;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Number(arr[i + 1]) >= Number(arr[i])) answer = true;
    else return false;
  }
  return true;
}

console.log(findAll(27, 3));
console.log("eggs");
console.log(findAll(10, 3));
console.log(findAll(21, 4));

console.log(checkDigitIncrease(892293));
console.log(checkDigitIncrease(334));
console.log(checkDigitIncrease(12348901));

//mergesort but I cant use the array.sort predefined function in here.
function mergesorted(a, b) {
  let combinedArr = a.concat(b);

  for (let i = 0; i < combinedArr.length; i++) {
    for (let j = 0; j < combinedArr.length - 1; j++) {
      if (combinedArr[j] > combinedArr[j + 1]) {
        let temp = combinedArr[j + 1];
        combinedArr[j + 1] = combinedArr[j];
        combinedArr[j] = temp;
      }
    }
  }
  return combinedArr;
}

function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

class GroupByDifference {
  constructor(numbers) {
    this.numbers = numbers;
  }
  find = (n) => {
    let differenceList = [];
    let sortedList = this.numbers.sort((a, b) => a - b);
    for (let i = 0; i < sortedList.length; i++) {
      if (
        Math.abs(sortedList[i] - sortedList[i - 1]) <= n ||
        Math.abs(sortedList[i + 1] - sortedList[i]) <= n
      ) {
        differenceList.push(sortedList[i]);
      }
    }
    console.log(differenceList);
  };
}
//I am the one that is even falling my hand self
// function find(numbers, n) {
//   //search through to see if the differnece falls within that or more;
//   let differenceList = [];
//   numbers = numbers.sort((a, b) => a - b);
//   for (let i = 0; i < numbers.length; i++) {
//     if (
//       Math.abs(numbers[i] - numbers[i - 1]) <= n ||
//       Math.abs(numbers[i + 1] - numbers[i]) <= n
//     ) {
//       differenceList.push(numbers[i]);
//     }
//   }
//   console.log(differenceList);
// }

let numberTest = [5, 32, 5, 1, 31, 70, 30, 8];
// find(test, 3);
// //find(test, 10);
//let test1 = new GroupByDifference(numberTest).find(10);

function array_diff_very_fast(a, b) {
  let count = 0;
  b.forEach((item) => {
    let i = 0;
    while (item == a[i]) {
      count++;
      i++;
    }
    a.splice(i, count);
    count = 0;
  });
  //let length = a.length;
  console.log(a);
}

//one method
// function array_diff_very_fast(a, b) {
//   return (filteredList = a.filter((item) => !b.includes(item)));
// }

//another method
//array_diff_very_fast([2, 2, 2, 2, 2, 2], [2]);
//array_diff_very_fast([1, 2, 2, 2, 2, 3, 5, 5, 1, 2, 4, 5, 1], [2, 1, 5]); //expecting 3 and 4;

// function alphabetWar(fight) {
//   let leftStrength = 0;
//   let rightStrength = 0;
//   fight.split("").forEach((letter) => {
//     //left Side;
//     if (letter == "w") leftStrength += 4;
//     else if (letter == "p") leftStrength += 3;
//     else if (letter == "b") leftStrength += 2;
//     else if (letter == "s") leftStrength += 1;
//     //right side
//     else if (letter == "m") rightStrength += 4;
//     else if (letter == "q") rightStrength += 3;
//     else if (letter == "d") rightStrength += 2;
//     else if (letter == "z") rightStrength += 1;
//     else return 0;
//   });

//   if (rightStrength > leftStrength) return "Right side wins!";
//   if (leftStrength > rightStrength) return "Left side wins!";
//   else return "Let's fight again!";
// }

// console.log(alphabetWar("zdqmwpbs"));
// alphabetWar("abcde");
// alphabetWar("a");
// console.log(alphabetWar("zjjbxpfgd"));
// console.log(alphabetWar("xsnzstdb")); //should be left side wins

function alphabetWar(fight) {
  let hostileLeftLetters = ["w", "p", "b", "s"];
  let hostileRightLetters = ["m", "q", "d", "z"];
  let w, p, b, s, m, q, d, z;
  w = m = 4;
  p = q = 3;
  b = d = 2;
  s = z = 1;
  //letter == "t" || letter == "m"

  let leftStrength = 0;
  let rightStrength = 0;
  fight.split("").forEach((letter) => {
    //left Side;
    if (letter == "w") leftStrength += 4;
    else if (letter == "p") leftStrength += 3;
    else if (letter == "b") leftStrength += 2;
    else if (letter == "s") leftStrength += 1;
    //right side
    else if (letter == "m") rightStrength += 4;
    else if (letter == "q") rightStrength += 3;
    else if (letter == "d") rightStrength += 2;
    else if (letter == "z") rightStrength += 1;
    else return 0;
  });

  if (rightStrength > leftStrength) return "Right side wins!";
  if (leftStrength > rightStrength) return "Left side wins!";
  else return "Let's fight again!";
}
//review kata solutions for this url "https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript"

function encode(input) {
  let c = 0,
    d = 13,
    h = 26,
    s = 39;

  let encoded = input.map((item) => {
    if (item[1] == "c") return getCardValue(item[0]) + c;
    if (item[1] == "d") return getCardValue(item[0]) + d;
    if (item[1] == "h") return getCardValue(item[0]) + h;
    if (item[1] == "s") return getCardValue(item[0]) + s;
  });
  return encoded.sort((a, b) => a - b);
}

function decode(input) {
  let decoded = input
    .sort((a, b) => a - b)
    .map((number) => {
      if (number <= 12) return `${getCardSymbol(number)}c`;
      else if (number <= 25) return `${getCardSymbol(number - 13)}d`;
      else if (number <= 38) return `${getCardSymbol(number - 26)}h`;
      else if (number <= 51) return `${getCardSymbol(number - 39)}s`;
    });
  return decoded;
}

function getCardValue(letter) {
  let result;
  switch (letter) {
    case "A":
      result = 0;
      break;
    case "T":
      result = 9;
      break;
    case "J":
      result = 10;
      break;
    case "Q":
      result = 11;
      break;
    case "K":
      result = 12;
      break;
    default:
      result = Number(letter) - 1;
  }
  return result;
}

function getCardSymbol(num) {
  let result;
  switch (num) {
    case 0:
      result = "A";
      break;
    case 9:
      result = "T";
      break;
    case 10:
      result = "J";
      break;
    case 11:
      result = "Q";
      break;
    case 12:
      result = "K";
      break;
    default:
      result = num + 1;
  }
  return result;
}

console.log(encode(["Td", "8c", "Ks"]));
console.log(decode(encode(["Td", "8c", "Ks"])));

console.log(encode(["5h", "7c", "Qh", "Qs", "Ad"]));
console.log(decode(encode(["5h", "7c", "Qh", "Qs", "Ad"])));

console.log(encode(["Qh", "Ad", "5h"]));

console.log(encode(["8c", "Ks", "Td", "Ac"]));

console.log(decode([2, 12, 12, 20, 28, 30, 35, 41, 42, 45, 50]));
console.log(encode(decode([2, 12, 12, 20, 28, 30, 35, 41, 42, 45, 50])));

//give codewars a rest and build more applications. It don't matter if you don't rank too high. It's whatever.

var compose = function () {
  if (arguments.length == 1) return arguments[0];
  else if (arguments.length == 0) return undefined;
  else return Array.from(arguments).reduce((a, b) => b(a));
};

var doubleTheValue = function (val) {
  return val * 2;
};
var addOneToTheValue = function (val) {
  return val + 1;
};

//alternate solution to the question {
// var compose = function (value) {
//   for (let i = 1; i < arguments.length; i++) {
//     value = arguments[i](value);
//   }
//   return value;
// };

console.log(compose(5, doubleTheValue));
console.log(compose());
console.log(compose(5)); // should === 10
console.log(compose(5, doubleTheValue, addOneToTheValue)); // should === 11

function sevenSegmentNumber(number) {
  if (number.toString().length > 1) throw new Error();
  //Top Horizontal
  //Middle Horizontal
  //Bottom Horizontal
  //Top-Left Vertical
  //Top-Right Vertical
  //Bottom-Left Vertical
  //Bottom-Right Vertical
  let result;

  switch (number) {
    case 0:
      result = "1111101";
      break;
    case 1:
      result = "1010000";
      break;
    case 2:
      result = "0110111";
      break;
    case 3:
      result = "1010111";
      break;
    case 4:
      result = "1011010";
      break;
    case 5:
      result = "1001111";
      break;
    case 6:
      result = "1101111";
      break;
    case 7:
      result = "1010001";
      break;
    case 8:
      result = "1111111";
      break;
    case 9:
      result = "1011111";
      break;
  }
  return parseInt(result, 2);
}

sevenSegmentNumber(1);
let test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
test.forEach((number) => sevenSegmentNumber(number));

//not my proudest function but it works
function productFib(n) {
  let Sequence = [0]; //defines the starting sequence as given by the
  let results = [];
  let firstElement = 0;
  let secondElement = 1;
  for (let i = 0; i <= n - 2; i++) {
    Sequence.push(firstElement + secondElement);
    if (Sequence[i] * Sequence[i + 1] === n) {
      results.push(Sequence[i], Sequence[i + 1], true);
      i = n;
    } else if (Sequence[i] * Sequence[i + 1] > n) {
      results.push(Sequence[i], Sequence[i + 1], false);
      i = n;
    }
    firstElement = Sequence[i];
    secondElement = Sequence[i + 1];
  }
  return results;
}

// var peakHeight = function (mountain) {
//   let peak = 0;
//   let newMountain = mountain.map((region) =>
//     region.filter((character) => character !== " ")
//   );

//   for(let i = 0; i newMountain.lenght; i++)
//   console.log(newMountain);
// };

// var mountain = [
//   "^^^^^^        ".split(""),
//   " ^^^^^^^^     ".split(""),
//   "  ^^^^^^^     ".split(""),
//   "  ^^^^^       ".split(""),
//   "  ^^^^^^^^^^^ ".split(""),
//   "  ^^^^^^      ".split(""),
//   "  ^^^^        ".split(""),
// ];

// peakHeight(mountain);

function domainName(url) {
  let result;
  if (url.indexOf("www") !== -1) {
    let index = url.indexOf("www");
    url = url.slice(index + 4);
    result = url.slice(0, url.indexOf("."));
  } else if (url.indexOf("https://") == 0) {
    result = url.slice(8, url.indexOf("."));
  } else if (url.indexOf("http://") == 0) {
    result = url.slice(7, url.indexOf("."));
  } else result = slice(0, url.indexOf("."));
  return result;
}

function rot13(message) {
  let rot13Message = message
    .split("")
    .map((character) => {
      let ascii = character.charCodeAt();
      if (ascii >= 65 && ascii <= 77) return String.fromCharCode(ascii + 13);
      else if (ascii >= 78 && ascii <= 90)
        return String.fromCharCode(ascii - 13);
      else if (ascii >= 97 && ascii <= 109)
        return String.fromCharCode(ascii + 13);
      else if (ascii >= 110 && ascii <= 122)
        return String.fromCharCode(ascii - 13);
      else return character;
    })
    .join("");
  return rot13Message;
}

function add(a, b) {
  let finalSum = [];
  let carry = 0;
  //make both strings be of equal lengths by adding leading 0s to the shorter string;
  if (a.length > b.length) b = "0".repeat(a.length - b.length) + b;
  else if (b.length > a.length) a = "0".repeat(b.length - a.length) + a;

  //now convert both a and b of into arrays of numbers;
  a = a.split("").map((character) => Number(character));
  b = b.split("").map((character) => Number(character));

  //come up with an algorithm to add them up and you should be fine fine fine
  for (let i = a.length - 1; i >= 0; i--) {
    let digitsSum = carry + a[i] + b[i];
    if (i == 0) finalSum.unshift(digitsSum.toString());
    else if (digitsSum.toString().length > 1) {
      finalSum.unshift(digitsSum.toString().slice(1));
      carry = digitsSum.toString().Number(slice(0, 1));
    } else {
      carry = 0;
      finalSum.unshift(digitsSum.toString());
    }
  }
  return finalSum.join("");
}

//Return the max numbers of complete meals one can cook with their available ingredients based on the recipe provided
function cakes(recipe, available) {
  let amount = [];
  for (let ingredient in recipe) {
    //  if (!available[ingredient]) amount.push(0);
    amount.push(Math.floor(available[ingredient] / recipe[ingredient]) || 0);
    // }
  }
  console.log(amount.reduce((a, b) => Math.min(a, b)));
}

cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
// must return 0
cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);

function expandedForm(num) {
  let answer = [];
  num
    .toString()
    .split("")
    .forEach((digit, index, array) => {
      answer.push(digit + "0".repeat(array.length - 1 - index));
    });
  return answer.filter((num) => Number(num) !== 0).join(" + ");
}

expandedForm(5555550);
expandedForm(702383);

console.log(Number());

function anagrams(word, words) {
  let result = [];
  words.forEach((combination) => {
    if (checkAnagram(word, combination)) result.push(combination);
  });
  return result;
}

//Utility function
// function checkAnagram(mainWord, word) {
//   if (mainWord.length == word.length) {
//     mainWord.split("").forEach((letter) => {
//       if (word.includes(letter)) word = word.replace(letter, "");
//     });
//   } else return false;
//   return word == "";
// }

// console.log(checkAnagram("abbay", "baba"));

anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);
anagrams("laser", ["lazing", "lazy", "lacer"]);
anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);

function anagrams(word, words) {
  return words.filter(
    (w) => word.split("").sort().join("") == w.split("").sort().join("")
  );
}

// function fparseInt(string) {
//   let numberWords = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10,
//     eleven: 11,
//     twelve: 12,
//     thirteen: 13,
//     fourteen: 14,
//     fifteen: 15,
//     sixteen: 16,
//     seventeen: 17,
//     eighteen: 18,
//     nineteen: 19,
//     twenty: 20,
//     thirty: 30,
//     forty: 40,
//     fifty: 50,
//     sixty: 60,
//     seventy: 70,
//     eighty: 80,
//     ninety: 90,
//     hundred: 100,
//     thousand: 1000,
//     million: 1000000,
//   };

//   let result = [];
//   let sum = [];
//   let million = 0;
//   let thousand = 0;
//   let hundreds = 0;
//   string = string.replace(" and ", " ");
//   string = string.replace("-", " ");
//   string.split(" ").forEach((word) => {
//     result.push(numberWords[word]);
//   });
// }

// fparseInt("two hundred and forty-six");
// fparseInt("one");
// fparseInt("one million two hundred and nineteen");
// fparseInt(
//   "one million seven hundred eighty-three thousand nine hundred and nineteen"
// );

// function bingo(ticket, win) {
//   let count = 0;
//   let array = [];
//   ticket.forEach((ticket) => {
//     if (ticket[0].split("").some((char) => char.charCodeAt() == ticket[1])) {
//       count++;
//     }
//   });

//   return count >= win ? "Winner" : "Loser";
// }

// bingo(
//   [
//     ["ABC", 65],
//     ["HGR", 74],
//     ["BYHT", 74],
//   ],
//   1
// );

// function toCamelCase(str) {
//   str = str
//     .split("")
//     .map((char) => {
//       if (char == "_") return "-";
//       else return char;
//     })
//     .join("");
//   let result = str
//     .split("-")
//     .map((word, index) => {
//       if (index != 0) return word[0].toUpperCase() + word.slice(1);
//       else return word;
//     })
//     .join("");
//   return result;
// }

// console.log(toCamelCase("the_stealth_warrior"));

// function findOdd(A) {
//   let obj = {};
//   A.forEach((num) => {
//     if (obj.hasOwnProperty(num)) obj[num]++;
//     else obj[num] = 1;
//   });

//   for (let int in obj) {
//     if (obj[int] % 2 !== 0) return Number(int);
//   }
// }

// findOdd([1, 2, 3, 1, 2, 1, 1]);
