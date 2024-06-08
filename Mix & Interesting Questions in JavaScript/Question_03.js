// Question_03

// Here, in this question we have to reverse a number

function ReverseNum(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(ReverseNum(345));
