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
