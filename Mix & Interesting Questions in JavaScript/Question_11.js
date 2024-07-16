// Question_11

// Check number of occurences in a string

let str = "Apple";

let CheckOcc = (string) => {
  let occ = {};

  let splitted_str = string.split("");

  splitted_str.map((item) => {
    if (occ.hasOwnProperty(item)) {
      occ[item]++;
    } else {
      occ[item] = 1;
    }
  });
  return occ;
};

console.log(CheckOcc(str));
