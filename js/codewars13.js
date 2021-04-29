const kataLink = "codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript";

//Sort the Odd numbers but leave the even in position.

function sortArray(arr) {
  let oddArrSorted = arr.filter((num) => num % 2 != 0).sort((a, b) => a - b);
  let sortedArr = [];

  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) sortedArr.push(arr[i]);
    else sortedArr.push(oddArrSorted[start++]);
  }

  return sortedArr;
}

let test1 = [5, 8, 6, 3, 4];

SortArray(test1);
