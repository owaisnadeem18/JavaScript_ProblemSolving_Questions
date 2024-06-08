// Given a string in JavaScript , we have to reverse each and every word in this string

// let str = "My name is Owais Nadeem";

// let reverseEachStr = (a) => {
//   let reversed_Str = a.split("").reverse().join("");
//   return reversed_Str;
// };

// console.log(reverseEachStr(str));

// For Example I want to write the same code by using Map Method of JavaScript in array

let str = "My name is Owais Nadeem";

let reverseEachStr = (a) => {
  let reversed_str = a.split(" ").map((item) => {
    return item.split("").reverse().join("");
  });
  return reversed_str.join(" ");
};

console.log(reverseEachStr(str));
