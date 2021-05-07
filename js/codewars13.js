//Kata Link: codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
//Sort the Odd numbers but leave the even in position.

function sortArray(arr) {
  let oddArr = arr.filter((num) => num % 2 != 0).sort((a, b) => a - b);
  return arr.map((num) => (num % 2 == 0 ? num : oddArr.shift()));
}

let test1 = [5, 8, 6, 3, 4];

console.log(sortArray(test1));

//Kata Link: https://www.codewars.com/kata/52180ce6f626d55cf8000071
//Turn String Input into Hash
function strToHash(str) {
  let obj = {};
  if (str === "") return obj;
  else {
    str = str
      .split(", ")
      .map((letter) => letter.split("="))
      .forEach((arr) => (obj[arr[0]] = Number(arr[1])));
    return obj;
  }
}

//Check if array of only integers
function isIntArray(arr) {
  return !arr ? false : arr.every((num) => Number.isInteger(num));
}

//console.log(isIntArray(null));

//Find duplicate number
function findDup(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) !== arr.lastIndexOf(i)) return i;
  }
}

let test = [3, 2, 5, 1, 3, 4];
console.log(findDup([3, 2, 5, 1, 3, 4]));

//Add Commas to a number
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
  console.log(max);
}

//File Name Extractor
class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    const start = dirtyFileName.indexOf("_") + 1;
    const end = dirtyFileName.lastIndexOf(".");
    console.log(dirtyFileName.slice(start, end));
  }
}

FileNameExtractor.extractFileName(
  "1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"
);

//Simple Sentences
function makeSentence(parts) {
  parts = parts.filter((word) => word != ".");
  for (let i = 0; i < parts.length - 1; i++) {
    if (parts[i + 1] === ",") parts[i] = parts[i] + ",";
  }
  console.log(parts.filter((word) => word != ",").join(" ") + ".");
}

function getOrder(input) {
  let orders = [];
  const menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];

  menu.forEach((item) => {
    while (input.includes(item.toLowerCase())) {
      orders.push(item);
      input = input.replace(item.toLowerCase(), "");
    }
  });
  return orders.join(" ");
}

console.log(
  getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
);
