//https://www.codewars.com/kata/570564e838428f2eca001d73
// function chuckPushUps(string) {
//   let count = string.match(/1|0/g);
//   console.log(count);
//   return typeof string !== "string" ? "FAIL!!" : count.length ? parseInt(count.join("")) : "CHUCK SMASH!!";
// }

// console.lchuckPushUps("hwo are we doin today");

//Calculate the sum of the product of values at even indexes and the value at the last index
const evenLast = (n) => n.reduce((a, c, i) => (i % 2 ? a : a + c * n[n.length - 1]), 0);

console.table([2, 3, 4, 5]);
