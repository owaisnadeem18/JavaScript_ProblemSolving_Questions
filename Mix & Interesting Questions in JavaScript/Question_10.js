// Question_10

// Find the number of occurences in a string

let str = "Apples";

function find_occ(string) {
  let occ = {};
  let splitted_str = string.split("");

  splitted_str.map((e) => {
    if (occ.hasOwnProperty(e) == false) {
      occ[e] = 1;
    } else {
      occ[e]++;
    }
  });

  return occ;
}

console.log(find_occ(str));
