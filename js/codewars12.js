//https://www.codewars.com/kata/587a88a208236efe8500008b
function sequenceSum(begin, end, step) {
  let sum = 0;
  if (begin > end) return sum;
  for (let i = begin; i == end; i += step) {
    sum += i;
  }
  return sum;
}

function sequenceSum(begin, end, step) {
  let sum = 0;
  if (begin > end) return sum;
  sum = begin + ((end - begin) / step) * step;
  return sum;
}
