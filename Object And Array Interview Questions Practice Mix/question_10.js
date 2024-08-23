// Find the number of occurences of letter in a string

let str = "Apple";

function FindOccurrences(string) {
  let splitter_str = string.split("");

  let count = 0;

  let obj = {};

  for (let i = 0; i < splitter_str.length; i++) {
    if (obj.hasOwnProperty(splitter_str[i])) {
      obj[splitter_str[i]]++;
    } else {
      obj[splitter_str[i]] = 1;
    }
  }

  return obj;
}

console.log(FindOccurrences(str));
