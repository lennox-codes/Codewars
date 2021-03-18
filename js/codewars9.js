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
    .join(":");
  return result;
}
