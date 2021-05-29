//https://www.codewars.com/kata/570564e838428f2eca001d73
// function chuckPushUps(string) {
//   let count = string.match(/1|0/g);
//   console.log(count);
//   return typeof string !== "string" ? "FAIL!!" : count.length ? parseInt(count.join("")) : "CHUCK SMASH!!";
// }

// console.lchuckPushUps("hwo are we doin today");

//Calculate the sum of the product of values at even indexes and the value at the last index
const evenLast = (n) => n.reduce((a, c, i) => (i % 2 ? a : a + c * n[n.length - 1]), 0);

//console.table([2, 3, 4, 5]);

// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

//Not the best way to solve this at all, just having fun
function score(dice) {
  let points = 0;
  const sides = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < sides.length; i++) {
    let side = sides[i];
    let regex = new RegExp(side + "{3}");
    let match = dice.sort().join("").match(regex);
    if (match) {
      if (side === 1) points += 1000;
      else points += side * 100;

      dice = dice
        .sort()
        .join("")
        .replace(regex, "")
        .split("")
        .map((num) => Number(num));
      break;
    }
  }

  dice.forEach((s) => {
    if (s === 1) points += 100;
    if (s === 5) points += 50;
  });

  return points;
}

//Sexieer solution
// function score(dice) {
//   var v = {
//     111: 1000,
//     222: 200,
//     333: 300,
//     444: 400,
//     555: 500,
//     666: 600,
//     1: 100,
//     5: 50,
//   };

//   var s =
//     dice
//       .sort()
//       .join("")
//       .match(/(([1-6])\2\2)|(1|5)/g) || [];
//   return s.reduce(function (a, e) {
//     return a + v[e];
//   }, 0);
// }

console.log(score([2, 4, 5, 4, 4]));
console.log(score([2, 3, 4, 6, 2]));
