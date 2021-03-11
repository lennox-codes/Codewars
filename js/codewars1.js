function longestConsec(starr, k) {
  if (k > starr.length) return "";
  let consecutive = "";
  for (let i = 0; i < starr.length; i++) {
    if (starr.slice(i, i + k).join("").length > consecutive.length) {
      consecutive = starr.slice(i, i + k).join("");
    }
  }
  console.log(consecutive);
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
