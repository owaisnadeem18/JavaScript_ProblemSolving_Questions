// Question 02

// Find the duplicate numbers in an array using filter method

let arr = [1, 4, 2, 4, 2, 9, 2, 8, 7, 5, 3, 1, 8, 4, 9];

function FindDuplicate(arr) {
  let duplicates = arr.filter((elem, index) => arr.indexOf(elem) !== index);
  return duplicates;
}

console.log(FindDuplicate(arr));
