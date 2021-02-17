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
