//Unsuccessful but quite close
function swap(s, n) {
  n = n.toString(2);
  n = n
    .toString()
    .split("")
    .map((n) => Number(n));
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") continue;
    if (count == n.length) count = 0;
    console.log(count);
    if (n[count] == 1) {
      s[i] == s[i].toLowerCase()
        ? (s = s.replace(s[i], s[i].toUpperCase()))
        : (s = s.replace(s[i], s[i].toLowerCase()));
      count++;
    } else if (n[count] == 0) {
      count++;
    }
  }
  console.log(s);
  console.log(n);
}

swap("Hello World", 11);
swap("gOOd MOrniNg", 7864);
// swap("the lord of the rings", 0);

function solution(string) {
  return string
    .split("")
    .map((char) => {
      if (char == char.toUpperCase()) return " " + char;
      else return char;
    })
    .join("");
}

solution("camelCasing");
