// Question_04

// Write a javaScript Program in which you can find the number of occurences of a  word in a string

let str = "My name is Owais Nadeem";

function FindOcc(a) {
  let occur = {};

  let splitted_str = a.split("");

  splitted_str.map((item) => {
    if (occur.hasOwnProperty(item) === false) {
      occur[item] = 1;
    } else {
      occur[item]++;
    }
  });
  return occur;
}

console.log(FindOcc(str));
