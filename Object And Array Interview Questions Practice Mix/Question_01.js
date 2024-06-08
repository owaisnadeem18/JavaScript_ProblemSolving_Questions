// Question_01

// Write a function in JS , in which find that either the text is an object or an array or object

function checkArr(elem) {
  return Array.isArray(elem);
}

console.log(checkArr([1, 3, 4]));
console.log(checkArr({}));
console.log(checkArr({ name: "Owais" }));
