// Question_04

// Write a Program in JavaScript in which we can adjust the string alphabets in the alphabetical order

let str = "MANGO";

function Alphabetical_Sorting(a) {
  return a.toLowerCase().split("").sort().join("");
}

console.log(Alphabetical_Sorting(str));
