function solution(input, markers) {
  let lastIndex = input.length - 1;
  for (let i = 0; i < markers.length; i++) {
    while (input.indexOf(markers[i]) !== -1) {
      let index = input.indexOf(markers[i]) - 1;
      let nextLine =
        input.slice(index).indexOf("\n") !== -1
          ? input.slice(index).indexOf("\n") + index
          : lastIndex;
      input = input.replace(input.slice(index, nextLine), "");
    }
  }
  return input;
}

solution("Q @b\nu\ne -e f g", ["@", "-"]);
