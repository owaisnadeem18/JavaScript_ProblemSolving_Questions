// Write a JS program to compute union of two arrays

let arr1 = [12, 4, 52, 5, 9, 3, 2, 5, 6, 7, 8];
let arr2 = [42, 13, 40, 89, 6, 7, 8, 9];

let unionFunc = (one, two) => {
  let three = [...new Set(one.concat(two))];

  return three;
};

console.log(unionFunc(arr1, arr2));
