function to_nato(words) {
  let conversion = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "Xray",
    Y: "Yankee",
    Z: "Zulu",
  };

  words = words.toUpperCase().replace(/\s/g, "").split("");
  let toNato = words.map((char) => {
    if (char.toLowerCase() == char.toUpperCase()) return char;
    else return conversion[char];
  });
  return toNato.join(" ");
}

to_nato("If, you can read?");
