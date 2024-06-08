// Question_03

// Write a program to reverse an array , you are not allowed to use the built in function

let ReverseArr = (arr) => {
  let reversed_Arr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed_Arr.push(arr[i]);
  }
  return reversed_Arr;
};

console.log(ReverseArr([3, 9, 7, 5, 3, 2]));
