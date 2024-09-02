// Question_11

var arr1 = ["racecar", "balloon", "hockey", "hannah", "rainbow", "civic"];
var arr2 = []; // arr2 should be filled with the result containing true if the work is word palindrome or otherwise.

function findPalindromes(array1, array2) {
  array1.map((item) => {
    let reversed = item.split("").reverse().join("");
    console.log(reversed);
    array2.push(reversed === item);
  });

  return array2;
}

console.log(findPalindromes(arr1, arr2)); // function call

//   console.log(arr2); // Expected output: [true, false, false, true, false, true]
