// Find the sum of all even numbers present in an array

let arr = [3, 7, 56, 11, 12, 90, 45, 20];

function EvenSums(array) {
  let evenArray = [];
  array.map((item) => {
    item % 2 == 0 ? evenArray.push(item) : "";
  });

  let sum = evenArray.reduce((a, b) => a + b, 0);
  return sum;
}

console.log(EvenSums(arr));
