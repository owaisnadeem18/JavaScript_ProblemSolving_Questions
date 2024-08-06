// Shuffle Array elements in an array by creating a shuffle function

let arr = [2, 8, 4, 2, 9, 31, 90, 32, 41, 59, 23];

function shuffleArray(array) {
  let randomNumArr = [];
  let length = array.length;

  while (length > 0) {
    let random_Number = Math.floor(Math.random() * array.length);

    length--;

    let temp = array[length];
    array[length] = array[random_Number];
    array[random_Number] = temp;

    randomNumArr.push(temp);
  }

  return array;
}

console.log(shuffleArray(arr));
