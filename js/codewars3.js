function makeSentence(parts) {
  let length = parts.length;
  for (let i = 0; i < length; i++) {
    if (parts[i] == ",") {
      parts[i - 1] = parts[i - 1] + ",";
      parts.splice(i, 1);
      length++;
    }
    if (parts[i] == ".") {
      parts = parts.slice(0, i);
      break;
    }
  }
  return parts.join(" ") + ".";
}

makeSentence(["hello", "world", "."]);
makeSentence(["hello", ",", "my", "dear"]);
