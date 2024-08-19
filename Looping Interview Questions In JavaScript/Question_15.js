// Question_15

// Find the factorial of a number using recursion

// let num = 4;

// function FindFact(number) {
//   if (number == 0 || number == 1) {
//     return 1;
//   } else {
//     return number * FindFact(number - 1);
//   }
// }

// console.log(FindFact(num));

let num = 5;

findFact = (number) => {
  let fact = 1;

  for (let i = 1; i <= number; i++) {
    fact *= i;
  }

  return fact;
};

console.log(findFact(num));
