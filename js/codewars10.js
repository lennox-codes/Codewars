//https://www.codewars.com/kata/5626b561280a42ecc50000d1/solutions/javascript
//Sum Digit Power
function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    let sumDigit = i
      .toString()
      .split("")
      .map((num) => Number(num))
      .reduce((a, b, index) => {
        return a + b ** (index + 1);
      }, 0);
    if (sumDigit == i) result.push(i);
  }
  return result;
}

console.log(sumDigPow(1, 100));

//diamond and christmas tree//do them tomorrow if you have time or else.
function diamond(n) {
  let result = [];
  if (n % 2 == 0 || n < 0) return null;
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    let row = "";
    for (let u = Math.ceil(n / 2); u >= 1; u--) {
      if (i - u >= 0) row += "*";
      else row += " ";
    }
    result.push(
      row + row.split("").reverse().slice(1).join("").trimRight() + "\n"
    );
  }
  return result.concat(result.slice(0).reverse().slice(1)).join("");
}

function christmasTree(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let u = n; u >= 1; u--) {
      if (i - u >= 0) row += "*";
      else row += " ";
    }

    result.push(
      row +
        row.split("").reverse().slice(1).join("") +
        `${result.length < n - 1 ? "\n" : ""}`
    );
  }

  return result.join("");
}

console.log(christmasTree(4));

//

function iqTest(numbers) {
  numbers = numbers.split(" ").map((num) => Number(num));

  let findEven = numbers.findIndex((num) => num % 2 === 0);
  let findOdd = numbers.findIndex((num) => num % 2 !== 0);
  numbers.splice(findOdd, 1, 0);

  if (numbers.every((num) => num % 2 === 0)) return findOdd + 1;
  else return findEven + 1;
}

console.log(iqTest("2 4 7 8 10"));

function songDecoder(song) {
  let result = song
    .split("WUB")
    .join(" ")
    .split(" ")
    .filter((char) => char !== "")
    .join(" ");
  return result;
}

songDecoder("AWUBBWUBC");
songDecoder("AWUBWUBWUBBWUBWUBWUBC");

function groupByCommas(n) {
  n = n.toString().split("");
  let result = [];
  for (let i = n.length - 1; i >= 0; i -= 3) {
    if (i == n.length - 1) continue;
    n[i] = n[i] + ",";
  }
  return n.join("");
}

groupByCommas(1000000000);

var encryptThis = function (text) {
  if (text.length == 1) return text.charCodeAt();
  let firstChar = text[0].charCodeAt();
  secondChar = text[1];
  lastChar = text[text.length - 1];
  let result =
    firstChar + lastChar + text.slice(2, text.length - 1) + secondChar;
  console.log(result);
};
encryptThis("A");
