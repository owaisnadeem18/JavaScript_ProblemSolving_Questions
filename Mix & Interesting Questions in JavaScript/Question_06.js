// Question_06

// Find the occurences of words in a string

let str = "apple";

findOcc = (string) => {
  let occ = {};

  string.split("").map((item) => {
    if (occ.hasOwnProperty(item) === false) {
      occ[item] = 1;
    } else {
      occ[item]++;
    }
  });
  return occ;
};

console.log(findOcc(str));
