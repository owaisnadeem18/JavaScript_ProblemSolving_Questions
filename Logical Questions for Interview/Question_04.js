// Question_04

// Write a JS program in which you have a function which could be able to find the most frequent element of an array

let arr = [2, 5, 2, 2, 2, 2, 2, 90, 32, 2, 89, 43, 5, 5, 5, 5, 5, 43];

function FindFreqElem(array) {
  let ObjfreqElem = {};

  for (let i = 0; i < array.length; i++) {
    if (ObjfreqElem.hasOwnProperty(array[i])) {
      ObjfreqElem[array[i]]++;
    } else {
      ObjfreqElem[array[i]] = 1;
    }
  }

  return Object.keys(ObjfreqElem).reduce((curr, accum) =>
    ObjfreqElem[curr] > ObjfreqElem[accum] ? curr : accum
  );
}

console.log(FindFreqElem(arr));
