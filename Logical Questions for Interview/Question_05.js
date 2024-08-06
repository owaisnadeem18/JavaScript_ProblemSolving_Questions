// Question_05

// Find Maximum Number:

// Ek array [23, 45, 67, 89, 12, 45] ka maximum number find karne ka code likhiye.

// let arr = [23, 45, 67, 89, 12];

// function findMaxFunc(array) {
//   let max = array[i];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }

//   return max;
// }

// console.log(`The Array ${arr} has maximum number : ${findMaxFunc(arr)}`);

// There is another approach provided by chat gpt

let arr = [34, 89, 31, 4, 2, 1, 5, 81, 431];

let findMax = (array) => {
  return Math.max(...array);
};

console.log(findMax(arr));
