// Question_03

// Write a JavaScript function in which multiply by 3 all the elements of your array indexes

let arr = [1, 2, 3, 4, 5];

function multiply_by_three(array) {
  let answer = array.map((item) => item * 3);
  return answer;
}

console.log(multiply_by_three(arr));
