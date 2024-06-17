// // Question 05

// // Write a function in JS , in which we have to find the missing number from an array.

// let arr = [1, 2, 4];

// let FindMissingNumber = (array) => {
//   let n = array.length + 1;

//   let sumExpected = (n * (n + 1)) / 2;

//   let sum_reduced = array.reduce((a, b) => a + b, 0);

//   return sumExpected - sum_reduced;
// };

// console.log(FindMissingNumber(arr));

// Re practice to better understand the concept

// This technique is only applicable when a single number is missing

// let arr = [1, 2, 3, 4, 5, 7];

// function FindMissingNumber(arr) {
//   let n = arr.length + 1;

//   let ExpectedSum = (n * (n + 1)) / 2;

//   let actual_Sum = arr.reduce((a, b) => a + b, 0);

//   return ExpectedSum - actual_Sum;
// }

// console.log(FindMissingNumber(arr));
