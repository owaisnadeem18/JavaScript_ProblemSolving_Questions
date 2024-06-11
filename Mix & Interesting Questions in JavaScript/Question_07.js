// Question # 07

// Write a JavaScript program in which clone an array

let arr = [1, 2, 5, 8, 3, 0, 1];

function arrayCloning(array) {
  return [...array];
}

console.log(arrayCloning(arr));
