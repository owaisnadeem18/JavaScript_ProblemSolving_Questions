var arr1 = ["racecar", "balloon", "hockey", "hannah", "rainbow", "civic"];
var arr2 = []; // arr2 should be filled with the result containing true if the work is word palindrome or otherwise.

//   console.log(arr2); // Expected output: [true, false, false, true, false, true]

/** Function responsible to fill arr2 with results of each text found as palindrome with true or false */

function findPalindromes(array1, array2) {
  //   let a = array1.map((e) => console.log(e));

  let firstArr = array1.map((word) => {
    let LowerCase = word.toLowerCase();

    let reverseStr = "";

    for (let i = word.length - 1; i >= 0; i--) {
      reverseStr += word[i];
    }
    arr2.push(reverseStr);
  });

  let answerArr = [];

  for (let j = 0; j < array1.length; j++) {
    if (array1[j] === arr2[j]) {
      // console.log(arr2[j]);
      // console.log(firstArr[j]);
      answerArr.push(true);
    } else {
      // arr2.push(false);
      answerArr.push(false);
    }
  }
  return answerArr;
}

// console.log(findPalindromes(arr1));
console.log(findPalindromes(arr1, arr2));
