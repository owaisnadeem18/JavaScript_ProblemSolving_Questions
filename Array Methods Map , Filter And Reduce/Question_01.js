// Question 01

// Here you have to use an array method through which you can find the sum of the numbers which are present in an array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [1, 2, 3, 4, 5, 6, 7];

function FindSum(arr) {
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  return sum;
}

console.log(FindSum(arr));
console.log(typeof FindSum(arr));
