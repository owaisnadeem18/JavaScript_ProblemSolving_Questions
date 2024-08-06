// Question_07

// Array Palindrome Question

let arr = [12, 34, 2, 34, 4, 4, 24, 42, 2484, 78, 41];

findArrPalind = (array) => {
  let arr_reverse = [...array].reverse();

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== arr_reverse[i]) {
      return `Array is not palidrome`;
    }
  }

  return `Array is palidrome`;
};

console.log(findArrPalind(arr));
