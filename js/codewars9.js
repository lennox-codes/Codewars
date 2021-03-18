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

console.log(stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"));
console.log(stat(""));
