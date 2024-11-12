// 2. Sum of All Numbers in an Array

// Create a function that accepts an array of numbers and returns the sum of all elements.

// Question_02

// let arr = [4 , 8 , 2 ,1 , 8 ,4 ,3]
let arr = [4 , 8 , 8 , 10]

let FindNumbers = (array) => (array.reduce((a,b) => a+b , 0))

console.log(FindNumbers(arr))