// Question_14

// Find the missing number in an array

let arr = [1, 2, 4, 5, 6, 7, 8, 9];

let FindMissingNum = (array) => {
  // First find the expected sum

  let length = array.length + 1;
  let expectedSum = (length * (length + 1)) / 2;

  // Then find the actual sum

  let actual_Sum = array.reduce((accum, curr) => accum + curr, 0);

  let missing_Num = expectedSum - actual_Sum;

  return missing_Num;
};

console.log(`The missing number is : ${FindMissingNum(arr)}`); // Output: 3
