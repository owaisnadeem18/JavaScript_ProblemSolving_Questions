// Question_06

// Find the second highest array element in the array.

// let arr = [1, 7, 9, 3, 2, 8, 34, 28, 12, 82];

// function Find_Second_Highest(array) {
//   let sortedArr = array.sort((a, b) => b - a);
//   return sortedArr[1];
// }

// console.log(
//   `The second highest number in the array ${arr} is ${Find_Second_Highest(arr)}`
// );

let arr = [34, 78, 56, 334, 2, 1, 7, 85, 32];

let DescSort = (arr) => arr.sort((a, b) => b - a);

console.log(DescSort(arr));
console.log(`The second highest element in array ${arr} is ${arr[1]}`);
