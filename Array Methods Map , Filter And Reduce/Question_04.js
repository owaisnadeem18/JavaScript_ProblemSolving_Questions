// Question_04

// Write a JavaScript function that takes an array of numbers and returns the sum of all the positive numbers in the array. If the array is empty or there are no positive numbers, the function should return 0.

let arr = [3, -9, 4, 2, -90, -53, -5, 0, -45, 134];

function FilteredArr(array) {
  if (array.length == 0) {
    return 0;
  } else {
    let positive_numbers = array.filter((item) => {
      return item > 0;
    });

    let sum = positive_numbers.reduce((a, b) => {
      return a + b;
    }, 0);
    return sum;
  }
}

console.log(FilteredArr(arr));
