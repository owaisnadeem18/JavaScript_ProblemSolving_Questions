// Write a function in JavaScript through which find the highest number in an array

let arr = [5, 9, 2, 8, 5, 21, 90, 43, 53];

function FindHighestNum(array) {
  // This is sorting of array elements in ascending order (chotay say baday key taraf)

  let sorted_Arr = array.sort((a, b) => a - b);

  return sorted_Arr[sorted_Arr.length - 1];
}

console.log(FindHighestNum(arr));
