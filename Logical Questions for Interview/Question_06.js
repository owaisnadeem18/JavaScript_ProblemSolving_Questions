// Question_06

// Find the missing number from an array

let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];

let missingNumber = (array) => {
  let n = array.length + 1;

  // First find the sum of n natural numbers

  let sum = (n * (n + 1)) / 2;

  //   Now find the actual sum of the array elements

  let ArraySum = array.reduce((curr, accum) => curr + accum, 0);

  return sum - ArraySum;
};

console.log(`The missing number was : ${missingNumber(arr)}`);
