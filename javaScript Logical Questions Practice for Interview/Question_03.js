// How to remove duplicates number from an array

let arr = [5, 32, 2, 4, 5, 23, 23, 90, 43, 32, 4, 56];

const removeDuplicates = (array) => {
  let unique_arr = [...new Set(array)];
  return unique_arr;
};

console.log(removeDuplicates(arr));
