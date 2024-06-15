// Question_05
// Write a JS function to remove duplicate elements from a string

let str = "Owais Nadeem";

let removeDuplicates = (string) => {
  return [...new Set(string)].join("");
};

console.log(removeDuplicates(str));
console.log(typeof removeDuplicates(str));
