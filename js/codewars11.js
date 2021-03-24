function isSquare(arr) {
  if (arr.length == 0) return undefined;
  let result = arr
    .join(",")
    .split(",")
    .map((num) => Number(num))
    .every((num) => {
      if (arr.length > 0) return Number.isInteger(Math.sqrt(num));
      else return undefined;
    });
  console.log(result);
}

isSquare([
  1,
  [4],
  [9, 16, 25],
  [36, 49, [64, 81]],
  [100, [121, 144, [169]]],
  [196, [225, [256, 289, [324, [361, 400]]]]],
]);

isSquare([
  1,
  [4],
  [9, 16, 25],
  [36, 49, [64, 81]],
  [100, [121, 144, [169]]],
  [196, [225, [256, 111, [324, [361, 400]]]]],
]);

//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
  let wordArr = str.split(" ");
  let result = wordArr
    .map((word) => {
      if (
        word.split("").every((char) => char.toLowerCase() != char.toUpperCase())
      ) {
        return word.slice(1) + word[0] + "ay";
      } else return word;
    })
    .join(" ");
  return result;
}

pigIt("Pig latin is cool");
pigIt("Hello world !");
