// Write a JS function to remove duplicate elements from an array

let arr = [1, 2, 1, 4, 5, 2, 1, 8, 9, 5, 3, 2, 1];

let removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates(arr));
