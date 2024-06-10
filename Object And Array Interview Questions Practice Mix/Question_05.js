// Question_05

// You have an array of multiple data types , you have to get the integer array elements from the array and find their sum

let arr = [4, 8, 1, 7, "Owais ", "Hamza", null, "Ali", "67", 3];

function FindSum(array) {
  let sum = 0;
  array.map((item) => {
    if (typeof item == "number") {
      sum = sum + item;
    }
  });
  return sum;
}

console.log(FindSum(arr));
