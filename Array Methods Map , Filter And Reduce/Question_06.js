// Question_06

// Find the number of occurences of alphabets in a single string

let str = "apple";

function Find_Occ(string) {
  let occ = {};

  let splitted_str = string.split("");

  splitted_str.map((item) => {
    if (occ.hasOwnProperty(item) == false) {
      occ[item] = 1;
    } else {
      occ[item]++;
    }
  });
  return occ;
}

console.log(Find_Occ(str));
