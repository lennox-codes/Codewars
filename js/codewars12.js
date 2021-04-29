//https://www.codewars.com/kata/587a88a208236efe8500008b

function findSenior(list) {
  let max = Math.max.apply(
    null,
    list.map((person) => person.age)
  );
  return list.filter((char) => char.age == max);
}

var list1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

//console.log(findSenior(list1));

var findMedianSortedArrays = function (nums1, nums2) {
  const mergeArray = nums1.concat(nums2);
  const length = mergeArray.length;
  const sortedArray = mergeArray.sort((a, b) => a - b);

  console.log(sortedArray);
  if (length % 2 === 0)
    return (sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2;
  else return sortedArray[Math.floor(length / 2)];
};

console.log(findMedianSortedArrays([1, 2, 3], [4]));
