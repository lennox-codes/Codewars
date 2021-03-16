//T.T.T.17: Split odd and even
//https://www.codewars.com/kata/57a2ab1abb994466910003af/train/javascript
function splitOddAndEven(num) {
  let result = "";
  let arr = num.toString().split("");
  for (let i = 0; i < num.toString().length; i++) {
    if (arr[i] % 2 == arr[i + 1] % 2) result += arr[i];
    else result += arr[i] + ",";
  }
  return result
    .split(",")
    .filter((char) => char !== "")
    .map((char) => Number(char));
}

splitOddAndEven(12839393643493);

//Human readable time
//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
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
    .join(":");
  return result;
}

humanReadable(359999);
humanReadable(60);

//At least three counts have to be made from the outlier
function findOutlier(integers) {
  let even = integers.filter((num) => num % 2 == 0);
  let odd = integers.filter((num) => num % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]));
findOutlier([1, 1, 0, 1, 1]);
findOutlier([2, 6, 8, 10, 3]);
findOutlier([1, 2, 3]);
findOutlier([
  59426081,
  -125555873,
  168214053,
  -140704279,
  -10623441,
  -162781513,
  82390669,
  31680628,
  101062485,
  -162792343,
  111800479,
  82184933,
  -24285007,
  151709695,
]);

findOutlier([-74656917, -16238268, 138386456, -106875976, 20441690]);

function dashatize(num) {
  num = num.toString().replace("-", "");
  if (num.toString().length == 1) return `${num}`;
  if (Math.sign(num) == -1 && num.toString().length == 2)
    return `${Math.abs(num)}`;
  if (num.toString() === "NaN") return "NaN";

  let result = "";
  let arr = num.toString().split("");
  for (let i = 0; i < num.toString().length; i++) {
    if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) result += arr[i];
    else result += arr[i] + ",";
  }
  result = result
    .split(",")
    .filter((char) => char !== "")
    .join("-");
  console.log(result);
}

dashatize(12839393643493);
dashatize(6815);
dashatize(-28369);

var animal = [
  { name: "Cat", numberOfLegs: 4 },
  { name: "Snake", numberOfLegs: 0 },
  { name: "Dog", numberOfLegs: 4 },
  { name: "Pig", numberOfLegs: 4 },
  { name: "Human", numberOfLegs: 2 },
  { name: "Bird", numberOfLegs: 2 },
];

//animal.forEach((val) => val == null || val == "");

function sortAnimal(animal) {
  let result = animal
    .slice()
    .sort(
      (a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
    );

  console.log(result);
}

sortAnimal(animal);
