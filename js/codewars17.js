/*

Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true

*/

function solution(...args) {
  // Using set
  let charSet = new Set(args);
  return charSet.size !== args.length;
}

/*
function solution (...args) {
  let charMap = {};
  for(let i = 0; i < args.length; i++) {
    if(!charMap.hasOwnProperty(args[i])) charMap[args[i]] = 1
    else if(charMap[args[i]] === 1) return true;
  }
  return false
}
*/

console.log(solution(1, 2, "a", 5));
