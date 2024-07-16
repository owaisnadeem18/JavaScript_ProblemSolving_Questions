// Write a function through which find the second highest number from an array

let arr = [23, 82, 70, 823, 23, 12, 11];

function SecondHighestNumber(array) {
  let sort = array.sort((a, b) => b - a); // descending order sorting
  console.log(sort);
  return `The second highest number is ${sort[1]}`;
}

console.log(SecondHighestNumber(arr));
