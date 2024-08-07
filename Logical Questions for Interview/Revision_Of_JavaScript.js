// Closures in JavaScript;

// function outerFunction() {
//   const outerVar = "Outer";

//   function innerFunction() {
//     console.log(outerVar); // Accesses outerVar due to lexical scope
//   }

//   return innerFunction;
// }

// const closure = outerFunction();
// closure(); // Output: "Outer"

// let obj = {
//   name: "Owais  Nadeem",
//   profession: "student",
// };

// for (let i in obj) {
//   console.log(i);
//   console.log(obj[i]);
// }

// For of loop:

let arr = [2, 3, 1, 8, 42, 21];

let greator_Nums = [];

for (let iter of arr) {
  if (iter > 10) {
    greator_Nums.push(iter);
  }

  console.log(iter);
}

console.log(greator_Nums);

// Higher Order Function
