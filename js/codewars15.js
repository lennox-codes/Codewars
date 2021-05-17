function chuckPushUps(string) {
  let count = string.match(/1|0/g);
  console.log(count);
  return typeof string !== "string" ? "FAIL!!" : count.length ? parseInt(count.join("")) : "CHUCK SMASH!!";
}

chuckPushUps("hwo are we doin today");
