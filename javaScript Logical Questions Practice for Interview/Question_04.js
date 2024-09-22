// Write a program in which find the second highest number from the array

let arr = [5, 2, 1, 9, 53, 24, 13, 90];

function SecondHighestNum(array) {
  let removeDuplicates = [...new Set(array)];

  let sortedArr = removeDuplicates.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}

console.log(
  `The second Highest Number from the array is = ${SecondHighestNum(arr)}`
);
