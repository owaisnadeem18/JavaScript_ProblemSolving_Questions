// Question_01

// if you want to find that either a number is integer or not

// let a = 45.0;

// console.log(Number.isInteger(a)); // this is a way to find that either a num is integer or not

// Now , we have to check either a number is integer or not , without using the above mentioned built in technique.

let a = 4.4;

if (a % 1 == 0) {
  console.log(`This number ${a} is an integer !!!  `);
} else {
  console.log(`The number ${a} is not an integer !!!  `);
}
