const kataLink = "codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript";

//Sort the Odd numbers but leave the even in position.

function sortArray(arr) {
  let oddArr = arr.filter((num) => num % 2 != 0).sort((a, b) => a - b);
  return arr.map((num) => (num % 2 == 0 ? num : oddArr.shift()));
}

let test1 = [5, 8, 6, 3, 4];

console.log(sortArray(test1));
