//6kyu //Took longer than expected
//https://www.codewars.com/kata/55b3425df71c1201a800009c
function stat(strg) {
  if (strg === "") return strg;
  let resultInSeconds = strg
    .split(", ")
    .map((char) => char.split("|"))
    .map((char) =>
      Number(char[0] * 3600 + Number(char[1]) * 60 + Number(char[2]))
    );

  const range =
    Math.max.apply(null, resultInSeconds) -
    Math.min.apply(null, resultInSeconds);

  const average = Math.floor(
    resultInSeconds.reduce((a, b) => a + b, 0) / resultInSeconds.length
  );

  const length = resultInSeconds.length;
  const sortedResult = resultInSeconds.slice().sort((a, b) => a - b);

  const median =
    length % 2 !== 0
      ? sortedResult[Math.ceil(length / 2) - 1]
      : Math.floor(
          (sortedResult[length / 2 - 1] + sortedResult[length / 2]) / 2
        );

  return `Range: ${humanReadable(range)} Average: ${humanReadable(
    average
  )} Median: ${humanReadable(median)}`;
}

//Utility Function
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
    .join("|");
  return result;
}

console.log(stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"));
console.log(stat(""));

//Find the missing letter
//https://www.codewars.com/kata/5839edaa6754d6fec10000a2
function findMissingLetter(array) {
  let count = 0;
  let index;
  while (index === undefined) {
    if (array[count].charCodeAt() - array[count + 1].charCodeAt() <= -2)
      index = count;
    else count++;
  }
  return String.fromCharCode(array[index].charCodeAt() + 1);
}

findMissingLetter(["a", "b", "c", "d", "f"]);
console.log(findMissingLetter(["O", "Q", "R", "S"]));
