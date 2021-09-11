let arr = [1, -2, 54, 23, 23, -23, 43, 199];
let max = Math.max(...arr);
let min = Math.min(...arr);
let reducer = (previousValue, currentValue) => previousValue + currentValue;
let sum = arr.reduce(reducer)
let average = sum / arr.length;
let oddArray = arr.filter(value => value % 2 != 0);

console.log(max);
console.log(min);
console.log(sum);
console.log(average);
console.log(oddArray);
