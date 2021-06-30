// First method we sort and then we remove duplicates
function mergeSortedArrays(a, b) {
  const sortedArr = [...a, ...b].sort((a, b) => a - b);
  const resultArr = [];

  console.log(sortedArr);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) continue;
    resultArr.push(sortedArr[i]);
  }
  return resultArr;
}

function mergeSortedArrays2(a, b) {
  const mergeArr = [...a, ...b];
  const resultArr = [];

  for (let i = 0; i < mergeArr.length; i++) {
    if (resultArr.includes(mergeArr[i])) continue;
    resultArr.push(mergeArr[i]);
  }
  return resultArr.sort((a, b) => a - b);
}

// Make a new obj for the results
// You loop through the input object
// Update the obj as required through counting
function countDuplicates(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  return obj;
}

const isPalindrome = (str) =>
  str.split("").reverse().join("").toLowerCase() === str;

const isPalindrome2 = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

const findDuplicates = (str) => {
  // It is not easy getting a job in IT
  // Just try
};

function factorial(num) {
  if (num < 2) return 1;
  else return num * factorial(num - 1);
}

function sum(num) {
  if (num < 1) return 0;
  else return num + sum(num - 1);
}

console.log(countDuplicates(["foo", "bar", "foor", "foo", "bar"]));
console.log(mergeSortedArrays([1, 2, 3, 5, 6], [2, 3, 5]));
console.log(mergeSortedArrays2([1, 2, 3, 5, 6], [2, 3, 5]));
console.log(isPalindrome2("cananac"));
console.log(factorial(4));
console.log(sum(4));

// One way to do this is to be conscious of the length of the array

// This gives us a time complexity of Big O(n*2)
function getCommonElements(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        let match = arr2[j];
        let lastElement = arr2[arr2.length - 1];
        arr2[j] = lastElement;
        lastElement = match;
        result.push(match);
        arr2.pop();
        break;
      }
    }
  }
  return result;
}

function getCommonElements2(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        arr2.splice(j, 1);
        break;
      }
    }
  }
  return result;
}

//Another trick to splice something up is to exchange the value with the very first one and then pop it at the very end.
console.time();
console.log(getCommonElements([3, 3, 3], [1, 2, 3, 3]));
console.timeEnd();
console.time();
console.log(getCommonElements2([3, 3, 3], [1, 2, 3, 3]));
console.timeEnd();
// console.log(getCommonElements([2, 3, 3, 3], [1, 2, 3, 3]));
// console.log(getCommonElements([1, 2, 2, 4, 5], [2, 4, 5, 2, 3]));

// function sortArray(arr) {
//   let max = arr[i];
//   for(let i = 0; i < arr.length; i++) {
//      if(arr[i] < arr[i])
//   }
// }
