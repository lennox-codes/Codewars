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
