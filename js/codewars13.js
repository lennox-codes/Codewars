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

function isIntArray(arr) {
  if (!arr) return false;
  return arr.every((num) => Number.isInteger(num));
}

console.log(isIntArray(null));
