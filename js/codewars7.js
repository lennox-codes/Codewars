//number of Carries
//"https://www.codewars.com/kata/58a6568827f9546931000027";

function numberOfCarries(a, b) {
  let finalSum = [];
  let numOfCarry = 0;
  let carry = 0;
  a = a.toString();
  b = b.toString();
  //make both strings be of equal lengths by adding leading 0s to the shorter string;
  if (a.length > b.length) b = "0".repeat(a.length - b.length) + b;
  else if (b.length > a.length) a = "0".repeat(b.length - a.length) + a;

  //now convert both a and b of into arrays of numbers;
  a = a.split("").map((character) => Number(character));
  b = b.split("").map((character) => Number(character));

  //come up with an algorithm to add them up and you should be fine fine fine
  for (let i = a.length - 1; i >= 0; i--) {
    let digitsSum = carry + a[i] + b[i];
    if (i == 0) {
      finalSum.unshift(digitsSum.toString());
      if (digitsSum.toString().length > 1) {
        numOfCarry++;
      }
    } else if (digitsSum.toString().length > 1) {
      finalSum.unshift(digitsSum.toString().slice(1));
      carry = 1;
      numOfCarry++;
    } else {
      carry = 0;
      finalSum.unshift(digitsSum.toString());
    }
  }
  return numOfCarry;
}

//Tests
numberOfCarries(9999, 1);
numberOfCarries(1234, 5678);
numberOfCarries(543, 3456);

//isPolydivisible
//
function isPolydivisible(s, b) {
  let d = 1;
  for (let i = 1; i <= s.length; i++) {
    if (parseInt(s.slice(0, i), b) % d !== 0) return false;
    d++;
  }
  return true;
}

//find within array
//https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript
function findInArray(array, iterator) {
  return array.findIndex((value, index) => iterator(value, index) === true);
}

//String array duplicates
//https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript
function dup(s) {
  return s.map((word) => removedup(word));
}

//Utility function
function removedup(str) {
  let result = str
    .split("")
    .map((char, i) => {
      if (str[i] === str[i + 1]) return "";
      else return char;
    })
    .filter((char) => char !== "")
    .join("");
  return result;
}

//Test
dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]);
