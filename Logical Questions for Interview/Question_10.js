let arr = [3, 2, 5, 2, 8, 9, 5, 3, 2];

findSecondHighestArrElem = (array) => {
  // Remove duplicates by converting to a Set and back to an array
  let uniqueArr = [...new Set(array)];

  // Sort the unique array in descending order
  uniqueArr.sort((a, b) => b - a);

  // Return the second element, which is the second highest
  return uniqueArr[1];
};

console.log(findSecondHighestArrElem(arr));
