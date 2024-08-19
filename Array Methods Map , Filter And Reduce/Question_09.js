let arr = [1, 2, 3, 4, 5, 78, 2, 1, 49];

function QuestionTask(array) {
  // Sort the array in descending order
  let sortedArr = array.sort((a, b) => b - a);

  // Remove the largest value (first element)
  sortedArr.shift();

  // The second largest value will now be the first element
  let secondHighest = sortedArr[0];

  return secondHighest;
}

console.log(
  `The second highest number from this array [${arr}] is ${QuestionTask(arr)}`
);
