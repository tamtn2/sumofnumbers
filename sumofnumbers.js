function sumFor(val) {
  let count = 0;
  for (let i = val; i > 0; i--) {
    count += i;
  }
  return count;
}

function sumWhile(val) {
  let count = 0;
  let dec = val;
  while (dec !== 0) {
    count += dec;
    dec--;
  }
  return count;
}

function sumRecursion(val) {
  if (val === 0) {
    return val;
  }
  return val + sumRecursion(val - 1);
}

function sumTheSimpleWay(val) {
  return _.reduce(_.range(val + 1), function (memo, num) { return memo + num; });
}

console.log(sumFor(5));
console.log(sumWhile(5));
console.log(sumRecursion(5));
console.log(sumTheSimpleWay(5));
