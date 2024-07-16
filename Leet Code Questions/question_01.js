// // question_01

// // Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

// // let arr = [45, 89, 23, 13, 52, 53, 1231];
// let arr = [45, 84, 243, 32, 52, 52, 1231];

// function CheckArray(array) {
//   let count = 0;
//   array.map((item) => {
//     if (item % 2 != 0) {
//       count++;
//     }
//   });

//   if (count >= 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(CheckArray(arr));

// The above mentioned was my solution , but there were some mistakes , so I am understanding it from chat gpt and now rewriting the same code

let arr = [56, 90, 24, 13, 92, 13, 511, 99];

function threeConsecutiveOdds(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      count++;
      if (count === 3) {
        return true;
      }
    } else {
      count = 0;
    }
  }

  return false; // if we reach here, it means there were not 3 consecutive odd numbers in the array
}

console.log(threeConsecutiveOdds(arr));
